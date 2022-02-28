<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="http://localhost:8080/">
        <img src="@/assets/Vox2.png" id="logo" alt="" class="d-inline-block align-text-centre logo">&nbsp;Vox Populi
      </a>
 
          <a href="/" v-if="store.currentUser" id="nav_ele" class="nav-link">&emsp;Home</a>

          <router-link to="/about" v-if="store.currentUser" class="nav-link">About</router-link>
          <router-link to="/about" v-else id="nav_ele"  span style="padding-left: 100px"  class="nav-link">About</router-link>

          <router-link to="/ourNews" v-if="store.currentUser" class="nav-link">ourNews</router-link>

          <router-link to="/login" v-if="!store.currentUser" class="nav-link">Login</router-link> 

          <router-link to="/signup" v-if="!store.currentUser" class="nav-link">Sign up</router-link> 

          <a href="#" v-if="store.currentUser" @click.prevent="logout()" class="nav-link">Logout</a> 
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

    if (!currentRoute.meta.needsUser) {
      router.push({ name: 'Home' });
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
          this.$router.replace({name: "Login"})
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
  #nav_ele{
    margin-left: 37%;
  }
  .logo{
    border-radius: 5px;
    margin-left: 165%;
    width: 60px;
  }
  a.navbar-brand{
    font-size: 2rem;
    color: #dfe6eb;
  }
}
</style>
