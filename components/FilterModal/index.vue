<template>
    <div class="flex items-center justify-center">
      <button
        type="button"
        @click="openModal"
        class="w-max bg-transparent"
      >
         <IconsFilter class="text-[#8D9091]"/>
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full justify-end text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all"
              >
                <div class="flex items-center justify-between">
                    <DialogTitle
                  as="h3"
                  class="text-2xl font-medium leading-6 text-black"
                >
                  Filter Table
                </DialogTitle>

                <div>
                    <div class="w-[30px] h-[30px] rounded-full font-bold bg-[#ECEEF5] flex justify-center items-center"
                    @click="closeModal"
                    >
                        <CloseOutlined class="text-red-500 font-bold"/>
                   </div>
                </div>
                </div>

                <div class="mt-2">
                  <div>
                    <FilterModalFilterTabs />
                  </div>


                  <div>
                    <DatePicker />
                  </div>
                  
                  <div>
                    <MessagesOption />
                    <MediaOptions />
                  </div>
                </div>
  
                <div class="mt-28 px-10">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-[30px] border border-transparent bg-[#4568D1] px-[35px] py-[9px] text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Filter Table
                  </button>
                  <p
                    class="text-center text-base text-[#8D9091] cursor-pointer mt-5"
                    @click="closeModal"
                  >
                    Clear Filter
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const isOpen = ref(false)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
  </script>
  