<template>
    <div>
      <apexchart
        :key="series"
        height="400"
        width="100%"
        
        :series="series"
      ></apexchart>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="updateChart"
      >
        Change
      </button>
    </div>
  </template>
  <script setup lang="ts">
  const options = ref({
    chart: {
      type: "area",
    },
    plotOptions: {
      area: {
        borderRadius: 10,
        borderRadiusApplication: "around",
      },
    },
    annotations: {
              yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                  show: true,
                  text: 'Support',
                  style: {
                    color: "#fff",
                    background: '#00E396'
                  }
                }
              }],
              xaxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                  show: true,
                  text: 'Rally',
                  style: {
                    color: "#fff",
                    background: '#775DD0'
                  }
                }
              }]
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
              style: 'hollow',
            },
            xaxis: {
              type: 'datetime',
              min: new Date('01 Mar 2012').getTime(),
              tickAmount: 6,
            },
            tooltip: {
              x: {
                format: 'dd MMM yyyy'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
  });
  const series = ref([
    {
      name: "Score",
      data: [],
    },
  ]);

  const updateChart = () => {
    //generate array of random numbers of length 10
    const data = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    options.value = {
      ...options.value,
      xaxis: {
        categories: Array.from(
          { length: 10 },
          (_, i) => new Date().getFullYear() - i
        ), // array of last 10 years
      },
    };
    series.value = [
      {
        name: "Score",
        data: data,
      },
    ];
  };
  onMounted(() => {
    updateChart();
  });
  </script>