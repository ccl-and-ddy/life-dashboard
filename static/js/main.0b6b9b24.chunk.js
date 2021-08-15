(this["webpackJsonplife-dashboard"]=this["webpackJsonplife-dashboard"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),d=c(10),s=c.n(d),r=(c(86),c(12)),j=c(105),i=c(66),b=c.n(i),l=c(60),h=c.n(l),o=c(61),O=c.n(o),x=c(21),u=c(25),m=c(2),f=function(){var e=Object(u.c)((function(e){return e.userData.dashboards})),t=e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(x.c,{to:"/dashboard/".concat(e.id),children:e.name})})}));return Object(m.jsx)("nav",{className:O.a.Nav,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(x.c,{to:"/",children:"home "})}),Object(m.jsx)("li",{children:Object(m.jsx)(x.c,{to:"/about",children:"about"})}),e.length?t:null]})})},p=function(){return Object(m.jsxs)("header",{className:h.a.Header,children:[Object(m.jsx)(j.a,{"aria-label":"Button to open the menu",children:Object(m.jsx)(b.a,{})}),Object(m.jsx)("a",{href:".",className:"logo",children:Object(m.jsx)("img",{src:"",alt:""})}),Object(m.jsx)(f,{}),Object(m.jsx)("button",{"mat-button":!0,children:"log-in/sign-up"})]})},v=c(39),g=c(19),D=c(135),N=c(138),y=c(139),k=c(144),C=c(137),S=c(140),w=c(141),I=c(51);function A(){var e=localStorage.getItem("userData");return e?JSON.parse(e):{dashboardNextId:0,dashboards:[]}}var J=A(),E=Object(I.b)({name:"userData",initialState:J,reducers:{addDashboard:function(e,t){var c=A();Object.assign(e,c),t.payload.id="".concat(e.dashboardNextId),e.dashboardNextId++,e.dashboards.push(t.payload);var n=JSON.stringify(e);localStorage.setItem("userData",n)},editDashboard:function(e,t){var c=A();Object.assign(e,c),e.dashboards=e.dashboards.map((function(e){return e.id===t.payload.id?t.payload:e}));var n=JSON.stringify(e);localStorage.setItem("userData",n)},removeDashboard:function(e,t){var c=A();Object.assign(e,c),e.dashboards=e.dashboards.filter((function(e){return e.id!==t.payload.id}));var n=JSON.stringify(e);localStorage.setItem("userData",n)}}}),F=E.actions,B=F.addDashboard,P=F.editDashboard,T=F.removeDashboard,H=Object(I.a)({reducer:{userData:E.reducer}}),L=c(67),M=c.n(L),z=c(142),R=function(){var e=Object(u.c)((function(e){return e.userData.dashboards})),t=Object(u.b)(),c=Object(n.useState)(!1),a=Object(g.a)(c,2),d=a[0],s=a[1],r=Object(n.useState)(""),i=Object(g.a)(r,2),b=i[0],l=i[1],h=Object(n.useState)(null),o=Object(g.a)(h,2),O=o[0],f=o[1],p=function(e){e.target&&l(e.target.value)},I=function(e){t(B({name:b,kind:e})),l(""),s(!1)},A=e.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)(x.b,{to:"/dashboard/".concat(e.id),children:e.name})," ",Object(m.jsxs)(D.a,{color:"primary",size:"small","aria-label":"Edit and remove dashboard button group",children:[Object(m.jsx)(j.a,{onClick:function(){return function(e){f(e),l(e.name)}(e)},children:"Edit"}),Object(m.jsx)(j.a,{onClick:function(){return function(e){t(T(e))}(e)},children:"Remove"})]})]})}));return Object(m.jsxs)("div",{className:M.a.Home,children:[Object(m.jsx)("h1",{children:"My Dashboards"}),e.length?Object(m.jsx)("ul",{children:A}):Object(m.jsx)("p",{children:"No dashboards to show."}),Object(m.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){s(!0)},children:"Add a new dashboard"}),Object(m.jsxs)(k.a,{open:d,onClose:function(){return s(!1)},children:[Object(m.jsx)(C.a,{children:"Add Dashboard"}),Object(m.jsx)(z.a,{id:"add-dashboard-name",label:"Dashboard Name",onChange:p}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)(y.a,{children:"Dashboard Type"}),Object(m.jsx)(S.a,{button:!0,onClick:function(){return I("amount")},children:Object(m.jsx)(w.a,{primary:"Amount Dashboard"})}),Object(m.jsx)(S.a,{button:!0,onClick:function(){return I("daily")},children:Object(m.jsx)(w.a,{primary:"Daily Dashboard"})})]})]}),Object(m.jsxs)(k.a,{open:!!O,onClose:function(){return f(null)},children:[Object(m.jsx)(C.a,{children:"Edit Dashboard"}),Object(m.jsx)(z.a,{id:"edit-dashboard-name",label:"Dashboard Name",value:b,onChange:p}),Object(m.jsx)(j.a,{onClick:function(){O&&(t(P(Object(v.a)(Object(v.a)({},O),{},{name:b}))),l(""),f(null))},disabled:!b,children:"Submit"})]})]})},q=c(68),G=c.n(q),K=function(){return Object(m.jsx)("div",{className:G.a.About,children:"About Component"})},Q=c(69),U=c.n(Q),V=c(70),W=c.n(V),X=function(e){return Object(m.jsx)("div",{className:W.a.AmountDashboard,children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:e.data.name}),Object(m.jsxs)("div",{className:"dashboardNav",children:[Object(m.jsx)("button",{children:"back"}),Object(m.jsx)("h3",{children:"this week"}),Object(m.jsx)("button",{children:"forward"}),Object(m.jsx)("button",{children:"calendar"})]}),Object(m.jsx)("figure",{children:Object(m.jsx)("figcaption",{children:"graph"})}),Object(m.jsx)("button",{children:"add run"}),Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"total this week"}),Object(m.jsx)("td",{children:"21 hrs"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"increase since last week"}),Object(m.jsx)("td",{children:"+20%"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"average per day"}),Object(m.jsx)("td",{children:"3 hrs"})]})]})]})})},Y=c(71),Z=c.n(Y),$=function(e){return Object(m.jsx)("div",{className:Z.a.DailyDashboard,children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:e.data.name}),Object(m.jsxs)("div",{className:"dashboardNav",children:[Object(m.jsx)("button",{children:"back"}),Object(m.jsx)("h3",{children:"this month"}),Object(m.jsx)("button",{children:"forward"}),Object(m.jsx)("button",{children:"calendar"})]}),Object(m.jsxs)("table",{className:"calendar",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"sun"}),Object(m.jsx)("th",{children:"mon"}),Object(m.jsx)("th",{children:"tue"}),Object(m.jsx)("th",{children:"wed"}),Object(m.jsx)("th",{children:"thu"}),Object(m.jsx)("th",{children:"fri"}),Object(m.jsx)("th",{children:"sat"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:"1"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"2"}),Object(m.jsx)("td",{children:"3"}),Object(m.jsx)("td",{children:"4"}),Object(m.jsx)("td",{children:"5"}),Object(m.jsx)("td",{children:"6"}),Object(m.jsx)("td",{children:"7"}),Object(m.jsx)("td",{children:"8"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"9"}),Object(m.jsx)("td",{children:"10"}),Object(m.jsx)("td",{children:"11"}),Object(m.jsx)("td",{children:"12"}),Object(m.jsx)("td",{children:"13"}),Object(m.jsx)("td",{children:"14"}),Object(m.jsx)("td",{children:"15"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"16"}),Object(m.jsx)("td",{children:"17"}),Object(m.jsx)("td",{children:"18"}),Object(m.jsx)("td",{children:"19"}),Object(m.jsx)("td",{children:"20"}),Object(m.jsx)("td",{children:"21"}),Object(m.jsx)("td",{children:"22"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"23"}),Object(m.jsx)("td",{children:"24"}),Object(m.jsx)("td",{children:"25"}),Object(m.jsx)("td",{children:"26"}),Object(m.jsx)("td",{children:"27"}),Object(m.jsx)("td",{children:"28"}),Object(m.jsx)("td",{children:"29"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"30"}),Object(m.jsx)("td",{children:"31"}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{})]})]}),Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"total this month"}),Object(m.jsx)("td",{children:"21 hrs"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"increase since last month"}),Object(m.jsx)("td",{children:"+20%"})]})]})]})})},_=function(){var e=Object(r.f)().id,t=Object(u.c)((function(e){return e.userData.dashboards})).find((function(t){return t.id===e}));if(!t)return Object(m.jsx)("p",{children:"cannot find dashboard with id"});switch(t.kind){case"amount":return Object(m.jsx)(X,{data:t});case"daily":return Object(m.jsx)($,{data:t});default:return Object(m.jsx)("div",{className:U.a.DashboardPage,children:"Dashboard Component"})}};c(102);var ee=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/dashboard/:id",component:_}),Object(m.jsx)(r.a,{path:"/about",component:K}),Object(m.jsx)(r.a,{path:"/",component:R})]})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,d=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),d(e),s(e)}))};s.a.render(Object(m.jsx)(x.a,{children:Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(u.a,{store:H,children:Object(m.jsx)(ee,{})})})}),document.getElementById("root")),te()},60:function(e,t,c){},61:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},86:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.0b6b9b24.chunk.js.map