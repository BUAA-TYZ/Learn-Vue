<!-- html -->
<template>
  <div class="app">
    <h2>欢迎来到 {{ name }}</h2>
    <!-- 
      事件的基本使用
        1. v-on:xxx 或 @:xxx 绑定事件
        2. 事件中的回调需要在 methods 中, 最终会在 vm 上(vue3 改变了 似乎也变成了代理, 在 vm.ctx 中)
        3. methods 中的函数不要用 lambda 否则 this 不是 vm
        4. methods 中的函数被 Vue 管理, this 指向 vm
        5. @click="demo" @click="demo($event)" 效果一样, 后者可以传参
    -->
    <button @click="showInfo1">点我提示信息1</button>
    <button @click="showInfo2($event, 66)">点我提示信息2</button>
    <!-- 
      Vue 的事件修饰符
        1. prevent 阻止默认事件
        2. stop 阻止事件冒泡
        3. once 事件只触发一次
        下面三种不常用
        4. capture
        5. self
        6. passive
    -->
    <button :href="baiduurl" @click.prevent="showInfo1">点我不会跳转</button>
    <button @click.once="showInfo1">点我多少次都只警告一次</button><br/>
    <!-- 
      1. Vue 中常见的按键别名:
        回车 enter 删除 delete 退出 esc 空格 space 换行 tab 上up下down左left右right
      2. Vue 未提供别名的按键, 可以使用按键原始的 key 去绑定 比如 caps-lock
      3. 系统修饰键 ctrl alt shift win
        配合 keyup 按下修饰键的同时按其他键再释放其他键, 事件才被触发
        配合 keydown 正常使用
      4. keyup 表示键盘按键抬起事件, keydown 表示键盘按下事件
    -->
      <input @keyup.enter="showmsg" type="text" placeholder="按回车将内容打印到控制台"></input>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      name: "app",
      baiduurl: "http://www.baidu.com",
    };
  },
  methods: {
    showInfo1(event) {
      alert("H");
      console.log(event);
    },
    showInfo2(event, num) {
      alert("H");
      console.log(event, num);
    },
    showmsg(e) {
      console.log(e.target.value)
    }
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
