<template>

  <div class="searchTermFrequencyContainer">
      <h3 class="title">Most Searched Terms</h3>
       <div v-for="(searchTerm) in searchTermCount" :key="searchTerm.id" class="searchterm">
      
            <h5 v-html="searchTerm.key" class="value"></h5> &ensp;
            <h5>was searched: </h5> &ensp;
            <h5 v-html="searchTerm.value"></h5> &ensp;
            <h5>times.</h5> &ensp;
           
      </div> 
</div> 

</template>


<!-- script -->
<script>
import { firebase, db } from '@/firebase';
import router from '@/router';
import store from '@/store';
import { EventBus } from "@/EventBus";


export default {
  props: ['searchTerm'],
  data: () => {
    return{
        searchTerms: [],
        searchTermCount: []

    }
  },

  mounted() {
    this.getSearchFrequency();
    this.$root.$refs.B = this;
  },

  created(){
    this.$root.$refs.B = this;
  },

  methods: {

  getSearchFrequency(){
      db.collection("searchTerms")
        .orderBy("searched_at", "desc")
        .get()
        .then((query)=> {

          this.searchTerms = [];

          query.forEach((term)=>{
            const data = term.data();
            
            this.searchTerms.push(
              data.searchterm,
            )
           // console.log("frequency: ", this.searchTerms)
          })

    var len = this.searchTerms.length;

    for(var i = 0; i < len; i++){
        this.searchTermCount.push({
            key: this.searchTerms[i],
            value: 0            

        })
    }
    
    this.searchTerms.forEach((x) => {
   this.searchTermCount.forEach((y)=>{
       if(x == y.key){
        y.value += 1
       }
   })
});
   
var result = this.searchTermCount.reduce((unique, o) => {
    if(!unique.some(obj => obj.key === o.key && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
},[]);

this.searchTermCount = result

this.searchTermCount = this.searchTermCount.sort((a, b) => (a.value < b.value) ? 1 : -1)

console.log(this.searchTermCount)
        
      })
      .catch((e)=> {
        console.error(e)

      })
    }

  },


  name: 'SearchTermsFrequency'
};
</script>


<style Lang="scss" sacoped>
.searchTermFrequencyContainer{
background-color: rgb(240, 243, 250);
overflow: hidden;
padding: 0;
height: 45% !important;
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
