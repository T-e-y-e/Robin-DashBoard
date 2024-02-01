<template>
    <div class="mt-5">
        <h6 class="text-zinc-600 text-base font-medium font-['Hanken Sans'] leading-normal mb-2">Date From</h6>
        <a-space direction="vertical" class="w-full">
      <a-date-picker v-model:value="value1" :placement="placement" suffix-icon="v" placeholder="dd - mm - yyyy"/>
    </a-space>
    </div>
  </template>


  <script lang="ts" setup>
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import type { Dayjs } from 'dayjs';
  const placement = ref('topLeft' as const);
  const value1 = ref<Dayjs>();
  </script>

  <style>
  :where(.css-dev-only-do-not-override-1hsjdkk).ant-picker {
    margin: 0;
    height: 50px;
    width: 100%;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1;
    list-style: none;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    position: relative;
    align-items: center;
    border: 1px solid var(--V1-Subtle-Blue, #9999BC);
    background: var(--V1-Tone-Blue, #F5F7FC);
    border-radius: 6px;
    transition: border 0.2s,box-shadow 0.2s;
}</style>
  
  