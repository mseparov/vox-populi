<template>

  <div class="searchTermContainer">
      <h3 class="title">Recently Searched Terms</h3>
       <div v-for="(searchTerm) in searchTerms" :key="searchTerm.id" class="searchterm">
      
            <h5 v-html="searchTerm.value" style="color: #0F4387" class="value"></h5> &ensp;
            <h5>was searched by:</h5> &ensp;
            <h5 v-html="searchTerm.email"></h5> &ensp;
           
            <h5>{{searchedFromNow(searchTerm.time)}}</h5> 


      </div>
    
</div> 

</template>




<!-- script -->
<script>
import { firebase, db } from '@/firebase';
import router from '@/router';
import store from '@/store';
import moment from 'moment';
import { EventBus } from "@/EventBus";


export default {
  props: ['searchTerm'],
  data: () => {
    return{
        searchTerms: [],

    }
  },

  mounted() {
    this.getPosts();
    this.$root.$refs.A = this;
  },

  created(){
    this.$root.$refs.A = this;
  },

  methods: {

     searchedFromNow(data){
      return moment(data).fromNow();
    },

    getPosts(){
      db.collection("searchTerms")
        .orderBy("searched_at", "desc")
        .limit(25)
        .get()
        .then((query)=> {

          this.searchTerms = [];

          query.forEach((term)=>{
            const data = term.data();
            
            this.searchTerms.push({
              id: term.id,
              time: data.searched_at,
              value: data.searchterm,
              email: data.email
            })
            
          })

      })
      .catch((e)=> {
        console.error(e)

      })
    }

  },


  name: 'SearchTerms'
};
</script>



<style Lang="scss" sacoped>

.searchTermContainer{
background-color: rgb(240, 243, 250);
overflow: hidden;
padding: 0;
height: 75% !important;
}

.title{
font-weight: bold;
}

.value{
  font-weight: bold;
}

.searchterm{
display: flex;
border: 2px rgb(232, 229, 238) solid;
border-radius: 6px;
overflow: hidden;
text-align: center;
align-items: center;
flex-wrap: wrap;
}

</style>
