<template>
<div class="relative h-max overflow-x-auto bg-white border border-violet-100 shadow-md sm:rounded-lg">
    <table class="w-full text-left rtl:text-right text-slate-900 text-base font-normal font-['Hanken Sans'] leading-normal">
        <thead class="text-slate-400 text-sm font-normal font-['Hanken Sans'] uppercase leading-normal bg-white border-b">
            <tr class="px-6">
                <th scope="col" class="px-6 py-4">
                    Users
                </th>
                <th scope="col" class="px-6 py-4">
                    <div class="flex items-center gap-6">
                        Messages sent
                        <FilterModal />
                    </div>
                </th>
                <th scope="col" class="px-6 py-4">
                    <div class="flex items-center gap-6">
                        Media Storage used
                        <FilterModal />
                    </div>
                </th>
                <th scope="col" class="px-6 py-4">
                    <div class="flex items-center gap-6">
                        Date Created
                        <FilterModal />
                    </div>
                </th>
                <th scope="col" class="px-6 py-4">
                    <div class="flex items-center gap-6">
                        Media Sent
                        <FilterModal />
                    </div>
                </th>
                <th scope="col" class="px-6 py-4">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b px-10"
             v-for="(user, i) in users"
            :key="i"
            >
                <th scope="row" class="px-6 py-4 whitespace-nowrap text-slate-900 text-base font-normal font-['Hanken Sans'] leading-normal">
                    {{ capitalizeFullName(user.full_name) }}
                </th>
                <td class="px-6 py-4">
                    {{ user.message_sent }}
                </td>
                <td class="px-6 py-4">
                    {{ bytesToMegabytes(user.media_storage_used) }} MB
                </td>
                <td class="px-6 py-4">
                    {{  formatDate(user.date_created) }}
                </td>
                <td class="px-6 py-4">
                    {{ user.media_sent }}
                </td>
                <td class="px-6 py-4 text-right">
                    <MessagesTableDropdown />
                </td>
            </tr>
        </tbody>
    </table>

    <div class="flex justify-center py-6">
        <MessagesTablePagination :totalPages="data?.totalPages" :currentPage="page" />
    </div>
</div>
</template>

  <script setup>
const runtimeConfigs = useRuntimeConfig()
const page = ref(1)

const { data, pending, refresh } = await useFetch(`${runtimeConfigs.public.API_URL}/messages?page=${page.value}&limit=5`);
const users = toRaw(data.value.data);
const rawData = toRaw(data.value);

  const capitalizeFullName = (fullName) => {
    return fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const bytesToMegabytes = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(1);
  };
  </script>
  
  