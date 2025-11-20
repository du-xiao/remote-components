<template>
  <div ref="chartRef" style="width:100%; height:250px;"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps({
  data: { type: Array, default: () => [10, 20, 30, 40, 50] }
});

const chartRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption({
    xAxis: { type: 'category', data: props.data.map((_, i) => `Item ${i+1}`) },
    yAxis: { type: 'value' },
    series: [{ data: props.data, type: 'line', smooth: true }],
    tooltip: { show: true }
  });
});

watch(() => props.data, (newData) => {
  chartInstance?.setOption({ series: [{ data: newData }] });
});

onBeforeUnmount(() => {
  chartInstance?.dispose();
});
</script>
