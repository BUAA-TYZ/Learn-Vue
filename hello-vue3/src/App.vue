<!-- html -->
<template>
  <!-- 
    Vue 收集表单数据
    https://v2.cn.vuejs.org/v2/guide/forms.html
      若 <input type="text"> 则 v-model 收集的是 value, 用户输入的是 value
      若 <input type="radio"> 则 v-model 收集的是 value, 且要给标签配 value
      若 <input type="checkbox">
        没有配置 value 则 v-model 收集的是 checked
        配置了 v-model 初始值是非数组, 收集的是 checked
        是数组, 收集的是 value 组成的数组 

    v-model 的三个修饰符:
      1. lazy
      2. number
      3. trim
  -->
  <div class="app">
    <form>
      账号：<input type="text" v-model="account" /><br />
      密码：<input type="password" v-model="password" /><br />
      <!-- type 限制只能输入数字 v-model.number 让其作为数字而非字符串有值 -->
      年龄：<input type="number" v-model.number="age" /><br />

      性别： 男
      <input type="radio" name="gender" v-model="gender" value="male" /> 女
      <input type="radio" name="gender" v-model="gender" value="female" /><br />

      <!-- value 用来给 hobby 收集 -->
      爱好： <input type="checkbox" v-model="hobby" value="study" />学习
      <input type="checkbox" v-model="hobby" value="game" />游戏
      <input type="checkbox" v-model="hobby" value="eat" />吃饭<br />

      所属校区
      <select v-model="city">
        <option value="">请选择校区</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="shenzhen">深圳</option></select
      ><br />
      其他信息：
      <textarea v-model="other"></textarea><br />
      <input type="checkbox" value="agree" />阅读并接受<a href="www.bing.com"
        >《用户协议》</a
      >
      <button>提交</button>
    </form>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      age: 18,
      gender: "male",
      hobby: [],
      city: "",
      other: "",
      agree: "",
    };
  },
  methods: {},
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
