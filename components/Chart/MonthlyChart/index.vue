<template>
    <div class="mt-5">
      <p class="font-bold">Sales over time</p>
      <div class="mt-5 h-[300px] rounded-lg border bg-background md:p-3">
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
        scales: {
          y: {
            grid: {
              color: "blue",
            },
            ticks: {
              color: "red",
            },
          },
          x: {
            grid: {
              color: "red",
            },
            ticks: {
              color: "red",
            },
          },
        },
      };
    });
  
    const data = ref({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sales over time",
          backgroundColor: "blue",
          tension: 0.4,
          borderColor: "blue",
          borderWidth: 2,
          pointBackgroundColor: "blue",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ],
    });
  </script>