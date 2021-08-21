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
background-color: rgba(157, 207, 219, 0.61);


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
