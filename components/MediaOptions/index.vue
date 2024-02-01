
<template>
    <div class="mt-5">
        <h6 class="text-zinc-600 text-base font-medium font-['Hanken Sans'] leading-normal mb-2">Media Storage Used</h6>
        <a-select
      v-model:value="value"
      placeholder="Please Select"
      class="w-full h-[50px] rounded border border-[#9999BC] flex items-center"
      :options="items.map(item => ({ value: item }))"
    >
        <v-nodes :vnodes="menu"/>
    </a-select>
    </div>
  </template>


  <script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  
  const VNodes = defineComponent({
    props: {
      vnodes: {
        type: Object,
        required: true,
      },
    },
    render() {
      return this.vnodes;
    },
  });
  
  const items = ref(['0 - 50 MB', '50 MB - 200 MB', '200 MB - 1 GB', '1 GB+']);
  </script>

  <style>
.ant-select {
  background-color: #F5F7FC;
}

[class^="ant-select"] {
    color: black
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    position: relative;
    background-color: transparent;
    border: none;
    outline: none;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #F5F7FC
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
    background-color: transparent;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    height: 100%;
    border: none;
    outline: none;
}
</style>
  
  