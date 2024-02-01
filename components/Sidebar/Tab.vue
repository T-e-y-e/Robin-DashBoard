<template>
    <div class="flex flex-col">
      <template v-for="(link, i) in links" :key="i">
        <NuxtLink
          :to="link.url"
          active-class="activeClass"
          exact-active-class="exactActiveClass"
          class="inline-flex text-red-500 items-center py-3 link"
          :class="{ 'gap-0': !isCollapseOpen, 'gap-6': isCollapseOpen }"
        >          
          <div>
            <div v-if="link.url === 'get-started'">
              <IconsCircuit />
            </div>
            <div v-if="link.url === 'analytics'">
            <IconsChart />
          </div>
          <div v-if="link.url === 'chat'">
            <IconsChat />
          </div>
          <div v-if="link.url === 'moderation'">
            <IconsEmoji />
          </div>
          <div v-if="link.url === 'api-auth-keys'">
            <IconsBulb />
          </div>
          <div v-if="link.url === 'announcement'">
            <IconsBell />
          </div>
          <div v-if="link.url === 'settings'">
            <IconsSettings/>
          </div>
          </div>
          <p 
           class="text-[#9999BC] text-base font-normal font-['Hanken Sans'] leading-normal"
          :class="{ 'hidden': !isCollapseOpen, 'block': isCollapseOpen }"
          v-if="link.url !== 'analytics'"
          >
            {{ link.title }}
          </p>
          <p 
           class="text-[#EA8D51] text-base font-normal font-['Hanken Sans'] leading-normal"
          :class="{ 'hidden': !isCollapseOpen, 'block': isCollapseOpen }"
          v-if="link.url === 'analytics'"
          >
            {{ link.title }}
          </p>
        </NuxtLink>
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps<{
      links?: any[];
      isCollapseOpen: Boolean;
    }>();
  </script>

  <style scoped>

  .router-link-active{
    color: yellow
  }
  .activeClass {
    color: blue;
  }

  .exactActiveClass {
    color: green
  }
</style>