(this.webpackJsonpSocialNet=this.webpackJsonpSocialNet||[]).push([[3],{294:function(e,t,a){e.exports={description:"ProfileInfo_description__3pjkS",mainPhoto:"ProfileInfo_mainPhoto__13-AP",contact:"ProfileInfo_contact__3mVHa",themePhoto:"ProfileInfo_themePhoto__2AJdl",profileData:"ProfileInfo_profileData__3rOlS",descriptionBlock:"ProfileInfo_descriptionBlock__eU0-V",profDataFormButton:"ProfileInfo_profDataFormButton__1l23d",hover:"ProfileInfo_hover__3d_eA",active:"ProfileInfo_active__5GYwp"}},295:function(e,t,a){e.exports=a.p+"static/media/\u0424\u043e\u043d.3a911ab9.jpg"},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1MCRq",posts:"MyPosts_posts__2TvJ0",addPostButton:"MyPosts_addPostButton__2eRkO",hover:"MyPosts_hover__16puF",active:"MyPosts_active__15rSM"}},297:function(e,t,a){e.exports={item:"MyPost_item__1gFgg"}},298:function(e,t,a){"use strict";a.r(t);var n=a(36),o=a(37),l=a(39),r=a(38),s=a(40),c=a(0),i=a.n(c),u=a(97),m=a(294),p=a.n(m),f=a(69),d=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(u.a)(l,2),s=r[0],m=r[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",{className:p.a.profileData},!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),"  ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{type:"text",onBlur:function(){o(!1),e.updateStatus(s)},autoFocus:!0,onChange:function(e){m(e.currentTarget.value)},value:s})))},b=a(119),E=a.n(b),v=a(25),h=a(130),P=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t,className:p.a.profileData},n&&i.a.createElement("div",{className:p.a.formSummaryError},n),i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("div",null,i.a.createElement("b",null,"Full name: "),Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: "),Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),"}",i.a.createElement("div",null,i.a.createElement("b",null,"About me: "),Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))),i.a.createElement("div",null,i.a.createElement("button",{className:p.a.profDataFormButton},"save")))})),_=a(295),g=a.n(_),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:p.a.profileData},i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("div",null,i.a.createElement("b",null,"Full name: "),t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me: "),t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(t.contacts).map((function(e){return i.a.createElement(O,{key:e,contactsTitle:e,contactsValue:t.contacts[e]})})))),a&&i.a.createElement("div",null,i.a.createElement("button",{className:p.a.profDataFormButton,onClick:n},"edit profile")))},O=function(e){var t=e.contactsTitle,a=e.contactsValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t,":"),a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!0),m=Object(u.a)(s,2),b=m[0],v=m[1],h=Object(c.useState)(!1),_=Object(u.a)(h,2),O=_[0],j=_[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{alt:"headerImg",src:g.a,className:p.a.themePhoto})),i.a.createElement("img",{alt:"profileImg",src:t.photos.large||E.a,className:p.a.mainPhoto}),i.a.createElement("div",null,i.a.createElement("button",{className:p.a.profDataFormButton,onClick:function(){return v(!1)}},"change photo")),o&&!1===b&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&(l(e.target.files[0]),v(!0))}}),i.a.createElement(d,{status:a,updateStatus:n}),O?i.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){j(!1)}))}}):i.a.createElement(k,{profile:t,isOwner:o,goToEditMode:function(){return j(!0)},className:p.a.profileData})))},S=a(96),y=a(296),N=a.n(y),F=a(297),I=a.n(F),M=function(e){return i.a.createElement("div",{className:I.a.item},i.a.createElement("div",null,i.a.createElement("img",{src:e.avatar})),e.message,i.a.createElement("div",null,i.a.createElement("span",null," Like ")," ",e.likesCount))},B=a(90),D=a(66),A=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(M,{key:e.id,message:e.message,likesCount:e.likesCount,avatar:e.avatar})}));return i.a.createElement("div",{className:N.a.postsBlock},i.a.createElement("h3",null,"My Posts "),i.a.createElement(C,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:N.a.posts},t))})),w=Object(D.a)(10),C=Object(h.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(B.a,{component:v.b,name:"newPostText",placeholder:"Post message",validate:[D.b,w]})),i.a.createElement("div",null,i.a.createElement("button",{className:N.a.addPostButton}," Add post")))})),x=A,T=a(15),J=Object(T.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(S.a)(t))}}}))(x),U=function(e){return i.a.createElement("div",null,i.a.createElement(j,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile,savePhoto:e.savePhoto}),i.a.createElement(J,null))},V=a(30),L=a(8),z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(L.d)(Object(T.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),V.f)(z)}}]);
//# sourceMappingURL=3.c2fbebd5.chunk.js.map