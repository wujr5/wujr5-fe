<template lang="pug">
main
  div(style="text-align: center")
    h1 文章列表
    router-link.h-50.lh-50.bd-1.t-l.px-20.mb-10.br-4.c-1e1e1e.dspl-bl.fs-16(
      v-for="(item, index) in articleList",
      style="text-decoration: none",
      :to="`/about/${item.id}`"
    ) {{ index }} : {{ item.title }}
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

let articleList = $ref([]);

onMounted(() => {
  document.title = '文章列表';

  axios.get('/api/article/list').then((res) => {
    articleList = res.data.data;
  });
});
</script>
