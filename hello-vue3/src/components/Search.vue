<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="userName"
      />&nbsp;<button @click="sendRequest">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import emitter from "@/utils/emitter";

export default {
  data() {
    return { userName: "" };
  },
  methods: {
    sendRequest() {
      if (!this.userName.trim()) {
        alert("用户名不能为空");
        return;
      }
      emitter.emit("updateList", {
        isFirst: false,
        isLoading: true,
        userArray: [],
        errMsg: "",
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.userName}`)
        .then(function (response) {
          // console.log(response.data.items);
          emitter.emit("updateList", {
            isLoading: false,
            userArray: response.data.items,
            errMsg: "",
          });
        })
        .catch(function (error) {
          emitter.emit("updateList", {
            isLoading: false,
            userArray: [],
            errMsg: error.msg,
          });
        });
    },
  },
};
</script>
