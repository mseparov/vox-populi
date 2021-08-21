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
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <router-link to="/">Home &nbsp;</router-link>
          </li>
          
          <li class="nav-item">
          <router-link to="/about">About</router-link> 
          </li> 
          
        </ul>
      </div>

    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61)
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
  background-color: #3998cf;
  a {
    font-weight: bold;
    color: #1556b8a4;
    text-decoration: none;

    &.router-link-exact-active {
      color: #1556b8a4;
    }
    
  }

}
</style>
