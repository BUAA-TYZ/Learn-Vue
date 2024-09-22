<!-- html -->
<template>
  <div id="root"><button @click="getStudentData">请求学生数据</button></div>
</template>

<!-- js -->
<script>
import axios from "axios";

export default {
  methods: {
    getStudentData() {
      // 由于同源的限制, 是无法直接获得到数据的
      axios
        .get("http://localhost:5173/api/students")
        .then(function (response) {
          // 处理成功情况
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        });
    },
  },
};
</script>

<!-- css -->
<style>
/*base*/
body {
  background: #fff;
}
</style>
