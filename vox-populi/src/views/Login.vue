<template>
 <div class="login">
    <h1>Welcome back!</h1>
        <div class="colorLogin mt-4">
        <div class="row">
        <div class="col-sm"></div>
            <div class="col-sm">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            v-model="username"
                            class="form-control" 
                            id="exampleInputEmail1" 
                            placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                            type="password"
                            v-model="password"
                            class="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" />
                    </div>
                    <button type="button" @click="login" class="btn btn-primary mt-4">Login</button>
                </form>
            </div>
        <div class="col-sm"></div>
        </div>
    </div>
 </div>
</template>

<script>
import { firebase } from '@/firebase';

export default {
    name: "login",

    data() {
        return{
            username: '',
            password: '',
        }
    },

    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.username, this.password)

            .then(
                (result) => {
                    console.log("Succesfully logged in", result)
                }
            )
            .catch( 
                function(error) {
                    console.error("Failed to login", error)
                    alert("Sorry, your email or password is incorrect. Please try again.")
                }
            )

        }
    }
}
</script>

<style scoped>
    .login{
  background:rgb(174, 193, 228);
  width: 50%;
  margin-top: 135px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}

.colorLogin{
  background-color: rgb(209, 220, 243);
}

</style>