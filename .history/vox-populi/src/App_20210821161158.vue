<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
     
      <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:8080/">
      <img src="@/assets/Vox2.png" alt="" width="44"  class="d-inline-block align-text-centre">
      &nbsp; Vox Populi
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
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

    &.router-link-exact-active {
      color: #1556b8a4;
    }
  }
}
</style>
