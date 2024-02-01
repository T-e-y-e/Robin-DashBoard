<template>
    <div class="mt-5 rounded-lg bg-white">
      <p class="p-3 px-6 font-bold uppercase text-[#566BA0]">Daily active users</p>
      <div class="mt-5 h-[300px] bg-background md:p-3">
        <Line :data="data" :options="options" />
      </div>
    </div>
  </template>
  
  <script setup>
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    } from "chart.js";
    import { Line } from "vue-chartjs";
  
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  
    const options = computed(() => {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            intersect: false,
          },
        },
        interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },

        scales: {
          y: {
            display: true,
            grid: {
              color: "#E7E8F2",
            },
            ticks: {
              color: "transparent",
            },
          },
          x: {
            display: true,
            grid: {
                color: "transparent",
            },
            ticks: {
              color: "#566BA0",
            },
          },
        },
      };
    });
  
    const data = ref({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales over time",
          backgroundColor: '#EA8D51',
          tension: 0.4,
          borderColor: "blue",
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: "blue",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ],
    });
  </script>