import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as l,c as y,i as m,y as v,n as $,z as E,A as q}from"../chunks/scheduler.d62097a6.js";import{S as z,i as A}from"../chunks/index.186cdfe7.js";import{d as C}from"../chunks/singletons.060c3920.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=y(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function k(s,t,r){let o;return q(s,P,n=>r(0,o=n)),[o]}let F=class extends z{constructor(t){super(),A(this,t,k,j,S,{})}};export{F as component};