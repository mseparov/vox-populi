<template>
    <div class="commentCard">
      <div class="row">
          <div class= "column-left">
          <img class="card-img-left" width="150" height="150" :src="info.img" />
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
          <div class="commentList">
            <div v-for="comment in comments.filter(f=>f.articleId === info.id)" :key="comment.id">
              {{comment.email}}
              {{': '}}
              {{comment.acomment}}
            </div>
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
    }
  },
  mounted() {
        this.getComments();
    },
  methods: {
    getComments(){
      db.collection('Comments')
      .orderBy('publishingTime', 'desc')
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
            articleId: data.articleId,
            email:data.email
          });
        });
      });
    },
    postNewComment() {
      const articleComm = this.newComment;
        if (this.newComment.length ==0) {
          alert("You must fill in all the fields.")
        } else {
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
        }
    },
  },
};
</script>

<style scoped>
.column-left {
  float: left;
  width: 20%;
}
.column-right {
  width: 80%;
  text-align:justify;
  padding-right: 30px;
}
#commentField{
    width: 87%;
    height: 45px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.comments{
    width: auto;
    height: 45px;
}
.commentCard{
    margin-top: 0px;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
}
.commentList{
  background: rgb(208, 229, 236);
  width: 96%;
  margin-left: 14px;
  text-align:justify;
  overflow: scroll;
}
</style>

