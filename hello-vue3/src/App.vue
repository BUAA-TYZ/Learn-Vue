<!-- html -->
<template>
  <div class="app">
    <!-- Vue 模板语法有两大类
      1. 插值语法
        用于解析标签体内容
        {{ xxx }} xxx 是 js 表达式 且可以直接读取到 data 中的所有属性
      2. 指令语法
        用于解析标签
        v-bind:href="xxx" 简写可以去掉 v-bind
        xxx 是表达式 且可以读取 data 中属性
    -->
    <h1>Hello Vue3!</h1>
    <h2>{{ name }}</h2>
    <a :href="baiduurl">跳转百度</a>
  </div>
</template>

<!-- js -->
<script lang="ts">
export default {
  data() {
    return {
      name: "app",
      baiduurl: "http://www.baidu.com",
    };
  },
};
</script>

<!-- css -->
<style>
.app {
  background-color: aliceblue;
  border-radius: 10px;
  padding: 20px;
}
</style>
