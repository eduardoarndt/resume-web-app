(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),s=(n(72),n(31)),l=n(14),o=n(25),j=n(34),b=n(32),u=n(11),O=n(120),x=n(121),p=n(118),d=n(122),h=n(123),m=n(124),v=n(125),f=n(126),y=n(127),E=n(128),w=n(2),C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("{{ REACT_APP_RESUME_API_URL }}/resumes");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r((function(e){return n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{key:e.email})}))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(w.jsxs)(O.a,{children:[Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{variant:"h4",children:"Curr\xedculos"}),Object(w.jsx)("br",{}),Object(w.jsx)(s.b,{to:"/register",children:Object(w.jsx)(p.a,{variant:"contained",color:"success",children:"Cadastrar"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(d.a,{component:h.a,children:Object(w.jsxs)(m.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(w.jsx)(v.a,{children:Object(w.jsxs)(f.a,{children:[Object(w.jsx)(y.a,{children:"Nome"}),Object(w.jsx)(y.a,{children:"Email"}),Object(w.jsx)(y.a,{})]})}),Object(w.jsx)(E.a,{children:n.map((function(e){return Object(w.jsxs)(f.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(w.jsx)(y.a,{component:"th",scope:"row",children:e.name}),Object(w.jsx)(y.a,{children:e.email}),Object(w.jsx)(y.a,{children:Object(w.jsx)(s.b,{to:"/view/"+e.email,children:Object(w.jsx)(p.a,{variant:"contained",children:"Detalhes"})})})]},e.email)}))})]})})]})},P=n(5),g=n(115),I=n(117),k=function(){var e=Object(l.f)(),t=Object(l.e)(),n=Object(a.useState)({name:"",phone:"",email:"",website:"",experience:""}),r=Object(u.a)(n,2),c=r[0],i=r[1],s=function(e){var t=e.target,n=t.name,a=t.value;i(Object(j.a)(Object(j.a)({},c),{},Object(P.a)({},n,a)))},d=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t,n,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("{{ REACT_APP_RESUME_API_URL }}/resumes",{method:"POST",body:JSON.stringify(c)});case 3:if(t=e.sent,200!=(n=t.status)){e.next=8;break}return alert("Cadastro realizado!"),e.abrupt("return",h());case 8:if(400!=n){e.next=11;break}return alert("Campo(s) obrigat\xf3rio(s) n\xe3o preenchidos!"),e.abrupt("return");case 11:return e.next=13,t.json();case 13:a=e.sent,alert("Erro: "+JSON.stringify(a)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert("Erro: "+e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var n=t.search.replace("?redirectTo=","");e(n||"/")};return Object(w.jsxs)(O.a,{children:[Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{variant:"h4",children:"Cadastrar novo Curr\xedculo"}),Object(w.jsx)("br",{}),Object(w.jsxs)(g.a,{component:"form",spacing:2,children:[Object(w.jsx)(I.a,{label:"Nome",type:"text",variant:"outlined",name:"name",required:!0,value:c.name,onInput:s}),Object(w.jsx)(I.a,{label:"Telefone",type:"tel",variant:"outlined",name:"phone",value:c.phone,onInput:s}),Object(w.jsx)(I.a,{label:"Email",type:"email",variant:"outlined",name:"email",required:!0,value:c.email,onInput:s}),Object(w.jsx)(I.a,{label:"Endere\xe7o WEB",type:"url",variant:"outlined",name:"website",value:c.website,onInput:s}),Object(w.jsx)(I.a,{label:"Experi\xeancia Profissional",type:"text",variant:"outlined",name:"experience",multiline:!0,required:!0,value:c.experience,onInput:s})]}),Object(w.jsx)("br",{}),Object(w.jsxs)(g.a,{direction:"row",spacing:2,children:[Object(w.jsx)(p.a,{variant:"contained",color:"success",onClick:d,children:"Cadastrar"}),Object(w.jsx)(p.a,{variant:"contained",color:"error",onClick:h,children:"Cancelar"})]})]})},_=function(){var e=Object(l.g)().email,t=Object(l.f)(),n=Object(l.e)(),r=Object(a.useState)({name:"",phone:"",email:"",website:"",experience:""}),c=Object(u.a)(r,2),i=c[0],s=c[1],j=function(){var t=Object(b.a)(Object(o.a)().mark((function t(){var n,a;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("{{ REACT_APP_RESUME_API_URL }}/resumes/"+e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,s((function(e){return a})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){j()}),[]);return Object(w.jsxs)(O.a,{children:[Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{variant:"h4",children:"Cadastrar novo Curr\xedculo"}),Object(w.jsx)("br",{}),Object(w.jsxs)(g.a,{component:"form",spacing:2,children:[Object(w.jsx)(I.a,{label:"Nome",type:"text",variant:"outlined",name:"name",value:i.name,InputProps:{readOnly:!0}}),Object(w.jsx)(I.a,{label:"Telefone",type:"tel",variant:"outlined",name:"phone",value:i.phone,InputProps:{readOnly:!0}}),Object(w.jsx)(I.a,{label:"Email",type:"email",variant:"outlined",name:"email",value:i.email,InputProps:{readOnly:!0}}),Object(w.jsx)(I.a,{label:"Endere\xe7o WEB",type:"url",variant:"outlined",name:"website",value:i.website,InputProps:{readOnly:!0}}),Object(w.jsx)(I.a,{label:"Experi\xeancia Profissional",type:"text",variant:"outlined",name:"experience",multiline:!0,value:i.experience,InputProps:{readOnly:!0}})]}),Object(w.jsx)("br",{}),Object(w.jsx)(g.a,{direction:"row",spacing:2,children:Object(w.jsx)(p.a,{variant:"contained",color:"error",onClick:function(){var e=n.search.replace("?redirectTo=","");t(e||"/")},children:"Voltar"})})]})};function S(){return Object(w.jsx)(s.a,{children:Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{exact:!0,path:"/",element:Object(w.jsx)(C,{})}),Object(w.jsx)(l.a,{exact:!0,path:"/register",element:Object(w.jsx)(k,{})}),Object(w.jsx)(l.a,{exact:!0,path:"/view/:email",element:Object(w.jsx)(_,{})})]})})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(S,{})}),document.getElementById("root")),T()}},[[77,1,2]]]);
//# sourceMappingURL=main.2768976f.chunk.js.map