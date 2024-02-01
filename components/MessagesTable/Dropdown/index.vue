<template>
    <a-dropdown :trigger="['click']">
      <div class="ant-dropdown-link" @click.prevent>
        <EllipsisOutlined />
      </div>
      <template #overlay>
        <a-menu class="w-[200px]">
          <a-menu-item key="1">
            <div class="flex justify-between text-[#51545C]">
                <p>View</p>
                <EyeOutlined class="text-[#51545C]"/>
            </div>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <div class="flex justify-between text-[#D53120]">
                <p>Disable</p>
                <CloseCircleOutlined class="text-[#D53120]"/>
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </template>

  <script lang="ts" setup>
  import { EllipsisOutlined,  CloseCircleOutlined } from '@ant-design/icons-vue';
  </script>
  
  