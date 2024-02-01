<template>
    <a-layout style="min-height: 100vh; border: none" class="h-screen w-80 fixed bg-white z-10 pl-16">
      <a-layout-sider v-model:collapsed="collapsed" collapsible style="background: #fff">
        <!-- <div class="logo" /> -->
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" style="border: none">
        <a-menu-item key="1">
          <user-outlined />
          <a target="_blank" rel="noopener noreferrer" href="/" @click.prevent>
            nav 1
          </a>
          
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <a rel="noopener noreferrer" href="/chat" @click.prevent>
            nav 1
          </a>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
      </a-layout-sider>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
  import { ref } from 'vue';
  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(['1']);
  </script>
  <style scoped>
  #components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
  </style>
  