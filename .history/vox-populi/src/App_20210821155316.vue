<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light">
     
      <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:8080/">
      <img src="@/assets/Vox2.png" alt="" width="44"  class="d-inline-block align-text-centre">
      &nbsp; Vox Populi
      </a>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      </div>

    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #1a6b99;
  a {
    font-weight: bold;
    color: #06f7eba4;

    &.router-link-exact-active {
      color: #06f7ebc4;
    }
  }
}
</style>
