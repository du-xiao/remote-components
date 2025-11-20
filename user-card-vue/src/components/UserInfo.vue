<template>
  <div style="text-align:center; margin-bottom:16px;">
    <el-avatar :size="64" :src="avatar" />
    <h3 style="margin-top:12px;">{{ name }}</h3>
    <el-descriptions :column="1" size="small" border>
      <el-descriptions-item label="Name">{{ name }}</el-descriptions-item>
      <el-descriptions-item label="Age">{{ age }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "zzzz" },
  age: { type: [Number, String], default: 0 },
  avatar: { type: String, default: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" }
});
</script>
