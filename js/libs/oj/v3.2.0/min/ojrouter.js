/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(a,g,c){(function(){function b(a){var b={};if(a=a.split("?")[1])a=a.split("\x26"),a.forEach(function(a){var c=a.split(/\=(.+)?/);a=c[0];a.length&&(b[a]||(b[a]=[]),c=c[1]&&decodeURIComponent(c[1]),b[a].push(c))});return b}function d(b,c){var d=document.createElement("a");d.href=ea.href;void 0!==b.search&&(d.search=b.search);void 0!==b.pathname&&(d.pathname=b.pathname);var e=d.search,f="",g;g=e.indexOf("oj_Router\x3d");if(-1!==g){var h=e.indexOf("\x26",
g);-1===h&&(h=e.length);g=e.substring(0,g);e=e.substr(h)}else g=e+(-1===e.indexOf("?")?"?":"\x26"),e="";if(c&&0<Object.getOwnPropertyNames(c).length){var h=JSON.stringify(c),f=encodeURIComponent(h),h=a.M6.RPa(h),k=!1,q="oj_Router\x3d";h.length<=f.length&&(k=!0);q=k?q+("1"+h):q+("0"+f);if(1024<q.length)throw Error("Size of bookmarkable data is too big.");f=q}else g=g.substring(0,g.length-1);d.search=g+f+e;return d.href.replace(/\?$/,"")}function e(b,c){var d;c&&b.tv&&(a.A.bt(c),b.tv.every(function(a){return a.hn===
c?(d=a,!1):!0}));return d}function f(a){return a.Ls?f(a.Ls)+"."+a.Hh:a.Hh}function h(a){var b;if(a){if(b=h(a.Ls))b=(a=a.Kh())?b+(a+"/"):void 0}else b="/";return b}function k(a,b){var c;a.Qi.every(function(a){return a.Ms&&a.Ms!==b?!0:(c=a,!1)});return c}function l(b){b=b.filter(function(a){return a.value!==a.jd.Kh()});a.C.option("level")===a.C.Nw&&(a.C.info("Potential changes are: "),b.forEach(function(b){a.C.info("   { router: %s, value: %s }",f(b.jd),b.value)}));return b}function m(a){var b=this[a.jd.Hh];
void 0!==b&&(a.jd.an=b)}function p(){return Z[0]&&Z[0].cancel}function t(b){var c=b.charAt(0);b=b.slice(1);if("0"===c)b=decodeURIComponent(b);else if("1"===c)b=a.M6.tQa(b);else throw Error("Error retrieving bookmarkable data. Format is invalid");b=JSON.parse(b);if(a.C.option("level")===a.C.Nw){var d;a.C.info("Bookmarkable data: ");for(d in b)a.C.info("   { router: %s, value: %s }",d,b[d])}return b}function s(a,b,c){var d;a.Qi.every(function(a){return a.Ms&&a.Ms!==c||!a.Ep(b)?!0:(d=a,!1)});return d}
function n(a){var b=[];a.OF()&&(b.push({jd:a,YXa:a.Kh()}),a.Qi.forEach(function(a){b=b.concat(n(a))}));return b}function r(a){if(!a)return{title:"",ZD:""};var b=r(k(a,a.Kh()));if(""===b.title&&(a=a.OF())){var c=a.BC;void 0!==c?("function"===typeof c&&(c=c()),b.title=String(c)):(c=a.v_,void 0!==c&&(c=String(c),""!==b.ZD&&(c+=" | "+b.ZD),b.ZD=c))}return b}function q(a){var b=a[a.length-1],c;b?(c=b.jd,b=b.value):(c=S,(b=S.$m)&&a.push({value:b,jd:c}));for(;c=k(c,b);)(b=c.$m)&&a.push({value:b,jd:c});var d=
[];n(S).forEach(function(b,c){var e=a[c];e&&b.jd===e.jd||d.unshift(b)});return a=d.concat(a)}function u(a,b){var c=[],d=[],e=a,f=b.split("/"),g,h,k;for(f.splice(0,1);e;)d.unshift(e),e=e.Ls;for(;g=f.shift();){e=d.shift();if(!e){if(e=s(h,g,k),!e){X=b;break}}else if(!e.Ep(g))throw Error('Invalid path "'+b+'". State id "'+g+'" does not exist on router "'+e.Hh+'".');c.push({jd:e,value:g});h=e;k=g}return c}function v(b,c,d){(b=b())||a.C.info("%s is false for state: %s",c,d);return b}function w(a,b,c,d){"function"===
typeof a&&(b=b?b.then(function(b){b&&(b=v(a,c,d));return b}):new Promise(function(b){b(v(a,c,d))}));return b}function y(a,b){var c=a.OF(),d;if(c){for(d=0;d<a.Qi.length;d++)b=y(a.Qi[d],b);d=c.ww&&c.ww.canExit?c.ww.canExit:c.zF;b=w(d,b,"canExit",c.hn)}return b}function x(b){if(p())return Promise.resolve(!1);a.C.info("Start _canExit.");b?(b=y(b,null),b=null===b?Promise.resolve(!0):b.then(function(a){return a&&!p()})):b=Promise.resolve(!0);return b}function z(b,c){if(p())return Promise.resolve();a.C.info("Start _canEnter.");
var d=null;b.forEach(function(a){(a=a.jd.Ep(a.value))&&(d=w(a.yF,d,"canEnter",a.hn))});return d=null===d?Promise.resolve({F2:b,origin:c}):d.then(function(a){var d;a&&!p()&&(d={F2:b,origin:c});return d})}function A(b,c){var d=b.jd.Ep(b.jd.Kh()),e=b.value?b.jd.Ep(b.value):void 0;return Promise.resolve().then(function(){a.C.option("level")===a.C.Nw&&a.C.info("Updating state of %s to %s.",f(b.jd),b.value)}).then(d?d.XF:void 0).then(function(){var a=b.jd,d,e,f;if("popState"===c){e=a.$B.length;for(d=e-
1;0<=d;d--)if(a.$B[d]===b.value){f=!0;a.$B.splice(d,e-d);break}1===e-d&&(a.jH="back")}f||(delete a.jH,a.$B.push(a.Kh()));a.Kh(b.value)}).then(e?e.VF:void 0)}function H(b){if(!b)return Promise.resolve(R);var c=Promise.resolve().then(function(){a.C.info("Entering _updateAll.");a.Yb.bQ=!0});b.F2.forEach(function(a){c=c.then(function(){if(!p())return A(a,b.origin)})});return c.then(function(){var c=0<b.F2.length&&!p();a.Yb.bQ=!1;a.C.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(b){a.Yb.bQ=
!1;return Promise.reject(b)})}function E(a){var b;try{b=P.parse(),b=l(b)}catch(c){return Promise.reject(c)}return z(b,a).then(H)}function C(b,c){a.C.option("level")===a.C.Nw&&a.C.info("\x3e\x3e %s: origin\x3d%s router\x3d%s %s %s",b,c.origin,c.jd?f(c.jd):"null",c.path?"path\x3d"+c.path:"",c.c3?"deferredHandling\x3dtrue":"")}function F(a){C("Executing",a);if(!a.c3){if("sync"===a.origin)return E();if("popState"===a.origin)return x(a.jd).then(function(b){return b?E(a.origin):Promise.resolve(R)})}return a.jd.xEa(a)}
function K(){var b=Z[0];C("Resolving",b);b.cancel?(C("Cancelled",b),b=Promise.resolve(R)):b=F(b);return b.then(function(b){var c=Z.shift();C("Done with",c);if(!0===b.hasChanged){var c=r(S),d;""!==c.title?d=c.title:J&&0<J.length?(d=J,""!==c.ZD&&(d+=" | "+c.ZD)):d=c.ZD;d!==window.document.title&&(window.document.title=d)}a.Yb.FC.dispatch(b);return b},function(b){Z=[];a.C.error("Error when executing transition: %o",b||"Unknown");a.Yb.FC.dispatch(R);return Promise.reject(b)})}function B(a){C("Queuing  ",
a);a=Z.push(a);1===a?ga=K():(a=Z[a-2],a.c3||(C("Cancelling",a),a.cancel=!0),ga=ga.then(K));return ga}function D(){var b,c,d=S.Kh(),e=null;a.C.info("Handling popState event with URL: %s",ea.href);if(d)for(b=0;b<S.Qi.length;b++)if(c=S.Qi[b],d===c.Ms){e=c;break}B({jd:e,origin:"popState"})}function G(){O||(P||(P=new a.Yb.Q5),P.Gn(L),J=window.document.title,window.addEventListener("popstate",D,!1),a.C.info("Initializing rootInstance."),a.C.info("Base URL is %s",L),a.C.info("Current URL is %s",ea.href),
O=!0)}var L="/",J,P,R={hasChanged:!1},O=!1,X,Z=[],ga,ea=window.location,S;a.Yb=function(a,b,c){var d=this;this.Hh=a;this.Ms=c||(b?b.Kh():void 0);this.Ls=b;this.Qi=[];this.an=void 0;this.Kh=g.observable();this.INa=g.pureComputed({read:function(){return this.Kh()},write:function(a){this.go(a).then(null,function(a){throw a;})},owner:d});this.tv=null;this.$m=void 0;this.OF=g.pureComputed(function(){return g.ignoreDependencies(d.Ep,d,[d.Kh()])});this.FAa=g.pureComputed(function(){var a,b=g.ignoreDependencies(d.Ep,
d,[d.Kh()]);b&&(a=b.value);return a});this.jH=void 0;this.$B=[];this.eJa=Object.create(null,{name:{value:g.pureComputed(function(){var a,b;b=this.Kh()||this.$m||this.tv[0];if(b=this.Ep(b))a=b.value,a&&"string"===typeof a||(a=b.hn);return a},d),enumerable:!0},params:{value:Object.create(null,{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:d,enumerable:!0},direction:{get:function(){return d.jH},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,
{attached:{value:function(a){var b=g.unwrap(a.valueAccessor()).params.ojRouter.parentRouter.OF();b&&(b.ww=a.viewModel)},writable:!0,enumerable:!0}}),enumerable:!0}});Object.defineProperties(this,{parent:{value:this.Ls,enumerable:!0}})};o_("Router",a.Yb,a);Object.defineProperties(a.Yb.prototype,{name:{get:function(){return this.Hh},enumerable:!0},states:{get:function(){return this.tv},enumerable:!0},stateId:{get:function(){return this.INa},enumerable:!0},currentState:{get:function(){return this.OF},
enumerable:!0},currentValue:{get:function(){return this.FAa},enumerable:!0},defaultStateId:{get:function(){return this.$m},set:function(a){this.$m=a},enumerable:!0},moduleConfig:{get:function(){return this.eJa},enumerable:!0}});S=new a.Yb("root",void 0,void 0);a.Yb.prototype.ona=function(a){var b;a&&"string"===typeof a&&(a=a.trim(),0<a.length&&this.Qi.every(function(c){return c.Hh===a?(b=c,!1):!0}));return b};a.f.j("Router.prototype.getChildRouter",{ona:a.Yb.prototype.ona});a.Yb.prototype.Dma=function(b,
c){var d,e;a.A.bt(b);c=c||this.Kh();b=encodeURIComponent(b.trim());for(d=0;d<this.Qi.length;d++){e=this.Qi[d];if(e.Hh===b)throw Error('Invalid router name "'+b+'", it already exists.');if(e.Ms===c)throw Error('Cannot create more than one child router for parent state id "'+e.Ms+'".');}d=new a.Yb(b,this,c);this.Qi.push(d);return d};a.f.j("Router.prototype.createChildRouter",{Dma:a.Yb.prototype.Dma});a.Yb.prototype.Ep=function(a){return e(this,a)};a.Yb.prototype.uma=function(b){this.Kh(void 0);delete this.$m;
this.jH=void 0;this.$B=[];"function"===typeof b?(this.tv=null,this.Ep=b):(this.tv=[],delete this.Ep,Object.keys(b).forEach(function(c){var d=b[c];this.tv.push(new a.mA(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.$m=c)},this));return this};a.f.j("Router.prototype.configure",{uma:a.Yb.prototype.uma});a.Yb.prototype.doa=function(a){return this.Ep(a)};a.f.j("Router.prototype.getState",{doa:a.Yb.prototype.doa});a.Yb.prototype.go=function(a,b){G();b=b||[];return B({jd:this,path:a,origin:"go",
Poa:b.historyUpdate})};a.f.j("Router.prototype.go",{go:a.Yb.prototype.go});a.Yb.prototype.xEa=function(b){var c,d=!0,e=b.path,g=!1,k=!1;switch(b.Poa){case "skip":k=!0;break;case "replace":g=!0}if(e)if("string"===typeof e)d=!1;else return Promise.reject(Error("Invalid object type for state id."));if(d&&(e=this.$m,!e))return a.C.option("level")===a.C.Nw&&a.C.info("Undefined state id with no default id on router %s",f(this)),Promise.resolve(R);if("/"===e.charAt(0))b=e;else{b=h(this.Ls);if(!b)return Promise.reject(Error('Invalid path "'+
e+'". The parent router does not have a current state.'));b+=e}a.C.info("Destination path: %s",b);try{c=u(this,b),c=q(c)}catch(m){return Promise.reject(m)}var r=l(c);return g||0<r.length?(a.C.info("Deferred mode or new state is different."),x(this).then(function(b){return b?z(r).then(H).then(function(b){if(b.hasChanged)if(k)a.C.info("Skip history update.");else{var d=P.hma(c);a.C.info("%s URL to %s",g?"Replacing":"Pushing",d);window.history[g?"replaceState":"pushState"](null,"",d)}return b}):Promise.resolve(R)})):
Promise.resolve(R)};a.Yb.prototype.Cra=function(a){this.an=a;a={};for(var b=this;b;)void 0!==b.an&&(a[b.Hh]=b.an),b=b.Ls;for(var b=this,c,e,f;b;){for(e=0;e<b.Qi.length;e++)if(f=b.Qi[e],b.Kh()&&b.Kh()===f.Ms){void 0!==f.an&&(a[f.Hh]=f.an);c=f;break}b=c;c=void 0}window.history.replaceState(null,"",d({},a))};a.f.j("Router.prototype.store",{Cra:a.Yb.prototype.Cra});a.Yb.prototype.Yqa=function(){return this.an};a.f.j("Router.prototype.retrieve",{Yqa:a.Yb.prototype.Yqa});a.Yb.prototype.TC=function(){for(var b,
c;0<this.Qi.length;)this.Qi[0].TC();if(this.Ls){b=this.Ls.Qi;for(c=0;c<b.length;c++)if(b[c].Hh===this.Hh){b.splice(c,1);break}delete this.Ms}else L="/",P=null,this.Hh="root",window.document.title=J,window.removeEventListener("popstate",D),a.Yb.FC.removeAll(),O=!1;delete this.jH;this.$B=[];this.tv=null;delete this.$m;delete this.an};a.f.j("Router.prototype.dispose",{TC:a.Yb.prototype.TC});a.Yb.FC=new c.Signal;a.Yb.bQ=!1;Object.defineProperties(a.Yb,{rootInstance:{value:S,enumerable:!0},transitionedToState:{value:a.Yb.FC,
enumerable:!0}});a.Yb.td={};o_("Router.defaults",a.Yb.td,a);Object.defineProperties(a.Yb.td,{urlAdapter:{get:function(){P||(P=new a.Yb.Q5);return P},set:function(a){if(O)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");P=a},enumerable:!0,oS:!1},baseUrl:{get:function(){return L},set:function(a){if(O)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");L=a?a.match(/[^?#]+/)[0]:"/"},enumerable:!0,oS:!1},rootInstanceName:{get:function(){return S.Hh},
set:function(b){if(O)throw Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");a.A.bt(b);S.Hh=encodeURIComponent(b.trim())},enumerable:!0,oS:!1}});a.Yb.Pt=function(){var b={jd:S,origin:"sync"};G();a.C.info("Entering sync with URL: %s",ea.href);return X?(b.path=X,b.c3=!0,b.Poa="replace",X=void 0,B(b)):a.Yb.bQ?(a.C.info("Sync called while updating, waiting for updates to end."),new Promise(function(b){a.Yb.FC.addOnce(function(c){a.C.info("Sync updates done.");
b(c)})})):B(b)};o_("Router.sync",a.Yb.Pt,a);a.Yb.Q5=function(){var b="";this.Gn=function(a){var c=document.createElement("a");c.href=a;a=c.pathname;a=a.replace(/^([^\/])/,"/$1");"/"!==a.slice(-1)&&(a+="/");b=a};this.parse=function(){var c=S,d=ea.pathname.replace(b,""),e=d.split("/"),f=[],g;for(a.C.info("Parsing: %s",d);c&&(g=e.shift());)f.push({value:g,jd:c}),c=k(c,g);f=q(f);(c=ea.search.split("oj_Router\x3d")[1])&&(c=c.split("\x26")[0])&&f.forEach(m,t(c));return f};this.hma=function(a){for(var c,
e=!1,f="",g={};c=a.pop();)c.value&&(e||c.value!==c.jd.$m)&&(f=""===f?c.value:c.value+"/"+f,e=!0),void 0!==c.jd.an&&(g[c.jd.Hh]=c.jd.an);return d({pathname:b+f},g)}};o_("Router.urlPathAdapter",a.Yb.Q5,a);a.Yb.EVa=function(){this.Gn=function(){};this.parse=function(){var c=ea.search,d=b(c),e=S,f=[];for(a.C.info("Parsing: %s",c);e;)(c=d[e.Hh])&&(c=c[0]),(c=c||e.$m)&&f.push({value:c,jd:e}),e=k(e,c);f=q(f);(d=d.oj_Router)&&f.forEach(m,t(d[0]));return f};this.hma=function(a){for(var b,c=!1,e="",f={};b=
a.pop();)b.value&&(c||b.value!==b.jd.$m)&&(e="\x26"+b.jd.Hh+"\x3d"+b.value+e,c=!0),void 0!==b.jd.an&&(f[b.jd.Hh]=b.jd.an);e&&(e="?"+e.substr(1));return d({search:e},f)}};o_("Router.urlParamAdapter",a.Yb.EVa,a);return S})();(function(){a.mA=function(b,c,e){c=c||{};a.A.bt(b);this.hn=encodeURIComponent(b.trim());(this.yF=c.canEnter)&&a.A.MC(this.yF);(this.VF=c.enter)&&a.A.MC(this.VF);(this.zF=c.canExit)&&a.A.MC(this.zF);(this.XF=c.exit)&&a.A.MC(this.XF);this.Af=c.value;this.v_=c.label;this.BC=c.title;
this.sP=e;this.ww=void 0;Object.defineProperties(this,{id:{value:this.hn,enumerable:!0},value:{get:function(){return this.Af},set:function(a){this.Af=a},enumerable:!0},label:{get:function(){return this.v_},set:function(a){this.v_=a},enumerable:!0},title:{get:function(){return this.BC},set:function(a){this.BC=a},enumerable:!0},canEnter:{get:function(){return this.yF},set:function(a){this.yF=a},enumerable:!0},enter:{get:function(){return this.VF},set:function(a){this.VF=a},enumerable:!0},canExit:{get:function(){return this.zF},
set:function(a){this.zF=a},enumerable:!0},exit:{get:function(){return this.XF},set:function(a){this.XF=a},enumerable:!0}})};o_("RouterState",a.mA,a);a.mA.prototype.go=function(){return this.sP?this.sP.go(this.hn):(a.Yb.FC.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};a.f.j("RouterState.prototype.go",{go:a.mA.prototype.go});a.mA.prototype.apa=function(){if(!this.sP)throw Error("Router is not defined for this RouterState object.");return this.sP.Kh()===
this.hn};a.f.j("RouterState.prototype.isCurrent",{apa:a.mA.prototype.apa})})();(function(){function b(a,b){if(null===a)return"";var c,d,e={},f={},g="",h=2,q=3,u=2,v="",w=0,y=0,x,z,A,H=a.length;for(A=0;A<H;A++)if(x=a[A],Object.prototype.hasOwnProperty.call(e,x)||(e[x]=q++,f[x]=!0),z=g+x,Object.prototype.hasOwnProperty.call(e,z))g=z;else{if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)w<<=1,5==y?(y=0,v+=b(w),w=0):y++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)w=w<<
1|d,5==y?(y=0,v+=b(w),w=0):y++,d=0;d=g.charCodeAt(0);c=16}for(;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);e[z]=q++;g=String(x)}if(""!==g){if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)w<<=1,5==y?(y=0,v+=b(w),w=0):y++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)w=w<<1|d,5==y?(y=0,v+=b(w),w=0):y++,d=0;d=g.charCodeAt(0);
c=16}for(;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&u++}d=2;for(c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;for(;;)if(w<<=1,5==y){v+=b(w);break}else y++;return v}function c(a,b){for(var d=[],f=4,g=4,h=3,n="",r="",q,u,v,w,y,x={val:b(0),position:32,index:1},r=0;3>r;r+=1)d[r]=r;n=0;v=Math.pow(2,2);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=
32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;switch(n){case 0:n=0;v=Math.pow(2,8);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;y=e(n);break;case 1:n=0;v=Math.pow(2,16);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;y=e(n);break;case 2:return""}for(q=r=d[3]=y;;){if(x.index>a)return"";n=0;v=Math.pow(2,h);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&
(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;switch(y=n){case 0:n=0;v=Math.pow(2,8);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;d[g++]=e(n);y=g-1;f--;break;case 1:n=0;v=Math.pow(2,16);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;d[g++]=e(n);y=g-1;f--;break;case 2:return r}0==f&&(f=Math.pow(2,h),h++);if(d[y])n=d[y];else if(y===g)n=q+q[0];else return null;
r+=n;d[g++]=q+n[0];f--;q=n;0==f&&(f=Math.pow(2,h),h++)}}a.M6={RPa:function(a){return null===a?"":b(a,function(a){return f.charAt(a)})},tQa:function(a){return null===a?"":""===a?null:c(a.length,function(b){var c=f;b=a.charAt(b);var d;g||(g={});if(!g[c])for(g[c]={},d=0;d<c.length;d++)g[c][c[d]]=d;return g[c][b]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g})()});