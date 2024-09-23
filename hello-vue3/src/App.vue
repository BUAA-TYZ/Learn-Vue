<!-- html -->
<template>
  <div id="root">
    <div class="container">
      <Search />
      <List />
    </div>
  </div>
</template>

<!-- js -->
<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
  components: { Search, List },
  methods: {},
};
</script>

<!-- css -->
<style>
/*base*/
</style>
