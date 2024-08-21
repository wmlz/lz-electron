<!--<template>-->
<!--  <div class="container">-->
<!--    <h1>前端好玩</h1>-->
<!--    <router-link to="/" style="margin-right: 10px">Login</router-link>-->
<!--    <router-link to="/reg">Register</router-link>-->
<!--    <hr />-->
<!--    <router-view></router-view>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="100px">
        <div class="bar">
          <el-menu
            @open="handleOpen"
            @close="handleClose"
            style="height: calc(100vh - 52px)"
            :collapse="true"
            router
            default-active="/"
          >
            <el-menu-item index="/">
              <el-icon>
                <Bell />
              </el-icon>
              <span>整改通知</span>
            </el-menu-item>
            <el-menu-item index="/reg">
              <el-icon>
                <Document />
              </el-icon>
              <span>项目管理</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <!-- 内容区域 -->
        <div class="content">
          <div class="main">
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Bell, Document } from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const lztest = () => {
  console.log(window.api)
  window.api.lztest()
}
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 容器样式 */
.container {
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .container {
    /* 小屏幕样式 */
  }
}

@media (min-width: 769px) {
  .container {
    /* 大屏幕样式 */
  }
}
</style>
