<!-- html -->
<template>
  <div class="app">
    <!--
      监视属性
        1. 当监视的属性变化时, 回调被调用
      和计算属性的区别
        1. 计算能做的, 监视都能做 但最好使用计算
        2. 监视能做的, 计算不一定 比如 异步任务
      两个重要的原则
        1. 被 Vue 管理的函数写成普通函数
        2，不被的(定时器的回调等)写成 lambda
      -->
    <h2>今天天气很{{ info }}</h2>
    <button @click="changeWhether">切换天气</button>
    <h2>深层监视: {{ deep_ex.a }}</h2>
    <button @click="changeA">上面的值加1</button>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      isHot: true,
      deep_ex: {
        a: 1,
      },
    };
  },
  methods: {
    changeWhether() {
      this.isHot = !this.isHot;
    },
    changeA() {
      this.deep_ex.a++;
    },
  },
  computed: {
    info() {
      return this.isHot ? "炎热" : "寒冷";
    },
  },
  watch: {
    // 不开 deep, immediate 等配置
    // 简写
    info(new_val, old_val) {
      console.log(new_val, old_val);
    },
    // "deep_ex.a": {
    //   handler(new_val, old_val) {
    //     console.log(new_val, old_val);
    //   },
    // },

    // 不开 deep 则除非整体改变才会回调
    deep_ex: {
      deep: true,
      handler() {
        console.log("deep_ex changed.");
      },
    },
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
