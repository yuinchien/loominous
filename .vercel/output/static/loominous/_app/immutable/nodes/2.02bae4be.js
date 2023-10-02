import{s as u0,f as V,g as A,h as q,d as p,j as h,i as J,z as c0,B as J0,e as a0,C as K,D as L0,E as i0,l as b0,a as G,m as k0,c as H,y as S,o as M0}from"../chunks/scheduler.d62097a6.js";import{S as g0,i as _0,b as X,d as Y,m as Z,a as E,c as r0,t as z,e as e0,g as o0}from"../chunks/index.186cdfe7.js";import{v as D0}from"../chunks/environment.9e0b1bba.js";function $(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function E0(r,t,n){const e=r.slice();return e[9]=t[n],e}function S0(r,t,n){const e=r.slice();return e[9]=t[n],e[11]=n,e}function y0(r){let t,n=$(r[0]),e=[];for(let l=0;l<n.length;l+=1)e[l]=W0(E0(r,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=a0()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=a0()},m(l,o){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,o);J(l,t,o)},p(l,o){if(o&17){n=$(l[0]);let s;for(s=0;s<n.length;s+=1){const u=E0(l,n,s);e[s]?e[s].p(u,o):(e[s]=W0(u),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},d(l){l&&p(t),K(e,l)}}}function Q0(r){let t,n=$(r[0]),e=[];for(let l=0;l<n.length;l+=1)e[l]=V0(S0(r,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=a0()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=a0()},m(l,o){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,o);J(l,t,o)},p(l,o){if(o&49){n=$(l[0]);let s;for(s=0;s<n.length;s+=1){const u=S0(l,n,s);e[s]?e[s].p(u,o):(e[s]=V0(u),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},d(l){l&&p(t),K(e,l)}}}function W0(r){let t,n;return{c(){t=V("div"),this.h()},l(e){t=A(e,"DIV",{class:!0}),q(t).forEach(p),this.h()},h(){h(t,"class",n="box "+r[4][r[9]])},m(e,l){J(e,t,l)},p(e,l){l&1&&n!==(n="box "+e[4][e[9]])&&h(t,"class",n)},d(e){e&&p(t)}}}function V0(r){let t,n,e,l;function o(){return r[7](r[11])}return{c(){t=V("div"),this.h()},l(s){t=A(s,"DIV",{class:!0}),q(t).forEach(p),this.h()},h(){h(t,"class",n="box "+r[4][r[9]])},m(s,u){J(s,t,u),e||(l=L0(t,"click",o),e=!0)},p(s,u){r=s,u&1&&n!==(n="box "+r[4][r[9]])&&h(t,"class",n)},d(s){s&&p(t),e=!1,l()}}}function T0(r){let t;function n(o,s){return o[2]?Q0:y0}let e=n(r),l=e(r);return{c(){t=V("squares"),l.c(),this.h()},l(o){t=A(o,"SQUARES",{class:!0,index:!0});var s=q(t);l.l(s),s.forEach(p),this.h()},h(){h(t,"class",r[1]),h(t,"index",r[3])},m(o,s){J(o,t,s),l.m(t,null)},p(o,[s]){e===(e=n(o))&&l?l.p(o,s):(l.d(1),l=e(o),l&&(l.c(),l.m(t,null))),s&2&&h(t,"class",o[1]),s&8&&h(t,"index",o[3])},i:c0,o:c0,d(o){o&&p(t),l.d()}}}function G0(r,t,n){let{pattern:e=[]}=t,{classname:l=""}=t,{sectionId:o=""}=t,{interactive:s=!1}=t,{index:u=-1}=t;const f=["a","b","c","d"],L=J0(),_=D=>{L("update",{sectionId:o,index:D})},N=D=>_(D);return r.$$set=D=>{"pattern"in D&&n(0,e=D.pattern),"classname"in D&&n(1,l=D.classname),"sectionId"in D&&n(6,o=D.sectionId),"interactive"in D&&n(2,s=D.interactive),"index"in D&&n(3,u=D.index)},[e,l,s,u,f,_,o,N]}class h0 extends g0{constructor(t){super(),_0(this,t,G0,T0,u0,{pattern:0,classname:1,sectionId:6,interactive:2,index:3})}}function A0(r,t,n){const e=r.slice();return e[7]=t[n],e[9]=n,e}function q0(r){let t,n,e;function l(){return r[5](r[9])}return{c(){t=V("div"),this.h()},l(o){t=A(o,"DIV",{class:!0}),q(t).forEach(p),this.h()},h(){h(t,"class","box"),i0(t,"x",r[7]===1)},m(o,s){J(o,t,s),n||(e=L0(t,"click",l),n=!0)},p(o,s){r=o,s&1&&i0(t,"x",r[7]===1)},d(o){o&&p(t),n=!1,e()}}}function H0(r){let t,n=$(r[0]),e=[];for(let l=0;l<n.length;l+=1)e[l]=q0(A0(r,n,l));return{c(){t=V("circles");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=A(l,"CIRCLES",{class:!0});var o=q(t);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(p),this.h()},h(){h(t,"class",r[1])},m(l,o){J(l,t,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(l,[o]){if(o&5){n=$(l[0]);let s;for(s=0;s<n.length;s+=1){const u=A0(l,n,s);e[s]?e[s].p(u,o):(e[s]=q0(u),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}o&2&&h(t,"class",l[1])},i:c0,o:c0,d(l){l&&p(t),K(e,l)}}}function K0(r,t,n){let{pattern:e=[]}=t,{classname:l=""}=t,{sectionId:o=""}=t,{parentIndex:s=-1}=t;const u=J0(),f=_=>{u("update",{sectionId:o,index:_,parentIndex:s})},L=_=>f(_);return r.$$set=_=>{"pattern"in _&&n(0,e=_.pattern),"classname"in _&&n(1,l=_.classname),"sectionId"in _&&n(3,o=_.sectionId),"parentIndex"in _&&n(4,s=_.parentIndex)},[e,l,f,o,s,L]}class f0 extends g0{constructor(t){super(),_0(this,t,K0,H0,u0,{pattern:0,classname:1,sectionId:3,parentIndex:4})}}function C0(r,t,n){const e=r.slice();return e[15]=t[n],e[17]=n,e}function B0(r,t,n){const e=r.slice();return e[15]=t[n],e[17]=n,e}function P0(r,t,n){const e=r.slice();return e[15]=t[n],e[17]=n,e}function z0(r,t,n){const e=r.slice();return e[15]=t[n],e[17]=n,e}function U0(r){let t,n;return t=new f0({props:{pattern:r[15],classname:"row reverse",sectionId:"threading",parentIndex:r[17]}}),t.$on("update",r[3]),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,l){Z(t,e,l),n=!0},p(e,l){const o={};l&4&&(o.pattern=e[15]),t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){e0(t,e)}}}function $0(r){let t,n;return t=new f0({props:{pattern:r[15],classname:"col reverse",sectionId:"tieup",parentIndex:r[17]}}),t.$on("update",r[3]),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,l){Z(t,e,l),n=!0},p(e,l){const o={};l&4&&(o.pattern=e[15]),t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){e0(t,e)}}}function N0(r){let t,n;return t=new h0({props:{pattern:r[15],classname:"row reverse",sectionId:"drawdown",interactive:!1}}),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,l){Z(t,e,l),n=!0},p(e,l){const o={};l&1&&(o.pattern=e[15]),t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){e0(t,e)}}}function j0(r){let t,n;return t=new f0({props:{pattern:r[15],classname:"row",sectionId:"treadling",parentIndex:r[17]}}),t.$on("update",r[3]),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,l){Z(t,e,l),n=!0},p(e,l){const o={};l&4&&(o.pattern=e[15]),t.$set(o)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){z(t.$$.fragment,e),n=!1},d(e){e0(t,e)}}}function X0(r){let t,n,e,l,o,s,u,f,L,_,N,D,j,t0,C,d,m,B,k,W,O,d0,F,R,l0;f=new h0({props:{pattern:r[2].colorWarps,classname:"row reverse",sectionId:"colorWarps",interactive:!0}}),f.$on("update",r[4]);let M=$(r[2].threading),v=[];for(let c=0;c<M.length;c+=1)v[c]=U0(z0(r,M,c));const O0=c=>z(v[c],1,1,()=>{v[c]=null});let y=$(r[2].tieup),I=[];for(let c=0;c<y.length;c+=1)I[c]=$0(P0(r,y,c));const R0=c=>z(I[c],1,1,()=>{I[c]=null});let Q=$(r[0]),w=[];for(let c=0;c<Q.length;c+=1)w[c]=N0(B0(r,Q,c));const x0=c=>z(w[c],1,1,()=>{w[c]=null});let T=$(r[2].treadling),b=[];for(let c=0;c<T.length;c+=1)b[c]=j0(C0(r,T,c));const F0=c=>z(b[c],1,1,()=>{b[c]=null});return O=new h0({props:{pattern:r[2].colorWefts,classname:"col",sectionId:"colorWefts",interactive:!0}}),O.$on("update",r[4]),R=new f0({props:{pattern:r[2].checklist,classname:"col",sectionId:"checklist"}}),R.$on("update",r[3]),{c(){t=V("div"),n=b0("Updated "),e=b0(D0),l=G(),o=V("div"),s=V("div"),u=V("div"),X(f.$$.fragment),L=G(),_=V("div"),N=V("div");for(let c=0;c<v.length;c+=1)v[c].c();D=G(),j=V("div");for(let c=0;c<I.length;c+=1)I[c].c();t0=G(),C=V("div"),d=V("div");for(let c=0;c<w.length;c+=1)w[c].c();m=G(),B=V("div");for(let c=0;c<b.length;c+=1)b[c].c();k=G(),W=V("div"),X(O.$$.fragment),d0=G(),F=V("div"),X(R.$$.fragment),this.h()},l(c){t=A(c,"DIV",{id:!0});var i=q(t);n=k0(i,"Updated "),e=k0(i,D0),i.forEach(p),l=H(c),o=A(c,"DIV",{id:!0});var g=q(o);s=A(g,"DIV",{class:!0});var n0=q(s);u=A(n0,"DIV",{id:!0,class:!0});var s0=q(u);Y(f.$$.fragment,s0),s0.forEach(p),n0.forEach(p),L=H(g),_=A(g,"DIV",{class:!0});var a=q(_);N=A(a,"DIV",{id:!0,class:!0});var U=q(N);for(let P=0;P<v.length;P+=1)v[P].l(U);U.forEach(p),D=H(a),j=A(a,"DIV",{id:!0,class:!0});var p0=q(j);for(let P=0;P<I.length;P+=1)I[P].l(p0);p0.forEach(p),a.forEach(p),t0=H(g),C=A(g,"DIV",{class:!0});var x=q(C);d=A(x,"DIV",{id:!0,class:!0});var m0=q(d);for(let P=0;P<w.length;P+=1)w[P].l(m0);m0.forEach(p),m=H(x),B=A(x,"DIV",{id:!0,class:!0});var v0=q(B);for(let P=0;P<b.length;P+=1)b[P].l(v0);v0.forEach(p),k=H(x),W=A(x,"DIV",{id:!0,class:!0});var I0=q(W);Y(O.$$.fragment,I0),I0.forEach(p),d0=H(x),F=A(x,"DIV",{id:!0,class:!0});var w0=q(F);Y(R.$$.fragment,w0),w0.forEach(p),x.forEach(p),g.forEach(p),this.h()},h(){h(t,"id","lastUpdate"),i0(t,"show",r[1]),h(u,"id","colorWarps"),h(u,"class","container borderless"),h(s,"class","row"),h(N,"id","threading"),h(N,"class","container dots"),h(j,"id","tieup"),h(j,"class","container dots"),h(_,"class","row sticky"),h(d,"id","drawdown"),h(d,"class","container borderless"),h(B,"id","treadling"),h(B,"class","container dots"),h(W,"id","colorWefts"),h(W,"class","container borderless"),h(F,"id","checklist"),h(F,"class","container borderless"),h(C,"class","row"),h(o,"id","canvas")},m(c,i){J(c,t,i),S(t,n),S(t,e),J(c,l,i),J(c,o,i),S(o,s),S(s,u),Z(f,u,null),S(o,L),S(o,_),S(_,N);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(N,null);S(_,D),S(_,j);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(j,null);S(o,t0),S(o,C),S(C,d);for(let g=0;g<w.length;g+=1)w[g]&&w[g].m(d,null);S(C,m),S(C,B);for(let g=0;g<b.length;g+=1)b[g]&&b[g].m(B,null);S(C,k),S(C,W),Z(O,W,null),S(C,d0),S(C,F),Z(R,F,null),l0=!0},p(c,[i]){(!l0||i&2)&&i0(t,"show",c[1]);const g={};if(i&4&&(g.pattern=c[2].colorWarps),f.$set(g),i&12){M=$(c[2].threading);let a;for(a=0;a<M.length;a+=1){const U=z0(c,M,a);v[a]?(v[a].p(U,i),E(v[a],1)):(v[a]=U0(U),v[a].c(),E(v[a],1),v[a].m(N,null))}for(o0(),a=M.length;a<v.length;a+=1)O0(a);r0()}if(i&12){y=$(c[2].tieup);let a;for(a=0;a<y.length;a+=1){const U=P0(c,y,a);I[a]?(I[a].p(U,i),E(I[a],1)):(I[a]=$0(U),I[a].c(),E(I[a],1),I[a].m(j,null))}for(o0(),a=y.length;a<I.length;a+=1)R0(a);r0()}if(i&1){Q=$(c[0]);let a;for(a=0;a<Q.length;a+=1){const U=B0(c,Q,a);w[a]?(w[a].p(U,i),E(w[a],1)):(w[a]=N0(U),w[a].c(),E(w[a],1),w[a].m(d,null))}for(o0(),a=Q.length;a<w.length;a+=1)x0(a);r0()}if(i&12){T=$(c[2].treadling);let a;for(a=0;a<T.length;a+=1){const U=C0(c,T,a);b[a]?(b[a].p(U,i),E(b[a],1)):(b[a]=j0(U),b[a].c(),E(b[a],1),b[a].m(B,null))}for(o0(),a=T.length;a<b.length;a+=1)F0(a);r0()}const n0={};i&4&&(n0.pattern=c[2].colorWefts),O.$set(n0);const s0={};i&4&&(s0.pattern=c[2].checklist),R.$set(s0)},i(c){if(!l0){E(f.$$.fragment,c);for(let i=0;i<M.length;i+=1)E(v[i]);for(let i=0;i<y.length;i+=1)E(I[i]);for(let i=0;i<Q.length;i+=1)E(w[i]);for(let i=0;i<T.length;i+=1)E(b[i]);E(O.$$.fragment,c),E(R.$$.fragment,c),l0=!0}},o(c){z(f.$$.fragment,c),v=v.filter(Boolean);for(let i=0;i<v.length;i+=1)z(v[i]);I=I.filter(Boolean);for(let i=0;i<I.length;i+=1)z(I[i]);w=w.filter(Boolean);for(let i=0;i<w.length;i+=1)z(w[i]);b=b.filter(Boolean);for(let i=0;i<b.length;i+=1)z(b[i]);z(O.$$.fragment,c),z(R.$$.fragment,c),l0=!1},d(c){c&&(p(t),p(l),p(o)),e0(f),K(v,c),K(I,c),K(w,c),K(b,c),e0(O),e0(R)}}}function Y0(r,t,n){const e=["a","b","c","d"];let l,o=[],s=[],u=!1;o[0]='{"v":0.1,"pattern":0,"colorA":"#222222","colorB":"#eeeeee","colorC":"#7f7f7f","colorD":"#444","shafts":4,"wefts":32,"warps":56,"tieups":4,"threading":[[1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0],[0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1],[0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0]],"treadling":[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],"tieup":[[1,1,0,0],[0,1,1,0],[0,0,1,1],[1,0,0,1]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":20}',o[1]='{"v":0.1,"pattern":1,"colorA":"#ff5625","colorB":"#fff048","colorC":"#ffffff","colorD":"#ff26a4","shafts":4,"wefts":50,"warps":72,"tieups":6,"threading":[[1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1],[0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0],[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0]],"treadling":[[1,1,0,0,0,0],[1,1,0,0,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[1,0,0,0,1,0],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[1,0,1,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,0,0,0,0],[0,1,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,0],[0,0,0,1,0,1],[0,0,0,1,0,1],[0,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,1,0,1],[1,0,0,1,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,0,0,0],[0,0,1,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,1],[0,0,0,0,0,0]],"tieup":[[0,1,1,1],[0,0,1,1],[1,0,0,1],[1,1,0,0],[1,0,1,0],[0,1,1,0]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,2,0,2,0,2,0,3,0,3,0,3,0,2,2,2,2,0,0,0,0,3,3,3,3,0,0,0,0,1,2,1,2,1,0,0,0,0,1,3,1,3,1,3,1,0,0,2,1,0,2,1,0,2,1,0,2,1,0,3,0,3,0,3,0,2,0,2,0,2,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":16}',o[2]='{"v":0.1,"pattern":2,"colorA":"#0082ff","colorB":"#ffccb8","colorC":"#7f7f7f","colorD":"#444","shafts":6,"wefts":44,"warps":60,"tieups":6,"threading":[[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]],"treadling":[[1,0,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,1,1,0,0,0],[0,1,1,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,1,1,0,0,0],[0,1,1,1,0,0],[0,0,1,1,1,0],[0,0,0,1,1,1],[0,0,0,0,1,1],[1,1,1,0,0,0],[0,1,1,1,0,0],[0,0,1,1,1,0],[0,0,0,1,1,1],[0,0,0,0,1,1],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,1],[1,1,0,0,0,0],[0,1,1,0,0,0],[0,0,1,1,0,0],[0,0,0,1,1,0],[0,0,0,0,1,1],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1],[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]],"tieup":[[1,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,1]],"colorWefts":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"colorWarps":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"checklist":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"size":18}';let f={v:.1,pattern:0,colorA:"#f0e130",colorB:"#303ff0",colorC:"#FF007F",colorD:"#444",shafts:2,wefts:24,warps:24,tieups:4,threading:[],treadling:[],tieup:[],colorWefts:[],colorWarps:[],checklist:[],size:20};M0(()=>{l=document.documentElement,n(1,u=!0),setTimeout(function(){n(1,u=!1)},8e3),N()});const L=()=>{window.localStorage.setItem("preset",JSON.stringify(f))},_=()=>{C(),n(2,f),L()},N=()=>{const d=window.localStorage.getItem("preset");console.log("preset",d),console.log("PARAMS",f.shafts);let m=!1;d!=null&&JSON.parse(d).v==f.v&&(m=!0,window.localStorage.clear()),n(2,f=JSON.parse(m?d:o[0])),l.style.setProperty("--color-a",f.colorA),l.style.setProperty("--color-b",f.colorB),l.style.setProperty("--color-c",f.colorC),l.style.setProperty("--color-d",f.colorD),l.style.setProperty("--box-size",f.size+"px"),C()},D=d=>{let m=f[d.detail.sectionId][d.detail.index];d.detail.sectionId=="checklist"?(m=m==0?1:0,n(2,f[d.detail.sectionId][d.detail.index]=m,f)):(m=f[d.detail.sectionId][d.detail.parentIndex][d.detail.index],m=m==0?1:0,n(2,f[d.detail.sectionId][d.detail.parentIndex][d.detail.index]=m,f)),_()},j=d=>{let m=f[d.detail.sectionId][d.detail.index];m=m<e.length-1?m+1:0,n(2,f[d.detail.sectionId][d.detail.index]=m,f),_()},t0=()=>{let d=[];for(let m=0;m<f.wefts;m++){let B=[];for(let k=0;k<f.warps;k++)B.push(0);d.push(B)}return d},C=()=>{n(0,s=t0());for(let d=0;d<f.wefts;d++){const m=Array(f.shafts).fill(0);let B=!1;for(let k=0;k<f.treadling[d].length;k++)if(f.treadling[d][k]==1)for(let W=0;W<f.tieup[k].length;W++)f.tieup[k][W]==1&&(m[W]=1,B=!0);for(let k=0;k<f.warps;k++)if(B){n(0,s[d][k]=f.colorWefts[d],s);for(let W=0;W<f.shafts;W++)m[W]==1&&f.threading[W][k]==1&&n(0,s[d][k]=f.colorWarps[k],s)}else n(0,s[d][k]=f.colorWarps[k],s)}};return[s,u,f,D,j]}class le extends g0{constructor(t){super(),_0(this,t,Y0,X0,u0,{})}}export{le as component};
