(this.webpackJsonpSocialNetwork=this.webpackJsonpSocialNetwork||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var a=n(132),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"de397352-5e3e-4a18-9ed2-383661a8969f"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},follow:function(e){return r.post("/follow/".concat(e))},unfollow:function(e){return r.delete("/follow/".concat(e))},getProfile:function(e){return i.getProfile(e)}},i={getProfile:function(e){return r.get("/profile/".concat(e))},getStatus:function(e){return r.get("/profile/status/".concat(e))},updateStatus:function(e){return r.put("/profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{"Content-Type":"multipart*form-data"})},saveProfile:function(e){return r.put("/profile",e)}},c={me:function(){return r.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("/auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(45),r=n(9),o="socialNetwork/dialogs/SEND-MESSAGE",i={messages:[{id:1,message:"HI"},{id:2,message:"What you think about thi music?"},{id:3,message:"bye-bye"}],dialogs:[{id:1,name:"Olga"},{id:2,name:"Anton"},{id:3,name:"Vadim"},{id:4,name:"Andrey"}]},c=function(e){return{type:o,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:4,message:n}])});default:return e}}},119:function(e,t,n){e.exports=n.p+"static/media/user.e85bcdcf.png"},137:function(e,t,n){e.exports=n.p+"static/media/Preloader.1a0b205a.svg"},14:function(e,t,n){e.exports={nav:"Navbar_nav__2t334",item:"Navbar_item__XBHBU",activeLink:"Navbar_activeLink__1Lh3E",settings:"Navbar_settings__2PnMz"}},140:function(e,t,n){e.exports=n.p+"static/media/logo_orange_discord_icon_134355.4a3d8293.svg"},166:function(e,t,n){e.exports=n(292)},24:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1j_4m",error:"FormsControls_error__30vp2",formSummaryError:"FormsControls_formSummaryError__36JR0",loginButton:"FormsControls_loginButton__zeiec",hover:"FormsControls_hover__HYkuf",active:"FormsControls_active__RcVog",mainLoginPage:"FormsControls_mainLoginPage__284ZC",textAreaStyle:"FormsControls_textAreaStyle__1u0U8",inputStyle:"FormsControls_inputStyle__1nOeg"}},249:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(56),r=n(0),o=n.n(r),i=n(24),c=n.n(i),s=n(90),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,i=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},o.a.createElement("div",null,r),i&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e," ",o.a.createElement("textarea",Object.assign({className:c.a.textAreaStyle},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e," ",o.a.createElement("input",Object.assign({className:c.a.inputStyle},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),i)}},250:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(8),r=n(96),o=n(106),i={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;arguments.length>1&&arguments[1];return e},s=n(6),u=n.n(s),l=n(12),f=n(45),p=n(9),m=n(10),d=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(p.a)({},e,{},a):e}))},g="socialNetwork/users/FOLLOW",h="socialNetwork/users/UNFOLLOW",v="socialNetwork/users/SET_USERS",b="socialNetwork/users/SET_CURRENT_PAGE",_="socialNetwork/users/SET_USERS_COUNT",E="socialNetwork/users/TOGGLE_IS_FETCHING",w={users:[],pageSize:10,totaUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},O=function(e){return{type:g,userId:e}},P=function(e){return{type:h,userId:e}},S=function(e){return{type:b,currentPage:e}},N=function(e){return{type:E,isFetching:e}},C=function(e,t){return{type:"socialNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},j=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(C(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(p.a)({},e,{users:d(e.users,t.userId,"id",{followed:!0})});case h:return Object(p.a)({},e,{users:d(e.users,t.userId,"id",{followed:!1})});case v:return Object(p.a)({},e,{users:t.users});case b:return Object(p.a)({},e,{currentPage:t.currentPage});case _:return Object(p.a)({},e,{totaUsersCount:t.count});case E:return Object(p.a)({},e,{isFetching:t.isFetching});case"socialNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(p.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},k=n(31),U="socialNetwork/auth/SET_USER_DATA",x={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},I=function(e,t,n,a){return{type:U,payload:{id:e,email:t,login:n,isAuth:a}}},L=function(e){return{type:"socialNetwork/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},A=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,i=a.email,t(I(r,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(L(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:case"socialNetwork/auth/GET_CAPTCHA_URL_SUCCESS":return Object(p.a)({},e,{},t.payload);default:return e}},z=n(133),B=n(131),M={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"socialNetwork/app/INITIALIZED_SUCCESS":return Object(p.a)({},e,{initialized:!0});default:return e}},H=Object(a.c)({profilePage:r.b,dialogsPage:o.a,sidebar:c,usersPage:y,auth:F,form:B.a,app:G}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,D=Object(a.e)(H,R(Object(a.a)(z.a)));window.__store__=D;var W=D,J=n(0),X=n.n(J),Z=n(68),V=n.n(Z),Y=(n(249),n(36)),q=n(37),K=n(39),Q=n(38),$=n(40),ee=(n(250),n(14)),te=n.n(ee),ne=n(13),ae=function(){return X.a.createElement("nav",{className:te.a.nav},X.a.createElement("div",{className:te.a.item},X.a.createElement(ne.b,{to:"/Profile",activeClassName:te.a.activeLink},"Profile")),X.a.createElement("div",{className:te.a.item},X.a.createElement(ne.b,{to:"/Users",activeClassName:te.a.activeLink},"Users")),X.a.createElement("div",{className:te.a.item},X.a.createElement(ne.b,{to:"/Dialogs",activeClassName:te.a.activeLink}," Messages")),X.a.createElement("div",{className:te.a.item},X.a.createElement(ne.b,{to:"/News",activeClassName:te.a.activeLink},"News")),X.a.createElement("div",{className:te.a.item},X.a.createElement(ne.b,{to:"/Music",activeClassName:te.a.activeLink},"Music")),X.a.createElement("div",{className:"".concat(te.a.item," ").concat(te.a.settings)},X.a.createElement(ne.b,{to:"/Settings",activeClassName:te.a.activeLink},"Settings")))},re=n(30),oe=n(15),ie=n(69),ce=n(56),se=n(71),ue=n(97),le=n(46),fe=n.n(le),pe=n(138),me=n.n(pe),de=function(e){for(var t=e.totaUsersCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,i=void 0===o?15:o,c=Math.ceil(t/n),s=[],u=1;u<=c;u++)s.push(u);var l=Math.ceil(c/i),f=Object(J.useState)(1),p=Object(ue.a)(f,2),m=p[0],d=p[1],g=(m-1)*i+1,h=m*i;return X.a.createElement("div",{className:fe.a.paginatorWrap},m>1&&X.a.createElement("button",{className:fe.a.paginationButton,onClick:function(){return d(m-1)}},"prev"),s.filter((function(e){return e>=g&&e<=h})).map((function(e){return X.a.createElement("span",{key:e,className:me()(Object(se.a)({},fe.a.selectedPage,a===e),fe.a.pageNumber),onClick:function(t){r(e)}},e)})),l>m&&X.a.createElement("button",{className:fe.a.paginationButton,onClick:function(){return d(m+1)}},"next"))},ge=n(58),he=n.n(ge),ve=n(119),be=n.n(ve),_e=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return X.a.createElement("div",{className:he.a.usersWrap},X.a.createElement("div",null,X.a.createElement(ne.b,{to:"./profile/"+t.id},X.a.createElement("img",{src:null!=t.photos.small?t.photos.small:be.a,className:he.a.photo}))),X.a.createElement("div",null,t.followed?X.a.createElement("button",{className:he.a.fuButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}}," Unfolllow"):X.a.createElement("button",{className:he.a.fuButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}}," Folllow")),X.a.createElement("div",null,X.a.createElement("b",null,"Name:"),t.name),X.a.createElement("div",null,X.a.createElement("b",null,"Status:"),t.status))},Ee=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totaUsersCount,r=e.pageSize,o=e.users,i=Object(ce.a)(e,["currentPage","onPageChanged","totaUsersCount","pageSize","users"]);return X.a.createElement("div",null,X.a.createElement(de,{currentPage:t,onPageChanged:n,totaUsersCount:a,pageSize:r}),X.a.createElement("div",null,o.map((function(e){return X.a.createElement(_e,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow,key:e.id})}))))},we=n(139),Oe=Object(we.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pe=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totaUsersCount},Ne=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},ye=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(K.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object($.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return X.a.createElement(X.a.Fragment,null,this.props.isFetching?X.a.createElement(ie.a,null):null,X.a.createElement(Ee,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totaUsersCount:this.props.totaUsersCount,followingInProgress:this.props.followingInProgress}))}}]),t}(X.a.Component),ke=Object(a.d)(Object(oe.b)((function(e){return{users:Oe(e),pageSize:Pe(e),totaUsersCount:Se(e),currentPage:Ne(e),isFetching:Ce(e),followingInProgress:je(e)}}),{follow:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(n,e,m.d.follow.bind(m.d),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(n,e,m.d.unfollow.bind(m.d),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:S,toggleFollowingProgress:C,getUsers:function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(a){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(S(e)),a(N(!0)),n.next=4,m.d.getUsers(e,t);case 4:r=n.sent,a((i=r.items,{type:v,users:i})),a(N(!1)),a((o=r.totalCount,{type:_,count:o}));case 8:case"end":return n.stop()}var o,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ye),Ue=n(47),xe=n.n(Ue),Ie=n(140),Le=n.n(Ie),Ae=function(e){return X.a.createElement("header",{className:xe.a.header},X.a.createElement("img",{alt:"logo",src:Le.a}),X.a.createElement("div",{className:xe.a.loginBlock},e.isAuth?X.a.createElement("div",{className:xe.a.nickName},e.login," - ",X.a.createElement("button",{className:xe.a.logButtton,onClick:e.logout},"Log out")):X.a.createElement(ne.b,{to:"/login"},X.a.createElement("button",{className:xe.a.logButtton},"Login")," ")))},Te=function(e){function t(){return Object(Y.a)(this,t),Object(K.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return X.a.createElement(Ae,this.props)}}]),t}(X.a.Component),Fe=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.data.resultCode&&t(I(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Te),ze=n(130),Be=n(25),Me=n(66),Ge=n(24),He=n.n(Ge),Re=Object(ze.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return X.a.createElement("form",{onSubmit:t,className:He.a.mainLoginPage},Object(Be.c)("Email","email",[Me.b],Be.a),Object(Be.c)("Password","password",[Me.b],Be.a,{type:"password"}),Object(Be.c)(null,"rememberMe",[],Be.a,{type:"checkbox"},"remember me"),a&&X.a.createElement("img",{alt:"captcha error",src:a}),a&&Object(Be.c)("Symbols from image","captcha",[Me.b],Be.a,{}),n&&X.a.createElement("div",{className:He.a.formSummaryError},n),X.a.createElement("div",null,X.a.createElement("button",{className:He.a.loginButton},"Login")))})),De=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(l.a)(u.a.mark((function r(o){var i,c;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.login(e,t,n,a);case 2:0===(i=r.sent).data.resultCode?o(A()):(10===i.data.resultCode&&o(T()),c=i.data.messages.length>0?i.data.messages[0]:"Some error",o(Object(k.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?X.a.createElement(re.a,{to:"/profile"}):X.a.createElement("div",{className:He.a.mainLoginPage},X.a.createElement("h1",null," LOGIN "),X.a.createElement(Re,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),We=function(e){return function(t){return X.a.createElement(X.a.Suspense,{fallback:X.a.createElement("div",null," loading ")},X.a.createElement(e,t))}},Je=X.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Xe=X.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Ze=function(e){function t(){return Object(Y.a)(this,t),Object(K.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?X.a.createElement("div",{className:"app-wrapper"},X.a.createElement(Fe,null),X.a.createElement(ae,null),X.a.createElement("div",{className:"app-wrapper-content"},X.a.createElement(re.a,{from:"/",to:"/profile"}),X.a.createElement(re.b,{path:"/Dialogs",render:We(Je)}),X.a.createElement(re.b,{path:"/Profile/:userId?",render:We(Xe)}),X.a.createElement(re.b,{path:"/Users",render:function(){return X.a.createElement(ke,null)}}),X.a.createElement(re.b,{path:"/login",render:function(){return X.a.createElement(De,null)}}))):X.a.createElement(ie.a,null)}}]),t}(X.a.Component),Ve=Object(a.d)(re.f,Object(oe.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:"socialNetwork/app/INITIALIZED_SUCCESS"})}))}}}))(Ze);V.a.render(X.a.createElement(ne.a,null,X.a.createElement(oe.a,{store:W},X.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__1vysj",pageNumber:"Paginator_pageNumber__3JQB4",selectPage:"Paginator_selectPage__1oAJz",paginationButton:"Paginator_paginationButton__MSaUM",hover:"Paginator_hover__3Siei",active:"Paginator_active__3A5ZS",paginatorWrap:"Paginator_paginatorWrap__1v28H"}},47:function(e,t,n){e.exports={header:"Header_header__1h8fy",loginBlock:"Header_loginBlock__f0Ss2",logButtton:"Header_logButtton__3WXFo",logOutButtton:"Header_logOutButtton__vXJi0",hover:"Header_hover__3uaNh",active:"Header_active__32cDd",nickName:"Header_nickName__2AA_U"}},57:function(e,t,n){e.exports=n.p+"static/media/forProfileMessages.76dd0803.jpg"},58:function(e,t,n){e.exports={photo:"users_photo__13NYX",fuButton:"users_fuButton__1Jzg3",hover:"users_hover__24y7z",active:"users_active__2ACoz",usersWrap:"users_usersWrap__mZ9O4"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(137),i=n.n(o);t.a=function(){return r.a.createElement("img",{src:i.a})}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return w})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return S}));var a=n(6),r=n.n(a),o=n(12),i=n(45),c=n(9),s=n(10),u=n(31),l=n(57),f=n.n(l),p="socialNetwork/profile/AD-POST",m="socialNetwork/profile/SET_USER_PROFILE",d="socialNetwork/profile/SET_STATUS",g="socialNetwork/profile/DELETE_POST",h="socialNetwork/profile/SAVE_PHOTO_SUCCESS",v={posts:[{id:1,message:"Hello! How are you?",likesCount:20,avatar:f.a},{id:2,message:"Nice day",likesCount:0,avatar:f.a},{id:3,message:"Go watch football!",likesCount:15,avatar:f.a}],profile:null,status:""},b=function(e){return{type:p,newPostText:e}},_=function(e){return{type:d,status:e}},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:m,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(_(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(_(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:h,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.id,console.log(a().auth),t.next=4,s.b.saveProfile(e);case 4:if(0!==(i=t.sent).data.resultCode){t.next=9;break}n(E(o)),t.next=11;break;case 9:return n(Object(u.a)("edit-profile",{_error:i.data.messages[0]})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n={id:4,message:t.newPostText,likesCount:0,avatar:f.a};return Object(c.a)({},e,{posts:[n].concat(Object(i.a)(e.posts)),newPostText:""});case m:return Object(c.a)({},e,{profile:t.profile});case d:return Object(c.a)({},e,{status:t.status});case g:return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case h:return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[166,1,2]]]);
//# sourceMappingURL=main.afde5ba1.chunk.js.map