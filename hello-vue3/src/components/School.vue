<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "北京航空航天大学",
      address: "北京市海淀区",
    };
  },
};
</script>
