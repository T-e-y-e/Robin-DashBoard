<template>
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        <DownOutlined class="text-[#0068FF]"/>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item key="0" disabled>
            <p>Ayomide O.</p>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="1">
            <p>Profile</p>
          </a-menu-item>
          <a-menu-item key="2">
            <p>Settings</p>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <p>Logout</p>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </template>
  <script lang="ts" setup>
  import { DownOutlined } from '@ant-design/icons-vue';
  </script>
  
  