<template>
  <div class="card">
      <form @submit.prevent="filterSearch()" class="d-flex" action="">
        <input v-model="store.searchWord" class="form-control me-2 words" type="search" id="searchBar" placeholder="Search the web for news..." aria-label="Search">
        <button @click="filterSearch()" class="search_button">Search</button>
      </form>
      
      <form @submit.prevent="postNewArticle" class="form">
      <div class="form-group mt-4 mb-3">
        <label for="articleimage">Upload an image</label>
        <br/>
        <croppa :width="200" :height="200" placeholder="Image" v-model="imageReference" class="form-control-lg"></croppa>
      </div>
      <div class="form-group mb-3">
        <label for="newArticleHeader">Article header</label>
        <br/>
        <input 
          v-model="newArticleHeader"
          placeholder="">
      </div>
      <div class="form-group">
        <label for="newArticleText">Write your own article</label>
        <br/>
        <textarea v-model="newArticleText" rows="6" cols="100"> </textarea>  
      </div>
      <button type="button" @click="postNewArticle" class="btn btn-primary mt-4 mb-4">Post Article</button>
      </form>
      <div class = "form-group">
        <ourArticle v-for="article in articles" :key="article.id" :info="article"/>
      </div>
  </div> 
</template>

<script>
import store from '@/store';
import ourArticle from '@/components/ourArticle.vue';
import Comments from '@/components/Comments.vue';
import { firebase, db, storage } from '@/firebase';

export default{
  name: 'ourNews',
  data() {
    return {
      articles: [],
      store,
      imageReference: null,
      newArticleHeader: "",
      newArticleText: "",
    };
  },
  components: {
    ourArticle,
    Comments,
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles(){
      db.collection('articles')
        .orderBy('publishingTime', 'desc')
        .limit(20)
        .get()
        .then((query) => {
          this.articles = [];
          query.forEach((doc) => {
            console.log(doc.id, '   ', doc.data());
            const data = doc.data();

            this.articles.push({
              id: doc.id,
              time: data.publishingTime,
              img: data.image,
              aheader: data.header,
              atext: data.text,
            });
          });
        });
    },
    getImage(){
      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },
    postNewArticle() {
      this.getImage().then((data) => {
        let imageName = 'images/' + store.currentUser + '/' + Date.now() + '.png';

        return storage.ref(imageName).put(data)
      })
      .then((result) => {
        return result.ref.getDownloadURL()
      })
      .then((url) => {
        console.log('Public link', url);

        const articleHeader = this.newArticleHeader;
        const articleText = this.newArticleText;

        return db.collection('articles').add({
          image: url,
          header: articleHeader,
          text: articleText,
          email: store.currentUser,
          publishingTime: Date.now(),
        });
      })
      .then((doc) => {
        console.log('Saved', doc);
        this.imageReference.remove();
        this.newArticleHeader = '';
        this.newArticleText = '';
        this.getArticles();
      })
      .catch((e) =>{
        console.error(e);
      });
    }
  },
  computed: {
    
    filterSearch(){
      let termin = this.store.searchWord;
      return this.articles.filter((article) => article.atext.include(termin) || article.aheader.include(termin)); 
    }
  }
};
</script>

<style scoped>
.form{
    background:rgb(125, 151, 199);
}
</style>
