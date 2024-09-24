<script>
export default {
  name: "HomeView",
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
  beforeUnmount() {
    console.log("HomeView 被取消挂载了");
  },
};
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>
  <hr />
  <router-link to="/home/news">News</router-link>
  <router-view />
</template>
