(function(t){function e(e){for(var a,u,r=e[0],s=e[1],l=e[2],m=0,p=[];m<r.length;m++)u=r[m],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},o=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/mitsoq.github.io/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2efb":function(t,e,n){},"365c":function(t,e,n){var a=n("bc3a"),i=function(){return a.get("https://randomuser.me/api/?results=10")},o=function(){return a.get("https://random-data-api.com/api/address/random_address")};t.exports={fetchUserFromAPI:i,fetchAddressAPI:o}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("scroll-container")],1)},u=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parent-element"},[n("vuescroll",{attrs:{ops:t.ops}},[n("div",{staticClass:"content child-element"},[n("h2",{staticClass:"title"},[t._v("The standard Lorem Ipsum passage, used since the 1500s")]),n("p",[t._v('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ')]),n("p",[t._v(' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" ')]),n("p",[t._v('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ')]),n("p",[t._v(' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" ')])])])],1)},s=[],l=n("77a0"),c=n.n(l),m={name:"vueContainer",title:"Scroll container",components:{vuescroll:c.a},data:function(){return{ops:{vuescroll:{mode:"native",sizeStrategy:"percent",detectResize:!0,locking:!0},scrollPanel:{initialScrollY:!1,initialScrollX:!0,scrollingX:!0,scrollingY:!1},rail:{background:"#9a9a9a",opacity:1,size:"6px",specifyBorderRadius:"0px",keepShow:!0},bar:{onlyShowBarOnScroll:!1,keepShow:!0,background:"#111111",opacity:1,hoverStyle:!1,size:"6px"}}}}},p=m,d=(n("d3fe"),n("2877")),f=Object(d["a"])(p,r,s,!1,null,null,null),v=f.exports,h={name:"Home",props:{selectFacet:{type:Function,required:!1,default:function(){}}},data:function(){return{innerContent:!0}},components:{scrollContainer:v},computed:{innerContentClass:function(){return this.innerContent}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},g=h,b=(n("cccb"),Object(d["a"])(g,o,u,!1,null,null,null)),_=b.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[[n("intro",{attrs:{msg:"About us"}})]],2)},x=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("h1",{staticClass:"heading heading--primary"},[t._v(t._s(t.msg))]),t._m(0)])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"para"},[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{staticClass:"cta-text",attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])}],C={name:"Intro",props:{msg:String}},E=C,w=(n("a176"),Object(d["a"])(E,y,S,!1,null,"45004da4",null)),O=w.exports,j={name:"About",prop:[{selectedValue:Boolean},{selectedValue:String}],components:{Intro:O},data:function(){return{name:"Define page data here"}}},A=j,k=Object(d["a"])(A,q,x,!1,null,null,null),P=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"login"},[n("h1",[t._v("Login")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.loginSubmission.apply(null,arguments)}}},[n("fieldset",[n("label",{staticClass:"form-label",attrs:{for:"full_name","aria-labelledby":"First name"}},[t._v(" Full name: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.full_name,expression:"full_name"}],staticClass:"form-control",attrs:{id:"full_name",type:"text",name:"full_name"},domProps:{value:t.full_name},on:{input:function(e){e.target.composing||(t.full_name=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},U=[],$=n("bc3a"),F=n.n($),R={name:"Login",data:function(){return{full_name:""}},methods:{loginSubmission:function(){F.a.post("http://localhost:3000/logins",{name:this.full_name},{headers:{"content-type":"application/json"}}).then((function(t){console.log("AXIOS",t.body)})).catch((function(t){console.log("ERROR",t)}))}}},L=R,D=Object(d["a"])(L,T,U,!1,null,null,null),M=D.exports;a["default"].use(i["a"]);var I=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:P},{path:"/login",name:"Login",component:M}],z=new i["a"]({routes:I}),N=n("2f62"),B=n("365c"),H=n.n(B);function X(){return new N["a"].Store({state:{users:{}},mutations:{UPDATE_USER_STATE:function(t,e){a["default"].set(t,"users",e)}},actions:{FETCH_USER:function(t){var e=t.commit;return H()().then((function(t){e("UPDATE_USER_STATE",t.data.results)})).catch((function(t){e("UPDATE_USER_STATE",{payload:t})}))}},getters:{getUsers:function(t){return t.users}}})}a["default"].use(N["a"]);var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Menu"),n("router-view")],1)},Q=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",attrs:{id:"header"}},[t._m(0),n("div",{staticClass:"menu"},[n("ul",{staticClass:"menu-list"},[n("li",{staticClass:"menu-list__item"},[n("router-link",{staticClass:"cta-text",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"menu-list__item"},[n("router-link",{staticClass:"cta-text",attrs:{to:"/login"}},[t._v("Login")])],1),n("li",{staticClass:"menu-list__item"},[n("router-link",{staticClass:"cta-text",attrs:{to:"/about"}},[t._v("About")])],1)])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"logo"},[a("img",{staticClass:"logo__thumbnail",attrs:{alt:"Logo",src:n("cf05")}})])}],G={name:"Menu",props:{text:{type:String,default:"Something"},myFunc:{type:Function,default:function(){}}},data:function(){return{styles:{margin:"0 5px 0 0",textAlign:"left"}}}},K=G,W=(n("efa6"),Object(d["a"])(K,V,Y,!1,null,null,null)),Z=W.exports,tt={name:"App",components:{Menu:Z}},et=tt,nt=(n("034f"),Object(d["a"])(et,J,Q,!1,null,null,null)),at=nt.exports,it=X();new a["default"]({router:z,store:it,render:function(t){return t(at)}}).$mount("#app")},"5ced":function(t,e,n){},8077:function(t,e,n){},"85ec":function(t,e,n){},"8d50":function(t,e,n){},a176:function(t,e,n){"use strict";n("2efb")},cccb:function(t,e,n){"use strict";n("5ced")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d3fe:function(t,e,n){"use strict";n("8077")},efa6:function(t,e,n){"use strict";n("8d50")}});
//# sourceMappingURL=app.281f98fa.js.map