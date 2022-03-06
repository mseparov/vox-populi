<template>
  <div class="signup">
    <h1>Sign up</h1>
    <h4>Please fill in this form to create an account :)</h4>
    <div class="colorSignup">
      <div class="row mt-4">
        <div class="col-sm">
        </div>
        <div class="col-sm">
          <form>
          <div class="form-group">
              <label for="firstnameField">First name</label>
              <input 
                type="firstname" 
                v-model="firstname"
                class="form-control" 
                id="firstnameField" 
                placeholder="e.g. Jane">
                </div>
          <div class="form-group">
              <label for="lastnameField">Last name</label>
              <input 
                type="lastname" 
                v-model="lastname"
                class="form-control" 
                id="lastnameField" 
                placeholder="e.g. Doe ">
                </div>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input 
                type="email" 
                v-model="username"
                class="form-control" 
                id="emailField" 
                aria-describedby="emailHelp" 
                placeholder="name@example.com">
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
                v-model="passwordRepeat"
                class="form-control" 
                id="confirmPasswordField" 
                placeholder="Password">
            </div>
            <button type="button" @click ="signup" class="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        <div class="col-sm">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { firebase } from '@/firebase';
import router from '@/router';

export default{
    name:"Signup",
    data(){
        return{
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            passwordRepeat: "",
        };
    },
    methods: {

        //singup function
        signup(){

          if(this.firstname.length !=0 || this.lastname.length !=0 || this.username.length !=0) {
            
            if(this.password == this.passwordRepeat) {
                if(this.password.length >= 6){
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
            .then(

                function(){
                    alert("User registered");
                    router.replace({ name: 'Home' });

                })
            .catch(

                function(error){
                    console.error("Failed to register", error);
                    
                });
                }

                else{
                    alert("Password must be over 6 characters")
                }
            }

            else{
            alert("Password not matching")
            }
            
          } else {
            alert("You must fill in all the fields.")}
 
        },
        //signup function

      

    },
};
</script>

<style scoped>

.signup{
  background:rgb(174, 193, 228);
  margin-top: 135px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}


.colorSignup{
  background-color: rgb(209, 220, 243);
}

</style>