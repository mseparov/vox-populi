(function(e){function t(t){for(var n,r,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={app:0},a={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0505e170":"752981bb","chunk-3c3b9257":"dc742396","chunk-6440a6de":"33d35308","chunk-f95f7602":"58709cf7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s={"chunk-0505e170":1,"chunk-3c3b9257":1,"chunk-6440a6de":1,"chunk-f95f7602":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-0505e170":"12fa6185","chunk-3c3b9257":"b559d554","chunk-6440a6de":"1881b056","chunk-f95f7602":"0fc7dfb1"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],f.parentNode.removeChild(f),s(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,s){n=a[e]=[t,s]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,s[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light",attrs:{id:"nav"}},[n("button",{staticClass:"navbar-brand",on:{click:function(t){return e.reload()}}},[n("img",{staticClass:"d-inline-block align-text-centre logo",attrs:{src:s("6dcd"),id:"home_title",alt:"",width:"60"}}),e._v("   Vox Populi ")]),e.store.currentUser?n("button",{staticClass:"nav-link",attrs:{id:"nav_ele1"},on:{click:function(t){return e.reload()}}},[e._v("Home")]):e._e(),e.store.currentUser?n("router-link",{staticClass:"nav-link",attrs:{to:"/about",id:"nav_ele2"}},[e._v("About")]):n("router-link",{staticClass:"nav-link",attrs:{to:"/about",id:"nav_ele1"}},[e._v("About")]),e.store.currentUser?n("router-link",{staticClass:"nav-link",attrs:{to:"/ourNews"}},[e._v("ourNews")]):e._e(),e.store.currentUser?e._e():n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")]),e.store.currentUser?e._e():n("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[e._v("Sign up")]),e.store.currentUser?n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout()}}},[e._v("Logout")]):e._e()],1),n("router-view")],1)},a=[],c=(s("ac1f"),s("5319"),s("c0d6")),o=s("dc59"),i=s("a18c");o["b"].auth().onAuthStateChanged((function(e){var t=i["a"].currentRoute;e?(console.log(" Logged in ",e.email),c["a"].currentUser=e.email,t.meta.needsUser||i["a"].push({name:"Home"})):(console.log("Logged out"),c["a"].currentUser=null,t.meta.needsUser&&i["a"].push({name:"Login"}))}));var u={name:"app",data:function(){return{store:c["a"]}},methods:{logout:function(){var e=this;o["b"].auth().signOut().then((function(){e.$router.replace({name:"Login"})}))},reload:function(){window.location.reload()}}},l=u,d=(s("5c0b"),s("2877")),f=Object(d["a"])(l,r,a,!1,null,null,null),h=f.exports,m=s("2896"),p=s.n(m);s("40d9");n["a"].config.productionTip=!1,n["a"].use(p.a),new n["a"]({router:i["a"],render:function(e){return e(h)}}).$mount("#app"),window.Event=new n["a"]},"57d2":function(e,t,s){"use strict";s("7292")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"5ced":function(e,t,s){},"66e0":function(e,t,s){},"6dcd":function(e,t,s){e.exports=s.p+"img/Vox2.81c3cd53.png"},7192:function(e,t,s){"use strict";s("d4bb")},7292:function(e,t,s){},"9c0c":function(e,t,s){},a18c:function(e,t,s){"use strict";s("d3b7"),s("3ca3"),s("ddb0"),s("b0c0");var n=s("2b0e"),r=s("8c4f"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"articles"},[s("NewsArticle"),s("SearchTerms",{staticClass:"searchTerms"}),s("SearchTermsFrequency",{staticClass:"searchTermsFrequency"}),s("Chat",{staticClass:"chat"})],1)},c=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("form",{staticClass:"d-flex formContainer",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.fetchSearchNews.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchword,expression:"searchword"}],staticClass:"form-control me-2 words",attrs:{type:"text",id:"searchBar",placeholder:"Search the web for news...","aria-label":"Search"},domProps:{value:e.searchword},on:{input:function(t){t.target.composing||(e.searchword=t.target.value)}}}),e.isBusy?e._e():s("button",{staticClass:"search_button",on:{click:e.fetchSearchNews}},[e._v("Search")])]),s("div",{staticClass:"result-list"},e._l(e.articles,(function(t,n){return s("article",{key:n,on:{click:function(s){return e.navTo(t.url)}}},[s("header",[t.urlToImage?s("img",{staticClass:"article-img",attrs:{src:t.urlToImage,alt:""}}):s("i",{staticClass:"fas fa-image"})]),s("div",{staticClass:"title_desc"},[s("h5",{staticClass:"inner_html",domProps:{innerHTML:e._s(t.title)}}),s("section",{domProps:{innerHTML:e._s(t.description)}})])])})),0),s("div",{ref:"infinitescrolltrigger",attrs:{id:"scroll-trigger"}},[e.showloader?s("i",{staticClass:"fas fa-spinner fa-spin"}):e._e()])])},i=[],u=(s("159b"),s("a15b"),s("d81d"),s("a630"),s("caad"),s("2532"),s("ac1f"),s("5319"),s("dc59")),l=s("c0d6"),d=(new n["a"],{name:"NewsArticle",props:["25ddb462ccf04264aa2c37968dd5a1b5"],data:function(){return{apiUrl:"",apiKey:"25ddb462ccf04264aa2c37968dd5a1b5",isBusy:!1,showloader:!1,currentPage:1,totalResults:0,maxPerPage:20,searchword:"",articles:[],country:"us",runtimeTranscription_:"",transcription_:[],lang_:"en-US"}},computed:{pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)}},methods:{navTo:function(e){window.open(e)},resetData:function(){this.currentPage=1,this.articles=[]},fetchSearchNews:function(){var e=this;""!==this.searchword?(this.apiUrl="https://newsapi.org/v2/everything?q="+this.searchword+"&pageSize="+this.maxPerPage+"&apiKey="+this.apiKey,this.isBusy=!0,u["a"].collection("searchTerms").add({searchterm:this.searchword,email:l["a"].currentUser,searched_at:Date.now()}).then((function(t){console.log("Spremljeno",t),e.$root.$refs.A.getPosts()})).catch((function(e){console.error(e)})),this.resetData(),this.fetchData()):this.fetchTopNews()},fetchTopNews:function(){this.apiUrl="https://newsapi.org/v2/top-headlines?country="+this.country+"&pageSize="+this.maxPerPage+"&apiKey="+this.apiKey,this.isBusy=!0,this.searchword="",this.resetData(),this.fetchData()},fetchData:function(){var e=this,t=new Request(this.apiUrl+"&page="+this.currentPage);fetch(t).then((function(e){return e.json()})).then((function(t){e.totalResults=t.totalResults,t.articles.forEach((function(t){e.articles.push(t)})),e.isBusy=!1,e.showloaded=!1})).catch((function(e){console.log(e)}))},scrollTrigger:function(){var e=this,t=new IntersectionObserver((function(t){t.forEach((function(t){t.intersectionRatio>0&&e.currentPage<e.pageCount&&(e.showloader=!0,e.currentPage+=1,e.fetchData())}))}));t.observe(this.$refs.infinitescrolltrigger)}},created:function(){var e=this;function t(){var e=this;u["b"].auth().signOut().then((function(){e.$router.push({name:"Login"})}))}this.fetchTopNews(),window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var s=new window.SpeechRecognition;s.lang=this.lang_,s.interimResults=!1,s.addEventListener("result",(function(s){var n=Array.from(s.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");if(e.runtimeTranscription_=n,n.includes("repeat after me")){var r=n;r=r.replace("repeat after me",""),responsiveVoice.speak(r)}if(n.includes("search")){r=n;r=r.replace("search",""),""==r?e.fetchTopNews():(e.apiUrl="https://newsapi.org/v2/everything?q="+r+"&pageSize="+e.maxPerPage+"&apiKey="+e.apiKey,u["a"].collection("searchTerms").add({searchterm:r,email:l["a"].currentUser,searched_at:Date.now()}).then((function(t){console.log("Spremljeno",t),e.$root.$refs.A.getPosts()})).catch((function(e){console.error(e)})),e.isBusy=!0,e.resetData(),e.fetchData())}if(n.includes("open")){r=n;r=r.replace("open ",""),"open"==r?console.log("you only said 'open'"):window.open("https://www."+r+".com")}n.includes("home")&&window.location.reload(),n.includes("about")&&H.push({name:"About"}),n.includes("down")&&window.scrollBy(0,550),n.includes("up")&&window.scrollBy(0,-550),n.includes("reload")&&location.reload(),n.includes("logout")&&t(),console.log(n)})),s.addEventListener("end",s.start),s.start()},mounted:function(){this.scrollTrigger()}}),f=d,h=(s("7192"),s("2877")),m=Object(h["a"])(f,o,i,!1,null,null,null),p=m.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchTermContainer"},[s("h3",{staticClass:"title"},[e._v("Recently Searched Terms")]),e._l(e.searchTerms,(function(t){return s("div",{key:t.id,staticClass:"searchterm"},[s("h5",{staticClass:"value",staticStyle:{color:"#0F4387"},domProps:{innerHTML:e._s(t.value)}}),e._v("   "),s("h5",[e._v("was searched by:")]),e._v("   "),s("h5",{domProps:{innerHTML:e._s(t.email)}}),e._v("   "),s("h5",[e._v(e._s(e.searchedFromNow(t.time)))])])}))],2)},v=[],g=s("c1df"),j=s.n(g),w={props:["searchTerm"],data:function(){return{searchTerms:[]}},mounted:function(){this.getPosts(),this.$root.$refs.A=this},created:function(){this.$root.$refs.A=this},methods:{searchedFromNow:function(e){return j()(e).fromNow()},getPosts:function(){var e=this;u["a"].collection("searchTerms").orderBy("searched_at","desc").limit(25).get().then((function(t){e.searchTerms=[],t.forEach((function(t){var s=t.data();e.searchTerms.push({id:t.id,time:s.searched_at,value:s.searchterm,email:s.email})}))})).catch((function(e){console.error(e)}))}},name:"SearchTerms"},y=w,_=(s("bed4"),Object(h["a"])(y,b,v,!1,null,null,null)),k=_.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchTermFrequencyContainer"},[s("h3",{staticClass:"title"},[e._v("Most Searched Terms")]),e._l(e.searchTermCount,(function(t){return s("div",{key:t.id,staticClass:"searchterm"},[s("h5",{staticClass:"value",staticStyle:{color:"#0F4387"},domProps:{innerHTML:e._s(t.key)}}),e._v("   "),s("h5",[e._v("was searched: ")]),e._v("   "),s("h5",{domProps:{innerHTML:e._s(t.value)}}),e._v("   "),s("h5",[e._v("times.")]),e._v("   ")])}))],2)},T=[],S=(s("4e82"),{props:["searchTerm"],data:function(){return{searchTerms:[],searchTermCount:[]}},mounted:function(){this.getSearchFrequency(),this.$root.$refs.B=this},created:function(){this.$root.$refs.B=this},methods:{getSearchFrequency:function(){var e=this;u["a"].collection("searchTerms").orderBy("searched_at","desc").get().then((function(t){e.searchTerms=[],t.forEach((function(t){var s=t.data();e.searchTerms.push(s.searchterm)}));for(var s=e.searchTerms.length,n=0;n<s;n++)e.searchTermCount.push({key:e.searchTerms[n],value:0});e.searchTerms.forEach((function(t){e.searchTermCount.forEach((function(e){t==e.key&&(e.value+=1)}))}));var r=e.searchTermCount.reduce((function(e,t){return e.some((function(e){return e.key===t.key&&e.value===t.value}))||e.push(t),e}),[]);e.searchTermCount=r,e.searchTermCount=e.searchTermCount.sort((function(e,t){return e.value<t.value?1:-1}))})).catch((function(e){console.error(e)}))}},name:"SearchTermsFrequency"}),P=S,x=(s("eb23"),Object(h["a"])(P,C,T,!1,null,null,null)),U=x.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"color"},[s("h3",{staticClass:"title"},[e._v("Discussion")]),e._l(e.messages,(function(t){return s("div",{key:t.id,staticClass:"message"},[t.email==e.store.currentUser?s("h5",{staticStyle:{color:"rgb(8, 120, 0)"},domProps:{innerHTML:e._s(t.email+":")}}):e._e(),t.email!=e.store.currentUser?s("h5",{domProps:{innerHTML:e._s(t.email+":")}}):e._e(),e._v("   "),s("h5",{staticClass:"value",domProps:{innerHTML:e._s(t.value)}}),e._v("   "),s("h5",{staticClass:"time"},[e._v(e._s(e.sentFromNow(t.time)))])])})),s("form",{staticClass:"chatBox",attrs:{action:"",autocomplete:"off"},on:{submit:function(e){e.preventDefault()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputMessage,expression:"inputMessage"}],staticClass:"form-control me-2 words",attrs:{type:"text",id:"sendBar",placeholder:"Send Message...","aria-label":"Send"},domProps:{value:e.inputMessage},on:{input:function(t){t.target.composing||(e.inputMessage=t.target.value)}}}),s("button",{staticClass:"send_button",on:{click:e.pushMessages}},[e._v("Send")])])],2)},z=[],E={props:["message"],data:function(){return{messages:[],inputMessage:"",store:l["a"]}},mounted:function(){this.getMessages()},created:function(){this.$root.$refs.A=this},methods:{sentFromNow:function(e){return j()(e).fromNow()},pushMessages:function(){var e=this;""!==this.inputMessage?u["a"].collection("ChatMessages").add({value:this.inputMessage,email:l["a"].currentUser,sent_at:Date.now()}).then((function(t){console.log("Spremljeno",t),e.inputMessage="",e.getMessages()})).catch((function(e){console.error(e)})):console.error("empty message")},getMessages:function(){var e=this;u["a"].collection("ChatMessages").orderBy("sent_at","desc").limit(50).get().then((function(t){e.messages=[],t.forEach((function(t){var s=t.data();e.messages.push({id:t.id,time:s.sent_at,value:s.value,email:s.email})}))})).catch((function(e){console.error(e)}))}},name:"Chat"},N=E,L=(s("57d2"),Object(h["a"])(N,M,z,!1,null,null,null)),O=L.exports,$={name:"home",components:{NewsArticle:p,SearchTerms:k,SearchTermsFrequency:U,Chat:O}},A=$,D=(s("cccb"),Object(h["a"])(A,a,c,!1,null,null,null)),B=D.exports;n["a"].use(r["a"]);var q=[{path:"/home",name:"Home",component:B,meta:{needsUser:!0}},{path:"/ourNews",name:"ourNews",component:function(){return s.e("chunk-6440a6de").then(s.bind(null,"1203"))},meta:{needsUser:!0}},{path:"/about",name:"About",component:function(){return s.e("chunk-f95f7602").then(s.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return s.e("chunk-0505e170").then(s.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return s.e("chunk-3c3b9257").then(s.bind(null,"34c3"))}}],F=new r["a"]({mode:"history",base:"/",routes:q});F.beforeEach((function(e,t,s){console.log("Stara ruta",t.name," -> ",e.name,"Korisnik",l["a"].currentUser);var n=null===l["a"].currentUser;n&&e.meta.needsUser?s("login"):s(),s()})),F.beforeEach((function(e,t,s){console.log("Stara ruta",t.name,", a nova ruta",e.name,"korisnik",l["a"].currentUser);var n=null===l["a"].currentUser;n&&e.meta.needsUser?s("Login"):s()}));var H=t["a"]=F},bed4:function(e,t,s){"use strict";s("66e0")},c0d6:function(e,t,s){"use strict";t["a"]={searchword:"",currentUser:null}},cccb:function(e,t,s){"use strict";s("5ced")},d4bb:function(e,t,s){},dc59:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"c",(function(){return c}));var n=s("260b");s.d(t,"b",(function(){return n["a"]}));s("ea7b"),s("e71f"),s("588e");var r={apiKey:"AIzaSyD8vU_920ccpG23iqy6oP_OGk8daUbb1bA",authDomain:"vox-populi-5998e.firebaseapp.com",projectId:"vox-populi-5998e",storageBucket:"vox-populi-5998e.appspot.com",messagingSenderId:"886971705892",appId:"1:886971705892:web:2e6c48c0b73bdd31ab46b1"};n["a"].initializeApp(r);var a=n["a"].firestore(),c=n["a"].storage()},eb23:function(e,t,s){"use strict";s("f0a6")},f0a6:function(e,t,s){}});
//# sourceMappingURL=app.3d90464b.js.map