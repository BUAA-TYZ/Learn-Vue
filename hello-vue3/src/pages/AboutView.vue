<script>
export default {
  computed: {
    search: {
      get() {
        return this.$route.query.search ?? "";
      },
      set(search) {
        console.log(search);
        this.$router.replace({ query: { search } });
      },
    },
  },
  beforeUnmount() {
    console.log("AboutView 被取消挂载了");
  },
};
</script>

<template>
  <h2>AboutView</h2>
  <label> Search: <input v-model.trim="search" maxlength="20" /> </label>
</template>
