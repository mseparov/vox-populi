<template>
    <div class="card">
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
        <div class = "form-group">
            <div v-for="comment in comments" :key="comment.id" >
        <div class = "form-group">
            {{store.currentUser}}
            {{': '}}
            {{comment.acomment}}
            {{publishTime(comment.time)}}
        </div>
            </div>
        </div>
    </div> 
</template>

<script>
import store from '@/store';
import { firebase, db, storage } from '@/firebase';
import moment from 'moment';

export default{
    name: 'Comments',
    data() {
        return {
            comments: [],
            store,
            newComment: "",
        };
    },
    mounted() {
        this.getComments();
    },
    methods: {
        getComments(){
            db.collection('Comments')
            .limit(3)
            .get()
            .then((query) => {
                this.comments = [];
                query.forEach((doc) => {
                    console.log(doc.id, '   ', doc.data());
                    const data = doc.data();

                    this.comments.push({
                        id: doc.id,
                        time: data.publishingTime,
                        acomment: data.comm,
                    });
                });
            });
        },
    
        postNewComment() {
            const articleComm = this.newComment;

            db.collection('Comments').add({
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
        
        publishTime(dataTime){
            return moment(dataTime).fromNow();
        },
    },
};
</script>

<style scoped>
#commentField{
    width: 87%;
    height: 45px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.comments{
    width: 87%;
    height: 45px;
}
</style>
