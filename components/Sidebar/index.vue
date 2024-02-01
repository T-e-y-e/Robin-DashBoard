<template>
    <aside 
    class="h-screen w-max sticky top-0 bg-white z-10 pt-8"
    :class="{ 'px-6': !isCollapseOpen, 'px-10': isCollapseOpen }"
    >
         <div :class="{ 'hidden': !isCollapseOpen, 'block': isCollapseOpen }" class="px-4">
            <NuxtLink to="/">
                <img src="~/assets/logo/logo.png" alt="logo">
            </NuxtLink>
         </div>

         <div :class="{ 'block': !isCollapseOpen, 'hidden': isCollapseOpen }">
            <NuxtLink to="/">
                <img src="~/assets/logo/logo-small.png" alt="logo">
            </NuxtLink>
         </div>

         <div class="pt-16">
      <div
        class="flex w-full flex-col gap-5 px-4 pb-5 border-b border-gray-300"
      >
        <SidebarTab :links="menu"  :isCollapseOpen="isCollapseOpen"/>
      </div>

      <div class="px-4">
        <div
        class="inline-flex text-red-500 items-center py-6 link cursor-pointer "
          :class="{ 'gap-0': !isCollapseOpen, 'gap-6': isCollapseOpen }"
          @click="toggleCollapse()"
      >
        <div>
            <IconsCollapse />
          </div>
          <p 
           class="text-[#9999BC] text-base font-normal font-['Hanken Sans'] leading-normal"
          :class="{ 'hidden': !isCollapseOpen, 'block': isCollapseOpen }"
          >
            Collapse
          </p>
        </div>

        <div
        class="flex text-red-500 items-center py-3 link cursor-pointer mt-20"
          :class="{ 'gap-0': !isCollapseOpen, 'gap-6': isCollapseOpen }"
      >
        <div>
            <IconsFeedback />
          </div>
          <p 
           class="text-[#D53120] text-base font-normal font-['Hanken Sans'] leading-normal"
          :class="{ 'hidden': !isCollapseOpen, 'block': isCollapseOpen }"
          >
            Give Feedback
          </p>
        </div>
      </div>
    </div>
          
</aside>
</template>

<script setup>
const menu = [
      {
        title: "Get Started",
        url: "get-started",
      },
      {
        title: "Analytics",
        url: "analytics",
      },
      {
        title: "Chat",
        url: "chat",
      },
      {
        title: "Moderation",
        url: "moderation",
      },
      {
        title: "API & auth keys",
        url: "api-auth-keys",
      },
      {
        title: "Announcement",
        url: "announcement",
      },
      {
        title: "Settings",
        url: "settings",
      },
    ];

    const isCollapseOpen = ref(true);

function toggleCollapse() {
  isCollapseOpen.value = !isCollapseOpen.value;
}
</script>

<style scoped>
  .activeClass {
    color: blue;
  }

  .exactActiveClass {
    color: green
  }
</style>