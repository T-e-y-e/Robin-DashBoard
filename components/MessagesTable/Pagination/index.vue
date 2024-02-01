<template>
    <a-pagination :current="currentPage" :total="totalPages" show-less-items />
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue';
  
  defineProps({
    totalPages: Number,
    currentPage: Number,
  });
  </script>
  
  