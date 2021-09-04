<template>
  <div class="signup">
    <h1>This is a signup page</h1>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm">
        </div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input 
                type="email" 
                v-model="username"
                class="form-control" 
                id="emailField" 
                aria-describedby="emailHelp" 
                placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input 
                type="password" 
                v-model="password"
                class="form-control" 
                id="passwordField" 
                placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input 
                type="password" 
                v-model="paswordRepeat"
                class="form-control" 
                id="confirmPasswordField" 
                placeholder="Password">
            </div>
            <button type="button" class="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        <div class="col-sm">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
    name:"Signup",
    data(){
        return{
            username: "",
            password: "",
            passwordRepeat: "",
        };
    },
    methods()
};
</script>

<style scoped>

.signup{
  background:rgb(125, 151, 199);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}

</style>