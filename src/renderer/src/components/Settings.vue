<template>
  <p>开启锁屏</p>
  <el-switch
    v-model="enableLock"
    active-value="1"
    inactive-value="0"
    :loading="isLoading"
    @change="updateEnableLock"
  />
  <div v-show="!isPasswordInputDisabled">
    <p>锁屏密码</p>
    <el-input
      v-model="password"
      type="password"
      show-password
      :disabled="isPasswordInputDisabled"
      @change="updatePassword"
    ></el-input>
  </div>
  <div>
    <p>其他设置</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { sysConfigStore } from '../store'

const enableLock = ref('0')
const isLoading = ref(true)
const password = ref('')
const isPasswordInputDisabled = computed(() => {
  return enableLock.value === '0'
})

const loadEnableLock = async () => {
  isLoading.value = true
  enableLock.value = await window.api.sysConfig.getOneByKey('enable_lock')
  sysConfigStore().$patch({
    enableLock: enableLock.value
  })
  password.value = await window.api.sysConfig.getOneByKey('password')
  isLoading.value = false
}

const updateEnableLock = async () => {
  isLoading.value = true
  await window.api.sysConfig.setEnableLock(enableLock.value)
  sysConfigStore().$patch({
    enableLock: enableLock.value
  })
  isLoading.value = false
}

const updatePassword = async () => {
  if (password.value.length > 0) {
    await window.api.sysConfig.updateLockPassword(password.value.trim())
    ElMessage.success('修改密码成功')
  }
  password.value = await window.api.sysConfig.getOneByKey('password')
}

onMounted(loadEnableLock)
</script>
