<template>
  <div class="row">
    <div
      class="card"
      v-show="userArray.length"
      v-for="user in userArray"
      :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h2 v-show="isFirst">欢迎使用查询 Github 账户 !!</h2>
    <h2 v-show="isLoading">加载中...</h2>
    <h2 v-show="errMsg">{{ errMsg }}</h2>
  </div>
</template>

<script>
import emitter from "@/utils/emitter";

export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      userArray: [],
      errMsg: "",
    };
  },
  methods: {
    updateList(newList) {
      this.isFirst = newList.isFirst;
      this.isLoading = newList.isLoading;
      this.userArray = newList.userArray;
      this.errMsg = newList.errMsg;
    },
  },
  mounted() {
    emitter.on("updateList", this.updateList);
  },
  beforeUnmount() {
    emitter.off("updateList", this.updateList);
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
