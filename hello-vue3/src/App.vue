<!-- html -->
<template>
  <!-- 
    Vue 监视对象的原理
      创建一个监视的实例对象

      function Observer(obj) {
        const keys = Object.keys(obj);
        keys.forEach((k) => {
          Object.defineProperty(this, k, {
            get() {
              return obj[k];
            },
            set(val) {
              进行渲染页面的工作
            },
          })
        })
      }
    
    Vue 监视数组的原理
      Vue 并不会对数组每个元素生成一个 get set
      而是监视改变数组的方法, 只有调用了方法才会重新渲染
      https://v2.cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E6%9B%B4%E6%96%B9%E6%B3%95
  -->
  <div class="app">
    <ul>
      <li
        v-for="(p, i) in persons"
        :key="p.id"
        style="padding: 5px; font-size: 20px"
      >
        {{ i }} -- {{ p.name }} -- {{ p.age }}
      </li>
      <button @click="changeFirstName">改变第一个人姓名</button>
    </ul>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "tyz", age: 18 },
        { id: 2, name: "tlq", age: 51 },
        { id: 3, name: "zyh", age: 51 },
      ],
    };
  },
  methods: {
    addGender() {
      // 在 Vue2 中 set 用于为对象添加属性, 普通的添加非响应式的（Vue3 已经没有这个 API）
      // this.$set(this.student, "gender", "男");
    },
    changeFirstName() {
      // 直接修改元素, 页面不会重新渲染
      this.persons.splice(0, 1, { id: 1, name: "田宇哲", age: 18 });
    },
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
