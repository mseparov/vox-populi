<template>

  <div class="color">
      <h3 class="title">Live Chat</h3>
       <div v-for="(message) in messages" :key="message.id" class="message">
      
            <h5 v-html="message.email + ':'"></h5> &ensp;

            <h5 v-html="message.value" class="value"></h5> &ensp;
           
            <h5 class="time">{{sentFromNow(message.time)}}</h5>
         
      </div>
  <form class="chatBox" action="" @submit.prevent="" autocomplete="off">
        <input v-model="inputMessage" class="form-control me-2 words" type="text" id="sendBar" placeholder="Send Message..." aria-label="Send">
        <button @click="pushMessages" class="send_button">Send</button>
      </form>
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
  props: ['message'],
  data: () => {
    return{
        messages: [],
        inputMessage: "",

    }
  },

  mounted() {
    this.getMessages();
    
  },

  created(){
    this.$root.$refs.A = this;
  },

  methods: {

     sentFromNow(data){
      return moment(data).fromNow();
    },


    // send messages to firebase
    pushMessages(){

             if(this.inputMessage !== '')
      {

      // save searchterm in the database
            db.collection("ChatMessages").add({
              value: this.inputMessage,
              email: store.currentUser,
              sent_at: Date.now()
            })
            .then((stored) => {
              console.log('Spremljeno', stored);
               this.inputMessage = "";
               this.getMessages();
            })
            .catch((e) => {
              console.error(e);
            })
      
      }
      else{
          console.error("empty message")
      }

    },

    // get messages from firebase
    getMessages(){
      db.collection("ChatMessages")
        .orderBy("sent_at", "desc")
        .limit(50)
        .get()
        .then((query)=> {

          this.messages = [];

          query.forEach((term)=>{
            const data = term.data();

           //console.log(data.searched_at)
            
            this.messages.push({
              id: term.id,
              time: data.sent_at,
              value: data.value,
              email: data.email
            })
            
          })

         // this.messages.reverse(); if you want messages to appear at the bottom
      })
      .catch((e)=> {
        console.error(e)
      })

    }

  },


  name: 'Chat'
};
</script>



<style Lang="scss" sacoped>

.color{
background-color: rgb(240, 243, 250);
overflow: scroll;
padding: 0;
}

.title{
font-weight: bold;
}

.value{
  font-weight: bold;
  word-break: break-all;
}

.message{
display: flex;
border: 2px rgb(232, 229, 238) solid;
border-radius: 6px;
overflow: hidden;
text-align: center;
align-items: center;
flex-wrap: wrap;

}

 .send_button{
    border-radius: 5px;
    background-color: rgb(211, 230, 241);
    border: 1px rgb(95, 95, 95) solid;
  }

.chatBox{
    display: flex;
 position: fixed;
  width:14.9vw;
  z-index: 99;
  padding: 10px;
   
  background:rgb(241, 233, 238) !important;

  bottom: 0px;
  z-index: 99;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


</style>
