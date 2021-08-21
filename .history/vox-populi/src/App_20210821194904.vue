<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
     
      <!-- <div class="container-fluid"> -->
      <a class="navbar-brand" href="http://localhost:8080/">
      <img src="@/assets/Vox2.png" id="home_title" alt="" width="44"  class="d-inline-block align-text-centre">
      &nbsp; Vox Populi
      </a>

      <button 
      class="navbar-toggler"
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarToggler" 
      aria-controls="navbarToggler" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <router-link to="/" class="nav-link">Home &nbsp;</router-link>
          </li>
          
          <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link> 
          </li> 
          
        </ul>

          <form class="d-flex">
        <input class="form-control me-50" type="search" placeholder="Search" aria-label="Search">
      </form>

      </div>

    </nav>
    
    <router-view/>
    
  </div>

</template>

<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61);
background: url("assets/background.jpg") no-repeat center center fixed;



height: 98vh;//100% view height
width: 99.4vw;// 100% view width
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
  width:100vw;
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
  a.navbar-brand{
    font-size: 2rem;
    color: #b0d1d6;
  }

}
</style>
