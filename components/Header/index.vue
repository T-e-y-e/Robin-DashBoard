<template>
    <div class="w-full py-6 sticky top-0 bg-[#F3F7FF]  border-b border-slate-200">
        <div class="px-12 flex justify-between items-center">
         <div>
            <p class="text-[#9999BC] text-base font-normal font-['Hanken Sans'] leading-normal">
              Hi {{ user.firstname }}! <span>👋🏼</span>
            </p>
         </div>
         <div class="flex items-center gap-6">
            <div>
              <div class="w-[203px] h-8 px-[35px] py-1 bg-indigo-600 rounded-[30px] justify-start items-start gap-2.5 inline-flex">
                 <div class="text-center text-white text-base font-medium font-['Hanken Sans'] leading-normal">Download Report</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-[40px] h-[40px] rounded-full bg-[#ECEEF5] flex justify-center items-center">
                <span class="opacity-40 text-black text-xs font-medium font-['Graphik'] uppercase tracking-wide">
                    {{ getUserInitials(user) }}
                </span>
            </div>
            <div>
                <ProfileDropdown />
            </div>
            </div>
         </div>
    </div>
    </div>
</template>

<script setup>
  const user =  {
    "firstname": "Ayomide",
    "lastname": "Olamide"
   }

  //  Get the user initials
   function getUserInitials(user) {
       const firstnameInitial = user.firstname.charAt(0);
       const lastnameInitial = user.lastname.charAt(0);

       return `${firstnameInitial}${lastnameInitial}`;
    }
</script>

<style lang="scss" scoped>

</style>
