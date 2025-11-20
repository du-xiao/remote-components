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
    <div style="text-align:center; margin-bottom:16px;">
      <el-avatar :size="64" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <h3 style="margin-top:12px; color:#fff">{{ name }}</h3>
    </div>

    <el-descriptions :column="1" size="small"  border>
      <el-descriptions-item label="Name"><span style="color:#fff">{{ name }}</span></el-descriptions-item>
      <el-descriptions-item label="Age"><span style="color:#fff">{{ age }}</span></el-descriptions-item>
    </el-descriptions>

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

const props = defineProps({
  name: { type: String, default: "zzzz" },
  age: { type: [Number, String], default: 0 },
  listData: { type: Array, default: () => [] }
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
