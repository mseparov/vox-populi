<template>

<div class="articles" > 
     
     <NewsArticle/>
    
</div>

</template>


<style>

</style>


<script>

import NewsArticle from '@/components/NewsArticle.vue';

export default{
  name: 'home',
  components: {
  
    NewsArticle,
  },
};

</script>
