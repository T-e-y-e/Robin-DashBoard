<template>
    <div class="min-h-screen w-full flex bg-[#F3F7FF]">
      <div>
        <Sidebar />
      </div>
  
      <div class="flex flex-col flex-1">
        <Header />
  
        <div class="flex-1 p-4">
          <slot />
        </div>
      </div>
    </div>
  </template>