(this["webpackJsonpsocial-network-2"]=this["webpackJsonpsocial-network-2"]||[]).push([[1],{136:function(e,t,n){e.exports=n(224)},219:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f}));var a=n(4),r=n.n(a),i=n(10),s=n(3),c=n(7),o=n(42),u={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},l=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,s=a.email,o=a.login,t(l(i,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var s,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.login(e,t,n);case 2:0===(s=a.sent).data.resultCode?i(m()):(u=s.data.messages.length>0?s.data.messages[0]:"Something is wrong",i(Object(o.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(s.a)({},e,{},t.payload);default:return e}}},224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(64),n(15)),s=n(57),c=n(73),o={friends:[{id:1,name:"Nika",avaLink:"/assets/img/avatars/nika.jpg"},{id:2,name:"Dima",avaLink:"/assets/img/avatars/dima.jpg"},{id:3,name:"Sergei",avaLink:"/assets/img/avatars/sergei.jpg"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;arguments.length>1&&arguments[1];return e},l=n(80),m=n(22),d=n(79),f=n(82),p=n(3),g={initialised:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALISED":return Object(p.a)(Object(p.a)({},e),{},{initialised:!0});default:return e}},v=Object(i.c)({profilePage:s.b,dialogsPage:c.a,navbar:u,usersPage:l.a,auth:m.a,app:E,form:d.a}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,b=Object(i.e)(v,h(Object(i.a)(f.a))),_=n(40),w=n.n(_),O=n(29),S=n(30),y=n(31),k=n(32),j=(n(219),n(85)),N=n.n(j),T=function(){return r.a.createElement("div",{className:N.a.footer},"Copyright \xa92020 Vladdi")},I=n(5),L=n(86),P=n.n(L),x=function(){return r.a.createElement("div",{className:P.a.home},r.a.createElement("h3",null,"Home page"),r.a.createElement("div",null,r.a.createElement("p",null,"Hello!",r.a.createElement("br",null),"It's my Social network!")))},C=n(16),A=n(6),U=n.n(A),M=n(9),F=n(87),R=n.n(F),D=function(e){return r.a.createElement("div",{className:R.a.friendItem},r.a.createElement("img",{alt:e.name,src:"/My-Social-Network"+e.avaLink}),r.a.createElement("p",null,e.name))},G=function(e){var t=e.friends.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id,name:e.name,avaLink:e.avaLink})}));return r.a.createElement("nav",{className:U.a.nav},r.a.createElement("div",null,r.a.createElement(M.b,{to:"/profile",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"Profile",src:"/My-Social-Network/assets/img/icons/profile.png"}),r.a.createElement("p",null,"Profile"))),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/dialogs",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"Messages",src:"/My-Social-Network/assets/img/icons/message.png"}),r.a.createElement("p",null,"Messages"))),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/users",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"Users",src:"/My-Social-Network/assets/img/icons/user.png"}),r.a.createElement("p",null,"Users"))),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/news",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"News",src:"/My-Social-Network/assets/img/icons/news.png"}),r.a.createElement("p",null,"News"))),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/music",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"Music",src:"/My-Social-Network/assets/img/icons/music.png"}),r.a.createElement("p",null,"Music"))),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/settings",className:U.a.item,activeClassName:U.a.active},r.a.createElement("img",{alt:"Settings",src:"/My-Social-Network/assets/img/icons/settings.png"}),r.a.createElement("p",null,"Settings"))),r.a.createElement("div",{className:U.a.friends},r.a.createElement("h3",null,"Friends"),t))},z=Object(C.b)((function(e){return{friends:e.navbar.friends}}),(function(e){return{}}))(G),H=n(41),W=n.n(H),B=function(e){return r.a.createElement("header",{className:W.a.header},r.a.createElement(M.b,{to:"/"},r.a.createElement("img",{alt:"logo",src:"/My-Social-Network/assets/img/logo.png"}),r.a.createElement("p",null,"My Social Network")),e.isAuth?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:W.a.loginBlock,onClick:e.logout},r.a.createElement("p",null,"Logout"))):r.a.createElement(M.b,{className:W.a.loginBlock,to:"/login"},r.a.createElement("p",null,"Login")))},V=function(e){Object(k.a)(n,e);var t=Object(y.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return r.a.createElement(B,this.props)}}]),n}(r.a.Component),q=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:m.d})(V),Y=n(49),J=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,305))})),K=r.a.lazy((function(){return n.e(5).then(n.bind(null,304))})),X=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,303))})),Z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,299))})),$=r.a.lazy((function(){return n.e(9).then(n.bind(null,300))})),Q=r.a.lazy((function(){return n.e(8).then(n.bind(null,301))})),ee=r.a.lazy((function(){return n.e(10).then(n.bind(null,302))})),te=function(e){Object(k.a)(n,e);var t=Object(y.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(q,null),r.a.createElement(z,null),r.a.createElement("div",{className:"content"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement(Y.a,null))},r.a.createElement(I.b,{path:"/",exact:!0,render:function(){return r.a.createElement(x,null)}}),r.a.createElement(I.b,{path:"/dialogs",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(I.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(I.b,{path:"/news",render:function(){return r.a.createElement($,null)}}),r.a.createElement(I.b,{path:"/music",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(I.b,{path:"/settings",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(I.b,{path:"/users",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(I.b,{path:"/login",render:function(){return r.a.createElement(Z,null)}}))),r.a.createElement(T,null)):r.a.createElement(Y.a,null)}}]),n}(r.a.Component),ne=Object(i.d)(I.f,Object(C.b)((function(e){return{initialized:e.app.initialised}}),{initialiseApp:function(){return function(e){e(Object(m.b)()).then((function(){e({type:"SET_INITIALISED"})}))}}}))(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(r.a.createElement(M.a,null,r.a.createElement(C.a,{store:b},r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},49:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(54),s=n.n(i);t.a=function(e){return r.a.createElement("div",{className:s.a.preloader},r.a.createElement("div",{className:s.a.ldsEllipsis},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}},54:function(e,t,n){e.exports={preloader:"preloader_preloader__cs5zW",ldsEllipsis:"preloader_ldsEllipsis__IrCPA",ldsEllipsis1:"preloader_ldsEllipsis1__13Ts5",ldsEllipsis2:"preloader_ldsEllipsis2__31i-O",ldsEllipsis3:"preloader_ldsEllipsis3__1090_"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return E}));var a=n(4),r=n.n(a),i=n(10),s=n(23),c=n(3),o=n(7),u={posts:[{id:1,message:"Hi! how are you?",likes:13},{id:2,message:"I go to do the candy shop!",likes:11},{id:3,message:"Hello World!",likes:113},{id:4,message:"Redux",likes:98},{id:5,message:"I learning React!",likes:110},{id:6,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.",likes:11200}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"DELETE_POST",postId:e}},d=function(e){return{type:"SET_USER_PROFILE",profile:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likes:0};return Object(c.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},6:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",active:"Navbar_active__3mbhk",item:"Navbar_item__zmMk4"}},64:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(81),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"062df27e-00b0-4e87-8186-c72305acff68"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unFollowUser:function(e){return r.delete("follow/".concat(e))},followUser:function(e){return r.post("follow/".concat(e))},updateProfilePhoto:function(e){return r.post("profile/photo".concat(e))}},s={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})}},c={authMe:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),r=n(3),i={dialogs:[{id:1,name:"Alex",avaLink:"/assets/img/avatars/alex.jpg"},{id:2,name:"Nika",avaLink:"/assets/img/avatars/nika.jpg"},{id:3,name:"Dima",avaLink:"/assets/img/avatars/dima.jpg"},{id:4,name:"Vika",avaLink:"/assets/img/avatars/vika.jpg"},{id:5,name:"Sergey",avaLink:"/assets/img/avatars/sergei.jpg"},{id:6,name:"Ineza",avaLink:"/assets/img/avatars/ineza.jpg"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Hi! How are you?"},{id:3,message:"Yo!"},{id:4,message:"Cool!"},{id:5,message:"You?"},{id:6,message:"Great!"},{id:7,message:"Have a good day!"},{id:8,message:"And you too!"},{id:9,message:"What you will do tomorow?"},{id:10,message:"I will go to the school. And you?"},{id:11,message:"I'd like to go to the theatre"},{id:12,message:"Sounds great!"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:13,message:n}])});default:return e}}},80:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return h}));var a=n(4),r=n.n(a),i=n(10),s=n(23),c=n(3),o=n(7),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(c.a)({},e,{},a):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgres:[]},m=function(e){return{type:"FOLLOW",userID:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},f=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},p=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(f(!0)),n.next=3,o.c.getUsers(e,t);case 3:i=n.sent,a(f(!1)),a({type:"SET_USERS",users:i.items}),a({type:"SET_TOTAL_USERS_COUNT",count:i.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&i(n),t(p(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,o.c.followUser.bind(o.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,o.c.unFollowUser.bind(o.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:u(e.users,t.userID,"id",{followed:!1})});case"UNFOLLOW":return Object(c.a)({},e,{users:u(e.users,t.userID,"id",{followed:!0})});case"SET_USERS":return Object(c.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(c.a)({},e,{followingInProgres:t.isFetching?[].concat(Object(s.a)(e.followingInProgres),[t.userId]):e.followingInProgres.filter((function(e){return e!==t.userId}))});default:return e}}},85:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},86:function(e,t,n){e.exports={home:"Home_home__3idT9"}},87:function(e,t,n){e.exports={friendItem:"Friends_friendItem__3HchZ"}}},[[136,2,3]]]);
//# sourceMappingURL=main.3c2c64a9.chunk.js.map