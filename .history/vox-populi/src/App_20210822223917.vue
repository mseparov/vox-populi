<template>
  

</template>

<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61);
background: url("assets/background.jpg") no-repeat center center fixed;

height: 98vh;//100% view height
width: 99.3vw;// 100% view width
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

  .d-flex{
  margin-left: 9.5%;
  width: 25vw;
  }

  a.navbar-brand{
    font-size: 2rem;
    color: #dfe6eb;
  }

}
</style>
