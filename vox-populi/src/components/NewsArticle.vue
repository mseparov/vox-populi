<template>
  <div class="card">

      <!-- ovo je search bar -->
      <form @submit.prevent="fetchSearchNews" class="d-flex formContainer" action="">
        <input v-model="searchword" class="form-control me-2 words" type="text" id="searchBar" placeholder="Search the web for news..." aria-label="Search">
        <button v-if="!isBusy" @click="fetchSearchNews" class="search_button">Search</button>
      </form>

    <div class="result-list">

      <article v-for="(article, index) in articles" :key="index" @click="navTo(article.url)">

        <header>
            <img class="article-img" v-if="article.urlToImage" :src="article.urlToImage" alt="">
            <i v-else class="fas fa-image"></i>
        </header>

        <div class="title_desc">
        <h5 class="inner_html" v-html="article.title"></h5>
        <section v-html="article.description"></section>
        </div>

      </article>

    </div>

    <div ref="infinitescrolltrigger" id="scroll-trigger">
    <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
  </div>
</div> 

</template>




<!-- voice response API -->
<script src="https://code.responsivevoice.org/responsivevoice.js?key=rLoh41TO"></script>
<!-- script -->
<script>
import { firebase, db } from '@/firebase';
import router from '@/router';
import store from '@/store';
import { EventBus } from "@/EventBus";


export default {
  props: [
    '25ddb462ccf04264aa2c37968dd5a1b5',
  ],
  data: () => {
    return{
      apiUrl: '',
      apiKey: '25ddb462ccf04264aa2c37968dd5a1b5',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: '',
      articles: [],
      country: 'us',

      runtimeTranscription_: "",
      transcription_: [],
      lang_: "en-US"
    }
  },

  computed: {
    pageCount(){
    return Math.ceil(this.totalResults/this.maxPerPage);
    
    }
    },

  methods: {

    navTo(url) {
    window.open(url);
    },

    resetData() {
      this.currentPage = 1;
      this.articles = [];
    },


    fetchSearchNews() {
      
      if(this.searchword !== '')
      {
      this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                  '&pageSize=' + this.maxPerPage +
                  '&apiKey=' + this.apiKey;
      this.isBusy = true;

      // save searchterm in the database
            db.collection("searchTerms").add({
              searchterm: this.searchword,
              email: store.currentUser,
              searched_at: Date.now()
            })
            .then((stored) => {
              console.log('Spremljeno', stored);
              this.$root.$refs.A.getPosts();
            })
            .catch((e) => {
              console.error(e);
            })

      this.resetData();
      this.fetchData();
      
      }
      else {
      this.fetchTopNews();
    }
    },

    fetchTopNews() {
      this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country +
      '&pageSize=' + this.maxPerPage +
      '&apiKey=' + this.apiKey;

      this.isBusy = true;
      this.searchword = '';

      this.resetData();
      this.fetchData();  
    },

    fetchData(){
        let req = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element =>  {
                this.articles.push(element);
            });
            this.isBusy = false;
            this.showloaded = false;
          })
          .catch((error) => {
            console.log(error);
          })

    },

    // fetches data when at the end of page

    scrollTrigger() {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
        this.showloader = true;
        this.currentPage += 1;
        this.fetchData();
      }
    });
  });

  observer.observe(this.$refs.infinitescrolltrigger);
}

  },


//on create
  created() {

    function logout() {
        firebase.auth().signOut().then(() => {

          this.$router.push({name: "Login"})

        })


    }

    //fetches top news from NEWS API
    this.fetchTopNews();

    //voice recognition
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = false;

      recognition.addEventListener("result", e => {
        
    // console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")
    this.runtimeTranscription_ = transcript;

if(transcript.includes("repeat after me")) {
    var b = transcript;
    b = b.replace("repeat after me","");
    responsiveVoice.speak(b);
}

//voice search
if(transcript.includes("search")) {
          var b = transcript;
          b = b.replace("search","");

            if(b == ""){
              this.fetchTopNews();
            }
            else{
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + b +
                  '&pageSize=' + this.maxPerPage +
                  '&apiKey=' + this.apiKey;

            // save searchterm in the database
            db.collection("searchTerms").add({
              searchterm: b,
              email: store.currentUser,
              searched_at: Date.now()
            })
            .then((stored) => {
              console.log('Spremljeno', stored);
              this.$root.$refs.A.getPosts();
            })
            .catch((e) => {
              console.error(e);
            })

      this.isBusy = true;
      this.resetData();
      this.fetchData();
            }
     }  


//open tabs
if(transcript.includes("open")) {
        var b = transcript;
        b = b.replace("open ","");

        if(b=="open"){
            console.log("you only said 'open'")
        }
        else{
          window.open('https://www.' + b + '.com')
        }
};


if(transcript.includes("home")) {
          router.push({ name: 'Home' });
};

if(transcript.includes("about")) {
          router.push({ name: 'About' });
};

if(transcript.includes("down")){
window.scrollBy(0, 550);
};

if(transcript.includes("up")){
window.scrollBy(0, -550);
};

if(transcript.includes("reload")) {
location.reload();
}; 

if(transcript.includes("logout")) {
logout();
}; 

console.log(transcript);
});

  recognition.addEventListener("end", recognition.start);
  recognition.start();
  },



  mounted() {
  this.scrollTrigger();
},

  name: 'NewsArticle'
};
</script>



<style Lang="scss" sacoped>

.inner_html{
font-weight: bold;
margin-left: 9%;
text-align:justify;
}

.card{
  margin-top: 185px;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}

.result-list {
  width: 100%; 
}

article {
  display: grid;
  grid-template-columns: 300px auto 40px;
  grid-template-rows: 200px;
  border: 2px rgb(232, 229, 238) solid;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
}

  header {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

    .article-img{
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    i{
      font-size: 2rem;
    }

  .d-flex{
  width: 50.25% !important;
  padding: 6px !important;
  background:rgb(241, 233, 238) !important;
  position: fixed;
  top: 135px;
  z-index: 99;
  }

    section {
      padding: 3px;
      height: 100px;
      margin-left: 9%;
      text-align:justify;
    }

    #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 1.6rem;
  }

  .search_button{
    border-radius: 5px;
  }

   .speech_button{
    border-radius: 5px;
  }


</style>
