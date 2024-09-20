<!-- html -->
<template>
  <div class="app">
    <button @click="printThis">通过 ref 拿到学校子组件的名字</button>
    <School ref="school" />
    <!-- 使用 v-bind 使 age 传入为数字 -->
    <Student name="tyz" :age="18" />
  </div>
</template>

<!-- js -->
<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  components: {
    School,
    Student,
  },
  data() {
    return {};
  },
  methods: {
    printThis() {
      console.log(this.$refs.school.name);
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
