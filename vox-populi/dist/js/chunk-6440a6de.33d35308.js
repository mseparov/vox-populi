(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6440a6de"],{"0fc9":function(e,t,n){},1203:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newsCard"},[n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.postNewArticle.apply(null,arguments)}}},[n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"articleimage"}},[e._v("Upload an image")]),n("br"),n("croppa",{staticClass:"form-control-lg",attrs:{width:150,height:150,placeholder:"Image"},model:{value:e.imageReference,callback:function(t){e.imageReference=t},expression:"imageReference"}})],1),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"newArticleHeader"}},[e._v("Article header")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newArticleHeader,expression:"newArticleHeader"}],attrs:{placeholder:""},domProps:{value:e.newArticleHeader},on:{input:function(t){t.target.composing||(e.newArticleHeader=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"newArticleText"}},[e._v("Write your own article")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newArticleText,expression:"newArticleText"}],attrs:{rows:"6",cols:"100"},domProps:{value:e.newArticleText},on:{input:function(t){t.target.composing||(e.newArticleText=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary mt-4 mb-4",attrs:{type:"button"},on:{click:e.postNewArticle}},[e._v("Post Article")])]),n("div",{staticClass:"form-group"},e._l(e.articles,(function(e){return n("ourArticle",{key:e.id,attrs:{info:e}})})),1)])},r=[],o=(n("159b"),n("d3b7"),n("c0d6")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"commentCard"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column-left"},[n("img",{staticClass:"card-img-left",attrs:{width:"150",height:"150",src:e.info.img}})]),n("div",{staticClass:"column-right"},[e._v(" "+e._s(e.info.aheader)+" "),n("br"),e._v(" "+e._s(e.info.atext)+" "),n("br"),e._v(" "+e._s(e.publishTime)+" ")]),n("form",{staticClass:"form-group",on:{submit:function(t){return t.preventDefault(),e.postComment.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"newComment"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{placeholder:"Comment the article...",id:"commentField"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.postNewComment}},[e._v("Comment")])])]),n("div",{staticClass:"commentList"},e._l(e.comments.filter((function(t){return t.articleId===e.info.id})),(function(t){return n("div",{key:t.id},[e._v(" "+e._s(t.email)+" "+e._s(": ")+" "+e._s(t.acomment)+" ")])})),0)])])},c=[],l=n("c1df"),s=n.n(l),m=n("dc59"),u={name:"ourArticle",props:["info"],data:function(){return{comments:[],store:o["a"],newComment:""}},computed:{publishTime:function(){return s()(this.info.time).fromNow()}},mounted:function(){this.getComments()},methods:{getComments:function(){var e=this;m["a"].collection("Comments").orderBy("publishingTime","desc").limit(10).get().then((function(t){e.comments=[],t.forEach((function(t){console.log(t.id,"   ",t.data());var n=t.data();e.comments.push({id:t.id,ctime:n.publishingTime,acomment:n.comm,articleId:n.articleId,email:n.email})}))}))},postNewComment:function(){var e=this;this.newComment;if(0==this.newComment.length)alert("You must fill in all the fields.");else{var t=this.newComment;m["a"].collection("Comments").add({articleId:this.info.id,comm:t,email:o["a"].currentUser,publishingTime:Date.now()}).then((function(t){console.log("Saved",t),e.newComment="",e.getComments()})).catch((function(e){console.error(e)}))}}}},d=u,f=(n("79e3"),n("2877")),p=Object(f["a"])(d,a,c,!1,null,"5acca31c",null),g=p.exports,h={name:"ourNews",data:function(){return{articles:[],store:o["a"],imageReference:null,newArticleHeader:"",newArticleText:""}},components:{ourArticle:g},mounted:function(){this.getArticles()},methods:{getArticles:function(){var e=this;m["a"].collection("articles").orderBy("publishingTime","desc").limit(20).get().then((function(t){e.articles=[],t.forEach((function(t){console.log(t.id,"   ",t.data());var n=t.data();e.articles.push({id:t.id,time:n.publishingTime,img:n.image,aheader:n.header,atext:n.text})}))}))},getImage:function(){var e=this;return new Promise((function(t,n){e.imageReference.generateBlob((function(e){t(e)}))}))},postNewArticle:function(){var e=this;0==this.newArticleHeader.length||0==this.newArticleText.length?alert("You must fill in all the fields."):this.getImage().then((function(e){var t="images/"+o["a"].currentUser+"/"+Date.now()+".png";return m["c"].ref(t).put(e)})).then((function(e){return e.ref.getDownloadURL()})).then((function(t){console.log("Public link",t);var n=e.newArticleHeader,i=e.newArticleText;return m["a"].collection("articles").add({image:t,header:n,text:i,email:o["a"].currentUser,publishingTime:Date.now()})})).then((function(t){console.log("Saved",t),e.imageReference.remove(),e.newArticleHeader="",e.newArticleText="",e.getArticles()})).catch((function(e){console.error(e)}))}}},v=h,w=(n("21d3"),Object(f["a"])(v,i,r,!1,null,"a3e4f9a0",null));t["default"]=w.exports},"21d3":function(e,t,n){"use strict";n("0fc9")},"553f":function(e,t,n){},"79e3":function(e,t,n){"use strict";n("553f")}}]);
//# sourceMappingURL=chunk-6440a6de.33d35308.js.map