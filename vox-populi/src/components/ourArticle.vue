<template>
    <div class="commentCard">
      <div class="row">
          <div class= "column-left">
          <img class="card-img-left" width="200" height="200" :src="info.img" />
          </div>
          <div class="column-right">
            {{info.aheader}}
            <br>
            {{info.atext}}
            <br>
            {{publishTime}}
          </div>
          <form @submit.prevent="postComment" class="form-group">
            <div class="form-group">
            <label for="newComment"></label>
            <input 
                v-model="newComment"
                placeholder="Comment the article..."
                id="commentField">
            <button type="button" @click="postNewComment" class="btn btn-primary">Comment</button>
            </div>
          </form>
          <div v-for="comment in comments.filter(f=>f.articleId === info.id)" :key="comment.id" >
            {{store.currentUser}}
            {{': '}}
            {{comment.acomment}}
          </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment';
import store from '@/store';
import { firebase, db, storage } from '@/firebase';

export default{
  name: 'ourArticle',
  props: ['info'],
  data() {
    return {
      comments: [],
      store,
      newComment: "",
    };
  },
  computed: {
    publishTime(){
      return moment(this.info.time).fromNow();
    },
    filterComm(){
      let termin = this.info.id;
      return this.comments.filter((comment) => this.comments.articleId.include(termin)); 
    }
  },
  mounted() {
        this.getComments();
    },
  methods: {
    getComments(){
      db.collection('Comments')
      .limit(10)
      .get()
      .then((query) => {
        this.comments = [];
        query.forEach((doc) => {
          console.log(doc.id, '   ', doc.data());
          const data = doc.data();

          this.comments.push({
            id: doc.id,
            ctime: data.publishingTime,
            acomment: data.comm,
            articleId: data.articleId
          });
        });
      });
    },
    postNewComment() {
      const articleComm = this.newComment;

      db.collection('Comments').add({
        articleId: this.info.id,
        comm: articleComm,
        email: store.currentUser,
        publishingTime: Date.now(),
      })
      .then((doc) => {
        console.log('Saved', doc);
        this.newComment = '';
        this.getComments();
      })
      .catch((e) =>{
        console.error(e);
      });
    },
  },
};
</script>

<style scoped>
.column-left {
  float: left;
  width: 25%;
}
.column-right {
  width: 75%;
}
#commentField{
    width: 87%;
    height: 45px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.comments{
    width: 87%;
    height: 45px;
}
.commentCard{
    margin-top: 0px;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
}
</style>

