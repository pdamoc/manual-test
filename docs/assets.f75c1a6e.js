parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zQ7y":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,e){return e.a=n,e.f=r,e}function e(n){return r(2,n,function(r){return function(e){return n(r,e)}})}function t(n){return r(3,n,function(r){return function(e){return function(t){return n(r,e,t)}}})}function a(n){return r(4,n,function(r){return function(e){return function(t){return function(a){return n(r,e,t,a)}}}})}function i(n){return r(5,n,function(r){return function(e){return function(t){return function(a){return function(i){return n(r,e,t,a,i)}}}}})}function u(n,r,e){return 2===n.a?n.f(r,e):n(r)(e)}function o(n,r,e,t){return 3===n.a?n.f(r,e,t):n(r)(e)(t)}function c(n,r,e,t,a){return 4===n.a?n.f(r,e,t,a):n(r)(e)(t)(a)}function f(n,r,e,t,a,i){return 5===n.a?n.f(r,e,t,a,i):n(r)(e)(t)(a)(i)}function l(n,r){return{a:n,b:r}}var s={$:0};function v(n,r){return{$:1,a:n,b:r}}var d=e(v);function b(n){for(var r=s,e=n.length;e--;)r=v(n[e],r);return r}var p=t(function(n,r,e){for(var t=[],a=0;n>a;a++)t[a]=e(r+a);return t}),m=e(function(n,r){for(var e=[],t=0;n>t&&r.b;t++)e[t]=r.a,r=r.b;return e.length=t,l(e,r)});function h(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var g,$=Math.ceil,E=Math.floor,x=Math.log;function y(n){return{$:2,b:n}}function L(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?an(n.c):A("null",r);case 3:return N(r)?z(n.b,r,b):A("a LIST",r);case 4:return N(r)?z(n.b,r,j):A("an ARRAY",r);case 6:var e=n.d;if("object"!=typeof r||null===r||!(e in r))return A("an OBJECT with a field named `"+e+"`",r);var t=L(n.b,r[e]);return Nn(t)?t:nn(u(en,e,t.a));case 7:var a=n.e;return N(r)?r.length>a?(t=L(n.b,r[a]),Nn(t)?t:nn(u(tn,a,t.a))):A("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r):A("an ARRAY",r);case 8:if("object"!=typeof r||null===r||N(r))return A("an OBJECT",r);var i=s;for(var o in r)if(r.hasOwnProperty(o)){if(t=L(n.b,r[o]),!Nn(t))return nn(u(en,o,t.a));i=v(l(o,t.a),i)}return an(cn(i));case 9:for(var c=n.f,f=n.g,d=0;f.length>d;d++){if(t=L(f[d],r),!Nn(t))return t;c=c(t.a)}return an(c);case 10:return t=L(n.b,r),Nn(t)?L(n.h(t.a),r):t;case 11:for(var p=s,m=n.g;m.b;m=m.b){if(t=L(m.a,r),Nn(t))return t;p=v(t.a,p)}return nn(un(cn(p)));case 1:return nn(u(rn,n.a,F(r)));case 0:return an(n.a)}}function z(n,r,e){for(var t=r.length,a=[],i=0;t>i;i++){var o=L(n,r[i]);if(!Nn(o))return nn(u(tn,i,o.a));a[i]=o.a}return an(e(a))}function N(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function j(n){return u(zn,n.length,function(r){return n[r]})}function A(n,r){return nn(u(rn,"Expecting "+n,F(r)))}function F(n){return n}function k(n){return n}y(function(n){return"number"!=typeof n?A("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?an(n):!isFinite(n)||n%1?A("an INT",n):an(n)}),y(function(n){return"boolean"==typeof n?an(n):A("a BOOL",n)}),y(function(n){return"number"==typeof n?an(n):A("a FLOAT",n)}),y(function(n){return an(F(n))}),y(function(n){return"string"==typeof n?an(n):n instanceof String?an(n+""):A("a STRING",n)}),F(null);var w="undefined"!=typeof document?document:{};var I=a(function(n,r,e,t){var a=t.node;return a.parentNode.replaceChild(function n(r,e){var t=r.$;if(5===t)return n(r.k||(r.k=r.m()),e);if(0===t)return w.createTextNode(r.a);if(4===t){for(var a=r.k,i=r.j;4===a.$;)"object"!=typeof i?i=[i,a.j]:i.push(a.j),a=a.k;var u={j:i,p:e};return(o=n(a,u)).elm_event_node_ref=u,o}if(3===t)return B(o=r.h(r.g),e,r.d),o;var o=r.f?w.createElementNS(r.f,r.c):w.createElement(r.c);g&&"a"==r.c&&o.addEventListener("click",g(o)),B(o,e,r.d);for(var c=r.e,f=0;c.length>f;f++)l=o,s=n(1===t?c[f]:c[f].b,e),l.appendChild(s);var l,s;return o}(n,function(){}),a),{}});var M=e(function(n,r){return e(function(e,t){for(var a=[],i=0;t.b;t=t.b){var u=t.a;i+=u.b||0,a.push(u)}return i+=a.length,{$:1,c:r,d:C(e),e:a,f:n,b:i}})})(void 0);e(function(n,r){return e(function(e,t){for(var a=[],i=0;t.b;t=t.b){var u=t.a;i+=u.b.b||0,a.push(u)}return i+=a.length,{$:2,c:r,d:C(e),e:a,f:n,b:i}})})(void 0);var O,P=e(function(n,r){return{$:"a1",n:n,o:r}}),R=e(function(n,r){return{$:"a2",n:n,o:r}}),T=e(function(n,r){return{$:"a3",n:n,o:r}});function C(n){for(var r={};n.b;n=n.b){var e=n.a,t=e.$,a=e.n,i=e.o;if("a2"!==t){var u=r[t]||(r[t]={});"a3"===t&&"class"===a?S(u,a,i):u[a]=i}else"className"===a?S(r,a,k(i)):r[a]=k(i)}return r}function S(n,r,e){var t=n[r];n[r]=t?t+" "+e:e}function B(n,r,e){for(var t in e){var a=e[t];"a1"===t?q(n,a):"a0"===t?G(n,r,a):"a3"===t?D(n,a):"a4"===t?J(n,a):("value"!==t&&"checked"!==t||n[t]!==a)&&(n[t]=a)}}function q(n,r){var e=n.style;for(var t in r)e[t]=r[t]}function D(n,r){for(var e in r){var t=r[e];void 0!==t?n.setAttribute(e,t):n.removeAttribute(e)}}function J(n,r){for(var e in r){var t=r[e],a=t.f,i=t.o;void 0!==i?n.setAttributeNS(a,e,i):n.removeAttributeNS(a,e)}}function G(n,r,e){var t=n.elmFs||(n.elmFs={});for(var a in e){var i=e[a],u=t[a];if(i){if(u){if(u.q.$===i.$){u.q=i;continue}n.removeEventListener(a,u)}u=U(r,i),n.addEventListener(a,u,O&&{passive:2>jn(i)}),t[a]=u}else n.removeEventListener(a,u),t[a]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){O=!0}}))}catch(n){}function U(n,r){function e(r){var t=e.q,a=L(t.a,r);if(Nn(a)){for(var i,u=jn(t),o=a.a,c=u?3>u?o.a:o.o:o,f=1==u?o.b:3==u&&o.L,l=(f&&r.stopPropagation(),(2==u?o.b:3==u&&o.I)&&r.preventDefault(),n);i=l.j;){if("function"==typeof i)c=i(c);else for(var s=i.length;s--;)c=i[s](c);l=l.p}l(c,f)}}return e.q=r,e}var _,Y,V,H,K,Q,W,X,Z=d,nn=function(n){return{$:1,a:n}},rn=e(function(n,r){return{$:3,a:n,b:r}}),en=e(function(n,r){return{$:0,a:n,b:r}}),tn=e(function(n,r){return{$:1,a:n,b:r}}),an=function(n){return{$:0,a:n}},un=function(n){return{$:2,a:n}},on=t(function(n,r,e){for(;;){if(!e.b)return r;var t=e.b,a=n,i=u(n,e.a,r);n=a,r=i,e=t}}),cn=function(n){return o(on,Z,s,n)},fn=a(function(n,r,e,t){return{$:0,a:n,b:r,c:e,d:t}}),ln=[],sn=$,vn=e(function(n,r){return x(r)/x(n)}),dn=sn(u(vn,2,32)),bn=c(fn,0,dn,ln,ln),pn=p,mn=E,hn=function(n){return n.length},gn=e(function(n,r){return function n(r,e,t){if("object"!=typeof r)return r===e?0:e>r?-1:1;if(void 0===r.$)return(t=n(r.a,e.a))?t:(t=n(r.b,e.b))?t:n(r.c,e.c);for(;r.b&&e.b&&!(t=n(r.a,e.a));r=r.b,e=e.b);return t||(r.b?1:e.b?-1:0)}(n,r)>0?n:r}),$n=m,En=e(function(n,r){for(;;){var e=u($n,32,n),t=e.b,a=u(Z,{$:0,a:e.a},r);if(!t.b)return cn(a);n=t,r=a}}),xn=e(function(n,r){for(;;){var e=sn(r/32);if(1===e)return u($n,32,n).a;n=u(En,n,s),r=e}}),yn=e(function(n,r){if(r.a){var e=32*r.a,t=mn(u(vn,32,e-1)),a=n?cn(r.d):r.d,i=u(xn,a,r.a);return c(fn,hn(r.c)+e,u(gn,5,t*dn),i,r.c)}return c(fn,hn(r.c),dn,ln,r.c)}),Ln=i(function(n,r,e,t,a){for(;;){if(0>r)return u(yn,!1,{d:t,a:e/32|0,c:a});var i={$:1,a:o(pn,32,r,n)};n=n,r-=32,e=e,t=u(Z,i,t),a=a}}),zn=e(function(n,r){if(n>0){var e=n%32;return f(Ln,r,n-e-32,n,s,o(pn,e,n-e,r))}return bn}),Nn=function(n){return!n.$},jn=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},An=M("div"),Fn=M("h2"),kn=e(function(n,r){return u(T,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),wn=M("header"),In=M("span"),Mn=function(n){return{$:0,a:n}},On=function(n){return u(In,s,b([Mn(n)]))},Pn=t(function(n,r,e){return u(wn,s,b([On(n),On(r),On(e)]))}),Rn=M("footer"),Tn=kn("role"),Cn=M("h3"),Sn=function(n){var r=n.F,e=n.M,t=n.E;return u(An,b([Tn("box"),u(kn,"data-color",r)]),b([u(Cn,s,b([Mn(e)])),t]))},Bn=M("br"),qn=F,Dn=e(function(n,r){return u(R,n,qn(r))}),Jn=Dn("className"),Gn=M("em"),Un=M("input"),_n=M("li"),Yn=M("ol"),Vn=M("p"),Hn=An(b([Jn("row")])),Kn=An(b([Jn("stack")])),Qn=An(b([Jn("stack stack-small")])),Wn=P,Xn=M("textarea"),Zn=Dn("type"),nr=M("ul"),rr=Dn("value"),er=Kn(b([Sn({F:"purple",E:u(An,s,b([u(Yn,s,b([u(_n,s,b([u(In,s,b([Mn("Grupează ideile din rubrica "),u(Gn,s,b([Mn("Explorare")])),Mn(" (pagina 49) într-un plan simplu, urmărind sugestiile din tabel")])),u(An,b([u(Wn,"padding","var(--s-1)")]),b([Qn(b([Hn(b([u(An,b([Jn("col-3")]),b([u(In,b([Jn("box-color")]),b([Mn("Precizează cum începe acțiunea."),u(Bn,s,s),Mn("(Cine? Ce face? Unde? Când?)")]))])),u(An,b([Jn("col-9 d-flex align-items-center")]),b([u(Un,b([Zn("text"),rr("Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei.")]),s)]))])),Hn(b([u(An,b([Jn("col-3")]),b([u(An,b([Jn("box-color")]),b([u(In,s,b([Mn("Prezintă ce se întâmplă:")])),u(nr,s,b([u(_n,s,b([Mn("cum se declanșează acțiunea;")])),u(_n,s,b([Mn("cum se desfășoară acțiunea;")])),u(_n,s,b([Mn("cum sunt depășite complicațiile")]))]))]))])),u(An,b([Jn("col-9 d-flex align-items-center")]),b([u(Xn,s,s)]))])),Hn(b([u(An,b([Jn("col-3")]),b([u(In,b([Jn("box-color")]),b([Mn("Notează finalul întâmplării.")]))])),u(An,b([Jn("col-9 d-flex align-items-center")]),b([u(Un,b([Zn("text")]),s)]))]))]))]))])),u(_n,s,b([Mn("Formulează o idee care să completeze, prin detalii, prima idee principală de la exercițiul anterior.")]))]))])),M:"Explorare"}),Sn({F:"orange",E:u(An,s,b([u(Vn,s,b([u(In,b([Jn("box-color")]),b([Mn("Ideile secundare")])),Mn(" prezintă amănunte legate de ideea principală, completând-o.")])),u(Vn,s,b([u(In,b([Jn("box-color")]),b([Mn("Planul dezvoltat de idei")])),Mn(" cuprinde ideile principale și ideile secundare corespunzătoare acestora, în ordinea în care apar în text.")]))])),M:"Repere"}),Sn({F:"green",E:u(Vn,s,b([Mn(" Lucrați în grupe de câte 4 – 5 elevi. Schițați o bandă desenată în care să surprindeți cele mai importante secvențe ale schiței "),u(Gn,s,b([Mn("Vizită")])),Mn("....")])),M:"Repere"})])),tr=M("strong");X={Main:{init:I((Y=(_={ar:"Lectură",E:u(An,s,b([u(Fn,b([u(Wn,"color","var(--color-orange)")]),b([("Lecția 3.",u(tr,s,b([Mn("Lecția 3.")]))),Mn(" Planul dezvoltat de idei")])),er])),av:"De-a ce mă joc",aB:!1,aD:51,aJ:"Unitatea II"}).aB,V=_.aJ,H=_.av,K=_.ar,Q=_.aD,W=_.E,u(An,b([Tn("page"),function(n){return u(kn,"data-is-odd",n?"true":"false")}(Y)]),b([o(Pn,V,H,K),W,function(n){return u(Rn,s,b([Mn((r=n,r+""))]));var r}(Q)]))))(0)(0)}},n.Elm?function n(r,e){for(var t in e)t in r?"init"==t?h(6):n(r[t],e[t]):r[t]=e[t]}(n.Elm,X):n.Elm=X}(this);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../src/Main.elm");e.Elm.Main.init({node:document.querySelector("main")});
},{"../src/Main.elm":"zQ7y"}]},{},["Focm"], null)
//# sourceMappingURL=/assets.f75c1a6e.js.map