<!-- html -->
<template>
  <!-- 
    Vue 生命周期
      beforeCreate
      created
      beforeMount
      mounted 重要 发送ajax请求 启动定时器 绑定自定义事件 订阅信息等工作
      beforeUpdate
      updated
      beforeDestory 重要 清除定时器 解绑自定义事件 取消订阅信息等收尾工作
      destoryed
    Vue 销毁后
      自定义事件会消失, 原生DOM事件依然有效
      一般不在 beforeDestory 中操作数据, 即使操作了, 也不会触发更新流程
      -->
  <div class="app">
    <h2 :style="{ opacity }">变化</h2>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      opacity: 1,
    };
  },
  methods: {},
  mounted() {
    setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
};
</script>

<!-- css -->
<style>
.app {
  padding: 20px;
  border-radius: 10px;
  background-color: aliceblue;
}
</style>
