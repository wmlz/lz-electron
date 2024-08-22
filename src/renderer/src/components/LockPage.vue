<template>
  <div class="lock-container">
    <el-form-item label="口令" prop="password">
      <el-input v-model="password" type="password" @keyup.enter="unlock" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="unlock()"> 解锁</el-button>
    </el-form-item>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const password = ref('')

const unlock = async () => {
  const verifyRes = await window.api.sysConfig.verifyPassword(password.value)
  if (verifyRes) {
    emit('updateLockStatus')
  } else {
    ElMessage.error('口令错误')
  }
}
const emit = defineEmits(['updateLockStatus'])
</script>

<style scoped>
.lock-container {
  z-index: 1001;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  background-image: url('../assets/wavy-lines.svg');
}
</style>
