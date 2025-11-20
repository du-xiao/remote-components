<template>
  <el-card
    :style="{
      width: '260px',
      height: height + 'px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      transition: 'height 0.5s ease',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      overflow: 'hidden'
    }"
  >
    <div style="text-align:center; margin-bottom:16px;">
      <el-avatar :size="64" icon="User" />
      <h3 style="margin-top:12px; color:#fff">{{ name }}</h3>
    </div>

    <el-descriptions :column="1" size="small" bordered
      style="background: rgba(255,255,255,0.2); border-radius:8px;">
      <el-descriptions-item label="Name"><span style="color:#fff">{{ name }}</span></el-descriptions-item>
      <el-descriptions-item label="Age"><span style="color:#fff">{{ age }}</span></el-descriptions-item>
    </el-descriptions>

    <div style="margin-top:16px;">
      <div v-for="item in listData" :key="item.title" style="display:flex; align-items:center; padding:8px 0;">
        <el-avatar icon="User" style="margin-right:8px;" />
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
  name: { type: String, default: "unknown" },
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
