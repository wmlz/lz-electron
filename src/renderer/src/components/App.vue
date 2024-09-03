<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="configForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="config name" prop="name">
      <el-input v-model="configForm.name" />
    </el-form-item>
    <el-form-item label="config key" prop="key">
      <el-input v-model="configForm.key" />
    </el-form-item>
    <el-form-item label="config value" prop="value">
      <el-input v-model="configForm.value" />
    </el-form-item>
    <el-form-item label="config remark" prop="remark">
      <el-input v-model="configForm.remark" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="insertSysConfig()"> Create</el-button>
    </el-form-item>
  </el-form>
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>

    <el-button class="ml-3" type="success" @click="submitUpload"> upload to server</el-button>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
    </template>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue'

const configForm = ref({
  name: '',
  key: '',
  value: '',
  remark: ''
})

const insertSysConfig = async () => {
  const res = await window.api.sysConfig.insert([
    {
      name: configForm.value.name,
      key: configForm.value.key,
      value: configForm.value.value,
      remark: configForm.value.remark
    }
  ])
  if (res === true) {
    ElMessage.success('插入成功' + res)
  } else {
    ElMessage.error('插入失败' + res)
  }
}

const fileList = ref([])

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false
  )
}

const submitUpload = async () => {
  let remainList = fileList.value
  for (const i of fileList.value) {
    console.log(i)
    console.log('path', i.raw.path)
    const res = await window.api.sysConfig.copyFile(i.raw.path, 'D:\\aaatest\\' + i.raw.name)
    console.log('upload res', res)
    if (res === true) {
      remainList = remainList.filter((item) => item.raw.path !== i.raw.path)
    }
  }
  fileList.value = remainList
  if (remainList.length > 0) {
    ElMessage.error('剩余' + remainList.length + '个文件上传失败')
  } else {
    ElMessage.success('上传成功')
  }
}
</script>
