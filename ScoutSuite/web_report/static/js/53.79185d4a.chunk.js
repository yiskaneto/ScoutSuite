(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[53],{683:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n(15),r=n.n(s),i=n(741),u=n(55),l=n(77),o=n(43),j=n(771),b=n(761),d=n(63);t.default=function(e){var t,n=e.data,s=r()(n,["item"],{}),h=Object(c.useMemo)((function(){return s.instances?s.instances.map((function(e){return e.instance_id})):[]}),[n]),p=Object(j.a)("computeengine","instances",h),O=p.data,f=p.loading;return n?Object(a.jsxs)(u.a,{data:n,children:[Object(a.jsxs)(b.a,{children:[Object(a.jsx)(u.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(u.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(u.c,{label:"Project ID",valuePath:"project_id"}),Object(a.jsx)(u.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(u.c,{label:"Creation Date",valuePath:"creation_timestamp",renderValue:o.h}),Object(a.jsx)(u.c,{label:"IP Range",valuePath:"ip_range"}),Object(a.jsx)(u.c,{label:"Gateway Address",valuePath:"gateway_address"}),Object(a.jsx)(u.c,{label:"Private Google Access",valuePath:"private_ip_google_access",renderValue:o.c})]}),Object(a.jsx)(l.b,{children:Object(a.jsx)(l.a,{title:"Compute Engine Instances",children:Object(a.jsxs)(u.b,{path:"instances",children:[(t=O,t&&0!==t.length?Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(d.a,{service:"computeengine",resource:"instances",id:e.id,name:e.name},e.id)},t)}))}):Object(a.jsx)("span",{children:"None"})),f&&Object(a.jsx)(i.a,{})]})})})]}):null}},761:function(e,t,n){"use strict";var a=n(1);n(0),n(762);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},762:function(e,t,n){},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(32),c=n.n(a),s=n(57),r=n(12),i=n(0),u=n(86),l=function(e,t,n){var a=Object(i.useState)([]),l=Object(r.a)(a,2),o=l[0],j=l[1],b=Object(i.useState)(!0),d=Object(r.a)(b,2),h=d[0],p=d[1];return Object(i.useEffect)((function(){(function(){var a=Object(s.a)(c.a.mark((function a(){var s,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&t&&n)){a.next=15;break}return p(!0),a.prev=2,s=n.map((function(n){return u.b("services/".concat(e,"/resources/").concat(t,"/").concat(n))})),a.next=6,Promise.all(s);case 6:r=a.sent,console.info("useResources response",e,t,n,r),j(r),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.error(a.t0.message);case 14:p(!1);case 15:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}})()()}),[n]),{data:o,loading:h}}}}]);
//# sourceMappingURL=53.79185d4a.chunk.js.map