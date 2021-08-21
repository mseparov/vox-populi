<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="https://www.youtube.com/">
      <img src="@/assets/Vox2.png" alt="" width="40" height="54" class="d-inline-block align-text-top">
      <span><p>Bootstrap</p><>
      </a>
      </div>
      </nav>

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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

  a {
    font-weight: bold;
    color: #1f4b77;

    &.router-link-exact-active {
      color: #16925a;
    }
  }
}
</style>
