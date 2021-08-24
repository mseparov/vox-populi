<template>
  <div class="card">

      <!-- ovo je search bar -->
      <form @submit.prevent="fetchSearchNews" class="d-flex" action="">
        <input v-model="searchword" class="form-control me-2" type="text" id="searchBar" placeholder="Search the web for news..." aria-label="Search">
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

    <!-- <div class="card-body p-1">
      <img src="https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png" class="card-img-top" alt="...">
      <h5 class="card-title">AAA</h5>
      <p class="card-text">ahahaha</p>
      <a href="#" class="btn btn-primary">xD</a>
    </div> -->
</template>



<!-- voice recognition -->
<script src="https://code.responsivevoice.org/responsivevoice.js?key=rLoh41TO"></script>

<!-- script -->
<script>

//voice recognition

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = false;

recognition.addEventListener("result", e => {

    // console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

/*
    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
  */
  
if(transcript.includes("repeat after me")) {
    var b = transcript;
    b = b.replace("repeat after me","");
    responsiveVoice.speak(b);
}


if(transcript.includes("Google")) {
gog = window.open('http://google.com')
}
if(transcript.includes("exit")) {
gog.close()
};


if(transcript.includes("reload")) {
location.reload();
}; 

console.log(transcript)
});


recognition.addEventListener("end", recognition.start);

recognition.start();

//voice recognition

export default {
  props: [
    '6a32316f19304759b15c22a197659a4c',
  ],
  data: () => {
    return{
      apiUrl: '',
      apiKey: '6a32316f19304759b15c22a197659a4c',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: '',
      articles: [],
      country: 'us'
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

  created() {

    this.fetchTopNews();
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
  border: 3px solid rgb(185, 165, 183);
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
  width:100%;
  padding: 10px;
  background:rgb(228, 190, 215);
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

</style>
