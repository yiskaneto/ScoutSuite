(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11,121],{581:function(e,t,n){"use strict";n.r(t);var i=n(1),r=(n(0),n(55)),o=n(44);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.c,{label:"ID",valuePath:"id",renderValue:o.q}),Object(i.jsx)(r.c,{label:"ARN",valuePath:"arn",renderValue:o.q}),Object(i.jsx)(r.c,{label:"Description",valuePath:"description",renderValue:o.q}),Object(i.jsx)(r.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:o.h}),Object(i.jsx)(r.c,{label:"Path",valuePath:"path",renderValue:o.q}),Object(i.jsx)(r.c,{label:"Max Session Duration",valuePath:"max_session_duration",renderValue:o.q})]})}},625:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(13),o=(n(0),n(14)),s=n.n(o),a=n(29),c=n.n(a),l=n(44),p=n(55),u=n(769),h=n(766),g=n(581),d=n(771);t.default=function(e){var t=e.data;if(!t)return null;var n=s()(t,["item","assume_role_policy"],{}),o=s()(t,["item","instance_profiles"],{}),a=s()(t,["item","awslambdas"],{}),f=s()(t,["item","inline_policies"],{}),b=s()(t,["item","policies"],[]),m=s()(t,["item","Tags"],[]);return Object(i.jsxs)(p.a,{data:t,children:[Object(i.jsx)(h.a,{children:Object(i.jsx)(g.default,{})}),Object(i.jsxs)(u.b,{children:[Object(i.jsx)(u.a,{title:"Role Trust Policy",children:Object(i.jsx)(d.a,{policy:n.PolicyDocument,policyPath:"assume_role_policy.PolicyDocument"})}),Object(i.jsx)(u.a,{title:"Instances",disabled:c()(o),children:Object(l.l)(Object.values(o),"",Object(l.n)("ec2","instances"))}),Object(i.jsx)(u.a,{title:"Lambda Functions",disabled:c()(a),children:Object(l.l)(Object.values(a),"",Object(l.n)("awslambda","functions"))}),Object(i.jsx)(u.a,{title:"Inline Policies",disabled:c()(f),children:Object(i.jsx)(i.Fragment,{children:Object.entries(f).map((function(e,t){var n=Object(r.a)(e,2),o=n[0],s=n[1];return Object(i.jsx)(d.a,{name:s.name,policy:s.PolicyDocument,policyPath:"inline_policies.".concat(o,".PolicyDocument")},t)}))})}),Object(i.jsx)(u.a,{title:"Managed Policies",disabled:c()(b),children:Object(l.l)(b,"",l.m)}),Object(i.jsx)(u.a,{title:"Tags",disabled:c()(m),children:Object(l.j)(m)})]})]})}},766:function(e,t,n){"use strict";var i=n(1);n(0),n(767);t.a=function(e){var t=e.children;return Object(i.jsxs)("div",{className:"informations-wrapper",children:[Object(i.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,n){},768:function(e,t,n){},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c.b}));var i=n(1),r=n(13),o=n(0),s=n(8),a=n.n(s),c=n(79),l=n(80),p=n(63),u=(n(768),function(e){var t=e.title,n=e.isSelected,s=e.disabled,u=e.onClick,h=e.children,g=Object(o.useState)(""),d=Object(r.a)(g,2),f=d[0],b=d[1],m=f?Object(i.jsxs)(i.Fragment,{children:[t,p.a[f].icon]}):t;return Object(i.jsx)(l.c.Provider,{value:b,children:Object(i.jsx)(c.a,{title:m,className:a()("partial-tab-pane",f),isSelected:n,disabled:s,onClick:u,children:h})})})},770:function(e,t,n){"use strict";var i=n(37),r=n(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),s=(0,i(n(40)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=s},771:function(e,t,n){"use strict";var i=n(1),r=n(13),o=n(0),s=n(8),a=n.n(s),c=n(772),l=n.n(c),p=n(770),u=n.n(p),h=n(774),g=n.n(h),d=n(159),f=n.n(d),b=n(29),m=n.n(b),O=n(80),j=n(227),y=n(44),v=(n(773),function(e){var t=e.name,n=e.policy,s=e.policyPath,c=e.defaultOpen,p=Object(o.useContext)(O.a).path_to_issues.some((function(e){return e.includes(s)}));if(m()(n))return null;var h=Object(i.jsx)("h4",{className:"policy-title",children:t}),d=function(e,t){return Object(i.jsx)(j.a,{value:(n=e,JSON.stringify(n,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:t,renderValue:function(e){return Object(y.p)(e)}});var n},b=Object(i.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var o=Object(r.a)(e,2),c=o[0],p=o[1];return Object(i.jsxs)("div",{className:a()({inline:"string"===typeof p}),children:['"'.concat(c,'":\xa0'),"Statement"===c?Object(i.jsxs)(i.Fragment,{children:["[",Object(i.jsx)("br",{}),p.map((function(e,t){return Object(i.jsx)(l.a,{trigger:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,{fontSize:"inherit"}),Object(i.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(i.jsx)(g.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:d(e,"".concat(s,".Statement.").concat(t))},t)})),"]"]}):Object(i.jsx)(i.Fragment,{children:d(p)}),t<f()(n)-1&&",",Object(i.jsx)("br",{})]},t)})),"}"]});return Object(i.jsx)("div",{className:"policy",children:t?Object(i.jsx)(l.a,{trigger:Object(i.jsxs)(i.Fragment,{children:[h,Object(i.jsx)(u.a,{fontSize:"inherit"})]}),triggerWhenOpen:Object(i.jsxs)(i.Fragment,{children:[h,Object(i.jsx)(g.a,{fontSize:"inherit"})]}),transitionTime:1,open:c||p,children:b}):b})});v.defaultProps={defaultOpen:!1},t.a=v},772:function(e,t,n){var i;e.exports=(i=n(0),function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=i},function(e,t,n){"use strict";var i=n(3);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,s){if(s!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(0),s=n.n(o),a=function(e){return 0!==e};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,i,o=h(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),b(d(t=o.call(this,e)),"continueOpenCollapsible",(function(){var e=d(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:a(e.scrollHeight),shouldOpenOnNextCycle:!1})})),b(d(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),b(d(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),b(d(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=s,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:a(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:a(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?r.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?r.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",i=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,a=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,p="".concat(this.props.classParentString,"__trigger ").concat(n," ").concat(i," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u="".concat(this.props.classParentString," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),h="".concat(this.props.classParentString,"__contentOuter ").concat(this.props.contentOuterClassName),g="".concat(this.props.classParentString,"__contentInner ").concat(this.props.contentInnerClassName);return r.a.createElement(s,l({className:u.trim()},this.props.containerElementProps),r.a.createElement(a,l({className:p.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),r.a.createElement("div",{className:h.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},r.a.createElement("div",{className:g.trim()},c)))}}])&&p(t.prototype,n),i&&p(t,i),s}(i.Component);m.propTypes={transitionTime:s.a.number,transitionCloseTime:s.a.number,triggerTagName:s.a.string,easing:s.a.string,open:s.a.bool,containerElementProps:s.a.object,triggerElementProps:s.a.object,classParentString:s.a.string,openedClassName:s.a.string,triggerStyle:s.a.object,triggerClassName:s.a.string,triggerOpenedClassName:s.a.string,contentOuterClassName:s.a.string,contentInnerClassName:s.a.string,accordionPosition:s.a.oneOfType([s.a.string,s.a.number]),handleTriggerClick:s.a.func,onOpen:s.a.func,onClose:s.a.func,onOpening:s.a.func,onClosing:s.a.func,onTriggerOpening:s.a.func,onTriggerClosing:s.a.func,trigger:s.a.oneOfType([s.a.string,s.a.element]),triggerWhenOpen:s.a.oneOfType([s.a.string,s.a.element]),triggerDisabled:s.a.bool,lazyRender:s.a.bool,overflowWhenOpen:s.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:s.a.bool,triggerSibling:s.a.oneOfType([s.a.element,s.a.func]),tabIndex:s.a.number,contentContainerTagName:s.a.string},m.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=m}]))},773:function(e,t,n){},774:function(e,t,n){"use strict";var i=n(37),r=n(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),s=(0,i(n(40)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=s}}]);
//# sourceMappingURL=11.72e1acc4.chunk.js.map