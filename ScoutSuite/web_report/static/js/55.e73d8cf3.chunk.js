(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[55],{621:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(700)),c=n(697),i=n(66);t.default=function(e){var t=e.data;return t?Object(a.jsx)(c.a,{data:t,children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"Name",valuePath:"name",renderValue:i.q}),Object(a.jsx)(c.c,{label:"Provisioning State",valuePath:"provisioning_state",renderValue:i.q}),Object(a.jsx)(c.c,{label:"Location",valuePath:"location",renderValue:i.q}),Object(a.jsx)(c.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(i.l)(e,i.q)}}),Object(a.jsx)(c.c,{label:"Resource group",valuePath:"resource_group_name",renderValue:i.q})]})}):null}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},695:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(694),i=n(66);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},696:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(690),o=n(7),l=n.n(o),u=n(13),s=n.n(u),d=n(10),b=n.n(d),j=n(694),v=n(66),f=n(67),p=(n(698),n(686)),h=n(204),x=n.n(h),O=n(699),m=n.n(O),g=n(205),P=n(140),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(P.a),l=o.exceptions,u=o.addException,d=o.removeException,b=Object(g.b)().enqueueSnackbar,j=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},_=n(30),N=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(_.g)(),N=Object(c.useContext)(j.a),V=Object(c.useContext)(j.b),q=Object(c.useContext)(j.c),E=Object(v.a)(g||V,u),w=m(e.value||s()(N.item,E,e.value));("boolean"===typeof w&&(w=String(w)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(v.a)(g||V,e)})):t=[E];var A=t.some((function(e){return N.path_to_issues.includes(e)})),k=N.level;if(Object(c.useEffect)((function(){A&&q(k)}),[k]),void 0===w||null===w)return null;var z=Object(r.jsx)(C,{service:P.service,finding:P.finding,path:"".concat(N.path,".").concat(t[0])}),R=Object(r.jsxs)("span",{className:l()(A&&l()("issue",k)),children:[w,A&&z]});return Object(r.jsx)(f.a,{className:l()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},O),{},{children:R})):R})};N.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=N},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(694)),c=(n(66),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(695),o=n(696)},698:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},700:function(e,t,n){"use strict";var a=n(1);n(0),n(701);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,n){}}]);
//# sourceMappingURL=55.e73d8cf3.chunk.js.map