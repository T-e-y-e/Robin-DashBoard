<template>
    <a-tabs v-model:activeKey="activeKey" 
      @tabScroll="callback">
      <a-tab-pane key="1" tab="Direct Messages">
        <MessagesTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Groups">Groups Content</a-tab-pane>
    </a-tabs>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue';
  const activeKey = ref('1');
  </script>

  <style>
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #EA8D51;
    text-shadow: 0 0 0.25px currentcolor;
    border-color: #EA8D51;
    border: none
};

 .ant-tabs-tab.ant-tabs-tab-active {
    border-color: #EA8D51;
    color: #EA8D51;
    background: #EA8D51
}

.ant-tabs .ant-tabs-tab:hover {
    color: #EA8D51;
}

</style>
  
  