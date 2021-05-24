var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e,o,r,c,s){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(a){const r=i(n,e,o,s);t.p(r,a)}}function l(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function f(){return m(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let g;function h(t){g=t}function v(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const x=[],w=[],k=[],_=[],C=Promise.resolve();let I=!1;function E(t){k.push(t)}let P=!1;const O=new Set;function A(){if(!P){P=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];h(n),B(n.$$)}for(h(null),x.length=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];O.has(n)||(O.add(n),n())}k.length=0}while(x.length);for(;_.length;)_.pop()();I=!1,P=!1,O.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const F=new Set;let T;function N(){T={r:0,c:[],p:T}}function S(){T.r||o(T.c),T=T.p}function D(t,n){t&&t.i&&(F.delete(t),t.i(n))}function H(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),T.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function L(t){t&&t.c()}function M(t,e,c,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:p}=t.$$;i&&i.m(e,c),s||E((()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),p.forEach(E)}function j(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(x.push(t),I||(I=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,r,c,s,i,a,l=[-1]){const p=g;h(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:r.context||[]),callbacks:e(),dirty:l,skip_bound:!1};let m=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&K(n,t)),e})):[],d.update(),m=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();r.intro&&D(n.$$.fragment),M(n,r.target,r.anchor,r.customElement),A()}h(p)}class R{$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(n){let e;return{c(){e=d("nav"),e.innerHTML='<a class="navbar-brand" href="#/home">ICI</a> \n\t<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> \n\n\t<div class="collapse navbar-collapse" id="navbarColor02"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="/#home">Home</a></li> \n\t\t\t<li class="nav-item"><a class="nav-link" href="/#donate">Donate</a></li></ul></div>',y(e,"class","navbar navbar-expand-lg navbar-dark bg-dark")},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class q extends R{constructor(t){super(),G(this,t,null,W,c,{})}}function z(t){let n,e,o;const r=t[1].default,c=s(r,t,t[0],null);return{c(){n=d("div"),e=d("div"),c&&c.c(),y(e,"class","card-body text-center"),y(n,"class","card")},m(t,r){p(t,n,r),l(n,e),c&&c.m(e,null),o=!0},p(t,[n]){c&&c.p&&1&n&&a(c,r,t,t[0],n,null,null)},i(t){o||(D(c,t),o=!0)},o(t){H(c,t),o=!1},d(t){t&&u(n),c&&c.d(t)}}}function U(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class V extends R{constructor(t){super(),G(this,t,U,z,c,{})}}const X=t=>({}),Y=t=>({}),J=t=>({}),Q=t=>({}),Z=t=>({}),tt=t=>({});function nt(n){let e;return{c(){e=d("button"),e.textContent="Price too high",e.disabled=!0,y(e,"class","btn btn-block")},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}function et(t){let n;const e=t[3].footer,o=s(e,t,t[2],Y);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){o&&o.p&&4&n&&a(o,e,t,t[2],n,X,Y)},i(t){n||(D(o,t),n=!0)},o(t){H(o,t),n=!1},d(t){o&&o.d(t)}}}function ot(t){let n,e,o,r,c,i,m,b,$,g,h;const v=t[3].header,x=s(v,t,t[2],tt),w=t[3].body,k=s(w,t,t[2],Q),_=[et,nt],C=[];function I(t,n){return t[0]<=t[1]?0:1}return m=I(t),b=C[m]=_[m](t),{c(){n=d("div"),e=d("div"),x&&x.c(),o=f(),r=d("div"),k&&k.c(),c=f(),i=d("div"),b.c(),$=f(),g=d("br"),y(e,"class","card-header text-center"),y(r,"class","card-body text-center"),y(i,"class","card-footer"),y(n,"class","card")},m(t,s){p(t,n,s),l(n,e),x&&x.m(e,null),l(n,o),l(n,r),k&&k.m(r,null),l(n,c),l(n,i),C[m].m(i,null),p(t,$,s),p(t,g,s),h=!0},p(t,[n]){x&&x.p&&4&n&&a(x,v,t,t[2],n,Z,tt),k&&k.p&&4&n&&a(k,w,t,t[2],n,J,Q);let e=m;m=I(t),m===e?C[m].p(t,n):(N(),H(C[e],1,1,(()=>{C[e]=null})),S(),b=C[m],b?b.p(t,n):(b=C[m]=_[m](t),b.c()),D(b,1),b.m(i,null))},i(t){h||(D(x,t),D(k,t),D(b),h=!0)},o(t){H(x,t),H(k,t),H(b),h=!1},d(t){t&&u(n),x&&x.d(t),k&&k.d(t),C[m].d(),t&&u($),t&&u(g)}}}function rt(t,n,e){let{$$slots:o={},$$scope:r}=n,{price:c}=n,{money:s}=n;return t.$$set=t=>{"price"in t&&e(0,c=t.price),"money"in t&&e(1,s=t.money),"$$scope"in t&&e(2,r=t.$$scope)},[c,s,r,o]}class ct extends R{constructor(t){super(),G(this,t,rt,ot,c,{price:0,money:1})}}function st(t){let n,e,o,r,c,s,i,a,b,y,g,h,v,x,w,k,_,C,I,E,P,O,A=t[0].money+"",B=t[0].incomePerSecond+"";return{c(){n=d("h1"),e=m(A),o=m(" DKK"),r=f(),c=d("br"),s=f(),i=d("br"),a=f(),b=d("h6"),y=m("Income Per Second: "),g=m(B),h=m(" DKK"),v=f(),x=d("br"),w=f(),k=d("br"),_=f(),C=d("br"),I=f(),E=d("br"),P=f(),O=d("p"),O.innerHTML='Wanna learn more about Cryptos? Visit\n\t\t\t\t\t<a href="https://coinmarketcap.com/" target="_blank">coinmarketcap</a>\n\t\t\t\t\tto learn more'},m(t,u){p(t,n,u),l(n,e),l(n,o),p(t,r,u),p(t,c,u),p(t,s,u),p(t,i,u),p(t,a,u),p(t,b,u),l(b,y),l(b,g),l(b,h),p(t,v,u),p(t,x,u),p(t,w,u),p(t,k,u),p(t,_,u),p(t,C,u),p(t,I,u),p(t,E,u),p(t,P,u),p(t,O,u)},p(t,n){1&n&&A!==(A=t[0].money+"")&&$(e,A),1&n&&B!==(B=t[0].incomePerSecond+"")&&$(g,B)},d(t){t&&u(n),t&&u(r),t&&u(c),t&&u(s),t&&u(i),t&&u(a),t&&u(b),t&&u(v),t&&u(x),t&&u(w),t&&u(k),t&&u(_),t&&u(C),t&&u(I),t&&u(E),t&&u(P),t&&u(O)}}}function it(t){let n;return{c(){n=d("div"),n.textContent="DIGIBYTE",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function at(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.dgb.price+"",I=t[0].cryptos.dgb.gives+"",E=t[0].cryptos.dgb.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.dgb.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.dgb.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.dgb.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function lt(t){let n,e,o,r,c,s=t[0].cryptos.dgb.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[4]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.dgb.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function pt(t){let n;return{c(){n=d("div"),n.textContent="DOT",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function ut(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.dot.price+"",I=t[0].cryptos.dot.gives+"",E=t[0].cryptos.dot.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.dot.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.dot.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.dot.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function dt(t){let n,e,o,r,c,s=t[0].cryptos.dot.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[5]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.dot.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function mt(t){let n;return{c(){n=d("div"),n.textContent="XRP",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function ft(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.xrp.price+"",I=t[0].cryptos.xrp.gives+"",E=t[0].cryptos.xrp.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.xrp.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.xrp.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.xrp.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function bt(t){let n,e,o,r,c,s=t[0].cryptos.xrp.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[6]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.xrp.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function yt(t){let n;return{c(){n=d("div"),n.textContent="BINANCE COIN",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function $t(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.bnb.price+"",I=t[0].cryptos.bnb.gives+"",E=t[0].cryptos.bnb.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.bnb.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.bnb.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.bnb.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function gt(t){let n,e,o,r,c,s=t[0].cryptos.bnb.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[1]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.bnb.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function ht(t){let n;return{c(){n=d("div"),n.textContent="ETHEREUM",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function vt(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.eth.price+"",I=t[0].cryptos.eth.gives+"",E=t[0].cryptos.eth.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.eth.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.eth.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.eth.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function xt(t){let n,e,o,r,c,s=t[0].cryptos.eth.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[2]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.eth.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function wt(t){let n;return{c(){n=d("div"),n.textContent="BITCOIN",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&u(n)}}}function kt(t){let n,e,o,r,c,s,i,a,b,g,h,v,x,w,k,_,C=t[0].cryptos.btc.price+"",I=t[0].cryptos.btc.gives+"",E=t[0].cryptos.btc.amount+"";return{c(){n=d("div"),e=d("span"),o=m("Price: "),r=m(C),c=f(),s=d("br"),i=f(),a=d("span"),b=m("Income: "),g=m(I),h=f(),v=d("br"),x=f(),w=d("span"),k=m("Amount Owned: "),_=m(E),y(n,"slot","body")},m(t,u){p(t,n,u),l(n,e),l(e,o),l(e,r),l(n,c),l(n,s),l(n,i),l(n,a),l(a,b),l(a,g),l(n,h),l(n,v),l(n,x),l(n,w),l(w,k),l(w,_)},p(t,n){1&n&&C!==(C=t[0].cryptos.btc.price+"")&&$(r,C),1&n&&I!==(I=t[0].cryptos.btc.gives+"")&&$(g,I),1&n&&E!==(E=t[0].cryptos.btc.amount+"")&&$(_,E)},d(t){t&&u(n)}}}function _t(t){let n,e,o,r,c,s=t[0].cryptos.btc.price+"";return{c(){n=d("button"),e=m("Buy for "),o=m(s),y(n,"class","btn btn-primary btn-block"),y(n,"slot","footer")},m(s,i){p(s,n,i),l(n,e),l(n,o),r||(c=b(n,"click",t[3]),r=!0)},p(t,n){1&n&&s!==(s=t[0].cryptos.btc.price+"")&&$(o,s)},d(t){t&&u(n),r=!1,c()}}}function Ct(t){let n,e,o,r,c,s,i,a,m,b,$,g,h,v,x,w,k,_,C,I,E;return r=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),m=new ct({props:{price:t[0].cryptos.dgb.price,money:t[0].money,$$slots:{footer:[lt],body:[at],header:[it]},$$scope:{ctx:t}}}),$=new ct({props:{price:t[0].cryptos.dot.price,money:t[0].money,$$slots:{footer:[dt],body:[ut],header:[pt]},$$scope:{ctx:t}}}),h=new ct({props:{price:t[0].cryptos.xrp.price,money:t[0].money,$$slots:{footer:[bt],body:[ft],header:[mt]},$$scope:{ctx:t}}}),w=new ct({props:{price:t[0].cryptos.bnb.price,money:t[0].money,$$slots:{footer:[gt],body:[$t],header:[yt]},$$scope:{ctx:t}}}),_=new ct({props:{price:t[0].cryptos.eth.price,money:t[0].money,$$slots:{footer:[xt],body:[vt],header:[ht]},$$scope:{ctx:t}}}),I=new ct({props:{price:t[0].cryptos.btc.price,money:t[0].money,$$slots:{footer:[_t],body:[kt],header:[wt]},$$scope:{ctx:t}}}),{c(){n=d("div"),e=d("div"),o=d("div"),L(r.$$.fragment),c=f(),s=d("div"),i=d("div"),a=d("div"),L(m.$$.fragment),b=f(),L($.$$.fragment),g=f(),L(h.$$.fragment),v=f(),x=d("div"),L(w.$$.fragment),k=f(),L(_.$$.fragment),C=f(),L(I.$$.fragment),y(o,"class","col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6"),y(a,"class","col-12 col-sm-12 col-xs-12 col-md-6\r\n\t\t\t\t\tcol-lg-6 col-xl-6"),y(x,"class","col-12 col-sm-12 col-xs-12 col-md-6\r\n\t\t\t\t\tcol-lg-6 col-xl-6"),y(i,"class","row"),y(s,"class","col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6"),y(e,"class","row"),y(n,"class","container-fluid")},m(t,u){p(t,n,u),l(n,e),l(e,o),M(r,o,null),l(e,c),l(e,s),l(s,i),l(i,a),M(m,a,null),l(a,b),M($,a,null),l(a,g),M(h,a,null),l(i,v),l(i,x),M(w,x,null),l(x,k),M(_,x,null),l(x,C),M(I,x,null),E=!0},p(t,[n]){const e={};513&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);const o={};1&n&&(o.price=t[0].cryptos.dgb.price),1&n&&(o.money=t[0].money),513&n&&(o.$$scope={dirty:n,ctx:t}),m.$set(o);const c={};1&n&&(c.price=t[0].cryptos.dot.price),1&n&&(c.money=t[0].money),513&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const s={};1&n&&(s.price=t[0].cryptos.xrp.price),1&n&&(s.money=t[0].money),513&n&&(s.$$scope={dirty:n,ctx:t}),h.$set(s);const i={};1&n&&(i.price=t[0].cryptos.bnb.price),1&n&&(i.money=t[0].money),513&n&&(i.$$scope={dirty:n,ctx:t}),w.$set(i);const a={};1&n&&(a.price=t[0].cryptos.eth.price),1&n&&(a.money=t[0].money),513&n&&(a.$$scope={dirty:n,ctx:t}),_.$set(a);const l={};1&n&&(l.price=t[0].cryptos.btc.price),1&n&&(l.money=t[0].money),513&n&&(l.$$scope={dirty:n,ctx:t}),I.$set(l)},i(t){E||(D(r.$$.fragment,t),D(m.$$.fragment,t),D($.$$.fragment,t),D(h.$$.fragment,t),D(w.$$.fragment,t),D(_.$$.fragment,t),D(I.$$.fragment,t),E=!0)},o(t){H(r.$$.fragment,t),H(m.$$.fragment,t),H($.$$.fragment,t),H(h.$$.fragment,t),H(w.$$.fragment,t),H(_.$$.fragment,t),H(I.$$.fragment,t),E=!1},d(t){t&&u(n),j(r),j(m),j($),j(h),j(w),j(_),j(I)}}}function It(){let t={cryptos:{}};function n(n,e,o,r){t.cryptos[n]={price:e,gives:o,increase:r,amount:0}}return n("btc",25e4,5e3,.2),n("eth",24e3,250,.13),n("bnb",12e3,80,.2),n("xrp",15,5,.15),n("dot",2,1,.3),n("dgb",.3,.1,.35),console.log(t.cryptos),t.cryptos}function Et(t,n,e){let o={money:15e3,cryptos:It(),incomePerSecond:0};function r(t){let n=o.cryptos[t],r=n.price,c=n.amount,s=n.increase,i=n.gives;e(0,o.cryptos[t]={price:parseFloat((r+r*s).toFixed(2)),amount:c+1,increase:s,gives:i},o),e(0,o.money=parseFloat((o.money-r).toFixed(2)),o)}function c(){let t=o.cryptos,n=t.eth,r=t.btc,c=t.bnb,s=t.dgb,i=t.dot,a=t.xrp;e(0,o.money=parseFloat((o.money+(n.gives*n.amount+r.gives*r.amount+c.gives*c.amount+s.gives*s.amount+i.gives*i.amount+a.gives*a.amount)).toFixed(2)),o),e(0,o.incomePerSecond=parseFloat(n.gives*n.amount+r.gives*r.amount+c.gives*c.amount+s.gives*s.amount+i.gives*i.amount+a.gives*a.amount).toFixed(2),o)}return v((()=>{setInterval(c,1e3)})),[o,function(){r("bnb")},function(){r("eth")},function(){r("btc")},function(){r("dgb")},function(){r("dot")},function(){r("xrp")}]}class Pt extends R{constructor(t){super(),G(this,t,Et,Ct,c,{})}}function Ot(n){let e,o,r;return{c(){e=d("h1"),e.textContent="Well, that was not supposed to happen, time to go back?",o=f(),r=d("a"),r.textContent="Home",y(r,"href","/#home"),y(r,"class","btn btn-primary-btn-block")},m(t,n){p(t,e,n),p(t,o,n),p(t,r,n)},i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(r)}}}function At(n){let e;return{c(){e=d("h1"),e.textContent="Donate Page Goes Here"},m(t,n){p(t,e,n)},i:t,o:t,d(t){t&&u(e)}}}function Bt(t){let n,e;return n=new Pt({}),{c(){L(n.$$.fragment)},m(t,o){M(n,t,o),e=!0},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function Ft(t){let n,e,o,r,c,s,i,a,m,b,$,g;c=new q({});const h=[Bt,At,Ot],v=[];function x(t,n){return"#home"===t[0]?0:"#donate"===t[0]?1:2}return a=x(t),m=v[a]=h[a](t),{c(){n=d("link"),e=f(),o=d("div"),r=d("header"),L(c.$$.fragment),s=f(),i=d("main"),m.c(),b=f(),$=d("footer"),y(n,"rel","stylesheet"),y(n,"href","https://bootswatch.com/4/cyborg/bootstrap.min.css"),document.title="Idle Crypto Investor",y(o,"id","app_internal")},m(t,u){l(document.head,n),p(t,e,u),p(t,o,u),l(o,r),M(c,r,null),l(o,s),l(o,i),v[a].m(i,null),l(o,b),l(o,$),g=!0},p(t,[n]){let e=a;a=x(t),a!==e&&(N(),H(v[e],1,1,(()=>{v[e]=null})),S(),m=v[a],m||(m=v[a]=h[a](t),m.c()),D(m,1),m.m(i,null))},i(t){g||(D(c.$$.fragment,t),D(m),g=!0)},o(t){H(c.$$.fragment,t),H(m),g=!1},d(t){u(n),t&&u(e),t&&u(o),j(c),v[a].d()}}}function Tt(t,n,e){window.location.hash="#home";let o=window.location.hash;return window.addEventListener("hashchange",(()=>{e(0,o=window.location.hash)})),[o]}return new class extends R{constructor(t){super(),G(this,t,Tt,Ft,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
