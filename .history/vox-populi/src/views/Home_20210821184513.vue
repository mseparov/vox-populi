<template>

  <div class="row">

    <div class="col-2">
      
    </div>
    
    <div class="col-2"> 
      <news-article />
    </div>
    
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
