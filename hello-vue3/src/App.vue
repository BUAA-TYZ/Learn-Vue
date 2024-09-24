<!-- html -->
<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <router-link to="/home" replace>Go to Home</router-link>
    <router-link to="/about" replace>Go to About</router-link>
  </nav>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive include="HomeView">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<!-- js -->
<script>
export default {
  methods: {},
};
</script>

<!-- css -->
<style>
/*base*/
</style>
