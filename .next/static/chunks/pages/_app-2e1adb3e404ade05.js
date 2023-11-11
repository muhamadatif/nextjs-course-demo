(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1444)}])},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return f},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",l="navigate",u="restore",i="server-patch",a="prefetch",f="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),o=r._(n(7294)),l=n(4450),u=n(2227),i=n(4364),a=n(109),f=n(3607),c=n(1823),s=n(9031),d=n(920),p=n(30),_=n(7192),h=n(7498),v=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(v.has(l))return;v.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,l,i,a,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:f,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:i,children:v,prefetch:y=null,passHref:b,replace:g,shallow:O,scroll:m,locale:j,onClick:M,onMouseEnter:E,onTouchStart:C,legacyBehavior:x=!1,...P}=e;n=v,x&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let k=o.default.useContext(c.RouterContext),N=o.default.useContext(s.AppRouterContext),T=null!=k?k:N,R=!k,A=!1!==y,I=null===y?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:L,as:w}=o.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(u);return{href:e,as:i?formatStringOrUrl(i):e}}let[e,t]=(0,l.resolveHref)(k,u,!0);return{href:e,as:i?(0,l.resolveHref)(k,i):t||e}},[k,u,i]),S=o.default.useRef(L),U=o.default.useRef(w);x&&(r=o.default.Children.only(n));let F=x?r&&"object"==typeof r&&r.ref:t,[K,D,H]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(U.current!==w||S.current!==L)&&(H(),U.current=w,S.current=L),K(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[w,F,L,H,K]);o.default.useEffect(()=>{T&&D&&A&&prefetch(T,L,w,{locale:j},{kind:I},R)},[w,L,D,j,A,null==k?void 0:k.locale,T,R,I]);let X={ref:V,onClick(e){x||"function"!=typeof M||M(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&linkClicked(e,T,L,w,g,O,m,j,R,A)},onMouseEnter(e){x||"function"!=typeof E||E(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(A||!R)&&prefetch(T,L,w,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:I},R)},onTouchStart(e){x||"function"!=typeof C||C(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(A||!R)&&prefetch(T,L,w,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:I},R)}};if((0,a.isAbsoluteUrl)(w))X.href=w;else if(!x||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(w,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);X.href=t||(0,_.addBasePath)((0,f.addLocale)(w,e,null==k?void 0:k.defaultLocale))}return x?o.default.cloneElement(r,X):o.default.createElement("a",{...P,...X},n)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),l="function"==typeof IntersectionObserver,u=new Map,i=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),u.set(n,t),t}function observe(e,t,n){let{id:r,observer:o,elements:l}=createObserver(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:u}=e,i=u||!l,[a,f]=(0,r.useState)(!1),c=(0,r.useRef)(null),s=(0,r.useCallback)(e=>{c.current=e},[]);(0,r.useEffect)(()=>{if(l){if(i||a)return;let e=c.current;if(e&&e.tagName){let r=observe(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!a){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,a,c.current]);let d=(0,r.useCallback)(()=>{f(!1)},[]);return[s,a,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1444:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _app}});var r=n(5893),o=n(1664),l=n.n(o),u=n(2796),i=n.n(u),layout_MainNavigation=function(){return(0,r.jsxs)("header",{className:i().header,children:[(0,r.jsx)("div",{className:i().logo,children:"React Meetups"}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",children:"All Meetups"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},a=n(5331),f=n.n(a),layout_Layout=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(layout_MainNavigation,{}),(0,r.jsx)("main",{className:f().main,children:e.children})]})};n(415);var _app=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(layout_Layout,{children:[(0,r.jsx)(t,{...n}),";"]})}},415:function(){},5331:function(e){e.exports={main:"Layout_main__RMpyO"}},2796:function(e){e.exports={header:"MainNavigation_header__JBIUU",logo:"MainNavigation_logo__aeMOX",active:"MainNavigation_active__y3Fl_"}},1664:function(e,t,n){e.exports=n(5170)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=e.O()}]);