(this["webpackJsonpsocial-network-2"]=this["webpackJsonpsocial-network-2"]||[]).push([[6],{225:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(229),r=n(0),o=n.n(r),i=n(226),s=n.n(i),c=n(109),u=function(e){return function(t){var n=t.input,r=t.meta,i=Object(a.a)(t,["input","meta"]),c=r.touched&&r.error;return o.a.createElement("div",{className:s.a.formControl+" "+(c?s.a.error:"")},o.a.createElement(e,Object.assign({},n,i)),c&&o.a.createElement("span",null," ",r.error," "))}},l=u("textarea"),m=u("input"),d=function(e,t,n,a,r){return o.a.createElement(c.a,{placeholder:e,name:t,type:n,component:a,validate:r})}},226:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue"}},228:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"field is required!"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},231:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(29),r=n(30),o=n(32),i=n(31),s=n(5),c=n(0),u=n.n(c),l=n(16),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(i.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(s.a,{to:"/login"})}}]),c}(u.a.Component);return Object(l.b)(m)(t)}},305:function(e,t,n){"use strict";n.r(t);var a=n(73),r=n(0),o=n.n(r),i=n(231),s=n.n(i),c=n(9),u=function(e){return o.a.createElement("div",{className:s.a.dialog},o.a.createElement(c.b,{to:"/dialogs/"+e.id,activeClassName:s.a.active},o.a.createElement("img",{alt:e.name,src:"/My-Social-Network"+e.avaLink}),o.a.createElement("p",null,e.name)))},l=function(e){return o.a.createElement("div",{className:s.a.message},o.a.createElement("span",null,e.message))},m=n(109),d=n(110),f=n(225),g=n(228),p=Object(g.a)(101),b=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(m.a,{component:f.b,name:"newMessageBody",placeholder:"Enter your message",validate:[g.b,p]}),o.a.createElement("button",null,"Send"))})),v=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return o.a.createElement(u,{name:e.name,key:e.id,id:e.id,avaLink:e.avaLink})})),a=t.messages.map((function(e){return o.a.createElement(l,{message:e.message,key:e.id,id:e.id})}));return o.a.createElement("div",null,o.a.createElement("h3",null,"Dialogs"),o.a.createElement("div",{className:s.a.dialogs},o.a.createElement("div",null,n),o.a.createElement("div",{className:s.a.messages},a,o.a.createElement(b,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}}))))},E=n(16),_=n(236),h=n(15);t.default=Object(h.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){return e(Object(a.b)(t))}}})),_.a)(v)}}]);
//# sourceMappingURL=6.36fbe03d.chunk.js.map