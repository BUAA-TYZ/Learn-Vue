<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ student_age }}</h2>
    <button @click="student_age++">点我加一岁</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student_age: this.age,
    };
  },
  props: ["name", "age"],
};
</script>
