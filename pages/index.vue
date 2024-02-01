<template>
    <div class="px-24 pt-6">
        
    </div>
  </template>
  
  <script setup>
  const data = {
    "usersOnline": 274,
    "usersActiveToday": 816,
    "usersActiveThisMonth": 883,
    "peakConcurrency": 556,
    "dashboard": 60129542144
  };
  
  const { data: dashboardData, pending } = await useFetch('https://sfe-m3if.onrender.com/api/v1/dashboard')
  console.log(dashboardData.data)
  console.log(toRaw(dashboardData.value.data))
  
  // Function to add space before capital letters
  function addSpaceBeforeCapitals(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  
  // Process each key in the data object
  const processedData = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const modifiedKey = addSpaceBeforeCapitals(key);
      processedData[key] = {
        modifiedKey: modifiedKey,
        value: data[key]
      };
    }
  }
  </script>
  