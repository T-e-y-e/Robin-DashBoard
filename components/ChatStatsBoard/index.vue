<template>
  <div class="px-24 pt-6">
    <div class="grid grid-cols-4 gap-8">
      <div
        v-for="p in processedData"
        :key="p.modifiedKey"
        class="h-[115px] bg-white rounded-[5px] border border-violet-100 flex items-center pl-8"
      >
        <div>
          <h4 class="text-[#566BA0] text-xs font-medium uppercase leading-normal">
            {{ p.modifiedKey }}
          </h4>
          <h2 class="text-[#566BA0] text-[28px] font-medium leading-loose">
            {{ p.modifiedKey.includes("Storage") ? p.value.toFixed(1) + " MB" : p.value }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const runtimeConfigs = useRuntimeConfig()
const page = ref(1)

const { data, pending, refresh } = await useFetch(`${runtimeConfigs.public.API_URL}/chat_dashboard`);
const chatData = toRaw(data.value.data);

function addSpaceBeforeCapitals(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

// Process each key in the data object
const processedData = {};
for (const key in chatData) {
  if (chatData.hasOwnProperty(key)) {
    const modifiedKey = addSpaceBeforeCapitals(key);
    processedData[key] = {
      modifiedKey: modifiedKey,
      value: key.includes("Storage") ? chatData[key] / 1024 : chatData[key]
    };
  }
}
</script>
