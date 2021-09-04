<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
     
      <!-- <div class="container-fluid"> -->
      <a class="navbar-brand" href="http://localhost:8080/">
      <img src="@/assets/Vox2.png" id="home_title" alt="" width="60"  class="d-inline-block align-text-centre logo">
      &nbsp; Vox Populi
      </a>
      
          <router-link to="/" id="nav_ele1" class="nav-link">Home</router-link>
          
          <router-link to="/about" id="nav_ele2" class="nav-link">About</router-link> 

          <router-link to="/login" v-if="!store.currentUser" id="nav_ele3" class="nav-link">Login</router-link> 

          <router-link to="/signup" v-if="!store.currentUser" id="nav_ele4" class="nav-link">Sign up</router-link> 
          
          <a href="#" v-if="!store.currentUser" @click="logout()" id="nav_ele5" class="nav-link">Logout</a> 

    </nav>
    
    <router-view/>
    
  </div>

</template>


<script>
import store from '@/store';
import { firebase } from '@/firebase';

firebase.auth().onAuthStateChanged((user) => {
if (user) {
  // User is signed in.
  console.log(' Logged in ', user.email);
  store.currentUser = user.email;
} 
else {
  // User is not signed in.
  console.log('Logged out');
  store.currentUser = null;
if (router.name !== 'login') {
  router.push({ name: 'login' });
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


    }
  }

}

</script>



<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61);
background: url("assets/background.jpg") no-repeat center center fixed;

height: 100vh; //100% view height
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
  padding: 20px;
  width: 100vw;
  background-color: #3998cf;
  background: url("assets/background.jpg") no-repeat center center fixed;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }

  #nav_ele1{
    margin-left: 37.3%;
  }

  .logo{
    border-radius: 5px;
    margin-left: 143.5%;
  }

  a.navbar-brand{
    font-size: 2rem;
    color: #dfe6eb;
  }

}
</style>
