<template>

  <div class="row">

    <div class="col-2" id="leftBG">
      
    </div>
    
    <div class="col-2"> 
      <news-article />
      <news-article />
      <news-article />
      <news-article />
    </div>

    <div class="col-2"> 
      <news-article />
      <news-article />
      <news-article />
      <news-article />
    </div>

    <div class="col-2"> 
      <news-article />
      <news-article />
      <news-article />
      <news-article />
    </div>

    <div class="col-2"> 
      <news-article />
      <news-article />
      <news-article />
      <news-article />
    </div>

    <div class="col-2 rightBG">
      
      
    </div>

  </div>
    

</template>


<style>
#leftBG{
background-image:url(https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png);
}

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
