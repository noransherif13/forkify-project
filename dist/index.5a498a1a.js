var e,t,r,n,i,o,a,s,c,u,l,f,d,p,h,g,v,y,m,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire3a11;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=E);var S={},$={},L=function(e){return e&&e.Math==Math&&e};$=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||L("object"==typeof self&&self)||L("object"==typeof b&&b)||function(){return this}()||$||Function("return this")();var O={},j={};O=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},x={};x=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype.call;T=x?M.bind(M):function(){return M.apply(M,arguments)};var P={}.propertyIsEnumerable,I=Object.getOwnPropertyDescriptor;n=I&&!P.call({1:2},1)?function(e){var t=I(this,e);return!!t&&t.enumerable}:P;var q={};q=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},A={},N={},F=Function.prototype,D=F.call,C=x&&F.bind.bind(D,D),R={},W=(N=x?C:function(e){return function(){return D.apply(e,arguments)}})({}.toString),U=N("".slice);R=function(e){return U(W(e),8,-1)};var G=Object,z=N("".split);A=j(function(){return!G("z").propertyIsEnumerable(0)})?function(e){return"String"==R(e)?z(e,""):G(e)}:G;var B={},Y={};Y=function(e){return null==e};var J=TypeError;B=function(e){if(Y(e))throw J("Can't call method on "+e);return e},H=function(e){return A(B(e))};var Q={},V={},K={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;K=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?X(r=$[e])?r:void 0:$[e]&&$[e][t]};var eo={};eo=N({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=$.process,ef=$.Deno,ed=el&&el.versions||ef&&ef.version,ep=ed&&ed.v8;ep&&(o=(i=ep.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&eu&&(!(i=eu.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=eu.match(/Chrome\/(\d+)/))&&(o=+i[1]),ec=o;var eh=$.String;ea=(es=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol();return!eh(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eg=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,eg(e))};var ev={},ey={},em={},eb=String;em=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;ey=function(e){if(X(e))return e;throw e_(em(e)+" is not a function")},ev=function(e,t){var r=e[t];return Y(r)?void 0:ey(r)};var ew={},ek=TypeError;ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=T(r,e))||X(r=e.valueOf)&&!K(n=T(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=T(r,e)))return n;throw ek("Can't convert object to primitive value")};var eE={},eS={};eS=!1;var e$={},eL={},eO=Object.defineProperty;eL=function(e,t){try{eO($,e,{value:t,configurable:!0,writable:!0})}catch(r){$[e]=t}return t};var ej="__core-js_shared__";e$=$[ej]||eL(ej,{}),(eE=function(e,t){return e$[e]||(e$[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eT={},ex={},eM=Object;ex=function(e){return eM(B(e))};var eP=N({}.hasOwnProperty);eT=Object.hasOwn||function(e,t){return eP(ex(e),t)};var eI={},eq=0,eH=Math.random(),eA=N(1..toString);eI=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eA(++eq+eH,36)};var eN=$.Symbol,eF=eE("wks"),eD=ea?eN.for||eN:eN&&eN.withoutSetter||eI,eC=TypeError,eR=(eT(eF,e="toPrimitive")||(eF[e]=es&&eT(eN,e)?eN[e]:eD("Symbol."+e)),eF[e]);V=function(e,t){if(!K(e)||en(e))return e;var r,n=ev(e,eR);if(n){if(void 0===t&&(t="default"),!K(r=T(n,e,t))||en(r))return r;throw eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},Q=function(e){var t=V(e,"string");return en(t)?t:t+""};var eW={},eU={},eG=$.document,ez=K(eG)&&K(eG.createElement);eU=function(e){return ez?eG.createElement(e):{}},eW=!O&&!j(function(){return 7!=Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a});var eB=Object.getOwnPropertyDescriptor;r=O?eB:function(e,t){if(e=H(e),t=Q(t),eW)try{return eB(e,t)}catch(e){}if(eT(e,t))return q(!T(n,e,t),e[t])};var eY={},eJ={};eJ=O&&j(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eV=String,eK=TypeError;eQ=function(e){if(K(e))return e;throw eK(eV(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e9="writable";a=O?eJ?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e9 in r&&!r[e9]){var n=e0(e,t);n&&n[e9]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),eW)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eY=O?function(e,t,r){return a(e,t,q(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e3={},e7=Function.prototype,e6=O&&Object.getOwnPropertyDescriptor,e5=eT(e7,"name")&&(!O||O&&e6(e7,"name").configurable),e8={},te=N(Function.toString);X(e$.inspectSource)||(e$.inspectSource=function(e){return te(e)}),e8=e$.inspectSource;var tt={},tr={},tn=$.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eE("keys");ti=function(e){return to[e]||(to[e]=eI(e))};var ta={};ta={};var ts="Object already initialized",tc=$.TypeError,tu=$.WeakMap;if(tr||e$.state){var tl=e$.state||(e$.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,s=function(e,t){if(tl.has(e))throw tc(ts);return t.facade=e,tl.set(e,t),t},c=function(e){return tl.get(e)||{}},u=function(e){return tl.has(e)}}else{var tf=ti("state");ta[tf]=!0,s=function(e,t){if(eT(e,tf))throw tc(ts);return t.facade=e,eY(e,tf,t),t},c=function(e){return eT(e,tf)?e[tf]:{}},u=function(e){return eT(e,tf)}}var td=(tt={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=c(t)).type!==e)throw tc("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=tt.get,th=String,tg=Object.defineProperty,tv=N("".slice),ty=N("".replace),tm=N([].join),tb=O&&!j(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e3=function(e,t,r){"Symbol("===tv(th(t),0,7)&&(t="["+ty(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eT(e,"name")||e5&&e.name!==t)&&(O?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&eT(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&eT(r,"constructor")&&r.constructor?O&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=td(e);return eT(n,"source")||(n.source=tm(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return X(this)&&tp(this).source||e8(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e3(r,o,n),n.global)i?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},t$={},tL={},tO={},tj=Math.ceil,tT=Math.floor;tO=Math.trunc||function(e){var t=+e;return(t>0?tT:tj)(t)},tL=function(e){var t=+e;return t!=t||0===t?0:tO(t)};var tx=Math.max,tM=Math.min;t$=function(e,t){var r=tL(e);return r<0?tx(r+t,0):tM(r,t)};var tP={},tI={},tq=Math.min;tI=function(e){return e>0?tq(tL(e),9007199254740991):0},tP=function(e){return tI(e.length)};var tH=function(e){return function(t,r,n){var i,o=H(t),a=tP(o),s=t$(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={includes:tH(!0),indexOf:tH(!1)}.indexOf,tN=N([].push);tS=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!eT(ta,r)&&eT(n,r)&&tN(o,r);for(;t.length>i;)eT(n,r=t[i++])&&(~tA(o,r)||tN(o,r));return o};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tS(e,tF)},f=Object.getOwnPropertySymbols;var tD=N([].concat);tE=ei("Reflect","ownKeys")||function(e){var t=l(eQ(e));return f?tD(t,f(e)):t},tk=function(e,t,n){for(var i=tE(t),o=0;o<i.length;o++){var s=i[o];eT(e,s)||n&&eT(n,s)||a(e,s,r(t,s))}};var tC={},tR=/#|\.prototype\./,tW=function(e,t){var r=tG[tU(e)];return r==tB||r!=tz&&(X(t)?j(t):!!t)},tU=tW.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tG=tW.data={},tz=tW.NATIVE="N",tB=tW.POLYFILL="P";tC=tW,S=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?$:l?$[c]||eL(c,{}):($[c]||{}).prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tC(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tk(a,o)}(e.sham||o&&o.sham)&&eY(a,"sham",!0),e4(n,i,a,e)}};var tY={},tJ={},tQ=Function.prototype,tV=tQ.apply,tK=tQ.call;tJ="object"==typeof Reflect&&Reflect.apply||(x?tK.bind(tV):function(){return tK.apply(tV,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===R(e))return N(e)})(tZ.bind);tX=function(e,t){return ey(e),void 0===t?e:x?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ei("document","documentElement");var t2={};t2=N([].slice);var t9={},t4=TypeError;t9=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t3={};t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t7={},t6={},t5=t6={};function t8(){throw Error("setTimeout has not been defined")}function re(){throw Error("clearTimeout has not been defined")}function rt(e){if(d===setTimeout)return setTimeout(e,0);if((d===t8||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}!function(){try{d="function"==typeof setTimeout?setTimeout:t8}catch(e){d=t8}try{p="function"==typeof clearTimeout?clearTimeout:re}catch(e){p=re}}();var rr=[],rn=!1,ri=-1;function ro(){rn&&h&&(rn=!1,h.length?rr=h.concat(rr):ri=-1,rr.length&&ra())}function ra(){if(!rn){var e=rt(ro);rn=!0;for(var t=rr.length;t;){for(h=rr,rr=[];++ri<t;)h&&h[ri].run();ri=-1,t=rr.length}h=null,rn=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===re||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function rs(e,t){this.fun=e,this.array=t}function rc(){}t5.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rr.push(new rs(e,t)),1!==rr.length||rn||rt(ra)},rs.prototype.run=function(){this.fun.apply(null,this.array)},t5.title="browser",t5.browser=!0,t5.env={},t5.argv=[],t5.version="",t5.versions={},t5.on=rc,t5.addListener=rc,t5.once=rc,t5.off=rc,t5.removeListener=rc,t5.removeAllListeners=rc,t5.emit=rc,t5.prependListener=rc,t5.prependOnceListener=rc,t5.listeners=function(e){return[]},t5.binding=function(e){throw Error("process.binding is not supported")},t5.cwd=function(){return"/"},t5.chdir=function(e){throw Error("process.chdir is not supported")},t5.umask=function(){return 0},t7=void 0!==t6&&"process"==R(t6);var ru=$.setImmediate,rl=$.clearImmediate,rf=$.process,rd=$.Dispatch,rp=$.Function,rh=$.MessageChannel,rg=$.String,rv=0,ry={},rm="onreadystatechange";j(function(){g=$.location});var rb=function(e){if(eT(ry,e)){var t=ry[e];delete ry[e],t()}},r_=function(e){return function(){rb(e)}},rw=function(e){rb(e.data)},rk=function(e){$.postMessage(rg(e),g.protocol+"//"+g.host)};ru&&rl||(ru=function(e){t9(arguments.length,1);var t=X(e)?e:rp(e),r=t2(arguments,1);return ry[++rv]=function(){tJ(t,void 0,r)},v(rv),rv},rl=function(e){delete ry[e]},t7?v=function(e){rf.nextTick(r_(e))}:rd&&rd.now?v=function(e){rd.now(r_(e))}:rh&&!t3?(m=(y=new rh).port2,y.port1.onmessage=rw,v=tX(m.postMessage,m)):$.addEventListener&&X($.postMessage)&&!$.importScripts&&g&&"file:"!==g.protocol&&!j(rk)?(v=rk,$.addEventListener("message",rw,!1)):v=rm in eU("script")?function(e){t1.appendChild(eU("script"))[rm]=function(){t1.removeChild(this),rb(e)}}:function(e){setTimeout(r_(e),0)});var rE=(tY={set:ru,clear:rl}).clear;S({global:!0,bind:!0,enumerable:!0,forced:$.clearImmediate!==rE},{clearImmediate:rE});var rS=tY.set,r$={},rL={};rL="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rO=$.Function,rj=/MSIE .\./.test(eu)||rL&&((t=$.Bun.version.split(".")).length<3||0==t[0]&&(t[1]<3||3==t[1]&&0==t[2]));r$=function(e,t){var r=t?2:1;return rj?function(n,i){var o=t9(arguments.length,1)>r,a=X(n)?n:rO(n),s=o?t2(arguments,r):[],c=o?function(){tJ(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rT=$.setImmediate?r$(rS,!1):rS;S({global:!0,bind:!0,enumerable:!0,forced:$.setImmediate!==rT},{setImmediate:rT});var rx=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=d,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=f(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rx}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rx:Function("r","regeneratorRuntime = r")(rx)}const rM="https://forkify-api.herokuapp.com/api/v2/recipes/",rP="602d06a4-5920-4f4b-bc5c-0c657668464c",rI=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rq={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rH=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rA=async function(e){try{let t=await rI(`${rM}${e}?key=${rP}`);rq.recipe=rH(t),rq.bookmarks.some(t=>t.id===e)?rq.recipe.bookmarked=!0:rq.recipe.bookmarked=!1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},rN=async function(e){try{rq.search.query=e;let t=await rI(`${rM}?search=${e}&key=${rP}`);console.log(t),rq.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),rq.search.page=1}catch(e){throw e}},rF=function(e=rq.search.page){rq.search.page=e;let t=(e-1)*rq.search.resultsPerPage,r=e*rq.search.resultsPerPage;return rq.search.results.slice(t,r)},rD=function(e){rq.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rq.recipe.servings}),rq.recipe.servings=e},rC=function(){localStorage.setItem("bookmarks",JSON.stringify(rq.bookmarks))},rR=function(e){rq.bookmarks.push(e),e.id===rq.recipe.id&&(rq.recipe.bookmarked=!0),rC()},rW=function(e){let t=rq.bookmarks.findIndex(t=>t.id===e);rq.bookmarks.splice(t,1),e===rq.recipe.id&&(rq.recipe.bookmarked=!1),rC()};!function(){let e=localStorage.getItem("bookmarks");e&&(rq.bookmarks=JSON.parse(e))}();const rU=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredients format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rI(`${rM}?key=${rP}`,r);rq.recipe=rH(n),rR(rq.recipe)}catch(e){throw e}};var rG={};rG=new URL(E("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rz{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
       <div class="spinner">
          <svg>
            <use href="${_(rG)}#icon-loader"></use>
          </svg>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=` 
    <div class="error">
            <div>
              <svg>
                <use href="${_(rG)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rG)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rB={};function rY(e,t,r,n,i){var o,a,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,f=t;for(;u<=c.length;)l%c[u]==0&&f%c[u]==0?(c[u],l/=c[u],f/=c[u]):u++;return o=f,a=l,s=r,1===o&&1===a?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`}rB=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2))return function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);return rY(n,i,t,r,!1)}(r,o,t);{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,o));return rY(u,(c-1)*a,n,i,!0)}(r,n,e,o,t)}};class rJ extends rz{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src = "${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rG)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rG)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${_(rG)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${_(rG)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
           <svg>
           <use href="${_(rG)}#icon-user"></use>
           </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_(rG)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
         
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${_(rG)}#icon-arrow-right"></use>
            </svg>
          </a>
     </div>`}_generateMarkupIngredient(e){return`
               <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${_(rG)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?_(rB)(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}}var rQ=new rJ;class rV{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rK=new rV,rX=new class extends rz{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return` <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                 <div class="preview__user-generated ${this._data.key?"":"hidden"}">
           <svg>
           <use href="${_(rG)}#icon-user"></use>
           </svg>
                </div>
                </div>
            </a>
          </li>
        
        `}};class rZ extends rz{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r0=new rZ;class r1 extends rz{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
      
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>page ${e+1}</span>
            <svg class="search__icon">
              <use href="${_(rG)}#icon-arrow-right"></use>
            </svg>
          </button>
      `:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_(rG)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      `:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_(rG)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      </button>
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>page ${e+1}</span>
            <svg class="search__icon">
              <use href="${_(rG)}#icon-arrow-right"></use>
            </svg>
          </button>
      
      `:""}}var r2=new r1;class r9 extends rz{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r4=new r9;class r3 extends rz{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var r7=new r3;document.querySelector(".recipe");const r6=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rQ.renderSpinner(),r0.update(rF()),r4.update(rq.bookmarks),await rA(e),rQ.render(rq.recipe)}catch(e){rQ.renderError()}},r5=async function(){try{r0.renderSpinner();let e=rK.getQuery();if(!e)return;await rN(e),r0.render(rF()),r2.render(rq.search)}catch(e){console.log(e)}},r8=async function(e){try{r7.renderSpinner(),await rU(e),console.log(rq.recipe),rQ.render(rq.recipe),r7.renderMessage(),r4.render(rq.bookmarks),window.history.pushState(null,"",`#${rq.recipe.id}`),setTimeout(function(){r7.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),r7.renderError(e.message)}};r4.addHandlerRender(function(){r4.render(rq.bookmarks)}),rQ.addHandlerRender(r6),rQ.addHandlerUpdateServings(function(e){rD(e),rQ.update(rq.recipe)}),rQ.addHandlerAddBookmark(function(){rq.recipe.bookmarked?rW(rq.recipe.id):rR(rq.recipe),rQ.update(rq.recipe),r4.render(rq.bookmarks)}),rK.addHandlerSearch(r5),r2.addHandlerClick(function(e){r0.render(rF(e)),r2.render(rq.search)}),r7.addHandlerUpload(r8);
//# sourceMappingURL=index.5a498a1a.js.map
