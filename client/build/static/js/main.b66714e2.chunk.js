(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{121:function(e,t,a){e.exports=a(180)},153:function(e,t){},179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=a(41),u=a(21),l=a(107),i=a.n(l),m=a(54),d=a(114),E=a(31);function f(e,t){switch(t.type){case"LOGIN":var a=t.payload;return Object(E.a)(Object(E.a)({},e),{},{user:a});case"NEW_MESSAGE":var n=t.payload,r=n.user,c=n.message,o=n.room,s=e.rooms[o];return Object(E.a)(Object(E.a)({},e),{},{rooms:Object(E.a)(Object(E.a)({},e.rooms),{},Object(m.a)({},o,[].concat(Object(d.a)(s),[{user:r,message:c}])))});default:return e}}var p,v=r.a.createContext(),b={user:void 0,rooms:{"Main chat":[],"Side chat":[]}};function h(e,t,a){t&&p.emit("message",{user:e,message:t,room:a})}function O(e){var t=e.children,a=r.a.useReducer(f,b),n=Object(u.a)(a,2),c=n[0],o=n[1];return p||((p=i()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT||":3001")).on("message",(function(e){o({type:"NEW_MESSAGE",payload:e})})),p.on("disconnect",(function(e){var t=e.name,a="User ".concat(t," has left!");o({type:"NEW_MESSAGE",payload:{user:"ChatterBox",message:a,room:"Main chat"}})}))),r.a.createElement(v.Provider,{value:{user:void 0,chat:c,newUser:function(e){o({type:"LOGIN",payload:e}),p.emit("join",{name:e}),h("ChatterBox","User ".concat(e," has joined!"),"Main chat")},sendMessage:h}},t)}var g=a(10),j=a(61),S=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return a.user?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/",state:{from:e.location}}})}}))},y=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return a.user?r.a.createElement(g.a,{to:{pathname:"/chat",state:{from:e.location}}}):r.a.createElement(t,e)}}))},C=a(46),k=a.n(C),x=a(75),N=a(108),_=a.n(N),w=a(210),R=a(214),M=a(227),T=a(216),A=a(228),D=a(217),I=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).baseURL||"http://localhost:3001";function U(){var e=r.a.useContext(v).newUser,t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(null),l=Object(u.a)(s,2),i=l[0],m=l[1];function d(e){return E.apply(this,arguments)}function E(){return(E=Object(x.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return m({type:"No Name",message:"You have to pick a name!"}),t.abrupt("return");case 3:return t.next=5,_.a.get("".concat(I,"/currentusers")).then((function(e){return e.data}));case 5:return n=t.sent,t.next=8,n.indexOf(a);case 8:if(t.t0=t.sent,t.t1=-1,t.t0===t.t1){t.next=14;break}return m({type:"Name isn't unique",message:"Someone picked that name already!"}),t.abrupt("return");case 14:e(a);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){i&&setTimeout((function(){return m(null)}),3e3)}),[i]),r.a.createElement(w.a,{id:"Login","data-testid":"login-component"},r.a.createElement(R.a,{id:"login-wrapper","data-testid":"login-wrapper"},r.a.createElement("div",{id:"login-form","data-testid":"login-form"},r.a.createElement(M.a,{label:"Pick a name!",variant:"outlined",onChange:function(e){return o(e.target.value)},"data-testid":"name-input"}),r.a.createElement(T.a,{onClick:Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(c);case 2:case"end":return e.stop()}}),e)}))),variant:"outlined",size:"large",id:"form-button","data-testid":"login-button"},"Get in there!")),r.a.createElement("div",{id:"login-feedback","data-testid":"login-feedback"},i?r.a.createElement(A.a,{severity:"error",id:"error","data-testid":"feedback-error"},r.a.createElement(D.a,{id:"error-title"},i.type),i.message):null)))}var L=a(224),P=a(215),W=a(218),K=a(219),B=a(221),G=a(220),H=a(222);function F(e){var t=e.setOpenDrawer,a=e.setActiveRoom,n=r.a.useContext(v).chat,c=Object.keys(n.rooms);return r.a.createElement(P.a,null,c?c.map((function(e,n){return r.a.createElement(W.a,{onClick:function(){t(!1),a(e)},key:n},r.a.createElement(K.a,null,r.a.createElement(G.a,null)),r.a.createElement(B.a,{primary:e}))})):null,r.a.createElement("hr",null),r.a.createElement(W.a,{onClick:function(){window.location.reload()}},r.a.createElement(K.a,null,r.a.createElement(H.a,null)),r.a.createElement(B.a,{primary:"Logout"})))}var V=a(230),z=a(223),J=["Ass","Butt"];function q(e){var t=e.setActiveRoom,a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:function(){return s(!0)},id:"button"}),r.a.createElement(V.a,{anchor:"right",open:o,onClose:function(){return s(!1)}},r.a.createElement(F,{items:J,setOpenDrawer:s,setActiveRoom:t})))}function Y(e){var t=e.activeRoom,a=e.setActiveRoom;return r.a.createElement(L.a,{id:"Navbar"},r.a.createElement("h2",{id:"Navbar-roomName"},t),r.a.createElement(q,{setActiveRoom:a}))}var Q=a(225);function X(e){var t=e.messageFrom,a=e.message,n=t===r.a.useContext(v).chat.user;return t.length>25&&(t=t.slice(0,25)+"..."),n?r.a.createElement("div",{className:"Message currentUser"},r.a.createElement("p",null,a),r.a.createElement("h3",null,r.a.createElement(Q.a,{className:"Message-userIcon"}),t)):r.a.createElement("div",{className:"Message"},r.a.createElement("p",null,a),r.a.createElement("h3",null,r.a.createElement(Q.a,{className:"Message-userIcon"}),t))}function Z(e){var t=e.messages,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollIntoView({block:"end",behavior:"smooth"})}),[t]),r.a.createElement("div",{id:"Messages"},t?t.map((function(e,t){var a=e.user,n=e.message;return r.a.createElement(X,{messageFrom:a,message:n,key:t})})):null,r.a.createElement("div",{ref:a}))}var $=a(226),ee=a(113),te=a.n(ee);function ae(e){var t,a=e.user,c=e.sendMessage,o=e.activeRoom,s=Object(n.useState)(""),l=Object(u.a)(s,2),i=l[0],m=l[1];return t=i?"-spin":"",r.a.createElement("div",{id:"Input"},r.a.createElement("textarea",{type:"text",variant:"filled",value:i,onChange:function(e){return m(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c(a,i,o),m(""))},id:"Input-textfield"}),r.a.createElement($.a,{"aria-label":"add",size:"small",onClick:function(){c(a,i,o),m("")},id:"Input-sendbutton".concat(t)},r.a.createElement(te.a,null)))}function ne(){var e=r.a.useContext(v),t=e.chat,a=e.sendMessage,c=t.user,o=Object.keys(t.rooms),s=Object(n.useState)(o[0]),l=Object(u.a)(s,2),i=l[0],m=l[1];return r.a.createElement(R.a,{id:"Chat"},r.a.createElement(Y,{activeRoom:i,rooms:o,setActiveRoom:m}),r.a.createElement(Z,{messages:t.rooms[i]}),r.a.createElement(ae,{sendMessage:a,user:c,activeRoom:i}))}var re=function(){var e=r.a.useContext(v).chat.user;return r.a.createElement(g.d,null,r.a.createElement(y,{path:"/",exact:!0,component:U,user:e}),r.a.createElement(S,{path:"/chat",exact:!0,component:ne,user:e}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement(g.a,{to:"/chat"})}}))};a(179);function ce(){return r.a.createElement("div",{id:"App"},r.a.createElement("div",{id:"waves"}),r.a.createElement(O,null,r.a.createElement(s.a,null,r.a.createElement(re,null))))}o.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.b66714e2.chunk.js.map