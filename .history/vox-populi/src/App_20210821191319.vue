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
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>

      </div>

    </nav>
    
    <router-view/>
    
  </div>

</template>

<style lang="scss">

body{
background-color: rgba(157, 207, 219, 0.61);
background-image: url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fvmcdn.ca%2Ff%2Ffiles%2Fshared%2Fsite_images%2Fworld_news_2017.jpg&imgrefurl=https%3A%2F%2Fwww.barrietoday.com%2Fworld-news&tbnid=f1eKbvxqkPOYoM&vet=12ahUKEwi_iMKXzsLyAhW85LsIHVzCBfoQMygDegUIARDjAQ..i&docid=Hutq4T_xP7R1TM&w=2000&h=1333&q=news%20world&client=firefox-b-d&ved=2ahUKEwi_iMKXzsLyAhW85LsIHVzCBfoQMygDegUIARDjAQ);


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
  a.navbar-brand{
    font-size: 2rem;
    color: #39e0fd;
  }

}
</style>
