<!-- html -->
<template>
  <!-- 
    React, Vue 中 key 的作用
      1. 虚拟DOM中 key 的作用
        key 是虚拟DOM中的标识, 当数据变化, Vue 根据新数据生成新的虚拟DOM
        随后与旧的虚拟DOM进行比较
      2. 对比规则
        1.  找到 key 
          旧虚拟DOM中内容没变则直接使用之前的真实DOM, 变了则替换
        2. 未找到与之前相同的key
          创建新真实DOM进行渲染
      3. 用 index 作为 key 可能因此出现问题
        1. 若对数据进行中间添加, 则会触发重新渲染(因为 key 一样但内容变了)
        2. 如果结构包含输入类的DOM, 会产生错误数据更新
  -->
  <div class="app">
    <h2>遍历数组</h2>
    <ul>
      <li
        v-for="(p, i) in persons"
        :key="p.id"
        style="padding: 5px; font-size: 20px"
      >
        {{ i }} -- {{ p.name }} -- {{ p.age }}
        <input type="text" />
      </li>
    </ul>
    <h2>错误的遍历数组</h2>
    <ul>
      <li
        v-for="(p, i) in persons"
        :key="i"
        style="padding: 5px; font-size: 20px"
      >
        {{ i }} -- {{ p.name }} -- {{ p.age }}
        <input type="text" />
      </li>
    </ul>
    <button @click.once="addOne">点我在最前面加一个人</button>
    <h2>遍历对象</h2>
    <ul>
      <li v-for="(v, k) in car" style="font-size: 20px; padding: 5px">
        {{ k }} -- {{ v }}
      </li>
    </ul>
    <h2>遍历字符串</h2>
    <ul>
      <li v-for="(v, i) in str" style="font-size: 20px; padding: 5px">
        {{ i }} -- {{ v }}
      </li>
    </ul>
    <h3>可以看出其实就是迭代器</h3>
    <hr />
    <h2>列表过滤</h2>
    <input type="text" placeholder="请输入姓名" v-model="keyWord" />
    <ul>
      <li
        v-for="(f, i) in filter_fans"
        :key="f.id"
        style="padding: 5px; font-size: 20px"
      >
        {{ i }} -- {{ f.name }} -- {{ f.gender }}
      </li>
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
      car: {
        brand: "BMW",
        version: "M4",
        price: "100k",
      },
      str: "hello",
      keyWord: "",
      fans: [
        { id: 1, name: "周杰伦", gender: "男" },
        { id: 2, name: "周笔畅", gender: "女" },
        { id: 3, name: "王力宏", gender: "男" },
        { id: 4, name: "王杰", gender: "男" },
      ],
    };
  },
  methods: {
    addOne() {
      const p = { id: 4, name: "xx", age: 10 };
      this.persons.unshift(p);
    },
  },
  computed: {
    filter_fans() {
      // 要是想实现排序功能, 在这实现完 return 即可
      return this.fans.filter((f) => {
        return f.name.indexOf(this.keyWord) !== -1;
      });
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
