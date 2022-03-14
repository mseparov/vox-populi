<template>
<div class="articles" > 
     
     <NewsArticle/>
     <SearchTerms class="searchTerms"/>
     <SearchTermsFrequency class="searchTermsFrequency"/>
     <Chat class="chat"/>

</div>
</template>


<script>
import NewsArticle from '@/components/NewsArticle.vue';
import SearchTerms from '@/components/SearchTerms.vue';
import SearchTermsFrequency from '@/components/SearchTermsFrequency.vue';
import Chat from '@/components/Chat.vue';

export default{
  name: 'home',
  components: {
    NewsArticle,
    SearchTerms,
    SearchTermsFrequency,
    Chat
  },


};

</script>

<style>
  .searchTerms{
    position: fixed;
    top: 135px;
    margin-left: 12.7vw;
    width: 12vw;
    height: 100vh;
    border-radius: 6px;    
    border: 2px rgb(232, 229, 238) solid;
    z-index: 100;
  }

    .searchTermsFrequency{
    position: fixed;
    top: 738px;
    margin-left: 12.7vw;
    width: 12vw;
    height: 100vh;
    border-radius: 6px;    
    border: 2px rgb(232, 229, 238) solid;
    z-index: 100;
  }

  .chat{
    position: fixed;
    top: 135px;
    margin-left: 74.6vw;
    width: 15vw;
    height: 91vh;
    border-radius: 6px;    
    border: 2px rgb(232, 229, 238) solid;
     z-index: 100;
     border-bottom: 55px rgb(232, 229, 238) solid; ;
  }

</style>
