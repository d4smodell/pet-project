(this["webpackJsonpthird-practice"]=this["webpackJsonpthird-practice"]||[]).push([[5],{231:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return d}));var n=a(232),r=a(0),i=a.n(r),s=a(233),c=a.n(s),o=a(112),l=function(e){e.input;var t=e.meta,a=(e.child,e.element,Object(n.a)(e,["input","meta","child","element"])),r=t.touched&&t.error;return i.a.createElement("div",{className:c.a.formControl+" "+(r?c.a.error:"")},i.a.createElement("div",null,a.children),r&&i.a.createElement("span",null,t.error))},u=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return i.a.createElement(l,e,i.a.createElement("textarea",Object.assign({},t,a)))},m=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return i.a.createElement(l,e,i.a.createElement("input",Object.assign({},t,a)))},d=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(o.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))," ",s)}},233:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1nzQ6",error:"FormsControls_error__2Efp-"}},234:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(33),r=a(34),i=a(36),s=a(35),c=a(37),o=a(0),l=a.n(o),u=a(21),m=a(26),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),a}(l.a.Component);return Object(m.b)(d)(t)}},244:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1kIxA",dialogsItems:"Dialogs_dialogsItems__jkZET",dialog:"Dialogs_dialog__2hIjg",messages:"Dialogs_messages__2JCcD",message:"Dialogs_message__2Srl3"}},304:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(244),s=a.n(i),c=a(8),o=function(e){var t=e.id,a=e.name;return r.a.createElement("div",{key:t},r.a.createElement(c.b,{to:"/dialogs/"+t,className:s.a.dialog},a))},l=function(e){var t=e.id,a=e.message;return r.a.createElement("div",{key:t,className:s.a.message},a)},u=a(112),m=a(113),d=a(231),g=a(234),f=Object(g.a)(100),b=Object(m.a)({form:"addMessageform"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(u.a,{component:d.b,name:"newMessageBody",placeholder:"New Message",validate:[g.b,f]}),r.a.createElement("div",null,r.a.createElement("button",null,"Send Message")))})),p=function(e){var t=e.dialogsPage,a=t.dialogsData.map((function(e){return r.a.createElement(o,{name:e.name,id:e.id})})),n=t.messagesData.map((function(e){return r.a.createElement(l,{message:e.message,id:e.id})}));return r.a.createElement("div",{className:s.a.dialogs},r.a.createElement("div",{className:s.a.dialogsItems},a),r.a.createElement("div",{className:s.a.messages},n,r.a.createElement(b,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},h=a(76),v=a(26),E=a(235),_=a(16),j={sendMessage:h.b};t.default=Object(_.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),j),E.a)(p)}}]);
//# sourceMappingURL=5.37a792d5.chunk.js.map