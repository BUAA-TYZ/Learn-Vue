<template>
  <ol>
    <li v-for="n in newList" :key="n.id">{{ n.title }}</li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      newList: [
        {
          id: 1,
          title: "北航降薪",
        },
        {
          id: 2,
          title: "本周五新出奇点2.0",
        },
        {
          id: 3,
          title: "即将放国庆",
        },
      ],
    };
  },
};
</script>
