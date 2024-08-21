<script setup lang="js">
import { onMounted, ref } from 'vue'

const queryResult = ref([])

function queryDatabase() {
  window.electron.ipcRenderer
    .invoke('queryDatabase')
    .then((res) => {
      // console.log('res', res)
      queryResult.value = res.map((s) => s.dataValues)
    })
    .catch((err) => {
      console.log('err', err)
    })
}

onMounted(queryDatabase)
</script>

<template>
  <el-table :data="queryResult" height="90vh">
    <el-table-column prop="name" label="name" width="180" />
    <el-table-column prop="key" label="key" width="180" />
    <el-table-column prop="value" label="value" width="180" />
    <el-table-column prop="remark" label="remark" width="180" />
  </el-table>

  <el-button type="primary" @click="queryDatabase()"> queryDatabase</el-button>
</template>
