<template>
  <el-card
    :style="{
      width: '260px',
      height: height + 'px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      transition: 'height 0.5s ease',
     
      overflow: 'hidden'
    }"
  >
  <UserInfo :name="name" :age="age" />
  <UserChart :data="chartData" />
    <div style="margin-top:16px;">
      <div v-for="item in listData" :key="item.title" style="display:flex; align-items:center; padding:8px 0;">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="margin-right:8px;" />
        <div>
          <a href="https://element-plus.org">{{ item.title }}</a>
          <div style="font-size:12px; opacity:0.7;">Element Plus example</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import UserInfo from "./UserInfo.vue";
import UserChart from "./UserChart.vue";
const props = defineProps({
  name: { type: String, default: "zzzz" },
  age: { type: [Number, String], default: 0 },
  listData: { type: Array, default: () => [] },
  chartData: { type: Array, default: () => [10, 20, 30, 40, 50] }
});

const height = ref(260);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    height.value += 10;
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>
