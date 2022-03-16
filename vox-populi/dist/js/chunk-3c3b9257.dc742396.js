(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c3b9257"],{"34c3":function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"signup"},[e("h1",[s._v("Sign up")]),e("h4",[s._v("Please fill in this form to create an account :)")]),e("div",{staticClass:"colorSignup"},[e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-sm"}),e("div",{staticClass:"col-sm"},[e("form",{staticClass:"mb-5",on:{submit:function(a){return a.preventDefault(),s.signup.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"firstnameField"}},[s._v("First name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.firstname,expression:"firstname"}],staticClass:"form-control",attrs:{type:"firstname",id:"firstnameField",placeholder:"e.g. Jane"},domProps:{value:s.firstname},on:{input:function(a){a.target.composing||(s.firstname=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"lastnameField"}},[s._v("Last name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.lastname,expression:"lastname"}],staticClass:"form-control",attrs:{type:"lastname",id:"lastnameField",placeholder:"e.g. Doe "},domProps:{value:s.lastname},on:{input:function(a){a.target.composing||(s.lastname=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"emailField"}},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],staticClass:"form-control",attrs:{type:"email",id:"emailField","aria-describedby":"emailHelp",placeholder:"name@example.com"},domProps:{value:s.username},on:{input:function(a){a.target.composing||(s.username=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"passwordField"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"passwordField",placeholder:"Password"},domProps:{value:s.password},on:{input:function(a){a.target.composing||(s.password=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"confirmPasswordField"}},[s._v("Confirm Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordRepeat,expression:"passwordRepeat"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPasswordField",placeholder:"Password"},domProps:{value:s.passwordRepeat},on:{input:function(a){a.target.composing||(s.passwordRepeat=a.target.value)}}})]),e("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:s.signup}},[s._v("Submit")])])]),e("div",{staticClass:"col-sm"})])])])},r=[],o=(e("ac1f"),e("5319"),e("dc59")),i=e("a18c"),n={name:"Signup",data:function(){return{firstname:"",lastname:"",username:"",password:"",passwordRepeat:""}},methods:{signup:function(){var s=this.firstname,a=this.lastname,e=this.username,t=this.password;o["a"].collection("users").add({firstn:s,lastn:a,usern:e,passw:t}).then((function(s){console.log("Spremljeno",s)})).catch((function(s){console.error(s)})),0!=this.firstname.length||0!=this.lastname.length||0!=this.username.length?this.password==this.passwordRepeat?this.password.length>=6?o["b"].auth().createUserWithEmailAndPassword(this.username,this.password).then((function(){alert("User registered"),i["a"].replace({name:"Home"})})).catch((function(s){console.error("Failed to register",s)})):alert("Password must be over 6 characters"):alert("Password not matching"):alert("You must fill in all the fields.")}}},l=n,m=(e("e284"),e("2877")),d=Object(m["a"])(l,t,r,!1,null,"664ae07a",null);a["default"]=d.exports},d5a8:function(s,a,e){},e284:function(s,a,e){"use strict";e("d5a8")}}]);
//# sourceMappingURL=chunk-3c3b9257.dc742396.js.map