<template>
  <div class="card">

      <form class="d-flex" action="">
        <input class="form-control me-2" type="text" id="searchBar" placeholder="Search" aria-label="Search">
      </form>

    <div class="result-list">

      <article v-for="(article, index) in articles" :key="index">

        <header>
            <img class="article-img" v-if="article.urlToImage" :src="article.urlToImage" alt="">
            <i v-else class="fas fa-image"></i>
        </header>

        <div class="title_desc">
        <h5 class="inner_html" v-html="article.title"></h5>
        <section v-html="article.description"></section>
        </div>
        
        <footer>
            <i class="fas fa-chevron-right"></i>
        </footer>

      </article>

    </div>
    <!-- <div class="card-body p-1">
      <img src="https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png" class="card-img-top" alt="...">
      <h5 class="card-title">AAA</h5>
      <p class="card-text">ahahaha</p>
      <a href="#" class="btn btn-primary">xD</a>
    </div> -->

  </div> 
</template>

<script>
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
  methods: {

    resetData() {
      this.currentPage = 1;
      this.articles = [];
    },

    fetchSearchNews() {
      if(this.searchword !== '')
      {
      this.apiUri = 'https://newsapi.org/v2/everything?q=' + this.searchword +
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

    }

  },

  created() {

    this.fetchTopNews();
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
}

.result-list {
  width: 100%; 
}

article {
  display: grid;
  grid-template-columns: 300px auto 40px;
  grid-template-rows: 200px;
  border-bottom: 2px solid #ccc;
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
    }

    i{
      font-size: 2rem;
    }

    
  .d-flex{
  margin-left: 9.5%;
  }

    section {
      padding: 3px;
      height: 100px;
      margin-left: 9%;
      text-align:justify;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      color: #888;
    }

    #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 1.6rem;
  }

</style>
