<template>
 <div class="login">
    <h1>This is a login page</h1>
    <div class="container mt-3">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
 </div>
</template>

<script>
export default()

</script>

<style scoped>
    .login{
  background:rgb(125, 151, 199);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}

</style>