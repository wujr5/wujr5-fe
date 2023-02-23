<template lang="pug">
div
  .w-300.h-300.bg-yellow
  .article-detail(v-html="article")
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';

let route = useRoute();

let article = $ref([]);

onMounted(() => {
  document.title = '博客详情';

  axios.get('/api/article/' + route.params.id).then((res) => {
    article = res.data.html;
  });
});
</script>
