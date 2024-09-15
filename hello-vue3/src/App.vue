<!-- html -->
<template>
  <!-- 
    Vue 专门为 class 和 style 的 v-bind 用法提供了特殊的功能增强
    除了字符串外，表达式的值也可以是对象或数组 
    1. 绑定class样式
      可以传递数组 对象 字符串
      :class 也可以传递一个数组, 表明需要应用的 class
    2. 绑定style样式
  -->
  <div class="app" :class="color">
    <button @click="changeColor">点我改变方框颜色</button>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      color: "border-blue",
    };
  },
  methods: {
    changeColor() {
      const shapeSet = ["border-blue", "border-red", "border-green"];
      const i = Math.floor(Math.random() * 3);
      console.log(shapeSet[i]);
      this.color = shapeSet[i];
    },
  },
};
</script>

<!-- css -->
<style>
.app {
  padding: 20px;
  border-radius: 20px;
}

.border-blue {
  background-color: aliceblue;
}

.border-red {
  background-color: red;
}

.border-green {
  background-color: greenyellow;
}
</style>
