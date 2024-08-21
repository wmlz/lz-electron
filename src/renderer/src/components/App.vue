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
</script>
