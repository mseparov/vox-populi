<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
     
      <!-- <div class="container-fluid"> -->
      <div class="navbar-brand" href="http://localhost:8080/">
      <a><img src="@/assets/Vox2.png" id="home_title" alt="" width="60"  class="d-inline-block align-text-centre logo"></a>
      &nbsp; Vox Populi
      </div>
      
          <router-link to="/" id="nav_ele1" class="nav-link">Home</router-link>
          
          <router-link to="/about" id="nav_ele2" class="nav-link">About</router-link> 
          
          
    </nav>
    
    <router-view/>
    
  </div>

</template>

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
    margin-left: 48%;
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
