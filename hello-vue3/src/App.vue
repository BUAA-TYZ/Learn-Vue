<!-- html -->
<template>
  <div class="app">
    姓: <input type="text" v-model="firstName" /> <br />
    名: <input type="text" v-model="lastName" /> <br />

    <!-- 全名: <span> {{ fullName() }}</span> <br /> -->
    <!--
      计算属性
        1. 原理：底层借助 Object.defineproperty 方法提供的 getter 和 setter
        2. 与 methods 实现啊相比, 内部有缓存机制
        3. 计算属性修改, 必须写 set 响应, 且 set 要引起依赖项发生变化（fN lN 都要变）
      -->
    全名: <span> {{ fullName }}</span> <br />
    不可变全名: <span> {{ fixFullName }}</span>
  </div>
</template>

<!-- js -->
<script>
export default {
  data() {
    return {
      firstName: "T",
      lastName: "YZ",
    };
  },
  // methods: {
  //   fullName() {
  //     return this.firstName + "-" + this.lastName;
  //   },
  // },
  computed: {
    fullName: {
      // 当有人读取 get get 会被调用, 且返回值作为 fullName 的值
      // get 当 初次读取 fullName 或 所依赖的数据发生变化 时被调用
      get() {
        return this.firstName + "-" + this.lastName;
      },
      // set 当 fullName 被修改时被调用
      set(v) {
        const val = v.split("-");
        this.firstName = val[0];
        this.lastName = val[1];
      },
    },
    // 当确定只用 get 时
    fixFullName() {
      return this.firstName + "-" + this.lastName;
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
