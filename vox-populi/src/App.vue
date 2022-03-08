<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">

      <!-- <div class="container-fluid"> -->
      <button @click="reload()" class="navbar-brand">
      <img src="@/assets/Vox2.png" id="home_title" alt="" width="60"  class="d-inline-block align-text-centre logo">
      &nbsp; Vox Populi
      </button>

          <button @click="reload()" v-if="store.currentUser" id="nav_ele1" class="nav-link">Home</button>

          <router-link to="/about" v-if="store.currentUser" id="nav_ele2" class="nav-link">About</router-link>
          <router-link to="/about" v-else id="nav_ele1" class="nav-link">About</router-link>

          <router-link to="/login" v-if="!store.currentUser" id="nav_ele3" class="nav-link">Login</router-link> 

          <router-link to="/signup" v-if="!store.currentUser" id="nav_ele4" class="nav-link">Sign up</router-link> 

          <a href="#" v-if="store.currentUser" @click.prevent="logout()" id="nav_ele5" class="nav-link">Logout</a> 

    </nav>

    <router-view/>

  </div>

</template>


<script>
import store from '@/store';
import { firebase } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
const currentRoute = router.currentRoute;

if (user) {
  // User is signed in.
  console.log(' Logged in ', user.email);
  store.currentUser = user.email;

  if(!currentRoute.meta.needsUser) {
    router.push({ name: "Home"});
  }
} 
else {
  // User is not signed in.
  console.log('Logged out');
  store.currentUser = null;

if (currentRoute.meta.needsUser) {
  router.push({ name: 'Login' });
}
}
});


export default{
  name: "app",

  data()  {
    return {

      store,

    };
  },

  methods: {
    logout() {
        firebase.auth().signOut().then(() => {

          this.$router.push({name: "Login"})

        })


    },
    reload(){
      window.location.reload();
    }
  }

}

</script>



<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61);
background: url("assets/background.jpg") no-repeat center center fixed;

 //100% view height
width:  99.3vw; //100% view width
overflow-x:hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 20px;
  width: 100vw;
  background-color: rgb(240, 243, 250);
  border: 2px rgb(182, 174, 211) solid;
  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    font-size: 1.3rem;
    border-radius: 8px;
    &.router-link-exact-active {
      background-color: #bbc9d8;
    }
    &:hover{
     background-color: #bbc9d8;
  }
  }


  #nav_ele1{
    margin-left: 28.3%;
    border-radius: 8px;
    background: transparent;
    border: 0;
    color: #000000;
    font-size: 1.3rem;
    font-weight: bold;
  }
  #nav_ele1:hover{
    background-color: #bbc9d8;
  }

  .logo{
    border-radius: 5px;
    
  }

  .navbar-brand{
    font-size: 2rem;
    color: #000000;
    margin-left: 24.2%;
    background-color: rgb(240, 243, 250);
    border: 0;
  }

}
</style>
