<template>
  <div class="w-full px-2 pt-6 sm:px-0 mt-5 flex items-start gap-6 overflow-x-auto py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
    <TabGroup>
      <TabList class="flex space-x-2 rounded-xl p-1">
        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-max py-2.5 text-sm leading-5 ',
              'ring-transparent ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
              selected
                ? 'w-max h-9 px-[18px]  text-orange-600 text-sm font-normal py-2.5 mr-1 bg-orange-50 rounded-full border border-orange-600 flex-col justify-center items-center gap-1 inline-flex outline-none'
                : 'w-max h-9 px-[18px] text-neutral-900 text-sm font-normal py-2.5 mr-1 bg-white rounded-full border border-gray-100 flex-col justify-center items-center gap-1 inline-flex',
            ]"
          >
            Today
          </button>
        </Tab>

        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-max py-2.5 text-sm leading-5',
              'ring-transparent ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
              selected
                ? 'w-max h-9 px-[18px]  text-orange-600 text-sm font-normal py-2.5 mr-1 bg-orange-50 rounded-full border border-orange-600 flex-col justify-center items-center gap-1 inline-flex outline-none'
                : 'w-max h-9 px-[18px] text-neutral-900 text-sm font-normal py-2.5 mr-1 bg-white rounded-full border border-gray-100 flex-col justify-center items-center gap-1 inline-flex',
            ]"
          >
            Last 7 Days
          </button>
        </Tab>

        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-max py-2.5 text-sm leading-5',
              'ring-transparent ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
              selected
                ? 'w-max h-9 px-[18px]  text-orange-600 text-sm font-normal py-2.5 mr-1 bg-orange-50 rounded-full border border-orange-600 flex-col justify-center items-center gap-1 inline-flex outline-none'
                : 'w-max h-9 px-[18px] text-neutral-900 text-sm font-normal py-2.5 mr-1 bg-white rounded-full border border-gray-100 flex-col justify-center items-center gap-1 inline-flex',
            ]"
          >
            This month
          </button>
        </Tab>

        <Tab
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-max py-2.5 text-sm leading-5',
              'ring-transparent ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
              selected
                ? 'w-max h-9 px-[18px]  text-orange-600 text-sm font-normal py-2.5 mr-1 bg-orange-50 rounded-full border border-orange-600 flex-col justify-center items-center gap-1 inline-flex outline-none'
                : 'w-max h-9 px-[18px] text-neutral-900 text-sm font-normal py-2.5 mr-1 bg-white rounded-full border border-gray-100 flex-col justify-center items-center gap-1 inline-flex',
            ]"
          >
            Last 3 months
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>
