var dayHost = "www.appliedbiosystems.com";
(function($){$.fn.jqm=function(o){var p={overlay:60,overlayClass:'jqmOverlay',closeClass:'jqmClose',trigger:'.jqModal',ajax:F,ajaxText:'',target:F,modal:F,toTop:F,onShow:F,onHide:F,onLoad:F};return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};if(p.trigger)$(this).jqmAddTrigger(p.trigger);});};$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};$.fn.jqmShow=function(t){return this.each(function(){t=t||window.event;$.jqm.open(this._jqm,t);});};$.fn.jqmHide=function(t){return this.each(function(){t=t||window.event;$.jqm.close(this._jqm,t)});};$.jqm={hash:{},open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index'))),z=(z>0)?z:6000,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);if(c.modal){if(!A[0])L('bind');A.push(s);}
else if(c.overlay>0)h.w.jqmAddClose(o);else o=F;h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;if(ie6){$('html,body').css({height:'100%',width:'100%'});if(o){o=o.css({position:'absolute'})[0];for(var y in{Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}}
if(c.ajax){var r=c.target||h.w,u=c.ajax,r=(typeof r=='string')?$(r,h.w):$(r),u=(u.substr(0,1)=='@')?$(t).attr(u.substring(1)):u;r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
else if(cc)h.w.jqmAddClose($(cc,h.w));if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);(c.onShow)?c.onShow(h):h.w.show();e(h);return F;},close:function(s){var h=H[s];if(!h.a)return F;h.a=F;if(A[0]){A.pop();if(!A[0])L('unbind');}
if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();}return F;},params:{}};var s=0,H=$.jqm.hash,A=[],ie6=$.browser.msie&&($.browser.version=="6.0"),F=false,i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),e=function(h){if(ie6)if(h.o)h.o.html('<p style="width:100%;height:100%"/>').prepend(i);else if(!$('iframe.jqm',h.w)[0])h.w.prepend(i);f(h);},f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},L=function(t){$()[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r)f(h);return!r;},hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function(){if(!this[c]){this[c]=[];$(this).click(function(){for(var i in{jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}this[c].push(s);});});};})(jQuery);
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * 2005 Albert-Jan Pool published by FSI Fonts und Software GmbH
 * 
 * Trademark:
 * DIN is a trademark of FSI Fonts und Software GmbH
 * 
 * Manufacturer:
 * FSI Fonts und Software GmbH
 * 
 * Designer:
 * Albert-Jan Pool
 * 
 * Vendor URL:
 * http://www.fontfont.com
 * 
 * License information:
 * http://www.fontfont.com/eula/license.html
 */
Cufon.registerFont({"w":231,"face":{"font-family":"DIN Pro Light","font-weight":300,"font-stretch":"normal","units-per-em":"450","panose-1":"2 0 5 4 4 0 0 2 0 3","ascent":"344","descent":"-106","x-height":"3","bbox":"-13 -439 380 106","underline-thickness":"22.95","underline-position":"-38.25","stemh":"20","stemv":"23","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":114},"!":{"d":"86,-86r-22,0r-1,-234r24,0xm60,0r0,-30r30,0r0,30r-30,0","w":136},"\"":{"d":"43,-250r0,-70r28,0r0,70r-28,0xm112,-250r0,-70r29,0r0,70r-29,0","w":183},"#":{"d":"220,-197r-12,69r44,0r0,20r-47,0r-17,108r-23,0r18,-108r-79,0r-17,108r-23,0r17,-108r-43,0r0,-20r46,0r11,-69r-44,0r0,-20r47,0r16,-103r24,0r-17,103r79,0r16,-103r22,0r-16,103r43,0r0,20r-45,0xm118,-197r-11,69r78,0r12,-69r-79,0","w":287},"$":{"d":"210,-148v57,51,21,155,-70,150r0,49r-21,0r0,-48v-42,-2,-69,-16,-96,-43r17,-17v26,26,47,36,79,38r0,-133v-51,-6,-89,-30,-89,-83v0,-51,33,-84,89,-88r0,-40r21,0r0,40v34,2,56,13,81,35r-15,15v-18,-16,-35,-27,-66,-29r0,131v30,4,57,11,70,23xm140,-19v65,3,95,-70,56,-111v-16,-16,-34,-14,-56,-18r0,129xm119,-302v-59,-2,-85,71,-49,108v13,13,32,17,49,19r0,-127","w":264},"%":{"d":"342,-105v0,58,-5,108,-59,108v-55,0,-60,-49,-60,-108v0,-36,24,-61,60,-61v35,0,59,25,59,61xm149,-263v0,58,-5,108,-59,108v-55,0,-59,-49,-59,-108v0,-36,23,-61,59,-61v35,0,59,25,59,61xm322,-58v0,0,7,-90,-39,-90v-46,0,-41,46,-40,90v0,27,12,44,40,44v28,0,39,-17,39,-44xm130,-216v0,-44,6,-90,-40,-90v-46,0,-39,47,-39,90v0,27,11,44,39,44v27,0,40,-17,40,-44xm122,0r-20,0r149,-320r20,0","w":372},"&":{"d":"206,-259v0,40,-31,54,-61,74r92,111v14,-22,19,-39,19,-79r24,0v0,40,-8,72,-28,97r46,56r-31,0r-31,-38v-12,12,-46,41,-99,41v-59,0,-99,-38,-99,-92v0,-51,36,-73,73,-99v-17,-20,-35,-43,-35,-71v0,-36,29,-64,65,-64v36,0,65,28,65,64xm125,-172v-30,21,-63,41,-63,82v0,80,104,95,160,36xm182,-259v0,-25,-18,-43,-41,-43v-23,0,-41,18,-41,42v0,16,6,29,31,59v23,-16,51,-28,51,-58","w":335},"'":{"d":"43,-250r0,-70r28,0r0,70r-28,0","w":113},"(":{"d":"67,-38v-1,35,12,48,31,65r-16,15v-23,-20,-39,-41,-38,-78r0,-249v-1,-37,15,-58,38,-78r16,16v-19,17,-32,30,-31,65r0,244","w":127},")":{"d":"46,-363v23,20,38,41,38,78r0,249v2,37,-16,58,-38,78r-17,-16v18,-17,31,-30,31,-64r0,-244v1,-34,-13,-47,-31,-64","w":127},"*":{"d":"168,-197r-54,-33r1,64r-20,0r1,-64r-54,33r-10,-17r56,-31r-56,-30r10,-17r54,32r-1,-63r20,0r-1,63r54,-32r10,17r-56,30r56,31","w":210},"+":{"d":"126,-108r0,81r-21,0r0,-81r-81,0r0,-21r81,0r0,-81r21,0r0,81r81,0r0,21r-81,0"},",":{"d":"43,61r0,-92r30,0r0,62","w":116},"-":{"d":"37,-108r0,-21r118,0r0,21r-118,0","w":191},".":{"d":"43,0r0,-33r33,0r0,33r-33,0","w":118},"\/":{"d":"24,33r-24,0r128,-387r24,0","w":152},"0":{"d":"200,-83v0,50,-34,86,-84,86v-49,0,-84,-36,-84,-86r0,-155v0,-50,35,-85,84,-85v50,0,84,35,84,85r0,155xm177,-85v0,-86,31,-218,-61,-218v-92,0,-62,132,-62,218v0,38,22,67,62,67v40,0,61,-29,61,-67"},"1":{"d":"118,0r0,-294r-58,51r0,-27r58,-50r23,0r0,320r-23,0"},"2":{"d":"32,0r0,-20r129,-169v36,-41,17,-114,-44,-114v-33,0,-61,19,-61,64r-23,0v0,-48,31,-84,84,-84v78,0,107,88,63,146r-120,157r142,0r0,20r-170,0"},"3":{"d":"201,-86v0,57,-39,89,-91,89v-50,0,-87,-26,-91,-81r23,0v4,44,34,61,68,61v38,0,68,-26,68,-69v0,-45,-23,-70,-75,-68r0,-20v46,2,69,-21,69,-64v0,-42,-27,-65,-62,-65v-38,0,-60,22,-64,58r-23,0v5,-50,40,-79,87,-79v87,0,119,129,39,158v36,12,52,39,52,80"},"4":{"d":"169,-53r0,53r-23,0r0,-53r-127,0r0,-20r118,-247r25,0r-118,247r102,0r0,-102r23,0r0,102r43,0r0,20r-43,0"},"5":{"d":"123,-211v58,0,80,56,80,106v0,55,-26,108,-86,108v-52,0,-80,-27,-84,-74r23,0v5,34,23,54,61,54v48,0,63,-46,63,-88v0,-40,-8,-85,-60,-85v-29,0,-51,11,-58,33r-20,0r0,-163r154,0r0,20r-134,0r0,113v14,-16,34,-24,61,-24"},"6":{"d":"202,-90v0,51,-31,93,-85,93v-81,0,-102,-87,-67,-157r82,-166r23,0r-74,148v61,-27,121,18,121,82xm179,-89v0,-38,-21,-71,-62,-71v-38,0,-62,28,-62,71v0,43,24,71,62,71v38,0,62,-28,62,-71"},"7":{"d":"93,0r-23,0r113,-300r-121,0r0,50r-23,0r0,-70r168,0r0,20"},"8":{"d":"207,-86v0,51,-39,89,-91,89v-52,0,-92,-38,-92,-89v0,-37,20,-64,51,-80v-75,-34,-48,-157,41,-157v88,0,115,123,41,157v31,16,50,43,50,80xm184,-86v0,-39,-29,-70,-68,-70v-39,0,-69,31,-69,70v0,40,30,68,69,68v39,0,68,-28,68,-68xm177,-239v0,-37,-25,-64,-61,-64v-36,0,-62,27,-62,64v0,37,26,63,62,63v36,0,61,-26,61,-63"},"9":{"d":"114,-323v81,0,102,87,67,157r-82,166r-23,0r74,-148v-62,27,-120,-18,-120,-82v0,-51,30,-93,84,-93xm176,-232v0,-43,-24,-71,-62,-71v-38,0,-61,28,-61,71v0,38,20,71,61,71v38,0,62,-28,62,-71"},":":{"d":"55,0r0,-33r34,0r0,33r-34,0xm55,-140r0,-34r34,0r0,34r-34,0","w":131},";":{"d":"56,61r0,-92r31,0r0,62xm55,-140r0,-34r34,0r0,34r-34,0","w":131},"<":{"d":"184,-35r-137,-73r0,-21r137,-73r0,25r-114,59r114,58r0,25"},"=":{"d":"24,-73r0,-21r183,0r0,21r-183,0xm24,-142r0,-21r183,0r0,21r-183,0"},">":{"d":"184,-108r-137,73r0,-25r115,-58r-115,-59r0,-25r137,73r0,21"},"?":{"d":"117,-323v69,0,104,83,60,133v-17,32,-51,52,-46,104r-23,0v-8,-78,66,-91,66,-158v0,-34,-24,-59,-57,-59v-35,0,-58,27,-58,59r-23,0v0,-43,33,-79,81,-79xm104,0r0,-30r31,0r0,30r-31,0","w":219},"@":{"d":"190,-320v55,-1,90,38,89,92r0,228r-23,0r0,-27v-15,20,-33,30,-62,30v-58,0,-82,-40,-82,-111v0,-73,21,-112,81,-112v27,0,47,10,63,31v6,-67,-9,-113,-70,-113v-71,0,-128,1,-128,72r0,159v0,31,6,41,28,58r-16,16v-27,-19,-35,-35,-35,-74r0,-157v-1,-56,33,-92,88,-92r67,0xm256,-108v0,-44,-7,-92,-61,-92v-54,0,-60,48,-60,92v0,44,6,91,60,91v54,0,61,-47,61,-91","w":313},"A":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"\u00dd":16,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"B":{"d":"265,-87v0,57,-38,87,-94,87r-121,0r0,-320r117,0v53,0,93,30,93,83v0,34,-19,62,-50,72v35,12,55,41,55,78xm241,-87v0,-41,-29,-66,-73,-66r-94,0r0,131v76,1,167,12,167,-65xm236,-237v0,-78,-88,-60,-162,-62r0,124v74,-2,162,16,162,-62","w":301,"k":{"J":9}},"C":{"d":"61,-160v0,101,16,141,86,141v43,0,76,-27,85,-72r24,0v-11,58,-52,94,-109,94v-82,0,-110,-52,-110,-163v0,-112,27,-163,110,-163v58,0,98,35,109,93r-25,0v-9,-45,-41,-72,-84,-72v-69,0,-86,42,-86,142","w":289,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":9,"A":4}},"D":{"d":"268,-165v0,43,0,103,-31,136v-36,39,-116,27,-187,29r0,-320v71,2,151,-10,187,29v31,33,31,83,31,126xm244,-165v0,-36,1,-82,-24,-109v-32,-35,-87,-23,-146,-25r0,277v58,-2,114,11,146,-24v25,-27,24,-83,24,-119","w":305,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":12,"A":4}},"E":{"d":"50,0r0,-320r194,0r0,21r-170,0r0,127r145,0r0,21r-145,0r0,129r170,0r0,22r-194,0","w":269,"k":{"J":1}},"F":{"d":"74,-299r0,132r145,0r0,22r-145,0r0,145r-24,0r0,-320r194,0r0,21r-170,0","w":259,"k":{"\u00fc":14,"\u00fb":14,"\u00fa":14,"\u00f9":14,"\u00f8":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"\u00f1":14,"\u00eb":15,"\u00ea":15,"\u00e9":15,"\u00e8":15,"\u00e7":15,"\u00e6":15,"\u00e5":15,"\u00e4":15,"\u00e3":15,"\u00e2":15,"\u00e1":15,"\u00e0":15,"\u00d8":9,"\u00d6":9,"\u00d5":9,"\u00d4":9,"\u00d3":9,"\u00d2":9,"\u00c7":9,"\u00c6":8,"\u00c5":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"z":14,"x":14,"u":14,"r":14,"p":14,"o":15,"n":14,"m":14,"e":15,"c":15,"a":15,"S":4,"Q":9,"O":9,"J":57,"G":9,"C":9,"A":27,".":42}},"G":{"d":"147,-19v57,0,96,-51,86,-123r-86,0r0,-22r110,0r0,52v4,70,-49,115,-110,115v-82,0,-110,-52,-110,-163v0,-112,27,-163,110,-163v56,0,100,37,109,93r-24,0v-9,-45,-42,-72,-85,-72v-69,0,-86,42,-86,142v0,101,16,141,86,141","w":292,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"H":{"d":"241,0r0,-151r-167,0r0,151r-24,0r0,-320r24,0r0,148r167,0r0,-148r24,0r0,320r-24,0","w":314},"I":{"d":"50,0r0,-320r24,0r0,320r-24,0","w":123},"J":{"d":"179,-94v8,90,-110,127,-165,69r16,-16v12,12,26,22,54,22v46,0,71,-28,71,-80r0,-221r24,0r0,226","w":224,"k":{"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"K":{"d":"253,0r-103,-180r-76,93r0,87r-24,0r0,-320r24,0r0,200r162,-200r30,0r-100,122r116,198r-29,0","w":290,"k":{"\u00fd":16,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":16,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"L":{"d":"50,0r0,-320r24,0r0,298r170,0r0,22r-194,0","w":257,"k":{"\u201d":68,"\u2019":68,"\u00fd":27,"\u00dd":36,"\u00dc":5,"\u00db":5,"\u00da":5,"\u00d9":5,"\u00d8":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"\u00c7":12,"y":27,"Y":36,"W":18,"V":32,"U":5,"T":36,"Q":12,"O":12,"J":-2,"G":12,"C":12}},"M":{"d":"294,0r0,-264r-97,219r-24,0r-99,-219r0,264r-24,0r0,-320r24,0r111,247r109,-247r25,0r0,320r-25,0","w":368},"N":{"d":"259,0r-185,-279r0,279r-24,0r0,-320r24,0r185,277r0,-277r24,0r0,320r-24,0","w":332},"O":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141","w":293,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"P":{"d":"264,-228v0,58,-42,92,-97,92r-93,0r0,136r-24,0r0,-320r117,0v55,0,97,33,97,92xm239,-228v0,-83,-86,-71,-165,-71r0,141v78,0,165,14,165,-70","w":283,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"\u00c6":22,"\u00c5":22,"\u00c4":22,"\u00c3":22,"\u00c2":22,"\u00c1":22,"\u00c0":22,"s":4,"q":4,"o":4,"g":4,"e":4,"d":4,"c":4,"a":4,"J":54,"A":22,".":50}},"Q":{"d":"147,-323v81,8,109,51,109,163v0,66,0,96,-22,122r37,38r-16,16r-38,-38v-20,16,-44,25,-70,25v-82,0,-110,-52,-110,-163v0,-112,28,-153,110,-163xm61,-160v0,101,16,141,86,141v20,0,38,-6,54,-19r-45,-45r16,-16r45,45v14,-20,15,-48,15,-106v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142","w":292},"R":{"d":"238,0r-76,-148r-88,0r0,148r-24,0r0,-320r121,0v52,0,92,30,92,86v0,48,-29,78,-74,86r78,148r-29,0xm239,-234v0,-81,-89,-64,-165,-65r0,130v76,-1,165,16,165,-65","w":295,"k":{"J":4}},"S":{"d":"210,-148v59,55,18,151,-80,151v-47,0,-78,-14,-107,-43r17,-17v43,58,173,52,173,-28v0,-107,-183,-24,-183,-150v0,-95,138,-114,191,-53r-15,15v-34,-44,-152,-41,-152,37v0,81,117,52,156,88","w":264,"k":{"\u00dd":9,"Y":9,"S":3}},"T":{"d":"133,-299r0,299r-24,0r0,-299r-95,0r0,-21r215,0r0,21r-96,0","w":242,"k":{"\u00fd":18,"\u00fc":14,"\u00fb":18,"\u00fa":18,"\u00f9":18,"\u00f8":30,"\u00f6":18,"\u00f5":30,"\u00f4":30,"\u00f3":30,"\u00f2":30,"\u00f1":18,"\u00eb":18,"\u00ea":30,"\u00e9":30,"\u00e8":30,"\u00e7":30,"\u00e6":30,"\u00e5":30,"\u00e4":18,"\u00e3":30,"\u00e2":30,"\u00e1":30,"\u00e0":30,"\u00d8":9,"\u00d6":9,"\u00d5":9,"\u00d4":9,"\u00d3":9,"\u00d2":9,"\u00c7":9,"\u00c6":27,"\u00c5":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"z":18,"y":18,"x":18,"w":18,"v":18,"u":18,"s":30,"r":18,"q":30,"p":18,"o":30,"n":18,"m":18,"g":30,"e":30,"d":30,"c":30,"a":30,"Q":9,"O":9,"J":36,"G":9,"C":9,"A":27,".":36}},"U":{"d":"265,-104v0,63,-46,107,-110,107v-64,0,-110,-44,-110,-107r0,-216r24,0r0,213v0,53,34,88,86,88v52,0,85,-35,85,-88r0,-213r25,0r0,216","w":309,"k":{"J":5}},"V":{"d":"130,0r-20,0r-106,-320r26,0r90,277r90,-277r26,0","w":240,"k":{"\u00fd":4,"\u00fc":9,"\u00fb":9,"\u00fa":9,"\u00f9":9,"\u00f8":18,"\u00f6":14,"\u00f5":18,"\u00f4":18,"\u00f3":18,"\u00f2":18,"\u00f1":9,"\u00eb":14,"\u00ea":18,"\u00e9":18,"\u00e8":18,"\u00e7":18,"\u00e6":18,"\u00e5":18,"\u00e4":14,"\u00e3":18,"\u00e2":18,"\u00e1":18,"\u00e0":18,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":16,"\u00c5":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"z":9,"y":4,"x":9,"u":9,"s":18,"r":9,"q":18,"p":9,"o":18,"n":9,"m":9,"g":18,"e":18,"d":18,"c":18,"a":18,"Q":4,"O":4,"G":4,"C":4,"A":16,".":36}},"W":{"d":"290,0r-25,0r-76,-279r-75,279r-25,0r-80,-320r26,0r67,278r75,-278r25,0r75,278r67,-278r26,0","w":378,"k":{"\u00f8":18,"\u00f6":14,"\u00f5":18,"\u00f4":18,"\u00f3":18,"\u00f2":18,"\u00eb":14,"\u00ea":18,"\u00e9":18,"\u00e8":18,"\u00e7":18,"\u00e6":18,"\u00e5":18,"\u00e4":14,"\u00e3":18,"\u00e2":18,"\u00e1":18,"\u00e0":18,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":7,"\u00c5":7,"\u00c4":7,"\u00c3":7,"\u00c2":7,"\u00c1":7,"\u00c0":7,"s":18,"q":18,"o":18,"g":18,"e":18,"d":18,"c":18,"a":18,"Q":4,"O":4,"G":4,"C":4,"A":7,".":22}},"X":{"d":"203,0r-84,-143r-83,143r-28,0r98,-164r-92,-156r29,0r76,134r77,-134r28,0r-92,156r99,164r-28,0","w":239,"k":{"\u00fd":14,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":14,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"Y":{"d":"123,-133r0,133r-24,0r0,-133r-95,-187r27,0r81,162r80,-162r26,0","w":222,"k":{"\u00fc":18,"\u00fb":18,"\u00fa":18,"\u00f9":18,"\u00f8":36,"\u00f6":22,"\u00f5":36,"\u00f4":36,"\u00f3":36,"\u00f2":36,"\u00f1":18,"\u00eb":22,"\u00ea":36,"\u00e9":36,"\u00e8":36,"\u00e7":36,"\u00e6":36,"\u00e5":36,"\u00e4":22,"\u00e3":36,"\u00e2":36,"\u00e1":36,"\u00e0":36,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":18,"\u00c5":18,"\u00c4":18,"\u00c3":18,"\u00c2":18,"\u00c1":18,"\u00c0":18,"z":18,"x":18,"u":18,"s":36,"r":18,"q":36,"p":18,"o":36,"n":18,"m":18,"g":36,"e":36,"d":36,"c":36,"a":36,"Q":4,"O":4,"J":18,"G":4,"C":4,"A":18,".":36}},"Z":{"d":"28,0r0,-26r169,-273r-162,0r0,-21r188,0r0,21r-170,277r170,0r0,22r-195,0","w":251},"[":{"d":"44,33r0,-387r66,0r0,21r-43,0r0,346r43,0r0,20r-66,0","w":130},"\\":{"d":"128,33r-128,-387r24,0r128,387r-24,0","w":152},"]":{"d":"20,33r0,-19r45,0r0,-349r-45,0r0,-19r67,0r0,387r-67,0","w":130},"^":{"d":"174,-190r-58,-109r-59,109r-23,0r71,-133r21,0r71,133r-23,0"},"_":{"d":"0,72r0,-17r231,0r0,17r-231,0"},"`":{"d":"108,-266r-48,-66r30,0r44,66r-26,0","w":225},"a":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42","w":235},"b":{"d":"131,-220v63,-2,81,56,81,112v0,55,-18,113,-81,111v-25,0,-45,-6,-64,-31r0,28r-23,0r0,-320r23,0r0,131v19,-25,39,-31,64,-31xm189,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"c":{"d":"54,-108v-10,83,81,119,128,63r16,14v-59,71,-167,27,-167,-77v0,-104,107,-149,167,-78r-16,14v-47,-58,-139,-19,-128,64","w":221,"k":{"\u00f8":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"\u00eb":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"\u00e7":8,"\u00e6":2,"\u00e5":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"w":9,"o":8,"e":8,"d":4,"c":8,"a":2}},"d":{"d":"31,-108v0,-55,18,-114,81,-112v25,0,45,6,64,31r0,-131r23,0r0,320r-23,0r0,-28v-19,25,-39,31,-64,31v-63,1,-81,-55,-81,-111xm176,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"e":{"d":"54,-104v-8,85,84,111,130,60r18,13v-22,22,-43,34,-79,34v-60,0,-92,-39,-92,-111v0,-70,33,-112,87,-112v57,-1,90,44,87,116r-151,0xm182,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0","w":235,"k":{"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"f":{"d":"73,-200r0,200r-23,0r0,-200r-29,0r0,-17r29,0v-4,-62,4,-112,72,-103r0,20v-52,-9,-52,35,-49,83r49,0r0,17r-49,0","w":136,"k":{"\u201d":-9,"\u2019":-9,"\u00f8":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"\u00eb":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"\u00e7":7,"\u00e6":7,"\u00e5":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"o":7,"e":7,"c":7,"a":7,".":22}},"g":{"d":"31,-108v0,-55,18,-114,81,-112v25,0,45,6,64,31r0,-28r23,0r0,229v0,54,-32,94,-88,94v-32,0,-50,-9,-72,-29r15,-15v17,16,30,24,57,24v60,0,69,-52,65,-114v-19,25,-39,31,-64,31v-63,1,-81,-55,-81,-111xm176,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"h":{"d":"188,0v-6,-79,28,-199,-60,-199v-88,0,-55,119,-61,199r-23,0r0,-320r23,0r0,129v41,-55,144,-28,144,52r0,139r-23,0","w":251},"i":{"d":"44,0r0,-217r23,0r0,217r-23,0xm41,-292r0,-28r28,0r0,28r-28,0","w":110},"j":{"d":"67,47v1,41,-25,62,-72,57r0,-21v32,2,49,-5,49,-36r0,-264r23,0r0,264xm41,-292r0,-28r28,0r0,28r-28,0","w":110},"k":{"d":"191,0r-75,-119r-49,57r0,62r-23,0r0,-320r23,0r0,226r107,-123r29,0r-71,81r87,136r-28,0","w":237,"k":{"\u00f8":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"\u00eb":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"\u00e7":3,"\u00e6":3,"q":3,"o":3,"g":3,"e":3,"d":3,"c":3}},"l":{"d":"115,0v-47,4,-72,-14,-72,-56r0,-264r23,0r0,263v-2,32,16,39,49,37r0,20","w":129,"k":{"\u201d":27,"\u2019":27,"\u00fd":15,"\u00f8":9,"\u00f6":9,"\u00f5":9,"\u00f4":9,"\u00f3":9,"\u00f2":9,"\u00eb":11,"\u00ea":11,"\u00e9":11,"\u00e8":11,"\u00e7":11,"y":15,"w":9,"v":18,"o":9,"e":11,"c":11}},"m":{"d":"201,-180v34,-66,153,-47,153,41r0,139r-22,0v-6,-79,28,-199,-60,-199v-89,0,-55,119,-61,199r-23,0v-6,-79,28,-199,-60,-199v-88,0,-55,119,-61,199r-23,0r0,-217r23,0r0,26v31,-42,113,-38,134,11","w":395},"n":{"d":"67,-191v42,-55,144,-28,144,52r0,139r-23,0v-6,-79,28,-199,-60,-199v-88,0,-55,119,-61,199r-23,0r0,-217r23,0r0,26","w":251},"o":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"p":{"d":"131,-220v63,-2,81,56,81,112v0,55,-18,113,-81,111v-25,0,-45,-6,-64,-31r0,132r-23,0r0,-321r23,0r0,28v19,-25,39,-31,64,-31xm189,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"q":{"d":"31,-108v0,-55,18,-114,81,-112v25,0,45,6,64,31r0,-28r23,0r0,321r-23,0r0,-132v-19,25,-39,31,-64,31v-63,1,-81,-55,-81,-111xm176,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"r":{"d":"166,-182v-36,-40,-99,-5,-99,48r0,134r-23,0r0,-217r23,0r0,29v23,-35,83,-46,115,-11","w":184,"k":{"\u00f8":14,"\u00f6":14,"\u00f5":14,"\u00f4":14,"\u00f3":14,"\u00f2":14,"\u00eb":14,"\u00ea":14,"\u00e9":14,"\u00e8":14,"\u00e7":14,"\u00e6":14,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"s":4,"q":14,"o":14,"g":14,"e":14,"d":14,"c":14,"a":4,".":54,",":54}},"s":{"d":"197,-62v0,75,-136,83,-175,34r16,-16v25,37,137,38,137,-18v0,-36,-43,-37,-78,-39v-44,-4,-65,-23,-65,-57v0,-69,112,-77,154,-39r-15,16v-30,-27,-119,-29,-117,23v3,68,143,7,143,96","w":222,"k":{"\u2019":8,"v":4,"t":4,"s":3}},"t":{"d":"121,0v-46,5,-72,-16,-72,-57r0,-143r-30,0r0,-17r30,0r0,-69r23,0r0,69r49,0r0,17r-49,0r0,144v-1,29,18,39,49,36r0,20","w":146,"k":{"\u00f8":1,"\u00f6":1,"\u00f5":1,"\u00f4":1,"\u00f3":1,"\u00f2":1,"\u00eb":1,"\u00ea":1,"\u00e9":1,"\u00e8":1,"\u00e7":1,"\u00e6":1,"\u00e5":1,"\u00e4":1,"\u00e3":1,"\u00e2":1,"\u00e1":1,"\u00e0":1,"o":1,"e":1,"c":1,"a":1}},"u":{"d":"185,-26v-42,54,-144,29,-144,-52r0,-139r23,0v6,79,-28,199,60,199v88,0,55,-119,61,-199r23,0r0,217r-23,0r0,-26","w":251},"v":{"d":"108,0r-22,0r-80,-217r26,0r65,190r65,-190r25,0","w":193,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"s":4,"o":4,"e":4,"c":4,"a":4,".":28}},"w":{"d":"245,0r-24,0r-61,-181r-61,181r-23,0r-70,-217r26,0r55,190r62,-190r22,0r63,190r55,-190r25,0","w":320,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"o":4,"e":4,"c":4,".":18}},"x":{"d":"161,0r-57,-91r-58,91r-28,0r73,-111r-70,-106r28,0r55,87r54,-87r28,0r-70,106r73,111r-28,0","w":207,"k":{"\u00f8":9,"\u00f6":9,"\u00f5":9,"\u00f4":9,"\u00f3":9,"\u00f2":9,"\u00eb":9,"\u00ea":9,"\u00e9":9,"\u00e8":9,"\u00e7":9,"\u00e6":9,"o":9,"e":9,"c":9}},"y":{"d":"86,59v-8,30,-32,41,-66,39r0,-20v52,7,49,-46,66,-78r-80,-217r26,0r65,190r65,-190r25,0","w":193,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"o":4,"e":4,"c":4,"a":4,".":28,",":54}},"z":{"d":"24,0r0,-22r131,-175r-123,0r0,-20r147,0r0,22r-131,175r131,0r0,20r-155,0","w":203},"{":{"d":"81,-22v0,34,7,35,39,35r0,20v-45,0,-62,-7,-62,-55v0,-48,24,-132,-36,-128r0,-20v92,6,-31,-199,98,-184r0,21v-33,-1,-39,1,-39,35v0,53,16,122,-27,138v44,16,27,85,27,138","w":142},"|":{"d":"60,33r0,-387r23,0r0,387r-23,0","w":142},"}":{"d":"22,-354v130,-16,3,182,98,184r0,20v-92,-7,31,198,-98,183r0,-20v32,0,39,-1,39,-35v0,-53,-16,-123,28,-138v-44,-16,-28,-85,-28,-138v0,-34,-6,-36,-39,-35r0,-21","w":142},"~":{"d":"24,-115v54,-79,115,40,170,-24r13,14v-53,78,-114,-38,-169,24"},"\u00a0":{"w":114},"\u00a1":{"d":"50,104r1,-234r22,0r1,234r-24,0xm47,-187r0,-30r30,0r0,30r-30,0","w":136},"\u00a2":{"d":"198,-87v-22,24,-40,32,-67,33r0,54r-19,0r0,-54v-51,-7,-81,-48,-81,-111v0,-63,30,-103,81,-110r0,-45r19,0r0,44v27,1,45,9,67,33r-16,15v-18,-19,-31,-27,-51,-28r0,182v20,-1,33,-8,51,-27xm112,-254v-60,2,-73,104,-43,151v10,15,25,25,43,28r0,-179","w":224},"\u00a3":{"d":"51,0r0,-154r-29,0r0,-17r29,0v-9,-87,17,-152,96,-152v28,0,52,9,70,27r-17,17v-12,-12,-25,-23,-53,-23v-65,0,-76,60,-71,131r71,0r0,17r-71,0r0,132r141,0r0,22r-166,0","w":241},"\u00a4":{"d":"243,-10r-34,-33v-33,28,-90,28,-123,0r-33,33r-15,-14r34,-34v-29,-33,-29,-90,0,-123r-34,-33r15,-15r33,33v33,-28,90,-28,123,0r34,-33r14,15r-33,33v28,33,28,90,0,123r33,34xm224,-119v0,-42,-34,-76,-76,-76v-42,0,-76,34,-76,76v0,42,34,76,76,76v42,0,76,-34,76,-76","w":295},"\u00a5":{"d":"144,-174r49,0r0,17r-58,0v-7,13,-15,25,-12,48r70,0r0,17r-70,0r0,92r-24,0r0,-92r-70,0r0,-17r70,0v2,-22,-5,-35,-12,-48r-58,0r0,-17r49,0r-74,-146r26,0r82,162r80,-162r25,0","w":221},"\u00a6":{"d":"60,33r0,-157r23,0r0,157r-23,0xm60,-196r0,-158r23,0r0,158r-23,0","w":147},"\u00a7":{"d":"151,-193v75,16,77,136,11,158v28,9,46,34,46,66v0,44,-34,75,-81,75v-45,0,-78,-25,-82,-70r24,0v3,32,24,49,58,49v34,0,57,-19,57,-54v0,-40,-45,-54,-80,-61v-76,-16,-76,-136,-11,-158v-28,-12,-44,-30,-44,-63v0,-45,35,-72,78,-72v42,0,78,24,80,68r-23,0v-3,-34,-24,-47,-57,-47v-34,0,-55,17,-55,51v0,43,43,50,79,58xm127,-47v35,0,60,-25,60,-64v0,-35,-26,-64,-60,-64v-35,0,-60,28,-59,64v1,38,24,64,59,64","w":254},"\u00a8":{"d":"53,-270r0,-35r26,0r0,35r-26,0xm146,-270r0,-35r26,0r0,35r-26,0","w":225},"\u00a9":{"d":"364,-160v0,90,-73,163,-163,163v-90,0,-163,-73,-163,-163v0,-90,73,-163,163,-163v90,0,163,73,163,163xm342,-160v0,-77,-64,-143,-141,-143v-77,0,-141,66,-141,143v0,77,64,143,141,143v77,0,141,-66,141,-143xm262,-91v-18,16,-34,23,-59,23v-55,0,-80,-42,-80,-92v0,-50,25,-93,80,-93v25,0,41,6,59,23r-14,14v-16,-14,-27,-19,-45,-19v-45,0,-59,35,-59,75v0,40,14,74,59,74v18,0,29,-4,45,-18","w":402},"\u00aa":{"d":"141,-163v-31,33,-114,23,-114,-31v0,-52,59,-52,114,-50v2,-38,-5,-61,-47,-60v-24,0,-36,5,-47,21r-15,-12v30,-46,128,-33,128,30r0,118r-19,0r0,-16xm90,-162v37,0,57,-21,51,-67v-41,0,-95,-7,-95,34v0,22,13,33,44,33","w":201},"\u00ab":{"d":"19,-119r88,-88r0,29r-58,59r58,58r0,30xm112,-119r88,-88r0,29r-58,59r58,58r0,30","w":237},"\u00ac":{"d":"186,-48r0,-60r-162,0r0,-21r183,0r0,81r-21,0"},"\u00ad":{"d":"37,-108r0,-21r118,0r0,21r-118,0","w":191},"\u00ae":{"d":"364,-160v0,90,-73,163,-163,163v-90,0,-163,-73,-163,-163v0,-90,73,-163,163,-163v90,0,163,73,163,163xm343,-160v0,-78,-64,-144,-142,-144v-78,0,-142,66,-142,144v0,78,64,143,142,143v78,0,142,-65,142,-143xm244,-70r-44,-75r-30,0r0,75r-20,0r0,-181v57,-3,112,-1,113,53v0,27,-17,44,-41,51r46,77r-24,0xm243,-198v0,-33,-37,-37,-73,-34r0,69v37,3,73,-2,73,-35","w":402},"\u00af":{"d":"179,-274r-133,0r0,-21r133,0r0,21","w":225},"\u00b0":{"d":"174,-253v0,39,-32,71,-71,71v-39,0,-71,-32,-71,-71v0,-39,32,-71,71,-71v39,0,71,32,71,71xm153,-253v0,-29,-21,-52,-50,-52v-29,0,-50,22,-50,52v0,30,21,52,50,52v29,0,50,-22,50,-52","w":206},"\u00b1":{"d":"126,-122r0,82r-21,0r0,-82r-81,0r0,-21r81,0r0,-81r21,0r0,81r81,0r0,21r-81,0xm24,0r0,-21r183,0r0,21r-183,0"},"\u00b2":{"d":"22,-128r0,-18r76,-96v19,-22,11,-64,-22,-62v-18,0,-34,9,-34,34r-20,0v0,-31,22,-52,54,-52v50,0,65,55,37,91r-67,85r83,0r0,18r-107,0","w":151},"\u00b3":{"d":"136,-181v0,36,-24,55,-56,55v-31,0,-57,-16,-58,-51r21,0v3,47,73,42,73,-4v0,-24,-13,-37,-41,-36r0,-18v25,1,37,-12,37,-35v0,-23,-15,-34,-33,-34v-20,0,-32,12,-34,31r-20,0v2,-31,25,-49,54,-49v54,0,72,76,28,95v19,7,29,22,29,46","w":158},"\u00b4":{"d":"117,-266r-26,0r44,-66r30,0","w":225},"\u00b5":{"d":"184,0r0,-26v-25,35,-91,39,-121,8r0,122r-23,0r0,-321r23,0v6,78,-28,199,59,199v88,0,57,-119,62,-199r23,0r0,217r-23,0","w":250},"\u00b6":{"d":"188,104r0,-403r-55,0r0,403r-23,0r0,-253v-58,0,-90,-44,-90,-86v0,-44,33,-85,95,-85r96,0r0,424r-23,0","w":260},"\u00b7":{"d":"43,-102r0,-33r33,0r0,33r-33,0","w":118},"\u00b8":{"d":"110,99r-29,0r33,-67r25,0","w":225},"\u00b9":{"d":"56,-128r0,-170r-36,32r0,-23v18,-11,23,-35,56,-31r0,192r-20,0","w":112},"\u00ba":{"d":"102,-322v46,0,69,45,69,88v0,43,-23,89,-69,89v-46,0,-70,-45,-70,-89v0,-44,24,-88,70,-88xm102,-163v36,0,54,-37,50,-71v3,-33,-14,-70,-50,-70v-36,0,-54,36,-50,70v-3,34,13,71,50,71","w":203},"\u00bb":{"d":"37,-31r0,-30r58,-58r-58,-59r0,-29r88,88xm130,-31r0,-30r59,-58r-59,-59r0,-29r88,88","w":237},"\u00bc":{"d":"299,-30r0,30r-20,0r0,-30r-77,0r0,-18r70,-144r21,0r-69,144r55,0r0,-54r20,0r0,54r23,0r0,18r-23,0xm96,0r-20,0r149,-320r20,0xm56,-128r0,-170r-36,32r0,-23v18,-11,23,-35,56,-31r0,192r-20,0","w":340},"\u00bd":{"d":"215,0r0,-18r76,-96v19,-23,10,-64,-23,-62v-18,0,-33,9,-33,34r-20,0v0,-31,21,-52,53,-52v50,0,66,55,38,91r-67,85r82,0r0,18r-106,0xm89,0r-20,0r149,-320r20,0xm56,-128r0,-170r-36,32r0,-23v18,-11,23,-35,56,-31r0,192r-20,0","w":343},"\u00be":{"d":"136,-181v0,36,-24,55,-56,55v-31,0,-57,-16,-58,-51r21,0v3,47,73,42,73,-4v0,-24,-13,-37,-41,-36r0,-18v25,1,37,-12,37,-35v0,-23,-15,-34,-33,-34v-20,0,-32,12,-34,31r-20,0v2,-31,25,-49,54,-49v54,0,72,76,28,95v19,7,29,22,29,46xm321,-30r0,30r-19,0r0,-30r-77,0r0,-18r69,-144r21,0r-68,144r55,0r0,-54r19,0r0,54r24,0r0,18r-24,0xm123,0r-20,0r149,-320r20,0","w":362},"\u00bf":{"d":"184,27v0,43,-33,79,-81,79v-69,0,-106,-82,-61,-133v17,-32,52,-51,47,-104r23,0v7,78,-67,92,-67,158v0,34,25,59,58,59v35,0,58,-27,58,-59r23,0xm85,-187r0,-30r30,0r0,30r-30,0","w":219},"\u00c0":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm130,-351r-47,-66r30,0r44,66r-27,0","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c1":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm140,-351r-26,0r44,-66r30,0","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c2":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm177,-351r-42,-49r-41,49r-26,0r55,-66r25,0r55,66r-26,0","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c3":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm66,-376v48,-63,76,30,123,-16r13,13v-49,62,-77,-32,-122,16","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c4":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm76,-356r0,-34r26,0r0,34r-26,0xm169,-356r0,-34r26,0r0,34r-26,0","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c5":{"d":"238,0r-28,-78r-149,0r-28,78r-26,0r118,-320r21,0r118,320r-26,0xm135,-288r-67,189r134,0xm187,-387v0,28,-24,51,-52,51v-28,0,-51,-23,-51,-51v0,-28,23,-52,51,-52v28,0,52,24,52,52xm168,-387v0,-18,-15,-33,-33,-33v-18,0,-32,15,-32,33v0,18,14,32,32,32v18,0,33,-14,33,-32","w":270,"k":{"\u201d":36,"\u2019":36,"\u00fd":11,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c6":{"d":"186,0r0,-78r-114,0r-41,78r-27,0r170,-320r206,0r0,21r-170,0r0,128r145,0r0,22r-145,0r0,127r170,0r0,22r-194,0xm186,-299r-104,200r104,0r0,-200","w":405},"\u00c7":{"d":"61,-160v0,101,16,141,86,141v43,0,76,-27,85,-72r24,0v-11,58,-52,94,-109,94v-82,0,-110,-52,-110,-163v0,-112,27,-163,110,-163v58,0,98,35,109,93r-25,0v-9,-45,-41,-72,-84,-72v-69,0,-86,42,-86,142xm136,99r-28,0r32,-67r25,0","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":9,"A":4}},"\u00c8":{"d":"50,0r0,-320r194,0r0,21r-170,0r0,127r145,0r0,21r-145,0r0,129r170,0r0,22r-194,0xm136,-351r-47,-66r30,0r43,66r-26,0","w":269,"k":{"J":1}},"\u00c9":{"d":"50,0r0,-320r194,0r0,21r-170,0r0,127r145,0r0,21r-145,0r0,129r170,0r0,22r-194,0xm146,-351r-26,0r44,-66r30,0","w":269,"k":{"J":1}},"\u00ca":{"d":"50,0r0,-320r194,0r0,21r-170,0r0,127r145,0r0,21r-145,0r0,129r170,0r0,22r-194,0xm183,-351r-42,-49r-42,49r-25,0r55,-66r24,0r56,66r-26,0","w":269,"k":{"J":1}},"\u00cb":{"d":"50,0r0,-320r194,0r0,21r-170,0r0,127r145,0r0,21r-145,0r0,129r170,0r0,22r-194,0xm81,-356r0,-34r27,0r0,34r-27,0xm175,-356r0,-34r26,0r0,34r-26,0","w":269,"k":{"J":1}},"\u00cc":{"d":"50,0r0,-320r24,0r0,320r-24,0xm57,-351r-48,-66r30,0r44,66r-26,0","w":123},"\u00cd":{"d":"50,0r0,-320r24,0r0,320r-24,0xm67,-351r-27,0r44,-66r30,0","w":123},"\u00ce":{"d":"50,0r0,-320r24,0r0,320r-24,0xm104,-351r-41,-49r-42,49r-26,0r55,-66r25,0r55,66r-26,0","w":123},"\u00cf":{"d":"50,0r0,-320r24,0r0,320r-24,0xm2,-356r0,-34r26,0r0,34r-26,0xm95,-356r0,-34r27,0r0,34r-27,0","w":123},"\u00d0":{"d":"256,-269v25,14,23,210,0,218v-18,29,-50,51,-97,51r-105,0r0,-152r-36,0r0,-19r36,0r0,-149v87,1,171,-13,202,51xm79,-21v116,2,185,0,170,-137v13,-135,-51,-146,-170,-141r0,128r80,0r0,19r-80,0r0,131","w":310,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":12,"A":4}},"\u00d1":{"d":"259,0r-185,-279r0,279r-24,0r0,-320r24,0r185,277r0,-277r24,0r0,320r-24,0xm97,-376v48,-63,76,30,123,-16r14,13v-48,62,-78,-31,-123,16","w":332},"\u00d2":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141xm142,-351r-48,-66r30,0r44,66r-26,0","w":293,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d3":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141xm152,-351r-26,0r43,-66r30,0","w":293,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d4":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141xm189,-351r-42,-49r-42,49r-26,0r56,-66r24,0r55,66r-25,0","w":293,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d5":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141xm77,-376v48,-63,76,30,123,-16r14,13v-48,62,-77,-32,-123,16","w":293,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d6":{"d":"147,-323v81,8,109,51,109,163v0,113,-27,154,-109,163v-81,-8,-110,-52,-110,-163v0,-112,28,-153,110,-163xm147,-19v68,-9,85,-42,85,-141v0,-101,-16,-131,-85,-142v-69,9,-86,42,-86,142v0,101,17,131,86,141xm87,-356r0,-34r26,0r0,34r-26,0xm180,-356r0,-34r27,0r0,34r-27,0","w":293,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d7":{"d":"185,-35r-69,-70r-70,70r-14,-14r70,-70r-70,-70r14,-13r70,69r69,-69r14,13r-69,70r69,70"},"\u00d8":{"d":"37,-160v0,-112,27,-163,110,-163v21,0,40,6,58,16r16,-33r24,0r-22,46v32,29,33,59,33,134v0,113,-26,163,-109,163v-21,0,-41,-6,-59,-16r-16,33r-23,0r22,-46v-32,-30,-34,-59,-34,-134xm147,-302v-69,0,-86,42,-86,142v0,63,1,89,20,111r114,-238v-14,-10,-30,-15,-48,-15xm147,-19v68,0,85,-42,85,-141v0,-63,-1,-90,-20,-112r-114,238v14,10,31,15,49,15","w":293,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d9":{"d":"265,-104v0,63,-46,107,-110,107v-64,0,-110,-44,-110,-107r0,-216r24,0r0,213v0,53,34,88,86,88v52,0,85,-35,85,-88r0,-213r25,0r0,216xm150,-351r-48,-66r30,0r44,66r-26,0","w":309,"k":{"J":5}},"\u00da":{"d":"265,-104v0,63,-46,107,-110,107v-64,0,-110,-44,-110,-107r0,-216r24,0r0,213v0,53,34,88,86,88v52,0,85,-35,85,-88r0,-213r25,0r0,216xm160,-351r-26,0r43,-66r30,0","w":309,"k":{"J":5}},"\u00db":{"d":"265,-104v0,63,-46,107,-110,107v-64,0,-110,-44,-110,-107r0,-216r24,0r0,213v0,53,34,88,86,88v52,0,85,-35,85,-88r0,-213r25,0r0,216xm197,-351r-42,-49r-42,49r-26,0r56,-66r24,0r55,66r-25,0","w":309,"k":{"J":5}},"\u00dc":{"d":"265,-104v0,63,-46,107,-110,107v-64,0,-110,-44,-110,-107r0,-216r24,0r0,213v0,53,34,88,86,88v52,0,85,-35,85,-88r0,-213r25,0r0,216xm95,-356r0,-34r26,0r0,34r-26,0xm189,-356r0,-34r26,0r0,34r-26,0","w":309,"k":{"J":5}},"\u00dd":{"d":"123,-133r0,133r-24,0r0,-133r-95,-187r27,0r81,162r80,-162r26,0xm116,-351r-26,0r44,-66r30,0","w":222,"k":{"\u00fc":18,"\u00fb":18,"\u00fa":18,"\u00f9":18,"\u00f8":36,"\u00f6":36,"\u00f5":36,"\u00f4":36,"\u00f3":36,"\u00f2":36,"\u00f1":18,"\u00eb":36,"\u00ea":36,"\u00e9":36,"\u00e8":36,"\u00e7":36,"\u00e6":36,"\u00e5":36,"\u00e4":36,"\u00e3":36,"\u00e2":36,"\u00e1":36,"\u00e0":36,"\u00d8":4,"\u00c6":18,"z":18,"x":18,"u":18,"s":36,"r":18,"q":36,"p":18,"o":36,"n":18,"m":18,"g":36,"e":36,"d":36,"c":36,"a":36,"Q":4,"O":4,"J":18,"G":4,"C":4,"A":18,".":36}},"\u00de":{"d":"264,-162v0,58,-42,93,-97,93r-93,0r0,69r-24,0r0,-320r24,0r0,66r93,0v55,0,97,33,97,92xm239,-162v0,-83,-86,-70,-165,-70r0,141v79,0,165,13,165,-71","w":290},"\u00df":{"d":"190,-251v0,-34,-24,-53,-63,-52v-43,0,-60,27,-60,67r0,236r-23,0r0,-236v0,-54,32,-88,86,-88v45,0,82,23,82,73v0,24,-9,42,-28,55v44,18,29,81,29,136v0,45,-33,66,-85,60r0,-20v37,3,63,-8,62,-43v-2,-60,20,-137,-62,-121r0,-21v38,4,62,-12,62,-46","w":247},"\u00e0":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm107,-266r-48,-66r31,0r43,66r-26,0","w":235},"\u00e1":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm117,-266r-26,0r44,-66r30,0","w":235},"\u00e2":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm154,-266r-42,-49r-42,49r-25,0r55,-66r24,0r56,66r-26,0","w":235},"\u00e3":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm43,-291v49,-62,77,32,123,-16r13,13v-48,62,-76,-29,-123,16","w":235},"\u00e4":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm52,-270r0,-35r26,0r0,35r-26,0xm146,-270r0,-35r26,0r0,35r-26,0","w":235},"\u00e5":{"d":"171,-22v-37,43,-146,33,-146,-37v0,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v34,-59,161,-41,161,38r0,148r-23,0r0,-22xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm163,-305v0,28,-23,52,-51,52v-28,0,-51,-24,-51,-52v0,-28,23,-51,51,-51v28,0,51,23,51,51xm145,-305v0,-18,-15,-32,-33,-32v-18,0,-33,14,-33,32v0,18,15,33,33,33v18,0,33,-15,33,-33","w":235},"\u00e6":{"d":"105,3v-51,1,-77,-19,-80,-62v-3,-66,76,-66,146,-63v3,-50,-5,-78,-61,-77v-31,0,-46,7,-60,27r-17,-14v27,-50,138,-44,155,5v48,-75,173,-35,157,77r-151,0v-8,85,84,111,130,60r18,13v-35,46,-131,47,-157,-7v-18,29,-40,41,-80,41xm105,-18v48,0,75,-27,66,-86v-53,0,-123,-9,-123,44v0,29,17,42,57,42xm322,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0","w":375},"\u00e7":{"d":"54,-108v-10,83,81,119,128,63r16,14v-59,71,-167,27,-167,-77v0,-104,107,-149,167,-78r-16,14v-47,-58,-139,-19,-128,64xm139,32r-29,67r-29,0r33,-67r25,0","w":221,"k":{"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"\u00eb":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"\u00e6":2,"\u00e5":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"w":9,"o":8,"e":8,"d":4,"c":8,"a":2}},"\u00e8":{"d":"54,-104v-8,85,84,111,130,60r18,13v-22,22,-43,34,-79,34v-60,0,-92,-39,-92,-111v0,-70,33,-112,87,-112v57,-1,90,44,87,116r-151,0xm182,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0xm114,-266r-48,-66r30,0r44,66r-26,0","w":235,"k":{"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00e9":{"d":"54,-104v-8,85,84,111,130,60r18,13v-22,22,-43,34,-79,34v-60,0,-92,-39,-92,-111v0,-70,33,-112,87,-112v57,-1,90,44,87,116r-151,0xm182,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0xm124,-266r-26,0r43,-66r30,0","w":235,"k":{"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00ea":{"d":"54,-104v-8,85,84,111,130,60r18,13v-22,22,-43,34,-79,34v-60,0,-92,-39,-92,-111v0,-70,33,-112,87,-112v57,-1,90,44,87,116r-151,0xm182,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0xm161,-266r-42,-49r-42,49r-26,0r56,-66r24,0r55,66r-25,0","w":235,"k":{"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00eb":{"d":"54,-104v-8,85,84,111,130,60r18,13v-22,22,-43,34,-79,34v-60,0,-92,-39,-92,-111v0,-70,33,-112,87,-112v57,-1,90,44,87,116r-151,0xm182,-122v9,-79,-93,-103,-120,-41v-5,14,-7,20,-8,41r128,0xm59,-270r0,-35r26,0r0,35r-26,0xm153,-270r0,-35r26,0r0,35r-26,0","w":235,"k":{"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00ec":{"d":"44,0r0,-217r23,0r0,217r-23,0xm40,-266r-47,-66r30,0r44,66r-27,0","w":110},"\u00ed":{"d":"44,0r0,-217r23,0r0,217r-23,0xm70,-266r-26,0r43,-66r30,0","w":110},"\u00ee":{"d":"44,0r0,-217r23,0r0,217r-23,0xm97,-266r-42,-49r-42,49r-26,0r56,-66r24,0r55,66r-25,0","w":110},"\u00ef":{"d":"44,0r0,-217r23,0r0,217r-23,0xm-5,-270r0,-35r26,0r0,35r-26,0xm89,-270r0,-35r26,0r0,35r-26,0","w":110},"\u00f0":{"d":"31,-108v-8,-67,49,-138,121,-104r-30,-51r-53,0r0,-17r43,0r-24,-40r24,0r23,40r36,0r0,17r-26,0v24,42,67,100,61,155v5,55,-29,111,-88,111v-58,0,-92,-57,-87,-111xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90","w":236},"\u00f1":{"d":"67,-191v42,-55,144,-28,144,52r0,139r-23,0v-6,-79,28,-199,-60,-199v-88,0,-55,119,-61,199r-23,0r0,-217r23,0r0,26xm58,-291v49,-62,78,31,123,-16r14,13v-48,62,-76,-29,-123,16","w":251},"\u00f2":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90xm116,-266r-48,-66r30,0r44,66r-26,0","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f3":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90xm123,-266r-26,0r44,-66r30,0","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f4":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90xm160,-266r-42,-49r-42,49r-25,0r55,-66r24,0r56,66r-26,0","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f5":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90xm49,-291v49,-62,77,32,123,-16r13,13v-48,62,-76,-29,-122,16","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f6":{"d":"118,-220v60,0,88,57,88,112v0,55,-29,111,-88,111v-58,0,-87,-56,-87,-111v0,-55,28,-112,87,-112xm118,-18v46,0,65,-46,65,-90v0,-44,-18,-91,-65,-91v-46,0,-69,47,-64,91v-5,44,18,90,64,90xm58,-270r0,-35r27,0r0,35r-27,0xm152,-270r0,-35r26,0r0,35r-26,0","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f7":{"d":"24,-108r0,-21r183,0r0,21r-183,0xm100,-179r0,-31r31,0r0,31r-31,0xm100,-27r0,-31r31,0r0,31r-31,0"},"\u00f8":{"d":"57,-22v-53,-66,-30,-200,61,-198v18,0,34,5,48,14r18,-31r21,0r-25,43v53,66,30,200,-62,197v-18,0,-33,-4,-47,-13r-18,30r-21,0xm68,-42r87,-146v-90,-52,-127,77,-87,146xm82,-29v85,49,129,-69,86,-146","w":236,"k":{"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f9":{"d":"185,-26v-42,54,-144,29,-144,-52r0,-139r23,0v6,79,-28,199,60,199v88,0,55,-119,61,-199r23,0r0,217r-23,0r0,-26xm119,-266r-47,-66r30,0r43,66r-26,0","w":251},"\u00fa":{"d":"185,-26v-42,54,-144,29,-144,-52r0,-139r23,0v6,79,-28,199,60,199v88,0,55,-119,61,-199r23,0r0,217r-23,0r0,-26xm129,-266r-26,0r44,-66r30,0","w":251},"\u00fb":{"d":"185,-26v-42,54,-144,29,-144,-52r0,-139r23,0v6,79,-28,199,60,199v88,0,55,-119,61,-199r23,0r0,217r-23,0r0,-26xm166,-266r-42,-49r-42,49r-25,0r55,-66r24,0r56,66r-26,0","w":251},"\u00fc":{"d":"185,-26v-42,54,-144,29,-144,-52r0,-139r23,0v6,79,-28,199,60,199v88,0,55,-119,61,-199r23,0r0,217r-23,0r0,-26xm64,-270r0,-35r26,0r0,35r-26,0xm158,-270r0,-35r26,0r0,35r-26,0","w":251},"\u00fd":{"d":"86,59v-8,30,-32,41,-66,39r0,-20v52,7,49,-46,66,-78r-80,-217r26,0r65,190r65,-190r25,0xm102,-266r-26,0r43,-66r30,0","w":193,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"o":4,"e":4,"c":4,"a":4,".":28,",":54}},"\u00fe":{"d":"131,-220v63,-2,81,56,81,112v0,55,-18,113,-81,111v-25,0,-45,-6,-64,-31r0,132r-23,0r0,-424r23,0r0,131v19,-25,39,-31,64,-31xm189,-108v0,-45,-8,-91,-61,-91v-53,0,-61,46,-61,91v0,45,8,90,61,90v53,0,61,-45,61,-90","w":243},"\u00ff":{"d":"86,59v-8,30,-32,41,-66,39r0,-20v52,7,49,-46,66,-78r-80,-217r26,0r65,190r65,-190r25,0xm37,-270r0,-35r26,0r0,35r-26,0xm130,-270r0,-35r27,0r0,35r-27,0","w":193},"\u2013":{"d":"24,-108r0,-21r183,0r0,21r-183,0"},"\u2014":{"d":"37,-108r0,-21r319,0r0,21r-319,0","w":392},"\u2018":{"d":"43,-289r0,-31r31,-32r0,63r-31,0","w":117,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"s":27,"J":54,"A":36}},"\u2019":{"d":"43,-257r0,-63r31,0r0,31","w":117,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"s":27,"J":54,"A":36}},"\u201c":{"d":"43,-289r0,-31r31,-32r0,63r-31,0xm113,-289r0,-31r31,-32r0,63r-31,0","w":187,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"J":54,"A":36}},"\u201d":{"d":"43,-257r0,-63r31,0r0,31xm113,-257r0,-63r31,0r0,31","w":187,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"J":54,"A":36}},"\u2026":{"d":"146,0r0,-33r34,0r0,33r-34,0xm250,0r0,-33r33,0r0,33r-33,0xm43,0r0,-33r33,0r0,33r-33,0","w":325},"\u2122":{"d":"319,-128r0,-148r-49,98r-21,0r-50,-98r0,148r-19,0r0,-192r19,0r60,121r60,-121r20,0r0,192r-20,0xm89,-302r0,174r-20,0r0,-174r-55,0r0,-18r130,0r0,18r-55,0","w":364}}});

/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * 2005 Albert-Jan Pool published by FSI Fonts und Software GmbH
 * 
 * Trademark:
 * DIN is a trademark of FSI Fonts und Software GmbH
 * 
 * Manufacturer:
 * FSI Fonts und Software GmbH
 * 
 * Designer:
 * Albert-Jan Pool
 * 
 * Vendor URL:
 * http://www.fontfont.com
 * 
 * License information:
 * http://www.fontfont.com/eula/license.html
 */
Cufon.registerFont({"w":238,"face":{"font-family":"DIN Pro Medium","font-weight":500,"font-stretch":"normal","units-per-em":"448","panose-1":"2 0 5 3 3 0 0 2 0 4","ascent":"342","descent":"-106","x-height":"3","bbox":"-17 -448 405 95.2313","underline-thickness":"22.848","underline-position":"-38.08","stemh":"43","stemv":"46","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":107},"!":{"d":"110,-319r-10,224r-36,0r-10,-224r56,0xm107,0r-50,0r0,-49r50,0r0,49","w":148},"\"":{"d":"164,-233r-45,0r0,-86r45,0r0,86xm80,-233r-45,0r0,-86r45,0r0,86","w":198},"#":{"d":"279,-191r-41,0r-9,56r35,0r0,42r-42,0r-15,93r-47,0r15,-93r-62,0r-14,93r-48,0r15,-93r-36,0r0,-42r43,0r9,-56r-37,0r0,-42r43,0r14,-88r48,0r-14,88r61,0r14,-88r47,0r-14,88r35,0r0,42xm190,-191r-61,0r-9,56r61,0","w":301},"$":{"d":"223,-156v55,56,16,159,-71,157r0,50r-36,0r0,-48v-43,-2,-75,-13,-103,-42r33,-32v22,22,45,29,74,30r0,-99v-56,-6,-96,-30,-96,-88v0,-51,35,-88,92,-93r0,-40r36,0r0,40v35,2,62,13,86,36r-31,30v-16,-15,-36,-22,-59,-24r0,97v32,3,61,12,75,26xm148,-42v48,0,69,-50,41,-81v-11,-12,-26,-12,-41,-14r0,95xm120,-185r0,-94v-43,2,-64,50,-37,79v9,9,23,13,37,15","w":272},"%":{"d":"351,-103v0,60,-9,106,-62,106v-52,0,-63,-45,-63,-106v0,-39,28,-62,63,-62v35,0,62,23,62,62xm151,-261v0,60,-8,106,-62,106v-53,0,-63,-45,-63,-106v0,-39,28,-61,63,-61v35,0,62,22,62,61xm282,-319r-150,319r-37,0r151,-319r36,0xm289,-27v34,1,28,-42,28,-75v0,-20,-9,-32,-28,-32v-35,0,-29,40,-29,74v0,21,10,33,29,33xm89,-185v35,2,28,-41,28,-74v0,-20,-9,-33,-28,-33v-35,0,-29,41,-29,75v0,21,10,32,29,32","w":377},"&":{"d":"214,-250v0,38,-28,52,-57,72r67,80v12,-17,17,-35,17,-64r44,0v-1,41,-10,73,-32,98r53,64r-58,0r-26,-31v-14,12,-40,34,-88,34v-66,0,-104,-37,-104,-95v0,-44,33,-69,64,-90v-14,-17,-34,-39,-34,-69v0,-41,31,-71,78,-71v45,0,76,31,76,72xm194,-64r-75,-90v-23,16,-43,31,-43,61v1,59,80,71,118,29xm132,-207v18,-12,37,-21,38,-43v0,-18,-13,-32,-32,-32v-44,0,-37,49,-6,75","w":327},"'":{"d":"80,-233r-45,0r0,-86r45,0r0,86","w":115},"(":{"d":"84,-55v0,36,13,49,32,66r-31,31v-25,-22,-46,-49,-46,-94r0,-215v-3,-44,21,-72,46,-94r31,31v-19,18,-32,29,-32,66r0,209","w":142},")":{"d":"57,-361v25,22,47,50,47,94r0,215v2,43,-22,72,-47,94r-31,-31v18,-18,32,-29,31,-66r0,-209v1,-37,-13,-48,-31,-66","w":142},"*":{"d":"190,-209r-17,29r-49,-31r1,59r-33,0r2,-59r-50,31r-17,-29r52,-27r-52,-28r17,-29r50,31r-2,-58r33,0r-1,58r49,-31r17,29r-52,28","w":217},"+":{"d":"216,-101r-75,0r0,75r-43,0r0,-75r-75,0r0,-42r75,0r0,-75r43,0r0,75r75,0r0,42"},",":{"d":"87,27r-52,42r0,-121r52,0r0,79","w":121},"-":{"d":"161,-103r-131,0r0,-43r131,0r0,43","w":190},".":{"d":"90,0r-55,0r0,-55r55,0r0,55","w":124},"\/":{"d":"172,-352r-128,385r-44,0r128,-385r44,0","w":170},"0":{"d":"211,-89v0,57,-41,92,-92,92v-51,0,-92,-35,-92,-92r0,-141v0,-57,41,-92,92,-92v51,0,92,35,92,92r0,141xm119,-38v75,0,47,-120,47,-191v0,-31,-18,-52,-47,-52v-74,0,-46,121,-46,191v0,31,17,52,46,52"},"1":{"d":"159,0r-46,0r0,-269r-62,54r0,-50r62,-54r46,0r0,319"},"2":{"d":"214,0r-186,0r0,-41r123,-149v30,-31,20,-92,-30,-91v-24,0,-47,13,-47,49r-45,0v0,-54,38,-90,92,-90v87,0,115,96,63,159r-100,122r130,0r0,41"},"3":{"d":"214,-90v0,61,-45,93,-98,93v-51,0,-95,-27,-97,-89r46,0v2,34,25,48,51,48v30,0,52,-19,52,-53v0,-34,-20,-54,-60,-52r0,-40v37,2,56,-18,56,-49v0,-32,-22,-49,-48,-49v-28,0,-45,18,-47,46r-46,0v3,-54,42,-87,93,-87v89,0,127,123,53,157v27,12,45,36,45,75"},"4":{"d":"223,-48r-34,0r0,48r-44,0r0,-48r-129,0r0,-42r112,-229r49,0r-112,229r80,0r0,-75r44,0r0,75r34,0r0,42"},"5":{"d":"129,-212v62,0,86,54,86,105v0,61,-27,110,-94,110v-57,0,-91,-35,-93,-85r46,0v4,28,18,44,47,44v36,0,48,-32,48,-69v0,-38,-10,-66,-47,-66v-26,0,-40,12,-45,28r-42,0r0,-174r172,0r0,41r-130,0r0,84v11,-11,29,-18,52,-18"},"6":{"d":"214,-95v0,59,-39,98,-94,98v-89,0,-108,-97,-71,-174r72,-148r49,0r-68,137v60,-20,112,21,112,87xm168,-94v0,-31,-19,-55,-49,-55v-29,0,-48,21,-48,55v0,34,19,56,48,56v29,0,49,-22,49,-56"},"7":{"d":"218,-278r-106,278r-50,0r107,-278r-97,0r0,50r-44,0r0,-91r190,0r0,41"},"8":{"d":"218,-90v0,58,-44,93,-99,93v-55,0,-98,-35,-98,-93v0,-38,22,-62,44,-75v-21,-13,-39,-34,-39,-68v0,-53,41,-89,93,-89v52,0,93,36,93,89v0,34,-17,55,-38,68v22,13,44,37,44,75xm172,-91v0,-30,-23,-53,-53,-53v-30,0,-52,23,-52,53v0,30,22,53,52,53v30,0,53,-23,53,-53xm167,-232v0,-28,-20,-49,-48,-49v-28,0,-47,21,-47,49v0,28,19,48,47,48v28,0,48,-20,48,-48"},"9":{"d":"119,-322v89,0,109,97,71,174r-73,148r-48,0r68,-137v-60,20,-112,-21,-112,-87v0,-59,39,-98,94,-98xm168,-225v0,-34,-20,-56,-49,-56v-29,0,-48,22,-48,56v0,31,18,55,48,55v29,0,49,-21,49,-55"},":":{"d":"101,-128r-54,0r0,-54r54,0r0,54xm101,0r-54,0r0,-55r54,0r0,55","w":135},";":{"d":"99,27r-52,42r0,-121r52,0r0,79xm101,-128r-54,0r0,-54r54,0r0,54","w":135},"<":{"d":"202,-25r-165,-79r0,-41r165,-79r0,48r-110,52r110,51r0,48"},"=":{"d":"216,-146r-193,0r0,-43r193,0r0,43xm216,-60r-193,0r0,-42r193,0r0,42"},">":{"d":"202,-104r-165,79r0,-48r109,-51r-109,-52r0,-48r165,79r0,41"},"?":{"d":"121,-322v73,0,118,88,68,141v-15,27,-45,44,-43,86r-45,0v-8,-70,64,-83,64,-141v0,-25,-18,-45,-44,-45v-28,0,-43,21,-43,45r-46,0v0,-51,38,-86,89,-86xm149,0r-51,0r0,-49r51,0r0,49","w":228},"@":{"d":"198,-320v65,-2,103,39,103,105r0,216r-43,-1r0,-22v-14,17,-31,25,-57,25v-57,0,-79,-40,-79,-108v0,-68,21,-108,79,-108v25,0,42,8,56,25v7,-56,-15,-92,-64,-92v-66,0,-120,2,-120,65r0,140v0,25,5,35,22,49r-31,31v-57,-36,-30,-137,-35,-220v-4,-67,37,-107,103,-105r66,0xm257,-105v0,-39,-8,-69,-46,-69v-38,0,-45,30,-45,69v0,39,7,69,45,69v38,0,46,-30,46,-69","w":329},"A":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"\u00dd":16,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"B":{"d":"267,-90v0,59,-40,90,-96,90r-129,0r0,-319r124,0v59,0,96,33,96,87v0,34,-21,59,-43,68v25,10,48,34,48,74xm219,-92v0,-28,-19,-49,-53,-49r-76,0r0,98r76,0v34,0,53,-21,53,-49xm214,-230v0,-57,-69,-46,-124,-46r0,92v55,-1,124,11,124,-46","w":297,"k":{"J":9}},"C":{"d":"78,-159v0,92,8,106,67,118v35,0,57,-22,65,-54r48,0v-11,64,-55,98,-113,98v-82,0,-126,-63,-115,-162v-9,-100,31,-163,115,-163v59,0,102,34,113,98r-49,0v-8,-32,-29,-54,-64,-54v-60,0,-67,28,-67,119","w":281,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":9,"A":4}},"D":{"d":"268,-162v0,46,1,97,-32,132v-39,42,-119,27,-194,30r0,-319v74,3,155,-12,194,30v33,35,32,81,32,127xm149,-43v62,-1,71,-45,71,-119v0,-73,-11,-112,-71,-114r-59,0r0,233r59,0","w":298,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":12,"A":4}},"E":{"d":"246,0r-204,0r0,-319r204,0r0,43r-156,0r0,94r133,0r0,43r-133,0r0,96r156,0r0,43","w":270,"k":{"J":1}},"F":{"d":"246,-276r-156,0r0,98r133,0r0,43r-133,0r0,135r-48,0r0,-319r204,0r0,43","w":262,"k":{"\u00fc":13,"\u00fb":13,"\u00fa":13,"\u00f9":13,"\u00f8":15,"\u00f6":15,"\u00f5":15,"\u00f4":15,"\u00f3":15,"\u00f2":15,"\u00f1":13,"\u00eb":15,"\u00ea":15,"\u00e9":15,"\u00e8":15,"\u00e7":15,"\u00e6":15,"\u00e5":15,"\u00e4":15,"\u00e3":15,"\u00e2":15,"\u00e1":15,"\u00e0":15,"\u00d8":9,"\u00d6":9,"\u00d5":9,"\u00d4":9,"\u00d3":9,"\u00d2":9,"\u00c7":9,"\u00c6":8,"\u00c5":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"z":13,"x":13,"u":13,"r":13,"p":13,"o":15,"n":13,"m":13,"e":15,"c":15,"a":15,"S":4,"Q":9,"O":9,"J":56,"G":9,"C":9,"A":27,".":42}},"G":{"d":"145,-41v46,-1,75,-35,68,-90r-68,0r0,-41r116,0r0,48v5,79,-49,127,-116,127v-82,0,-126,-63,-115,-162v-9,-100,30,-163,115,-163v68,0,107,44,116,99r-49,0v-8,-35,-31,-55,-67,-55v-58,12,-68,27,-67,119v0,92,8,106,67,118","w":290,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"H":{"d":"268,0r-48,0r0,-139r-130,0r0,139r-48,0r0,-319r48,0r0,136r130,0r0,-136r48,0r0,319","w":309},"I":{"d":"90,0r-48,0r0,-319r48,0r0,319","w":131},"J":{"d":"190,-101v5,100,-124,136,-184,73r32,-32v30,35,103,21,103,-44r0,-215r49,0r0,218","w":226,"k":{"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"A":4}},"K":{"d":"290,0r-57,0r-89,-157r-54,64r0,93r-48,0r0,-319r48,0r0,160r130,-160r60,0r-104,125","w":294,"k":{"\u00ff":16,"\u00fd":16,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":16,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"L":{"d":"244,0r-202,0r0,-319r48,0r0,276r154,0r0,43","w":257,"k":{"\u201d":67,"\u2019":67,"\u00ff":27,"\u00fd":27,"\u00dd":36,"\u00dc":5,"\u00db":5,"\u00da":5,"\u00d9":5,"\u00d8":12,"\u00d6":12,"\u00d5":12,"\u00d4":12,"\u00d3":12,"\u00d2":12,"\u00c7":12,"y":27,"Y":36,"W":18,"V":31,"U":5,"T":36,"Q":12,"O":12,"J":-2,"G":12,"C":12}},"M":{"d":"323,0r-48,0r0,-213r-74,155r-36,0r-75,-155r0,213r-48,0r0,-319r48,0r93,198r92,-198r48,0r0,319","w":364},"N":{"d":"282,0r-45,0r-147,-224r0,224r-48,0r0,-319r44,0r147,224r0,-224r49,0r0,319","w":323},"O":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118","w":289,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"P":{"d":"265,-222v0,56,-40,97,-102,97r-73,0r0,125r-48,0r0,-319r121,0v62,0,102,41,102,97xm216,-222v0,-61,-66,-55,-126,-54r0,107v60,1,126,9,126,-53","w":281,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"\u00c6":22,"\u00c5":22,"\u00c4":22,"\u00c3":22,"\u00c2":22,"\u00c1":22,"\u00c0":22,"s":4,"q":4,"o":4,"g":4,"e":4,"d":4,"c":4,"a":4,"J":54,"A":22,".":49}},"Q":{"d":"145,-322v84,0,114,63,114,163v0,54,1,87,-20,116r31,30r-27,27r-32,-31v-18,13,-41,20,-66,20v-83,-3,-115,-62,-115,-162v0,-100,30,-163,115,-163xm78,-159v0,93,6,118,67,118v12,0,23,-3,32,-10r-33,-34r27,-27r31,31v14,-29,15,-171,-10,-177v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119","w":289},"R":{"d":"274,0r-56,0r-67,-134r-61,0r0,134r-48,0r0,-319r123,0v60,0,99,39,99,93v0,46,-27,75,-63,85xm216,-225v0,-59,-67,-52,-126,-51r0,100v57,0,126,10,126,-49","w":293,"k":{"J":4}},"S":{"d":"241,-91v0,106,-171,122,-228,52r33,-32v34,43,147,44,147,-19v0,-71,-113,-37,-146,-77v-51,-61,-10,-155,84,-155v42,0,72,11,99,37r-31,30v-34,-39,-128,-33,-128,25v0,67,118,36,144,74v17,15,26,38,26,65","w":264,"k":{"\u00dd":9,"Y":9,"S":3,"J":9}},"T":{"d":"237,-276r-87,0r0,276r-49,0r0,-276r-88,0r0,-43r224,0r0,43","w":250,"k":{"\u00ff":17,"\u00fd":17,"\u00fc":17,"\u00fb":17,"\u00fa":17,"\u00f9":17,"\u00f8":30,"\u00f6":30,"\u00f5":30,"\u00f4":30,"\u00f3":30,"\u00f2":30,"\u00f1":17,"\u00eb":30,"\u00ea":30,"\u00e9":30,"\u00e8":30,"\u00e7":30,"\u00e6":30,"\u00e5":30,"\u00e4":30,"\u00e3":30,"\u00e2":30,"\u00e1":30,"\u00e0":30,"\u00d8":9,"\u00d6":9,"\u00d5":9,"\u00d4":9,"\u00d3":9,"\u00d2":9,"\u00c7":9,"\u00c6":27,"\u00c5":27,"\u00c4":27,"\u00c3":27,"\u00c2":27,"\u00c1":27,"\u00c0":27,"z":17,"y":17,"x":17,"w":17,"v":17,"u":17,"s":30,"r":17,"q":30,"p":17,"o":30,"n":17,"m":17,"g":30,"e":30,"d":30,"c":30,"a":30,"Q":9,"O":9,"J":36,"G":9,"C":9,"A":27,".":36}},"U":{"d":"266,-108v0,66,-50,111,-115,111v-65,0,-114,-45,-114,-111r0,-211r48,0r0,209v0,43,26,69,66,69v40,0,66,-26,66,-69r0,-209r49,0r0,211","w":302,"k":{"J":5}},"V":{"d":"250,-319r-105,319r-38,0r-105,-319r50,0r74,232r73,-232r51,0","w":252,"k":{"\u00ff":4,"\u00fd":4,"\u00fc":9,"\u00fb":9,"\u00fa":9,"\u00f9":9,"\u00f8":18,"\u00f6":18,"\u00f5":18,"\u00f4":18,"\u00f3":18,"\u00f2":18,"\u00f1":9,"\u00eb":18,"\u00ea":18,"\u00e9":18,"\u00e8":18,"\u00e7":18,"\u00e6":18,"\u00e5":18,"\u00e4":18,"\u00e3":18,"\u00e2":18,"\u00e1":18,"\u00e0":18,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":16,"\u00c5":16,"\u00c4":16,"\u00c3":16,"\u00c2":16,"\u00c1":16,"\u00c0":16,"z":9,"y":4,"x":9,"u":9,"s":18,"r":9,"q":18,"p":9,"o":18,"n":9,"m":9,"g":18,"e":18,"d":18,"c":18,"a":18,"Q":4,"O":4,"G":4,"C":4,"A":16,".":36}},"W":{"d":"385,-319r-83,319r-42,0r-65,-224r-65,224r-42,0r-83,-319r51,0r56,228r64,-228r39,0r64,228r55,-228r51,0","w":390,"k":{"\u00f8":18,"\u00f6":18,"\u00f5":18,"\u00f4":18,"\u00f3":18,"\u00f2":18,"\u00eb":18,"\u00ea":18,"\u00e9":18,"\u00e8":18,"\u00e7":18,"\u00e6":18,"\u00e5":18,"\u00e4":18,"\u00e3":18,"\u00e2":18,"\u00e1":18,"\u00e0":18,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":7,"\u00c5":7,"\u00c4":7,"\u00c3":7,"\u00c2":7,"\u00c1":7,"\u00c0":7,"s":18,"q":18,"o":18,"g":18,"e":18,"d":18,"c":18,"a":18,"Q":4,"O":4,"G":4,"C":4,"A":7,".":22}},"X":{"d":"254,0r-56,0r-69,-122r-69,122r-56,0r99,-164r-92,-155r55,0r63,114r63,-114r56,0r-93,155","w":258,"k":{"\u00ff":14,"\u00fd":14,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"y":14,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"Y":{"d":"241,-319r-95,188r0,131r-48,0r0,-131r-96,-188r53,0r67,140r67,-140r52,0","w":243,"k":{"\u00fc":18,"\u00fb":18,"\u00fa":18,"\u00f9":18,"\u00f8":36,"\u00f6":36,"\u00f5":36,"\u00f4":36,"\u00f3":36,"\u00f2":36,"\u00f1":18,"\u00eb":36,"\u00ea":36,"\u00e9":36,"\u00e8":36,"\u00e7":36,"\u00e6":36,"\u00e5":36,"\u00e4":36,"\u00e3":36,"\u00e2":36,"\u00e1":36,"\u00e0":36,"\u00d8":4,"\u00d6":4,"\u00d5":4,"\u00d4":4,"\u00d3":4,"\u00d2":4,"\u00c7":4,"\u00c6":18,"\u00c5":18,"\u00c4":18,"\u00c3":18,"\u00c2":18,"\u00c1":18,"\u00c0":18,"z":18,"x":18,"u":18,"s":36,"r":18,"q":36,"p":18,"o":36,"n":18,"m":18,"g":36,"e":36,"d":36,"c":36,"a":36,"Q":4,"O":4,"J":18,"G":4,"C":4,"A":18,".":36}},"Z":{"d":"226,0r-204,0r0,-42r147,-234r-141,0r0,-43r198,0r0,39r-148,237r148,0r0,43","w":247},"[":{"d":"136,33r-97,0r0,-385r97,0r0,41r-52,0r0,303r52,0r0,41","w":155},"\\":{"d":"170,33r-44,0r-126,-382r44,0","w":170},"]":{"d":"117,33r-98,0r0,-40r53,0r0,-305r-53,0r0,-40r98,0r0,385","w":155},"^":{"d":"225,-180r-47,0r-50,-92r-50,92r-48,0r77,-142r42,0","w":255},"_":{"d":"256,77r-256,0r0,-31r256,0r0,31","w":255},"`":{"d":"135,-268r-34,0r-50,-73r51,0","w":224},"a":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33","w":237},"b":{"d":"142,-230v63,0,80,59,80,116v0,57,-17,117,-81,117v-25,0,-43,-6,-60,-27r0,24r-45,0r0,-319r46,0r0,115v17,-20,36,-26,60,-26xm177,-114v0,-40,-7,-75,-48,-75v-41,0,-47,35,-47,75v0,40,6,76,47,76v41,0,48,-36,48,-76","w":247},"c":{"d":"70,-114v-9,67,61,101,99,54r32,30v-63,64,-176,38,-176,-84v0,-122,112,-146,176,-84r-32,30v-38,-46,-108,-12,-99,54","w":217,"k":{"\u00f8":8,"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"\u00eb":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"\u00e7":8,"\u00e6":2,"\u00e5":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"w":9,"o":8,"e":8,"d":4,"c":8,"a":2}},"d":{"d":"26,-114v0,-57,17,-116,80,-116v24,0,43,6,60,26r0,-115r45,0r0,319r-44,0r0,-24v-17,21,-35,27,-60,27v-64,0,-81,-59,-81,-117xm166,-114v0,-40,-6,-75,-47,-75v-41,0,-48,35,-48,75v0,40,7,76,48,76v41,0,47,-36,47,-76","w":247},"e":{"d":"217,-100r-147,0v-7,66,80,81,113,40r29,27v-60,63,-187,49,-187,-81v0,-73,38,-116,96,-116v68,0,101,53,96,130xm172,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0","w":241,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"f":{"d":"134,-188r-45,0r0,188r-46,0r0,-188r-26,0r0,-35r26,0v-8,-66,16,-106,91,-98r0,39v-25,-1,-45,1,-45,26r0,33r45,0r0,35","w":146,"k":{"\u201d":-9,"\u2019":-9,"\u00f8":7,"\u00f6":7,"\u00f5":7,"\u00f4":7,"\u00f3":7,"\u00f2":7,"\u00eb":7,"\u00ea":7,"\u00e9":7,"\u00e8":7,"\u00e7":7,"\u00e6":7,"\u00e5":7,"\u00e4":7,"\u00e3":7,"\u00e2":7,"\u00e1":7,"\u00e0":7,"o":7,"e":7,"c":7,"a":7,".":22}},"g":{"d":"26,-118v0,-62,18,-113,80,-112v24,0,42,6,59,27r0,-24r45,0r0,226v8,91,-120,127,-178,66r29,-30v14,13,28,21,50,21v50,-2,56,-39,53,-87v-17,20,-36,26,-59,26v-60,-1,-79,-51,-79,-113xm164,-118v0,-36,-5,-71,-46,-71v-41,0,-47,35,-47,71v0,36,6,71,47,71v41,0,46,-35,46,-71","w":245},"h":{"d":"220,0r-46,0r0,-139v0,-34,-20,-50,-46,-50v-26,0,-46,16,-46,50r0,139r-46,0r0,-319r46,0r0,115v47,-53,138,-19,138,58r0,146","w":253},"i":{"d":"82,0r-46,0r0,-227r46,0r0,227xm83,-272r-48,0r0,-48r48,0r0,48","w":118},"j":{"d":"82,30v2,44,-35,70,-91,63r0,-39v26,2,45,-1,45,-27r0,-254r46,0r0,257xm83,-272r-48,0r0,-48r48,0r0,48","w":118},"k":{"d":"236,0r-57,0r-63,-105r-34,38r0,67r-46,0r0,-319r46,0r0,197r88,-105r56,0r-79,89","w":245,"k":{"\u00f8":3,"\u00f6":3,"\u00f5":3,"\u00f4":3,"\u00f3":3,"\u00f2":3,"\u00eb":3,"\u00ea":3,"\u00e9":3,"\u00e8":3,"\u00e7":3,"\u00e6":3,"q":3,"o":3,"g":3,"e":3,"d":3,"c":3}},"l":{"d":"125,0v-56,6,-90,-18,-90,-63r0,-256r46,0r0,254v-3,25,19,28,44,26r0,39","w":139,"k":{"\u201d":27,"\u2019":27,"\u00ff":15,"\u00fd":15,"\u00f8":9,"\u00f6":9,"\u00f5":9,"\u00f4":9,"\u00f3":9,"\u00f2":9,"\u00eb":11,"\u00ea":11,"\u00e9":11,"\u00e8":11,"\u00e7":11,"y":15,"w":9,"v":18,"o":9,"e":11,"c":11}},"m":{"d":"206,-197v43,-61,153,-32,153,52r0,145r-46,0r0,-138v0,-35,-20,-51,-46,-51v-25,0,-47,15,-47,48r0,141r-45,0r0,-138v0,-35,-20,-51,-46,-51v-26,0,-47,16,-47,51r0,138r-46,0r0,-227r45,0r0,23v31,-36,101,-35,125,7","w":392},"n":{"d":"81,-204v47,-53,139,-19,139,59r0,145r-45,0r0,-138v0,-35,-20,-51,-46,-51v-26,0,-47,16,-47,51r0,138r-46,0r0,-227r45,0r0,23","w":254},"o":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"p":{"d":"141,-230v63,0,81,58,81,116v0,57,-16,117,-80,117v-24,0,-43,-6,-60,-26r0,115r-46,0r0,-319r45,0r0,24v17,-21,35,-27,60,-27xm177,-114v0,-40,-7,-75,-48,-75v-41,0,-47,35,-47,75v0,40,6,76,47,76v41,0,48,-36,48,-76","w":247},"q":{"d":"26,-114v0,-57,17,-116,81,-116v25,0,43,6,60,27r0,-24r44,0r0,319r-45,0r0,-115v-17,20,-36,26,-60,26v-63,0,-80,-60,-80,-117xm166,-114v0,-40,-6,-75,-47,-75v-41,0,-48,35,-48,75v0,40,7,76,48,76v41,0,47,-36,47,-76","w":247},"r":{"d":"196,-208r-35,34v-26,-31,-79,-12,-79,36r0,138r-46,0r0,-227r45,0r0,25v22,-31,86,-41,115,-6","w":196,"k":{"\u00f8":14,"\u00f6":14,"\u00f5":14,"\u00f4":14,"\u00f3":14,"\u00f2":14,"\u00eb":14,"\u00ea":14,"\u00e9":14,"\u00e8":14,"\u00e7":14,"\u00e6":14,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"s":4,"q":14,"o":14,"g":14,"e":14,"d":14,"c":14,"a":4,".":54,",":45}},"s":{"d":"204,-69v1,84,-140,93,-190,39r30,-30v18,19,44,24,66,24v49,0,72,-55,19,-59v-54,-4,-103,-11,-103,-65v0,-78,122,-88,169,-44r-28,29v-21,-23,-98,-26,-98,12v0,25,41,27,68,29v43,3,67,25,67,65","w":223,"k":{"\u2019":8,"v":4,"t":4,"s":3}},"t":{"d":"131,0v-55,6,-89,-20,-89,-63r0,-125r-26,0r0,-35r26,0r0,-69r45,0r0,69r44,0r0,35r-44,0r0,123v-1,25,19,28,44,26r0,39","w":153,"k":{"\u00f8":1,"\u00f6":1,"\u00f5":1,"\u00f4":1,"\u00f3":1,"\u00f2":1,"\u00eb":1,"\u00ea":1,"\u00e9":1,"\u00e8":1,"\u00e7":1,"\u00e6":1,"\u00e5":1,"\u00e4":1,"\u00e3":1,"\u00e2":1,"\u00e1":1,"\u00e0":1,"o":1,"e":1,"c":1,"a":1}},"u":{"d":"173,-23v-47,54,-139,18,-139,-59r0,-145r46,0r0,138v0,35,19,51,45,51v26,0,47,-16,47,-51r0,-138r46,0r0,227r-45,0r0,-23","w":254},"v":{"d":"207,-227r-83,227r-37,0r-83,-227r48,0r54,160r53,-160r48,0","w":211,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"s":4,"o":4,"e":4,"c":4,"a":4,".":28}},"w":{"d":"329,-227r-71,227r-38,0r-54,-159r-53,159r-39,0r-70,-227r48,0r44,160r53,-160r35,0r53,160r43,-160r49,0","w":332,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"o":4,"e":4,"c":4,".":17}},"x":{"d":"215,0r-55,0r-47,-78r-48,78r-55,0r78,-116r-75,-111r55,0r45,74r44,-74r55,0r-74,111","w":225,"k":{"\u00f8":9,"\u00f6":9,"\u00f5":9,"\u00f4":9,"\u00f3":9,"\u00f2":9,"\u00eb":9,"\u00ea":9,"\u00e9":9,"\u00e8":9,"\u00e7":9,"\u00e6":9,"o":9,"e":9,"c":9}},"y":{"d":"208,-227r-100,272v-10,34,-39,49,-82,45r0,-41v44,8,45,-32,57,-60r-79,-216r48,0r54,160r53,-160r49,0","w":209,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e7":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"o":4,"e":4,"c":4,"a":4,".":28,",":27}},"z":{"d":"189,0r-170,0r0,-36r113,-150r-106,0r0,-41r163,0r0,36r-114,150r114,0r0,41","w":210},"{":{"d":"82,-159v73,20,-24,172,80,151r0,41v-57,4,-96,-7,-96,-62v0,-48,21,-122,-46,-110r0,-41v102,18,-14,-184,110,-172r32,0r0,41v-33,0,-52,-2,-50,35v2,46,6,112,-30,117","w":182},"|":{"d":"99,33r-46,0r0,-385r46,0r0,385","w":151},"}":{"d":"116,-290v0,48,-21,121,46,110r0,41v-30,-2,-47,5,-46,35v0,68,12,143,-64,137r-32,0r0,-41v33,0,52,3,50,-35v-3,-45,-7,-112,30,-116v-14,-6,-30,-16,-30,-45v0,-41,22,-114,-32,-107r-18,0r0,-41v57,-4,96,7,96,62","w":182},"~":{"d":"85,-160v44,-1,86,55,124,6r29,29v-26,26,-42,35,-66,35v-44,0,-86,-55,-124,-6r-29,-29v26,-26,42,-35,66,-35","w":257},"\u00a0":{"w":107},"\u00a1":{"d":"95,92r-56,0r10,-224r36,0xm92,-178r-50,0r0,-49r50,0r0,49","w":148},"\u00a2":{"d":"206,-82v-19,20,-38,30,-64,33r0,49r-35,0r0,-50v-48,-8,-82,-47,-82,-114v0,-67,34,-106,82,-114r0,-41r35,0r0,40v26,3,45,13,64,33r-31,30v-12,-13,-22,-19,-37,-21r0,147v15,-2,25,-9,37,-22xm111,-237v-55,9,-55,138,0,146r0,-146","w":223},"\u00a3":{"d":"231,0r-184,0r0,-140r-28,0r0,-35r28,0v-26,-127,104,-189,184,-116r-32,32v-30,-35,-111,-21,-103,44r0,40r58,0r0,35r-58,0r0,97r135,0r0,43","w":252},"\u00a4":{"d":"267,-36r-30,30r-33,-33v-31,23,-80,22,-111,0r-33,33r-30,-30r33,-33v-22,-31,-23,-81,0,-112r-33,-32r30,-30r33,32v31,-21,80,-22,111,0r33,-32r30,30r-33,32v22,31,23,81,0,112xm210,-125v0,-34,-27,-60,-61,-60v-34,0,-61,26,-61,60v0,34,27,61,61,61v34,0,61,-27,61,-61","w":297},"\u00a5":{"d":"241,-319r-65,130r39,0r0,35r-57,0v-7,12,-15,24,-12,46r69,0r0,35r-69,0r0,73r-48,0r0,-73r-69,0r0,-35r69,0v2,-22,-5,-34,-12,-46r-57,0r0,-35r39,0r-66,-130r53,0r67,141r67,-141r52,0","w":243},"\u00a6":{"d":"99,-195r-46,0r0,-157r46,0r0,157xm99,33r-46,0r0,-157r46,0r0,157","w":154},"\u00a7":{"d":"211,-118v0,35,-23,60,-43,70v22,10,39,29,39,63v2,105,-170,107,-172,3r45,0v2,22,17,36,42,36v51,0,56,-66,6,-77v-50,-12,-95,-35,-95,-93v0,-35,23,-60,44,-70v-22,-11,-38,-27,-38,-60v0,-42,30,-76,83,-76v53,0,84,31,85,74r-44,0v-2,-24,-18,-34,-41,-34v-25,0,-39,13,-39,35v0,30,39,37,65,45v41,12,63,40,63,84xm122,-69v27,0,44,-17,45,-48v1,-29,-17,-48,-45,-48v-28,0,-45,18,-44,48v0,31,17,48,44,48","w":243},"\u00a8":{"d":"181,-271r-41,0r0,-48r41,0r0,48xm84,-271r-41,0r0,-48r41,0r0,48","w":224},"\u00a9":{"d":"355,-159v0,90,-72,162,-162,162v-90,0,-162,-72,-162,-162v0,-90,72,-163,162,-163v90,0,162,73,162,163xm323,-159v0,-74,-58,-132,-130,-132v-72,0,-129,58,-129,132v0,74,57,131,129,131v72,0,130,-57,130,-131xm254,-93v-50,49,-138,17,-138,-66v0,-82,87,-116,138,-67r-20,21v-36,-35,-93,-7,-87,46v-6,53,52,79,87,45","w":386},"\u00aa":{"d":"134,-154v-33,35,-111,19,-111,-37v0,-47,54,-57,110,-52v14,-51,-59,-59,-78,-28r-25,-24v34,-46,140,-31,140,37r0,120r-36,0r0,-16xm91,-167v30,0,46,-14,42,-50v-31,0,-73,-6,-73,25v0,16,9,25,31,25","w":202},"\u00ab":{"d":"120,-19r-103,-103r103,-102r0,55r-48,47r48,48r0,55xm233,-19r-103,-103r103,-102r0,55r-48,47r48,48r0,55","w":265},"\u00ac":{"d":"217,-44r-43,0r0,-63r-152,0r0,-43r195,0r0,106"},"\u00ad":{"d":"161,-103r-131,0r0,-43r131,0r0,43","w":190},"\u00ae":{"d":"355,-159v0,90,-72,162,-162,162v-90,0,-162,-72,-162,-162v0,-90,72,-163,162,-163v90,0,162,73,162,163xm323,-159v0,-74,-57,-133,-130,-133v-73,0,-130,59,-130,133v0,74,57,132,130,132v73,0,130,-58,130,-132xm263,-72r-36,0r-36,-70r-22,0r0,70r-32,0r0,-175r65,0v63,-4,75,87,22,101xm227,-194v0,-26,-30,-28,-58,-26r0,53v29,2,58,-1,58,-27","w":386},"\u00af":{"d":"43,-277r0,-33r138,0r0,33r-138,0","w":224},"\u00b0":{"d":"184,-246v0,43,-36,78,-79,78v-43,0,-78,-35,-78,-78v0,-43,35,-78,78,-78v43,0,79,35,79,78xm146,-246v0,-23,-18,-42,-41,-42v-23,0,-40,19,-40,42v0,23,17,41,40,41v23,0,41,-18,41,-41","w":211},"\u00b1":{"d":"216,-142r-75,0r0,76r-43,0r0,-76r-75,0r0,-42r75,0r0,-75r43,0r0,75r75,0r0,42xm216,0r-193,0r0,-43r193,0r0,43"},"\u00b2":{"d":"137,-128r-117,0r0,-31r72,-83v17,-16,12,-48,-14,-48v-12,0,-23,6,-23,25r-35,0v0,-34,25,-56,58,-56v55,0,72,61,38,100r-54,62r75,0r0,31","w":156},"\u00b3":{"d":"142,-183v0,38,-27,58,-60,58v-31,0,-62,-17,-62,-57r35,0v0,17,13,26,27,26v15,0,26,-11,26,-28v0,-18,-12,-29,-33,-27r0,-29v20,2,30,-9,30,-25v1,-33,-48,-33,-48,-2r-34,0v1,-34,26,-54,58,-54v54,0,78,73,36,95v14,7,25,20,25,43","w":162},"\u00b4":{"d":"173,-341r-50,73r-34,0r33,-73r51,0","w":224},"\u00b5":{"d":"218,0r-45,0r0,-23v-22,25,-66,36,-93,14r0,101r-46,0r0,-319r46,0r0,138v0,35,20,51,46,51v26,0,46,-16,46,-51r0,-138r46,0r0,227","w":254},"\u00b6":{"d":"244,92r-46,0r0,-368r-48,0r0,368r-46,0r0,-234v-49,0,-87,-41,-87,-88v0,-53,40,-89,101,-89r126,0r0,411","w":285},"\u00b7":{"d":"90,-97r-55,0r0,-55r55,0r0,55","w":124},"\u00b8":{"d":"143,29r-23,66r-45,0r31,-66r37,0","w":224},"\u00b9":{"d":"91,-128r-34,0r0,-152r-39,34r0,-39r39,-34r34,0r0,191","w":124},"\u00ba":{"d":"103,-321v54,0,75,39,75,93v0,55,-21,92,-75,92v-55,0,-76,-38,-76,-92v0,-53,22,-93,76,-93xm103,-169v30,0,38,-29,38,-59v0,-31,-8,-60,-38,-60v-30,0,-38,29,-38,60v0,30,7,59,38,59","w":205},"\u00bb":{"d":"249,-122r-103,103r0,-55r48,-48r-48,-47r0,-55xm136,-122r-104,103r0,-55r49,-48r-49,-47r0,-55","w":265},"\u00bc":{"d":"267,-319r-150,319r-36,0r150,-319r36,0xm344,-27r-18,0r0,27r-33,0r0,-27r-78,0r0,-32r66,-132r37,0r-66,132r41,0r0,-37r33,0r0,37r18,0r0,32xm91,-128r-34,0r0,-152r-39,34r0,-39r39,-34r34,0r0,191","w":361},"\u00bd":{"d":"350,0r-116,0r0,-31r72,-83v17,-16,13,-48,-14,-48v-12,0,-24,5,-24,24r-34,0v0,-34,25,-55,58,-55v55,0,71,60,38,99r-54,63r74,0r0,31xm263,-319r-150,319r-36,0r150,-319r36,0xm91,-128r-34,0r0,-152r-39,34r0,-39r39,-34r34,0r0,191","w":370},"\u00be":{"d":"142,-183v0,38,-27,58,-60,58v-31,0,-62,-17,-62,-57r35,0v0,17,13,26,27,26v15,0,26,-11,26,-28v0,-18,-12,-29,-33,-27r0,-29v20,2,30,-9,30,-25v1,-33,-48,-33,-48,-2r-34,0v1,-34,26,-54,58,-54v54,0,78,73,36,95v14,7,25,20,25,43xm286,-319r-150,319r-37,0r151,-319r36,0xm360,-27r-18,0r0,27r-32,0r0,-27r-78,0r0,-32r65,-132r38,0r-66,132r41,0r0,-37r32,0r0,37r18,0r0,32","w":378},"\u00bf":{"d":"197,9v0,51,-38,86,-89,86v-73,0,-118,-88,-69,-142v15,-27,46,-43,43,-86r46,0v7,70,-64,84,-64,142v0,25,18,44,44,44v28,0,43,-20,43,-44r46,0xm130,-178r-50,0r0,-49r50,0r0,49","w":228},"\u00c0":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm162,-350r-35,0r-49,-72r50,0","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c1":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm200,-422r-50,72r-34,0r33,-72r51,0","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c2":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm216,-350r-38,0r-39,-43r-39,43r-38,0r58,-72r38,0","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c3":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm61,-381v37,-43,67,-16,105,-5v7,0,15,-2,27,-14r21,21v-37,45,-64,16,-105,6v-8,0,-13,0,-26,13","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"\u00d8":4,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c4":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm209,-352r-41,0r0,-49r41,0r0,49xm112,-352r-41,0r0,-49r41,0r0,49","w":280},"\u00c5":{"d":"276,0r-51,0r-22,-64r-126,0r-22,64r-51,0r117,-319r38,0xm190,-105r-49,-142r-50,142r99,0xm195,-392v0,31,-25,56,-56,56v-31,0,-56,-25,-56,-56v0,-31,25,-56,56,-56v31,0,56,25,56,56xm168,-392v0,-16,-13,-28,-29,-28v-16,0,-29,12,-29,28v0,16,13,28,29,28v16,0,29,-12,29,-28","w":280,"k":{"\u201d":36,"\u2019":36,"\u00ff":11,"\u00fd":11,"y":11,"w":2,"v":11,"Y":16,"W":12,"V":16,"T":27,"Q":4,"O":4,"J":-2,"G":4,"C":4}},"\u00c6":{"d":"402,0r-204,0r0,-73r-105,0r-38,73r-53,0r168,-319r232,0r0,43r-156,0r0,94r133,0r0,44r-133,0r0,95r156,0r0,43xm198,-114r0,-162r-84,162r84,0","w":426},"\u00c7":{"d":"78,-159v0,92,8,106,67,118v35,0,57,-22,65,-54r48,0v-11,64,-55,98,-113,98v-82,0,-126,-63,-115,-162v-9,-100,31,-163,115,-163v59,0,102,34,113,98r-49,0v-8,-32,-29,-54,-64,-54v-60,0,-67,28,-67,119xm168,29r-23,66r-46,0r32,-66r37,0","w":281,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":9,"A":4}},"\u00c8":{"d":"246,0r-204,0r0,-319r204,0r0,43r-156,0r0,94r133,0r0,43r-133,0r0,96r156,0r0,43xm163,-350r-35,0r-50,-72r51,0","w":270,"k":{"J":1}},"\u00c9":{"d":"246,0r-204,0r0,-319r204,0r0,43r-156,0r0,94r133,0r0,43r-133,0r0,96r156,0r0,43xm200,-422r-49,72r-35,0r34,-72r50,0","w":270,"k":{"J":1}},"\u00ca":{"d":"246,0r-204,0r0,-319r204,0r0,43r-156,0r0,94r133,0r0,43r-133,0r0,96r156,0r0,43xm216,-350r-38,0r-39,-43r-39,43r-38,0r58,-72r39,0","w":270,"k":{"J":1}},"\u00cb":{"d":"246,0r-204,0r0,-319r204,0r0,43r-156,0r0,94r133,0r0,43r-133,0r0,96r156,0r0,43xm208,-352r-41,0r0,-49r41,0r0,49xm112,-352r-42,0r0,-49r42,0r0,49","w":270},"\u00cc":{"d":"90,0r-48,0r0,-319r48,0r0,319xm83,-350r-34,0r-50,-72r51,0","w":131},"\u00cd":{"d":"90,0r-48,0r0,-319r48,0r0,319xm133,-422r-50,72r-35,0r34,-72r51,0","w":131},"\u00ce":{"d":"90,0r-48,0r0,-319r48,0r0,319xm143,-350r-38,0r-39,-43r-39,43r-38,0r58,-72r39,0","w":131},"\u00cf":{"d":"90,0r-48,0r0,-319r48,0r0,319xm135,-352r-41,0r0,-49r41,0r0,49xm39,-352r-42,0r0,-49r42,0r0,49","w":131},"\u00d0":{"d":"162,-319v80,6,124,55,114,160v17,156,-82,165,-226,159r0,-142r-33,0r0,-38r33,0r0,-139r112,0xm216,-71v18,-9,18,-169,-2,-177v-20,-34,-65,-28,-115,-28r0,96r61,0r0,38r-61,0r0,99v50,0,98,5,117,-28","w":306,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":12,"A":4}},"\u00d1":{"d":"282,0r-45,0r-147,-224r0,224r-48,0r0,-319r44,0r147,224r0,-224r49,0r0,319xm85,-381v37,-44,66,-16,105,-5v7,0,14,-2,26,-14r21,21v-37,45,-64,16,-105,6v-8,0,-13,0,-26,13","w":323},"\u00d2":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118xm168,-350r-34,0r-50,-72r50,0","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d3":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118xm206,-422r-50,72r-35,0r34,-72r51,0","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d4":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118xm222,-350r-38,0r-39,-43r-39,43r-38,0r57,-72r39,0","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d5":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118xm68,-381v37,-44,66,-16,104,-5v7,0,15,-2,27,-14r21,21v-37,45,-64,16,-105,6v-8,0,-13,0,-26,13","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d6":{"d":"145,-322v84,0,124,64,114,163v10,100,-30,162,-114,162v-83,0,-115,-62,-115,-162v0,-100,30,-163,115,-163xm145,-41v59,-11,67,-26,66,-118v0,-64,-3,-82,-19,-99v-11,-12,-28,-20,-47,-20v-60,0,-67,26,-67,119v0,93,7,106,67,118xm214,-352r-42,0r0,-49r42,0r0,49xm117,-352r-41,0r0,-49r41,0r0,49","w":289,"k":{"\u00c6":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d7":{"d":"213,-59r-28,28r-66,-65r-65,65r-28,-28r65,-66r-65,-65r28,-29r65,66r66,-66r28,29r-65,65"},"\u00d8":{"d":"226,-290v34,29,33,69,33,131v0,122,-65,190,-168,150r-13,29r-37,0r23,-49v-34,-29,-34,-68,-34,-130v0,-121,66,-191,168,-151r14,-29r37,0xm145,-41v60,0,67,-26,66,-118v0,-47,-1,-71,-9,-86r-93,194v10,6,23,10,36,10xm145,-278v-58,12,-67,27,-66,119v0,47,2,70,9,85r93,-194v-10,-6,-23,-10,-36,-10","w":292,"k":{"\u00dd":4,"\u00c6":4,"\u00c5":4,"\u00c4":4,"\u00c3":4,"\u00c2":4,"\u00c1":4,"\u00c0":4,"Y":4,"X":4,"W":4,"V":4,"T":9,"J":15,"A":4}},"\u00d9":{"d":"266,-108v0,66,-50,111,-115,111v-65,0,-114,-45,-114,-111r0,-211r48,0r0,209v0,43,26,69,66,69v40,0,66,-26,66,-69r0,-209r49,0r0,211xm175,-350r-35,0r-50,-72r51,0","w":302,"k":{"J":5}},"\u00da":{"d":"266,-108v0,66,-50,111,-115,111v-65,0,-114,-45,-114,-111r0,-211r48,0r0,209v0,43,26,69,66,69v40,0,66,-26,66,-69r0,-209r49,0r0,211xm212,-422r-49,72r-35,0r34,-72r50,0","w":302,"k":{"J":5}},"\u00db":{"d":"266,-108v0,66,-50,111,-115,111v-65,0,-114,-45,-114,-111r0,-211r48,0r0,209v0,43,26,69,66,69v40,0,66,-26,66,-69r0,-209r49,0r0,211xm228,-350r-38,0r-39,-43r-39,43r-38,0r58,-72r39,0","w":302,"k":{"J":5}},"\u00dc":{"d":"266,-108v0,66,-50,111,-115,111v-65,0,-114,-45,-114,-111r0,-211r48,0r0,209v0,43,26,69,66,69v40,0,66,-26,66,-69r0,-209r49,0r0,211xm220,-352r-41,0r0,-49r41,0r0,49xm123,-352r-41,0r0,-49r41,0r0,49","w":302,"k":{"J":5}},"\u00dd":{"d":"241,-319r-95,188r0,131r-48,0r0,-131r-96,-188r53,0r67,140r67,-140r52,0xm183,-422r-50,72r-34,0r33,-72r51,0","w":243,"k":{"\u00fc":18,"\u00fb":18,"\u00fa":18,"\u00f9":18,"\u00f8":36,"\u00f6":36,"\u00f5":36,"\u00f4":36,"\u00f3":36,"\u00f2":36,"\u00f1":18,"\u00eb":36,"\u00ea":36,"\u00e9":36,"\u00e8":36,"\u00e7":36,"\u00e6":36,"\u00e5":36,"\u00e4":36,"\u00e3":36,"\u00e2":36,"\u00e1":36,"\u00e0":36,"\u00d8":4,"\u00c6":18,"z":18,"x":18,"u":18,"s":36,"r":18,"q":36,"p":18,"o":36,"n":18,"m":18,"g":36,"e":36,"d":36,"c":36,"a":36,"Q":4,"O":4,"J":18,"G":4,"C":4,"A":18,".":36}},"\u00de":{"d":"265,-161v0,56,-40,96,-102,96r-73,0r0,65r-48,0r0,-319r48,0r0,61r73,0v62,0,102,41,102,97xm216,-161v0,-61,-66,-54,-126,-53r0,106v60,1,126,8,126,-53","w":285},"\u00df":{"d":"178,-244v0,-26,-18,-39,-47,-38v-35,0,-49,20,-49,51r0,231r-46,0r0,-234v0,-59,40,-88,96,-88v52,0,92,23,92,76v0,26,-12,42,-28,52v39,13,27,76,28,126v1,53,-35,73,-93,68r0,-39v29,2,49,-5,47,-33v-3,-47,18,-113,-47,-102r0,-37v28,2,47,-5,47,-33","w":253},"\u00e0":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm138,-268r-34,0r-50,-73r51,0","w":237},"\u00e1":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm176,-341r-50,73r-34,0r33,-73r51,0","w":237},"\u00e2":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm192,-268r-38,0r-39,-44r-39,44r-38,0r58,-72r38,0","w":237},"\u00e3":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm38,-299v37,-45,64,-17,104,-6v7,0,15,-2,27,-14r21,22v-37,44,-66,16,-105,5v-8,0,-13,1,-26,14","w":237},"\u00e4":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm184,-271r-41,0r0,-48r41,0r0,48xm87,-271r-41,0r0,-48r41,0r0,48","w":236},"\u00e5":{"d":"159,-21v-40,46,-140,25,-140,-46v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v42,-57,175,-42,175,45r0,152r-44,0r0,-21xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm171,-314v0,31,-25,56,-56,56v-31,0,-56,-25,-56,-56v0,-31,25,-56,56,-56v31,0,56,25,56,56xm144,-314v0,-16,-13,-28,-29,-28v-16,0,-29,12,-29,28v0,16,13,28,29,28v16,0,29,-12,29,-28","w":237},"\u00e6":{"d":"180,-33v-40,58,-161,48,-161,-34v0,-38,27,-65,79,-65r60,0v3,-39,-8,-59,-50,-59v-25,0,-37,6,-50,22r-30,-28v30,-45,132,-43,159,-3v16,-20,39,-30,67,-30v68,0,101,53,96,130r-147,0v-7,66,80,81,113,40r29,27v-35,45,-130,51,-165,0xm105,-35v37,0,59,-20,53,-65v-39,1,-94,-8,-94,32v0,21,12,33,41,33xm305,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0","w":374},"\u00e7":{"d":"70,-114v-9,67,61,101,99,54r32,30v-63,64,-176,38,-176,-84v0,-122,112,-146,176,-84r-32,30v-38,-46,-108,-12,-99,54xm143,29r-23,66r-45,0r31,-66r37,0","w":217,"k":{"\u00f6":8,"\u00f5":8,"\u00f4":8,"\u00f3":8,"\u00f2":8,"\u00eb":8,"\u00ea":8,"\u00e9":8,"\u00e8":8,"\u00e6":2,"\u00e5":2,"\u00e4":2,"\u00e3":2,"\u00e2":2,"\u00e1":2,"\u00e0":2,"w":9,"o":8,"e":8,"d":4,"c":8,"a":2}},"\u00e8":{"d":"217,-100r-147,0v-7,66,80,81,113,40r29,27v-60,63,-187,49,-187,-81v0,-73,38,-116,96,-116v68,0,101,53,96,130xm172,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0xm146,-268r-35,0r-50,-73r51,0","w":241,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00e9":{"d":"217,-100r-147,0v-7,66,80,81,113,40r29,27v-60,63,-187,49,-187,-81v0,-73,38,-116,96,-116v68,0,101,53,96,130xm172,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0xm183,-341r-49,73r-35,0r34,-73r50,0","w":241,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00ea":{"d":"217,-100r-147,0v-7,66,80,81,113,40r29,27v-60,63,-187,49,-187,-81v0,-73,38,-116,96,-116v68,0,101,53,96,130xm172,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0xm199,-268r-38,0r-39,-44r-39,44r-38,0r58,-72r39,0","w":241,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00eb":{"d":"217,-100r-147,0v-7,66,80,81,113,40r29,27v-60,63,-187,49,-187,-81v0,-73,38,-116,96,-116v68,0,101,53,96,130xm172,-132v9,-62,-77,-80,-96,-31v-4,10,-6,17,-6,31r102,0xm191,-271r-41,0r0,-48r41,0r0,48xm94,-271r-41,0r0,-48r41,0r0,48","w":241,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":3,"w":4,"v":4}},"\u00ec":{"d":"82,0r-46,0r0,-227r46,0r0,227xm78,-268r-34,0r-50,-73r51,0","w":118},"\u00ed":{"d":"82,0r-46,0r0,-227r46,0r0,227xm124,-341r-50,73r-34,0r33,-73r51,0","w":118},"\u00ee":{"d":"82,0r-46,0r0,-227r46,0r0,227xm138,-268r-39,0r-39,-44r-38,44r-39,0r58,-72r39,0","w":118},"\u00ef":{"d":"82,0r-46,0r0,-227r46,0r0,227xm129,-271r-42,0r0,-48r42,0r0,48xm32,-271r-41,0r0,-48r41,0r0,48","w":118},"\u00f0":{"d":"27,-112v0,-70,34,-121,107,-109r-20,-37r-52,0r0,-32r35,0r-17,-31r48,0r18,31r39,0r0,32r-23,0v22,42,51,92,51,146v0,68,-26,115,-93,115v-66,0,-93,-48,-93,-115xm120,-38v38,0,48,-35,48,-74v0,-39,-10,-73,-48,-73v-37,0,-47,35,-47,73v0,38,9,74,47,74","w":240},"\u00f1":{"d":"81,-204v47,-53,139,-19,139,59r0,145r-45,0r0,-138v0,-35,-20,-51,-46,-51v-26,0,-47,16,-47,51r0,138r-46,0r0,-227r45,0r0,23xm51,-299v38,-44,64,-16,105,-6v7,0,14,-2,26,-14r22,22v-37,44,-66,16,-105,5v-8,0,-13,1,-26,14","w":254},"\u00f2":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76xm140,-268r-34,0r-50,-73r51,0","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f3":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76xm181,-341r-50,73r-34,0r33,-73r51,0","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f4":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76xm197,-268r-38,0r-39,-44r-39,44r-38,0r58,-72r38,0","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f5":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76xm43,-299v37,-45,64,-17,104,-6v7,0,15,-2,27,-14r21,22v-37,44,-66,16,-105,5v-8,0,-13,1,-26,14","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f6":{"d":"120,-230v68,0,95,48,95,116v0,69,-27,117,-95,117v-68,0,-94,-47,-94,-117v0,-68,27,-116,94,-116xm120,-38v37,0,49,-35,49,-76v0,-40,-11,-75,-49,-75v-37,0,-49,36,-49,75v0,40,12,76,49,76xm189,-271r-41,0r0,-48r41,0r0,48xm92,-271r-41,0r0,-48r41,0r0,48","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f7":{"d":"217,-103r-195,0r0,-43r195,0r0,43xm144,-15r-49,0r0,-49r49,0r0,49xm144,-185r-49,0r0,-49r49,0r0,49"},"\u00f8":{"d":"52,-25v-51,-64,-34,-205,68,-205v19,0,34,4,47,11r17,-28r31,0r-27,44v52,63,35,206,-68,206v-19,0,-34,-5,-47,-12r-16,29r-31,0xm94,-46v63,35,92,-51,69,-117xm147,-181v-64,-36,-94,52,-69,116","w":240,"k":{"\u00ff":4,"\u00fd":4,"y":4,"x":9,"w":4,"v":4}},"\u00f9":{"d":"173,-23v-47,54,-139,18,-139,-59r0,-145r46,0r0,138v0,35,19,51,45,51v26,0,47,-16,47,-51r0,-138r46,0r0,227r-45,0r0,-23xm149,-268r-34,0r-50,-73r51,0","w":254},"\u00fa":{"d":"173,-23v-47,54,-139,18,-139,-59r0,-145r46,0r0,138v0,35,19,51,45,51v26,0,47,-16,47,-51r0,-138r46,0r0,227r-45,0r0,-23xm187,-341r-50,73r-34,0r33,-73r51,0","w":254},"\u00fb":{"d":"173,-23v-47,54,-139,18,-139,-59r0,-145r46,0r0,138v0,35,19,51,45,51v26,0,47,-16,47,-51r0,-138r46,0r0,227r-45,0r0,-23xm203,-268r-38,0r-39,-44r-39,44r-38,0r58,-72r38,0","w":254},"\u00fc":{"d":"173,-23v-47,54,-139,18,-139,-59r0,-145r46,0r0,138v0,35,19,51,45,51v26,0,47,-16,47,-51r0,-138r46,0r0,227r-45,0r0,-23xm194,-271r-41,0r0,-48r41,0r0,48xm98,-271r-42,0r0,-48r42,0r0,48","w":254},"\u00fd":{"d":"208,-227r-100,272v-10,34,-39,49,-82,45r0,-41v44,8,45,-32,57,-60r-79,-216r48,0r54,160r53,-160r49,0xm167,-341r-50,73r-35,0r34,-73r51,0","w":209,"k":{"\u00f8":4,"\u00f6":4,"\u00f5":4,"\u00f4":4,"\u00f3":4,"\u00f2":4,"\u00eb":4,"\u00ea":4,"\u00e9":4,"\u00e8":4,"\u00e6":4,"\u00e5":4,"\u00e4":4,"\u00e3":4,"\u00e2":4,"\u00e1":4,"\u00e0":4,"o":4,"e":4,"c":4,"a":4,".":28,",":27}},"\u00fe":{"d":"142,-230v63,0,80,59,80,116v0,57,-16,117,-80,117v-24,0,-43,-6,-60,-26r0,115r-46,0r0,-411r46,0r0,115v17,-20,36,-26,60,-26xm177,-114v0,-40,-7,-75,-48,-75v-41,0,-47,35,-47,75v0,40,6,76,47,76v41,0,48,-36,48,-76","w":248},"\u00ff":{"d":"208,-227r-100,272v-10,34,-39,49,-82,45r0,-41v44,8,45,-32,57,-60r-79,-216r48,0r54,160r53,-160r49,0xm175,-271r-41,0r0,-48r41,0r0,48xm78,-271r-41,0r0,-48r41,0r0,48","w":209},"\u2013":{"d":"216,-103r-193,0r0,-43r193,0r0,43"},"\u2014":{"d":"405,-103r-375,0r0,-44r375,0r0,44","w":435},"\u2018":{"d":"85,-272r-50,0r0,-47r50,-42r0,89","w":120,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"s":27,"J":54,"A":36}},"\u2019":{"d":"85,-272r-50,41r0,-88r50,0r0,47","w":120,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"s":27,"J":54,"A":36}},"\u201c":{"d":"171,-272r-50,0r0,-47r50,-42r0,89xm85,-272r-50,0r0,-47r50,-42r0,89","w":205,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"J":54,"A":36}},"\u201d":{"d":"171,-272r-50,41r0,-88r50,0r0,47xm85,-272r-50,41r0,-88r50,0r0,47","w":205,"k":{"\u00c6":36,"\u00c5":36,"\u00c4":36,"\u00c3":36,"\u00c2":36,"\u00c1":36,"\u00c0":36,"J":54,"A":36}},"\u2026":{"d":"325,0r-53,0r0,-52r53,0r0,52xm87,0r-52,0r0,-52r52,0r0,52xm206,0r-52,0r0,-52r52,0r0,52","w":359},"\u2122":{"d":"368,-128r-34,0r0,-125r-41,81r-31,0r-41,-81r0,125r-34,0r0,-191r34,0r56,109r57,-109r34,0r0,191xm155,-288r-52,0r0,160r-34,0r0,-160r-51,0r0,-31r137,0r0,31","w":395}}});

/*
--------------------------------------------------

Applied Bio Firefly
Header-specific JS (for re-use across properties) [header.js]

David Munger [david.munger@acquitygroup.com]
11/27/2009

Copyright (c) 2009 Acquity Group LLC

--------------------------------------------------
*/

var suckerfyTimeInTimer;
var suckerfyTimeoutTimer;

var searchActive = false;
var searchOverTimer;
var searchOutTimer;

startList = function() {

	suckerfyTimeout("primary-nav");
	suckerfyTimeout("secondary-nav");
	suckerfyTimeout("my-account");

	treatSearch();
	
}

function treatSearch() {
	
	// Need to treat "search in.." differently, since not a nested ul
	var ddParent = document.getElementById("global-search-category");
	document.getElementById("global-search-category").onmouseover = function() {
		
		clearTimeout(searchOverTimer);
		clearTimeout(searchOutTimer);
		
		searchOverTimer = window.setTimeout(function() {

			ddParent.className = " over";
			searchActive = true;

		}, 300);
		
	}
	document.getElementById("global-search-drop-down").onmouseout = function() {
		
		clearTimeout(searchOverTimer);
		clearTimeout(searchOutTimer);

		searchOutTimer = window.setTimeout(function() {

			ddParent.className = "";
			searchActive = false;

		}, 100);
		
	}
	document.getElementById("global-search-category").onmouseout = function() {
		
		clearTimeout(searchOverTimer);
		clearTimeout(searchOutTimer);

		searchOutTimer = window.setTimeout(function() {

			ddParent.className = "";
			searchActive = false;

		}, 100);
		
	}
}

function suckerfyTimeout(elementIdIn) {
	var navRoot = document.getElementById(elementIdIn);
	for (var i=0; i<navRoot.childNodes.length; i++) {
		var node = navRoot.childNodes[i];
		if (node.nodeName=="LI") {
			if(node.className.indexOf("nofy") < 0 ) { 
				if(node.className.indexOf(" over") > 0) {
					node.className=node.className.replace(new RegExp(" over\\b"), "");
					node.className=node.className.replace(new RegExp("over\\b"), "");
				}
				node.onmouseover=function() {
					if (suckerfyTimeInTimer) clearTimeout(suckerfyTimeInTimer);
					suckerfyTimeInTimer = window.setTimeout("suckerfyTimed('"+elementIdIn+"','"+this.id+"')", 300);
				}
				
				node.onmouseout=function() {
					if (suckerfyTimeInTimer) clearTimeout(suckerfyTimeInTimer);
				}
			}
		}
	}
}

function suckerfyTimed(elementIdIn, elementIdOver) {
	suckerfyTimeInTimer = null;
	var navRoot = document.getElementById(elementIdIn);
	for (var i=0; i<navRoot.childNodes.length; i++) {
		var node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				if (node.className.indexOf("nofy") < 0 ) { 
					node.onmouseover=function() {
						if (suckerfyTimeoutTimer) {
							clearTimeout(suckerfyTimeoutTimer);
						}
						this.className+=" over";
					}
					node.onmouseout=function() {
						suckerfyTimeoutTimer = window.setTimeout("suckerfyTimeout('"+elementIdIn+"')", 300);
						this.className=this.className.replace(new RegExp(" over\\b"), "");
						this.className=this.className.replace(new RegExp("over\\b"), "");
					}
					if (node.id == elementIdOver) {
						node.className+=" over";
					}
				}
			}
	}
}

function suckerfy(elementIdIn) {
	var navRoot = document.getElementById(elementIdIn);
	for (i=0; i<navRoot.childNodes.length; i++) {
		var node = navRoot.childNodes[i];
		if (node.nodeName=="LI") {
			node.onmouseover=function() {
				this.className+=" over";
			}
			node.onmouseout=function() {
				this.className=this.className.replace(new RegExp(" over\\b"), "");
				this.className=this.className.replace(new RegExp("over\\b"), "");
			}
		}
	}
}

setupSearch = function () {

	// Set up some values
	var searchField = document.getElementById("search");
	var hiddenField = document.getElementById("search-scope");
	var categoryList = document.getElementById("categoryList");
	var searchTrigger = document.getElementById("global-search-trigger");

	// Make sure default value is reset on page load
	hiddenField.value = "All Categories";
	searchField.value = "Enter Search Term";
	
	// Change on menu click
	for (var i = 0; i < categoryList.childNodes.length; i++) {
		var categoryItem = categoryList.childNodes[i];
		for (var j = 0; j < categoryItem.childNodes.length; j++) {
			if (categoryItem.childNodes[j].nodeName == 'A') {
				categoryItem.childNodes[j].onclick = chooseCategory;
			}
		}
	}
	
	// Remove click for drop-down label
	searchTrigger.onclick = disableClick;
	
	// Deal with inline search prompt
	searchField.onfocus = clearPrompt;
	searchField.onblur = restorePrompt;

}

chooseCategory = function (e) {

	if (!e) {
		var e = window.event;
	}

	if (!e.target) {
		var thisElement = e.srcElement;
	} else {
		var thisElement = e.target;
	}

	// Set up some values
	var chosenString = thisElement.innerHTML;
	var chosenStringRemoveAmp = chosenString.replace("&amp;","&");
	var searchField = document.getElementById("search");
	var hiddenField = document.getElementById("search-scope");
	var categoryList = document.getElementById("categoryList");
	var accessibleText = document.getElementById("search-accessible");
	var anchorLabel = document.getElementById("global-search-trigger");

	// Set hidden input value
	hiddenField.value = chosenStringRemoveAmp;

	// Set accessible label
	accessibleText = chosenString + ' Search';
	
	// Set drop-down label
	anchorLabel.innerHTML = chosenString;

	// Set selected class on proper item
	for (i = 0; i < categoryList.childNodes.length; i++) {
		if (categoryList.childNodes[i].className) {
			categoryList.childNodes[i].className = categoryList.childNodes[i].className.replace(" selected", "");
			categoryList.childNodes[i].className = categoryList.childNodes[i].className.replace("selected", "");
		}
	}
	thisElement.parentNode.className += " selected";
	
	// Hide drop down menu
	thisElement.parentNode.parentNode.parentNode.parentNode.className = "";

	return false;
	
}

disableClick = function (e) {
	return false;
}

clearPrompt = function (e) {
	
	if (!e) {
		var e = window.event;
	}

	if (!e.target) {
		var thisElement = e.srcElement;
	} else {
		var thisElement = e.target;
	}

	var hiddenField = document.getElementById("search-scope");

	if (thisElement.value == ('Enter Search Term')) {
		thisElement.value = '';
	}
	
	thisElement.className = "text png focus";
	
	return false;
	
}

restorePrompt = function (e) {
	
	if (!e) {
		var e = window.event;
	}

	if (!e.target) {
		var thisElement = e.srcElement;
	} else {
		var thisElement = e.target;
	}

	var hiddenField = document.getElementById("search-scope");

	if (! thisElement.value.length) {
		thisElement.value = 'Enter Search Term';
	}
	
	thisElement.className = "text png";
	
	return false;
	
}

// Call wrapper to add this to any existing onload functions
addLoadEvent(startList);
addLoadEvent(setupSearch);
 
// For adding multiple functions to onload
function addLoadEvent(functionIn) {
      if(window.Prototype) {
      	    Event.observe(window, 'load', function() {
	      functionIn();
	    });
      }
      else if(jQuery != undefined) {
            jQuery(window).load(function() {
                  functionIn();
            });  
      } else {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                  window.onload = functionIn;
            } else {
                  window.onload = function() {
                  if (oldonload) {
                        oldonload();
                  }
                        functionIn();
                  }
            }
      }
}
/*
--------------------------------------------------

Applied Bio Firefly
Footer-specific JS (for re-use across properties) [footer.js]

Lee Allen [lee.allen@acquitygroup.com]
03/24/2010

Copyright (c) 2010 Acquity Group LLC

--------------------------------------------------
*/

b2bExitModalShow = function(href) {
	if(isB2B()) {
		//	Show exit modal
		document.getElementById('b2b-exit-modal').style.display = "block";
		document.getElementById('b2b-exit-modal-underlay').style.display = "block";
		
		//	Change href of Yes button to href specified in the function call
		document.getElementById('exit-modal-yes').href = href;

		return false;
	}
	else {
		openPopup(href,"menubar=1,width=970,height=500,toolbar=1,status=1,resizable=1,scrollbars=1,location=1");
	}
	
}

b2bExitModalHide = function() {
	document.getElementById('b2b-exit-modal').style.display = "none";
	document.getElementById('b2b-exit-modal-underlay').style.display = "none";
	
	return false;
	
}

openB2BPopup = function() {
	openPopup(document.getElementById('exit-modal-yes').href,"menubar=1,width=970,height=500,toolbar=1,status=1,resizable=1,scrollbars=1,location=1");
}
//Sets the country data in env var countryInfo
var countryInfo = {"country": [{"CountryCode": "","CountryName": "","CountryFlag": "","CountryPhone": "&nbsp;","CountryRegion":""}]};
var wcmprefix = document.location.toString().indexOf( 'https://' ) != -1 ? "https://" : "http://";
var url = wcmprefix + dayHost + '/absite.countryLookup.';
url += getCountryCode() + ".js";
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = url;
document.getElementsByTagName("head").item(0).appendChild(script);

function getUserInfo() {
		return Base64.decode(getCookie("USRINFO"));
}

function getCountryCode() {
	return getCookie("ab_country");
}

function getCountryHeaderName() {
	return countryInfo.country[0].CountryName;
}

function getCountryPhone() {
	return countryInfo.country[0].CountryPhone;
}

function getCountryLanguages() {
	return countryInfo.country[0].CountryLanguages;
}

function isB2B() {
	var punchinCookie = getCookie("ISPUNCHIN");
	if(punchinCookie != undefined && punchinCookie != "" && punchinCookie != null && punchinCookie == "true") {
		return true;
	}
	else {
		return false;
	}
}

function getCountryIcon() {
	return wcmprefix + dayHost + '/abshared-static/media/images/icons/flags/' + countryInfo.country[0].CountryFlag;
}

function getCookie(name) {
	var cname = name + '=';
	var dc = document.cookie;
	if (dc == null) return '';
	if (dc.length > 0)
	{
	    var begin = dc.indexOf(cname);
	    if (begin != -1)
	    {
	      begin += cname.length;
	      var end = dc.indexOf(';', begin);
	      if (end == -1) end = dc.length;
	      return unescape(dc.substring(begin, end));
	    }
	}
	return '';
}

function isLoggedIn() {
	var tokenId = getCookie("ab_token_id");

	if(tokenId != undefined && tokenId != null && tokenId != "") {
		return true;
	}
	else {
		return false;
	}
}

function isExpiredLogin() {
	var userInfo = Encoder.htmlDecode(getUserInfo());
	if(isLoggedIn()) {
		return false;
	}
	else if(!isLoggedIn() && userInfo != undefined && userInfo != null && userInfo != "") {
		return true;
	}
	else {
		return false;
	}
}

function getUserName() {
	var userInfo = Encoder.htmlDecode(getUserInfo());
 	if (getUserCountry(userInfo) == 'Japan'){
 		return getUserLastName(userInfo) + ' &#27096;';
 	} else {
	 	var firstName = getUserFirstName(userInfo);
		var lastName = getUserLastName(userInfo);
		return firstName + " " + lastName;
 	} 

}

function getUserCountry(userInfo) {
	var uiArray = userInfo.split("|");
	var country = uiArray[3];
	return country;
}

function getUserFirstName(userInfo) {
	var uiArray = userInfo.split("|");
	var firstName = uiArray[7];
	return firstName;
}

function getUserLastName(userInfo) {
	var uiArray = userInfo.split("|");
	var lastName = uiArray[19];
	return lastName;
}

function noCountryCookie() {
	if(getCookie("ab_country") == null || getCookie("ab_country") == undefined || getCookie("ab_country") == "") 
		return true;
	else
		return false;
}

function addChangeCountryClickEvent() {
	 jQuery(".changeCountryModalLink").click(function(){
	 	document.cookie = "ab_country=;domain=.appliedbiosystems.com;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
	 	document.cookie = "ab_countryName=;domain=.appliedbiosystems.com;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
	 	document.cookie = "ab_homepage_name=;domain=.appliedbiosystems.com;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
	 	document.cookie = "ab_homepage_url=;domain=.appliedbiosystems.com;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
	 });
}
			
function updateHeaderInfo() {  
        if(isLoggedIn()) {
                if(isB2B()) {
                        jQuery(".hideB2B").hide();
                }
               
                jQuery(".welcomeMessage").empty();
                jQuery(".welcomeMessage").html("Hello, " + getUserName());
               
                //jQuery("#changeCountry").hide();
               
                jQuery(".logged-in-header").show();
        }
        else if(isExpiredLogin()){
                if(isB2B()) {
                        jQuery(".hideB2B").hide();
                }
               
                jQuery(".welcomeMessage").empty();
                jQuery(".welcomeMessage").html("Hello, " + getUserName());
               
                //jQuery("#changeCountry").hide();
               
                jQuery(".expired-login-header").show();
        }
        else {
                /*if(noCountryCookie()) {
                        jQuery("#countryImage").hide();
                        jQuery("#countryName").hide();
                        jQuery("#changeCountryModalLink").empty().html('Choose Country');
                        jQuery("#changeCountry").show();
                }*/
                jQuery(".anonymous-header").show();
        }
       
        /*addChangeCountryClickEvent();
       
        var country_icon=getCountryIcon();
        var country_name=getCountryHeaderName();
        var country_languages=getCountryLanguages();
        var country_cookie = getCountryCode();
       
        if(!noCountryCookie()) {
                jQuery("#countryImage").attr("src",country_icon);
                jQuery("#countryImage").attr("title",country_name);
                jQuery("#countryImage").attr("alt",country_name);
                jQuery("#countryName").empty().html(country_name);
        }*/
       
        jQuery("#my-account").show();
 }


 
 function moreSites(value) {
 	if(value != undefined && value != "") {
		openPopup(value,"menubar=1,width=970,height=500,toolbar=1,status=1,resizable=1,scrollbars=1,location=1");
	}
 }
 
 function openPopup(href, parameters) {
 	window.open(href,"",parameters);
 }
 
 function setUserLanguageCode(value){
	if(getCookie("ab_language") != "") {
		var expires = new Date();
		expires.setTime(expires.getTime() - 1);
		document.cookie='ab_language=; path=/; expires=' + expires.toGMTString() + '; domain=.appliedbiosystems.com;';
	}
	if(value != "" || value != undefined) {
		var expires = new Date();	
		expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * 31));
		document.cookie = 'ab_language=' + escape(value) + '; path=/; expires=' + expires.toGMTString() + '; domain=.appliedbiosystems.com;';
	}
}

function setUserCountryCode(value){
  var expires = new Date();
  expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * 31));
  document.cookie = 'ab_country=' + escape(value) + '; path=/; expires=' + expires.toGMTString() + '; domain=.appliedbiosystems.com;';
}

function submitform(){
	var cookieDomain = "";
	if(getCookie("ab_country") == "" || getArg("showCountrySelect") == "true"){
		var cookieURL = window.location.toString();
		var cookieURLstr = cookieURL.indexOf('appliedbiosystems');
		if (cookieURLstr > 0 ) {
			cookieDomain=".appliedbiosystems.com";
		} else {
			cookieDomain=".ab.applera.net";
		}
  	 	var selectedCountry = document.getElementById("countryCodeValue");
  	 	var selectedRegion = jQuery("#countryCodeValue option:selected").attr("id");
  	 	var selectedCountryName = jQuery("#countryCodeValue option:selected").text();
  	 	var selectedCountryCode = selectedCountry.value;
  	 	
  	 	if(selectedCountryCode != '') {
  	 	
	  	 	setRegionCookies(selectedRegion, selectedCountryCode, selectedCountryName, cookieDomain);
	  	 	
	  	 	setUserCountryCode(selectedCountry.value);
			var defaultLanguage = getDefaultLanguage(selectedCountryCode);
			if(defaultLanguage != undefined && defaultLanguage != null && defaultLanguage != '') {
				setUserLanguageCode(getDefaultLanguage(selectedCountryCode));
			}
	        var url = getCookie("ab_homepage_url");
	
			if(url == "" || url == undefined || url == null) {   
	            top.location.reload(true);
			} else {
				if(url.indexOf("appliedbiosystems.com/") != -1) {
					if(getArg("showCountrySelect") == "true") {
						var currentURL = window.location.toString();
						top.location.href = currentURL.replace("?showCountrySelect=true", "");
					} else {
		            	top.location.reload(true);
		            }
		        }
		        else {
					top.location.href = url;
				}
			}
		}
		else {
			return false;
		}
  	}
}

function setRegionCookies(id, value, countryname, cookieDomain) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * 31));
	document.cookie = 'ab_countryName=' + countryname + '; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	if (id == "AM"){
		document.cookie = 'ab_homepage_name=Americas; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com/absite/us/en/home.html; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "EU") {
		document.cookie = 'ab_homepage_name=Europe&#44 CIS&#44 Middle East&#44 West Asia&#44 Africa; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com/absite/us/en/home.html; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "JP"){
		document.cookie = 'ab_homepage_name=Japan; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.jp/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "AU"){
		document.cookie = 'ab_homepage_name=Australia & New Zealand; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.au/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "BR"){
		document.cookie = 'ab_homepage_name=Brazil; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.br/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "CN"){
		document.cookie = 'ab_homepage_name=China; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.cn/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "HK"){
		document.cookie = 'ab_homepage_name=Hong Kong; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.hk/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "KR"){
		document.cookie = 'ab_homepage_name=Korea; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.co.kr/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "RU"){
		document.cookie = 'ab_homepage_name=Singapore; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.ru/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "SG"){
		document.cookie = 'ab_homepage_name=Singapore; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.sg/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} else if (id == "TW"){
		document.cookie = 'ab_homepage_name=Taiwan; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
		document.cookie = 'ab_homepage_url=http://www.appliedbiosystems.com.tw/; path=/; domain=' + cookieDomain + '; expires=' + expires.toGMTString() + ';';
	} 
}
function getDefaultLanguage(countryCode) {
	var defaultLanguage = new Object();
	defaultLanguage['jp'] = 'ja';
	
	if(defaultLanguage[countryCode] != undefined && defaultLanguage[countryCode] != '') 
		return defaultLanguage[countryCode];
	else
		return 'en';
	
}

function getArg(name) {
	var query = location.search.substring(1);
	var pairs = query.split("&");
	for(var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1) continue;
		var argname = pairs[i].substring(0,pos);
		if(argname == name) {
			return pairs[i].substring(pos+1);
		}
	}
	return "";
} 

function sendCorrectHomepage() {
	var homepageURL = getCookie('ab_homepage_url');
	if(homepageURL.indexOf("www.appliedbiosystems.com/") == -1 && getCookie("ab_country") != "" && getArg("showCountrySelect") != "true") {
		top.location.href = homepageURL;
	}
}
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}

		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}

Encoder = {

	// When encoding do we convert characters into html or numerical entities
	EncodeType : "entity",  // entity OR numerical

	isEmpty : function(val){
		if(val){
			return ((val===null) || val.length==0 || /^\s+$/.test(val));
		}else{
			return true;
		}
	},
	// Convert HTML entities into numerical entities
	HTML2Numerical : function(s){
		var arr1 = new Array('&nbsp;','&iexcl;','&cent;','&pound;','&curren;','&yen;','&brvbar;','&sect;','&uml;','&copy;','&ordf;','&laquo;','&not;','&shy;','&reg;','&macr;','&deg;','&plusmn;','&sup2;','&sup3;','&acute;','&micro;','&para;','&middot;','&cedil;','&sup1;','&ordm;','&raquo;','&frac14;','&frac12;','&frac34;','&iquest;','&agrave;','&aacute;','&acirc;','&atilde;','&Auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&Ouml;','&times;','&oslash;','&ugrave;','&uacute;','&ucirc;','&Uuml;','&yacute;','&thorn;','&szlig;','&agrave;','&aacute;','&acirc;','&atilde;','&auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&ouml;','&divide;','&oslash;','&ugrave;','&uacute;','&ucirc;','&uuml;','&yacute;','&thorn;','&yuml;','&quot;','&amp;','&lt;','&gt;','&oelig;','&oelig;','&scaron;','&scaron;','&yuml;','&circ;','&tilde;','&ensp;','&emsp;','&thinsp;','&zwnj;','&zwj;','&lrm;','&rlm;','&ndash;','&mdash;','&lsquo;','&rsquo;','&sbquo;','&ldquo;','&rdquo;','&bdquo;','&dagger;','&dagger;','&permil;','&lsaquo;','&rsaquo;','&euro;','&fnof;','&alpha;','&beta;','&gamma;','&delta;','&epsilon;','&zeta;','&eta;','&theta;','&iota;','&kappa;','&lambda;','&mu;','&nu;','&xi;','&omicron;','&pi;','&rho;','&sigma;','&tau;','&upsilon;','&phi;','&chi;','&psi;','&omega;','&alpha;','&beta;','&gamma;','&delta;','&epsilon;','&zeta;','&eta;','&theta;','&iota;','&kappa;','&lambda;','&mu;','&nu;','&xi;','&omicron;','&pi;','&rho;','&sigmaf;','&sigma;','&tau;','&upsilon;','&phi;','&chi;','&psi;','&omega;','&thetasym;','&upsih;','&piv;','&bull;','&hellip;','&prime;','&prime;','&oline;','&frasl;','&weierp;','&image;','&real;','&trade;','&alefsym;','&larr;','&uarr;','&rarr;','&darr;','&harr;','&crarr;','&larr;','&uarr;','&rarr;','&darr;','&harr;','&forall;','&part;','&exist;','&empty;','&nabla;','&isin;','&notin;','&ni;','&prod;','&sum;','&minus;','&lowast;','&radic;','&prop;','&infin;','&ang;','&and;','&or;','&cap;','&cup;','&int;','&there4;','&sim;','&cong;','&asymp;','&ne;','&equiv;','&le;','&ge;','&sub;','&sup;','&nsub;','&sube;','&supe;','&oplus;','&otimes;','&perp;','&sdot;','&lceil;','&rceil;','&lfloor;','&rfloor;','&lang;','&rang;','&loz;','&spades;','&clubs;','&hearts;','&diams;');
		var arr2 = new Array('&#160;','&#161;','&#162;','&#163;','&#164;','&#165;','&#166;','&#167;','&#168;','&#169;','&#170;','&#171;','&#172;','&#173;','&#174;','&#175;','&#176;','&#177;','&#178;','&#179;','&#180;','&#181;','&#182;','&#183;','&#184;','&#185;','&#186;','&#187;','&#188;','&#189;','&#190;','&#191;','&#192;','&#193;','&#194;','&#195;','&#196;','&#197;','&#198;','&#199;','&#200;','&#201;','&#202;','&#203;','&#204;','&#205;','&#206;','&#207;','&#208;','&#209;','&#210;','&#211;','&#212;','&#213;','&#214;','&#215;','&#216;','&#217;','&#218;','&#219;','&#220;','&#221;','&#222;','&#223;','&#224;','&#225;','&#226;','&#227;','&#228;','&#229;','&#230;','&#231;','&#232;','&#233;','&#234;','&#235;','&#236;','&#237;','&#238;','&#239;','&#240;','&#241;','&#242;','&#243;','&#244;','&#245;','&#246;','&#247;','&#248;','&#249;','&#250;','&#251;','&#252;','&#253;','&#254;','&#255;','&#34;','&#38;','&#60;','&#62;','&#338;','&#339;','&#352;','&#353;','&#376;','&#710;','&#732;','&#8194;','&#8195;','&#8201;','&#8204;','&#8205;','&#8206;','&#8207;','&#8211;','&#8212;','&#8216;','&#8217;','&#8218;','&#8220;','&#8221;','&#8222;','&#8224;','&#8225;','&#8240;','&#8249;','&#8250;','&#8364;','&#402;','&#913;','&#914;','&#915;','&#916;','&#917;','&#918;','&#919;','&#920;','&#921;','&#922;','&#923;','&#924;','&#925;','&#926;','&#927;','&#928;','&#929;','&#931;','&#932;','&#933;','&#934;','&#935;','&#936;','&#937;','&#945;','&#946;','&#947;','&#948;','&#949;','&#950;','&#951;','&#952;','&#953;','&#954;','&#955;','&#956;','&#957;','&#958;','&#959;','&#960;','&#961;','&#962;','&#963;','&#964;','&#965;','&#966;','&#967;','&#968;','&#969;','&#977;','&#978;','&#982;','&#8226;','&#8230;','&#8242;','&#8243;','&#8254;','&#8260;','&#8472;','&#8465;','&#8476;','&#8482;','&#8501;','&#8592;','&#8593;','&#8594;','&#8595;','&#8596;','&#8629;','&#8656;','&#8657;','&#8658;','&#8659;','&#8660;','&#8704;','&#8706;','&#8707;','&#8709;','&#8711;','&#8712;','&#8713;','&#8715;','&#8719;','&#8721;','&#8722;','&#8727;','&#8730;','&#8733;','&#8734;','&#8736;','&#8743;','&#8744;','&#8745;','&#8746;','&#8747;','&#8756;','&#8764;','&#8773;','&#8776;','&#8800;','&#8801;','&#8804;','&#8805;','&#8834;','&#8835;','&#8836;','&#8838;','&#8839;','&#8853;','&#8855;','&#8869;','&#8901;','&#8968;','&#8969;','&#8970;','&#8971;','&#9001;','&#9002;','&#9674;','&#9824;','&#9827;','&#9829;','&#9830;');
		return this.swapArrayVals(s,arr1,arr2);
	},	

	// Convert Numerical entities into HTML entities
	NumericalToHTML : function(s){
		var arr1 = new Array('&#160;','&#161;','&#162;','&#163;','&#164;','&#165;','&#166;','&#167;','&#168;','&#169;','&#170;','&#171;','&#172;','&#173;','&#174;','&#175;','&#176;','&#177;','&#178;','&#179;','&#180;','&#181;','&#182;','&#183;','&#184;','&#185;','&#186;','&#187;','&#188;','&#189;','&#190;','&#191;','&#192;','&#193;','&#194;','&#195;','&#196;','&#197;','&#198;','&#199;','&#200;','&#201;','&#202;','&#203;','&#204;','&#205;','&#206;','&#207;','&#208;','&#209;','&#210;','&#211;','&#212;','&#213;','&#214;','&#215;','&#216;','&#217;','&#218;','&#219;','&#220;','&#221;','&#222;','&#223;','&#224;','&#225;','&#226;','&#227;','&#228;','&#229;','&#230;','&#231;','&#232;','&#233;','&#234;','&#235;','&#236;','&#237;','&#238;','&#239;','&#240;','&#241;','&#242;','&#243;','&#244;','&#245;','&#246;','&#247;','&#248;','&#249;','&#250;','&#251;','&#252;','&#253;','&#254;','&#255;','&#34;','&#38;','&#60;','&#62;','&#338;','&#339;','&#352;','&#353;','&#376;','&#710;','&#732;','&#8194;','&#8195;','&#8201;','&#8204;','&#8205;','&#8206;','&#8207;','&#8211;','&#8212;','&#8216;','&#8217;','&#8218;','&#8220;','&#8221;','&#8222;','&#8224;','&#8225;','&#8240;','&#8249;','&#8250;','&#8364;','&#402;','&#913;','&#914;','&#915;','&#916;','&#917;','&#918;','&#919;','&#920;','&#921;','&#922;','&#923;','&#924;','&#925;','&#926;','&#927;','&#928;','&#929;','&#931;','&#932;','&#933;','&#934;','&#935;','&#936;','&#937;','&#945;','&#946;','&#947;','&#948;','&#949;','&#950;','&#951;','&#952;','&#953;','&#954;','&#955;','&#956;','&#957;','&#958;','&#959;','&#960;','&#961;','&#962;','&#963;','&#964;','&#965;','&#966;','&#967;','&#968;','&#969;','&#977;','&#978;','&#982;','&#8226;','&#8230;','&#8242;','&#8243;','&#8254;','&#8260;','&#8472;','&#8465;','&#8476;','&#8482;','&#8501;','&#8592;','&#8593;','&#8594;','&#8595;','&#8596;','&#8629;','&#8656;','&#8657;','&#8658;','&#8659;','&#8660;','&#8704;','&#8706;','&#8707;','&#8709;','&#8711;','&#8712;','&#8713;','&#8715;','&#8719;','&#8721;','&#8722;','&#8727;','&#8730;','&#8733;','&#8734;','&#8736;','&#8743;','&#8744;','&#8745;','&#8746;','&#8747;','&#8756;','&#8764;','&#8773;','&#8776;','&#8800;','&#8801;','&#8804;','&#8805;','&#8834;','&#8835;','&#8836;','&#8838;','&#8839;','&#8853;','&#8855;','&#8869;','&#8901;','&#8968;','&#8969;','&#8970;','&#8971;','&#9001;','&#9002;','&#9674;','&#9824;','&#9827;','&#9829;','&#9830;');
		var arr2 = new Array('&nbsp;','&iexcl;','&cent;','&pound;','&curren;','&yen;','&brvbar;','&sect;','&uml;','&copy;','&ordf;','&laquo;','&not;','&shy;','&reg;','&macr;','&deg;','&plusmn;','&sup2;','&sup3;','&acute;','&micro;','&para;','&middot;','&cedil;','&sup1;','&ordm;','&raquo;','&frac14;','&frac12;','&frac34;','&iquest;','&agrave;','&aacute;','&acirc;','&atilde;','&Auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&Ouml;','&times;','&oslash;','&ugrave;','&uacute;','&ucirc;','&Uuml;','&yacute;','&thorn;','&szlig;','&agrave;','&aacute;','&acirc;','&atilde;','&auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&ouml;','&divide;','&oslash;','&ugrave;','&uacute;','&ucirc;','&uuml;','&yacute;','&thorn;','&yuml;','&quot;','&amp;','&lt;','&gt;','&oelig;','&oelig;','&scaron;','&scaron;','&yuml;','&circ;','&tilde;','&ensp;','&emsp;','&thinsp;','&zwnj;','&zwj;','&lrm;','&rlm;','&ndash;','&mdash;','&lsquo;','&rsquo;','&sbquo;','&ldquo;','&rdquo;','&bdquo;','&dagger;','&dagger;','&permil;','&lsaquo;','&rsaquo;','&euro;','&fnof;','&alpha;','&beta;','&gamma;','&delta;','&epsilon;','&zeta;','&eta;','&theta;','&iota;','&kappa;','&lambda;','&mu;','&nu;','&xi;','&omicron;','&pi;','&rho;','&sigma;','&tau;','&upsilon;','&phi;','&chi;','&psi;','&omega;','&alpha;','&beta;','&gamma;','&delta;','&epsilon;','&zeta;','&eta;','&theta;','&iota;','&kappa;','&lambda;','&mu;','&nu;','&xi;','&omicron;','&pi;','&rho;','&sigmaf;','&sigma;','&tau;','&upsilon;','&phi;','&chi;','&psi;','&omega;','&thetasym;','&upsih;','&piv;','&bull;','&hellip;','&prime;','&prime;','&oline;','&frasl;','&weierp;','&image;','&real;','&trade;','&alefsym;','&larr;','&uarr;','&rarr;','&darr;','&harr;','&crarr;','&larr;','&uarr;','&rarr;','&darr;','&harr;','&forall;','&part;','&exist;','&empty;','&nabla;','&isin;','&notin;','&ni;','&prod;','&sum;','&minus;','&lowast;','&radic;','&prop;','&infin;','&ang;','&and;','&or;','&cap;','&cup;','&int;','&there4;','&sim;','&cong;','&asymp;','&ne;','&equiv;','&le;','&ge;','&sub;','&sup;','&nsub;','&sube;','&supe;','&oplus;','&otimes;','&perp;','&sdot;','&lceil;','&rceil;','&lfloor;','&rfloor;','&lang;','&rang;','&loz;','&spades;','&clubs;','&hearts;','&diams;');
		return this.swapArrayVals(s,arr1,arr2);
	},


	// Numerically encodes all unicode characters
	numEncode : function(s){
		
		if(this.isEmpty(s)) return "";

		var e = "";
		for (var i = 0; i < s.length; i++)
		{
			var c = s.charAt(i);
			if (c < " " || c > "~")
			{
				c = "&#" + c.charCodeAt() + ";";
			}
			e += c;
		}
		return e;
	},
	
	// HTML Decode numerical and HTML entities back to original values
	htmlDecode : function(s){

		var c,m,d = s;
		
		if(this.isEmpty(d)) return "";

		// convert HTML entites back to numerical entites first
		d = this.HTML2Numerical(d);
		
		// look for numerical entities &#34;
		arr=d.match(/&#[0-9]{1,5};/g);
		
		// if no matches found in string then skip
		if(arr!=null){
			for(var x=0;x<arr.length;x++){
				m = arr[x];
				c = m.substring(2,m.length-1); //get numeric part which is refernce to unicode character
				// if its a valid number we can decode
				if(c >= -32768 && c <= 65535){
					// decode every single match within string
					d = d.replace(m, String.fromCharCode(c));
				}else{
					d = d.replace(m, ""); //invalid so replace with nada
				}
			}			
		}

		return d;
	},		

	// encode an input string into either numerical or HTML entities
	htmlEncode : function(s,dbl){
			
		if(this.isEmpty(s)) return "";

		// do we allow double encoding? E.g will &amp; be turned into &amp;amp;
		dbl = dbl | false; //default to prevent double encoding
		
		// if allowing double encoding we do ampersands first
		if(dbl){
			if(this.EncodeType=="numerical"){
				s = s.replace(/&/g, "&#38;");
			}else{
				s = s.replace(/&/g, "&amp;");
			}
		}

		// convert the xss chars to numerical entities ' " < >
		s = this.XSSEncode(s,false);
		
		if(this.EncodeType=="numerical" || !dbl){
			// Now call function that will convert any HTML entities to numerical codes
			s = this.HTML2Numerical(s);
		}

		// Now encode all chars above 127 e.g unicode
		s = this.numEncode(s);

		// now we know anything that needs to be encoded has been converted to numerical entities we
		// can encode any ampersands & that are not part of encoded entities
		// to handle the fact that I need to do a negative check and handle multiple ampersands &&&
		// I am going to use a placeholder

		// if we don't want double encoded entities we ignore the & in existing entities
		if(!dbl){
			s = s.replace(/&#/g,"##AMPHASH##");
		
			if(this.EncodeType=="numerical"){
				s = s.replace(/&/g, "&#38;");
			}else{
				s = s.replace(/&/g, "&amp;");
			}

			s = s.replace(/##AMPHASH##/g,"&#");
		}
		
		// replace any malformed entities
		s = s.replace(/&#\d*([^\d;]|$)/g, "$1");

		if(!dbl){
			// safety check to correct any double encoded &amp;
			s = this.correctEncoding(s);
		}

		// now do we need to convert our numerical encoded string into entities
		if(this.EncodeType=="entity"){
			s = this.NumericalToHTML(s);
		}

		return s;					
	},

	// Encodes the basic 4 characters used to malform HTML in XSS hacks
	XSSEncode : function(s,en){
		if(!this.isEmpty(s)){
			en = en || true;
			// do we convert to numerical or html entity?
			if(en){
				s = s.replace(/\'/g,"&#39;"); //no HTML equivalent as &apos is not cross browser supported
				s = s.replace(/\"/g,"&quot;");
				s = s.replace(/</g,"&lt;");
				s = s.replace(/>/g,"&gt;");
			}else{
				s = s.replace(/\'/g,"&#39;"); //no HTML equivalent as &apos is not cross browser supported
				s = s.replace(/\"/g,"&#34;");
				s = s.replace(/</g,"&#60;");
				s = s.replace(/>/g,"&#62;");
			}
			return s;
		}else{
			return "";
		}
	},

	// returns true if a string contains html or numerical encoded entities
	hasEncoded : function(s){
		if(/&#[0-9]{1,5};/g.test(s)){
			return true;
		}else if(/&[A-Z]{2,6};/gi.test(s)){
			return true;
		}else{
			return false;
		}
	},

	// will remove any unicode characters
	stripUnicode : function(s){
		return s.replace(/[^\x20-\x7E]/g,"");
		
	},

	// corrects any double encoded &amp; entities e.g &amp;amp;
	correctEncoding : function(s){
		return s.replace(/(&amp;)(amp;)+/,"$1");
	},


	// Function to loop through an array swaping each item with the value from another array e.g swap HTML entities with Numericals
	swapArrayVals : function(s,arr1,arr2){
		if(this.isEmpty(s)) return "";
		var re;
		if(arr1 && arr2){
			//ShowDebug("in swapArrayVals arr1.length = " + arr1.length + " arr2.length = " + arr2.length)
			// array lengths must match
			if(arr1.length == arr2.length){
				for(var x=0,i=arr1.length;x<i;x++){
					re = new RegExp(arr1[x], 'g');
					s = s.replace(re,arr2[x]); //swap arr1 item with matching item from arr2	
				}
			}
		}
		return s;
	},

	inArray : function( item, arr ) {
		for ( var i = 0, x = arr.length; i < x; i++ ){
			if ( arr[i] === item ){
				return i;
			}
		}
		return -1;
	}

}
/*SiteCatalyst code version: H.17.
Copyright 1997-2008 Omniture, Inc. More info available at
http://www.omniture.com */

var s_account="invitrogenabprod"
var s=s_gi(s_account)

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="ISO-8859-1"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,.appliedbiosystems.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
s.loginName="USRINFO"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="invitrogen"
s.dc=122

/*PLEASE UNCOMMENT THIS AFTER THE SSL CERTIFICATE HAS BEEN INSTALLED*/
/*s.trackingServer=""
s.trackingServerSecure=""*/

/* Page Name Plugin Config */
s.siteID="appliedbiosystems:"            // leftmost value in pagename
s.defaultPage=""       // filename to add when none exists
s.queryVarsList=""     // query parameters to keep
s.pathExcludeDelim=";" // portion of the path to exclude
s.pathConcatDelim=""   // page name component separator
s.pathExcludeList=""   // elements to exclude from the path

/* Plugin Config */
s.usePlugins=true

s.successfulSearchEvent 		= 'event1';
s.nullSearchEvent 				= 'event2';
s.searchTermVariable		    = 'eVar1';

function s_doPlugins(s) {
	if(!s.campaign)
		s.campaign=s.getQueryParam('CID');
	
	if(!s.eVar2)
		s.eVar2=s.getQueryParam('ICID');
	
	if(s.eVar1) 
		s.eVar1=s.eVar1.toLowerCase()
		
    if(!s.pageType && !s.pageName)
		s.pageName=s.getPageName();

	/*
	 * Do not refire search event if the same search term
	 * passed in twice
	*/
	var t_search=s.getValOnce(s[s.searchTermVariable],'ev1',0)
	if(t_search=='')
	{	
		var a=s.split(s.events,',');
		var e='';
		for(var i = 0; i < a.length ; i++ )
		{
			if(a[i] == s.successfulSearchEvent)
				continue;
			else if(a[i] == s.nullSearchEvent)
				continue;
			else
				e += a[i]?a[i]+',':a[i];
		}
		s.events=e.substring(0,e.length-1);
	}
	else
	{
		if(!s.products)
			s.products=';';
	}

	s.eVar17=s.crossVisitParticipation(s.campaign,'s_campstack','30','5','>','purchase',0);
	
}

s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");
/*
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");
/*
 *	Plug-in: crossVisitParticipation v1.5 - stacks values from
 *	specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v=='')return '';v=escape(v);var arry=new Array(),a=new Array("
+"),c=s.c_r(cn),g=0,h=new Array();if(c&&c!='')arry=eval(c);var e=new "
+"Date();e.setFullYear(e.getFullYear()+5);if(dv==0 && arry.length>0 &"
+"& arry[arry.length-1][0]==v)arry[arry.length-1]=[v, new Date().getT"
+"ime()];else arry[arry.length]=[v, new Date().getTime()];var start=a"
+"rry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;"
+"x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86"
+"400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry"
+"[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:"
+"\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce) s.c_w(cn"
+",'');return r;");
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun@6(~){`Ks=^S~$h ~.substring(~.indexOf(~;@t~';`Bt`t~=new Fun@6(~.toLowerCase()~s_c_il['+s^sn+']~};s.~`m@t~.length~.toUpperCase~=new Object~s"
+".wd~','~){@t~')q='~.location~var ~s.pt(~dynamicAccount~link~s.apv~='+@y(~)@tx^m!Object$eObject.prototype$eObject.prototype[x])~);s.~Element~.getTime()~=new Array~ookieDomainPeriods~s.m_~referrer~.p"
+"rotocol~=new Date~BufferedRequests~}c$s(e){~visitor~;@X^js[k],255)}~=''~javaEnabled~conne@6^M~@0c_i~Name~:'')~onclick~}@t~else ~ternalFilters~javascript~s.dl~@Os.b.addBehavior(\"# default# ~=parseF"
+"loat(~'+tm.get~=='~cookie~s.rep(~s.^T~track~o@0oid~browser~.parent~window~colorDepth~String~while(~.host~.lastIndexOf('~s.sq~s.maxDelay~s.vl_g~r=s.m(f)?s[f](~for(~s.un~s.eo~&&s.~parseInt(~t=s.ot(o)"
+"~j='1.~#4URL~lugins~dynamicVariablePrefix~document~Type~Sampling~s.rc[un]~Download~Event~');~this~tfs~resolution~s.c_r(~s.c_w(~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~tcf~isopera~ismac~escape(~"
+".href~screen.~s.fl(~Version~harCode~&&(~_'+~variableProvider~s.pe~)?'Y':'N'~:'';h=h?h~._i~e&&l$HSESSION'~f',~onload~name~home#4~objectID~}else{~.s_~s.rl[u~Width~s.ssl~o.type~Timeout(~ction~Lifetime"
+"~.mrq(\"'+un+'\")~sEnabled~;i++)~'){q='~&&l$HNONE'){~ExternalLinks~charSet~onerror~lnk~currencyCode~.src~s=s_gi(~etYear(~&&!~Opera~'s_~;try{~Math.~s.fsg~s.ns6~s.oun~InlineStats~Track~'0123456789~&&"
+"t~s[k]=~s.epa(~m._d~n=s.oid(o)~,'sqs',q);~LeaveQuery~')>=~'=')~)+'/~){n=~\",''),~vo)~s.sampled~=s.oh(o);~+(y<1900?~s.disable~ingServer~n]=~true~sess~campaign~lif~if(~'http~,100)~s.co(~x in ~s.ape~f"
+"fset~s.c_d~s.br~'&pe~s.gg(~s.gv(~s[mn]~s.qav~,'vo~s.pl~=(apn~Listener~\"s_gs(\")~vo._t~b.attach~d.create~=s.n.app~(''+~!='~'||t~'+n~s()+'~){p=~():''~a):f(~+1))~a['!'+t]~){v=s.n.~channel~un)~.target"
+"~o.value~g+\"_c\"]~\".tl(\")~etscape~(ns?ns:~s_')t=t~k',s.bc~omePage~s.d.get~')<~||!~[b](e);~m[t+1](~return~mobile~height~events~random~code~'MSIE ~rs,~un,~,pev~floor(~atch~s.num(~[\"s_\"+~s.c_gd~s"
+".dc~s.pg~,'lt~.inner~transa~;s.gl(~\"m_\"+n~idt='+~page~Group,~.fromC~sByTag~?'&~+';'~t&&~1);~){s.~[t]=~>=5)~[t](~=l[n];~!a[t])~~s._c=@Nc';`F=^1`5!`F`hn){`F`hl`U;`F`hn=0;}s^sl=`F`hl;s^sn=`F`hn;s^sl"
+"[s^s@os;`F`hn++;s.m`0m){`2$Gm)`4'{$d0`Afl`0x,l){`2x?$Gx)`30,l):x`Aco`0o`H!o)`2o;`Kn`E,x;^B@xo)@tx`4'select$d0&&x`4'filter$d0)n[x]=o[x];`2n`Anum`0x){x`e+x;^B`Kp=0;p<x`C;p++)@t(@V')`4x`3p,p$O<0)`20;`"
+"21`Arep=s_r;@y`0x`1,h=@VABCDEF',i,c=s.@E,n,l,e,y`e;c=c?c`D$M`5x){x`e+x`5c`tAUTO'^m'').c^lAt){^Bi=0;i<x`C@A{c=x`3i,i+#Bn=x.c^lAt(i)`5n>127){l=0;e`e;^4n||l<4){e=h`3n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+"
+"='%u'+e}`Bc`t+')y+='%2B';`my+=^gc)}x=y^zx=x?`v^g''+x),'+`G%2B'):x`5x&&c^Eem==1&&x`4'%u$d0&&x`4'%U$d0){i=x`4'%^R^4i>=0){i++`5h`38)`4x`3i,i+1)`D())>=0)`2x`30,i)+'u00'+x`3i);i=x`4'%',i)}}}}`2x`Aepa`0x"
+"`1;`2x?un^g`v''+x,'+`G ')):x`Apt`0x,d,f,a`1,t=x,z=0,y,r;^4t){y=t`4d);y=y<0?t`C:y;t=t`30,y);^At,$Nt,a)`5r)`2r;z+=y+d`C;t=x`3z,x`C);t=z<x`C?t:''}`2''`Aisf`0t,a){`Kc=a`4':')`5c>=0)a=a`30,c)`5t`30,2)`t"
+"$Z`32);`2(t!`e@W==a)`Afsf`0t,a`1`5`La,`G,'is^ut))@Q+=(@Q!`e?`G`j+t;`20`Afs`0x,f`1;@Q`e;`Lx,`G,'fs^uf);`2@Q`Ac_d`e;$vf`0t,a`1`5!$tt))`21;`20`Ac_gd`0`1,d=`F`J^5^w,n=s.fpC`V,p`5!n)n=s.c`V`5d@L$0@gn?^F"
+"n):2;n=n>2?n:2;p=d^6.')`5p>=0){^4p>=0&&n>1$Ld^6.',p-#Bn--}$0=p>0&&`Ld,'.`Gc_gd^u0)?d`3p):d}}`2$0`Ac_r`0k`1;k=@y(k);`Kc=' '+s.d.`u,i=c`4' '+k+@e,e=i<0?i:c`4';',i),v=i<0?'':@Yc`3i+2+k`C,e<0?c`C:e));`"
+"2v$H[[B]]'?v:''`Ac_w`0k,v,e`1,d=$v(),l=s.`u@7,t;v`e+v;l=l?$Gl)`D$M`5^t@Ct=(v!`e?^Fl?l:0):-60)`5t){e`Z;e.setTime(e`T+(t*1000))}`lk@Cs.d.`u=k+'`Pv!`e?v:'[[B]]')+'; path=/;'+(^t?' expires='+e.toGMT^3("
+")#9`j+(d?' domain='+d#9`j;`2^Vk)==v}`20`Aeh`0o,e,r,f`1,b='s^ne+'^ns^sn,n=-1,l,i,x`5!^Xl)^Xl`U;l=^Xl;^Bi=0;i<l`C&&n<0;i++`Hl[i].o==o&&l[i].e==e)n=i`ln<0@gi;l[n]`E}x#Gx.o=o;x.e=e;f=r?x.b:f`5r||f){x.b"
+"=r?0:o[e];x.o[e]=f`lx.b){x.o[b]=x.b;`2b}`20`Acet`0f,a,t,o,b`1,r,^d`5`O>=5^m!s.^e||`O>=7)){^d`7's`Gf`Ga`Gt`G`Ke,r@O^A$Na)`br=s.m(t)?s#Fe):t(e)}`2r^Rr=^d(s,f,a,t)^z@ts.^f^Eu`4$n4@d0)r=s.m(b)?s[b](a):"
+"b(a);else{^X(`F,'@F',0,o);^A$Na`Reh(`F,'@F',1)}}`2r`Ag^Tet`0e`1;`2`w`Ag^Toe`7'e`G`Ks=`9,c;^X(^1,\"@F\",1`Re^T=1;c=s.t()`5c)s.d.write(c`Re^T=0;`2@p'`Rg^Tfb`0a){`2^1`Ag^Tf`0w`1,p=w^0,l=w`J;`w=w`5p&&p"
+"`J!=l&&p`J^5==l^5){`w=p;`2s.g^Tf(`w)}`2`w`Ag^T`0`1`5!`w){`w=`F`5!s.e^T)`w=s.cet('g^T^u`w,'g^Tet',s.g^Toe,'g^Tfb')}`2`w`Amrq`0u`1,l=@1],n,r;@1]=0`5l)^Bn=0;n<l`C;n++){r#Gs.mr(0,0,r.r,0,r.t,r.u)}`Abr`"
+"0id,rs`1`5@m`a$e^W@Nbr',rs))$1l=rs`Aflush`a`0`1;s.fbr(0)`Afbr`0id`1,br=^V@Nbr')`5!br)br=$1l`5br`H!@m`a)^W@Nbr`G'`Rmr(0,0,br)}$1l=0`Amr`0@q,q,$oid,ta,u`1,dc=$w,t1=s.`x@n,t2=s.`x@nSecure,ns=s.`c`ispa"
+"ce,un=u?u:$Ys.f$S,unc=`v$p'_`G-'),r`E,l,imn=@Ni^n($S,im,b,e`5!rs){rs=@u'+(@3?'s'`j+'://'+(t1?(@3@W2?t2:t1):($Y(@3?'102':unc))+'.'+($w?$w:112)+'.2o7.net')@fb/ss/'+^C+'/'+(s.$i?'5.1':'1'@fH.17/'+@q+'"
+"?AQB=1&ndh=1'+(q?q`j+'&AQE=1'`5^Y@Ls.^f`H`O>5.5)rs=^j$o4095);`mrs=^j$o2047)`lid){$1(id,rs);$h}`ls.d.images&&`O>=3^m!s.^e||`O>=7)^m@R<0||`O>=6.1)`H!s.rc)s.rc`E`5!^O){^O=1`5!s.rl)s.rl`E;@1n]`U;set@5'"
+"@t^1`hl)^1.`9@8',750)^zl=@1n]`5l){r.t=ta;r.u=un;r.r=rs;l[l`C]=r;`2''}imn+='^n^O;^O++}im=`F[imn]`5!im)im=`F[im@onew Image;im@0l=0;im.^v`7'e`G^S@0l=1`5^1`hl)^1.`9@8^Rim@I=rs`5rs`4$2=@d0^m!ta||ta`t_se"
+"lf$Ia`t_top'||(`F.^w@Wa==`F.^w))){b=e`Z;^4!im@0l&&e`T-b`T<500)e`Z}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $j=1 border=0 alt=\"\">'`Agg`0v`1`5!`F['s^nv])`F['s^nv]`e;`2`F['s^nv]`Aglf`0t,a`Ht`30,2)`"
+"t$Z`32);`Ks=^S,v=$3t)`5v)s#Dv`Agl`0v`1`5$x)`Lv,`G,'gl^u0)`Agv`0v`1;`2s['vpm^nv]?s['vpv^nv]:(s[v]?s[v]`j`Ahavf`0t,a`1,b=t`30,4),x=t`34),n=^Fx),k='g^nt,m='vpm^nt,q=t,v=s.`N@UVa$oe=s.`N@U^Qs,mn;@X$4t)"
+"`5s.@G||^D||^p`H^p^Epe`30,4)$H@G_'){mn=^p`30,1)`D()+^p`31)`5$5){v=$5.`xVars;e=$5.`x^Qs}}v=v?v+`G+^Z+`G+^Z2:''`5v@L`Lv,`G,'is^ut))s[k]`e`5t`t$k'&&e)@Xs.fs(s[k],e)}s[m]=0`5t`t^K`ID`6`cID`Ivid`6^I@Bg'"
+"`d`Bt`t`X@Br'`d`Bt`tvmk`Ivmt`6@E@Bce'`5s[k]&&s[k]`D()`tAUTO')@X'ISO8859-1';`Bs[k]^Eem==2)@X'UTF-8'}`Bt`t`c`ispace`Ins`6c`V`Icdp`6`u@7`Icl`6^o`Ivvp`6@H`Icc`6$R`Ich`6#0@6ID`Ixact`6@r`Iv0`6^U`Is`6^2`I"
+"c`6`o^k`Ij`6`f`Iv`6`u@9`Ik`6`z@2`Ibw`6`z^b`Ibh`6`g`Ict`6^x`Ihp`6p^J`Ip';`B$tx)`Hb`tprop`Ic$J;`Bb`teVar`Iv$J;`Bb`thier@Bh$J`d`ls[k]@W$H`N`i'@W$H`N^M')$6+='&'+q+'`Ps[k]);`2''`Ahav`0`1;$6`e;`L^a,`G,'h"
+"av^u0);`2$6`Alnf`0^c`8^r`8:'';`Kte=t`4@e`5t@We>0&&h`4t`3te$O>=0)`2t`30,te);`2''`Aln`0h`1,n=s.`N`is`5n)`2`Ln,`G,'ln^uh);`2''`Altdf`0^c`8^r`8:'';`Kqi=h`4'?^Rh=qi>=0?h`30,qi):h`5#Ah`3h`C-(t`C$O`t.'+t)"
+"`21;`20`Altef`0^c`8^r`8:''`5#Ah`4t)>=0)`21;`20`Alt`0h`1,lft=s.`N^PFile^Ms,lef=s.`NEx`n,@s=s.`NIn`n;@s=@s?@s:`F`J^5^w;h=h`8`5s.`x^PLinks&&lf#A`Llft,`G$yd^uh))`2'd'`5s.`x@D&&h`30,1)$H# '^mlef||@s)^m!"
+"lef||`Llef,`G$ye^uh))^m!@s$e`L@s,`G$ye^uh)))`2'e';`2''`Alc`7'e`G`Ks=`9,b=^X(^S,\"`k\"`R@G=@w^S`Rt(`R@G=0`5b)`2^S$f`2@p'`Rbc`7'e`G`Ks=`9,f,^d`5s.d^Ed.all^Ed.all.cppXYctnr)$h;^D=e@I`S?e@I`S:e$T;^d`7"
+"\"s\",\"`Ke@O@t^D^m^D.tag`i||^D^0`S||^D^0Node))s.t()`b}\");^d(s`Reo=0'`Roh`0o`1,l=`F`J,h=o^h?o^h:'',i,j,k,p;i=h`4':^Rj=h`4'?^Rk=h`4'/')`5h^mi<0||(j>=0&&i>j)||(k>=0&&i>k))$Lo`Y&&o`Y`C>1?o`Y:(l`Y?l`Y"
+"`j;i=l.path^w^6/^Rh=(p?p+'//'`j+(o^5?o^5:(l^5?l^5`j)+(h`30,1)$H/'?l.path^w`30,i<0?0:i@f'`j+h}`2h`Aot`0o){`Kt=o.tag`i;t=t@W`D?t`D$M`5t`tSHAPE')t`e`5t`Ht`tINPUT'&&@4&&@4`D)t=@4`D();`B!#Ao^h)t='A';}`2"
+"t`Aoid`0o`1,^G,p,c,n`e,x=0`5t@L`y$Lo`Y;c=o.`k`5o^h^mt`tA$I`tAREA')^m!c$ep||p`8`4'`o$d0))n@k`Bc@g`vs.rep(`vs.rep$Gc,\"\\r@h\"\\n@h\"\\t@h' `G^Rx=2}`B$U^mt`tINPUT$I`tSUBMIT')@g$U;x=3}`Bo@I@W`tIMAGE')"
+"n=o@I`5n){`y=^jn@v;`yt=x}}`2`y`Arqf`0t,un`1,e=t`4@e,u=e>=0?`G+t`30,e)+`G:'';`2u&&u`4`G+un+`G)>=0?@Yt`3e$O:''`Arq`0un`1,c=un`4`G),v=^V@Nsq'),q`e`5c<0)`2`Lv,'&`Grq^u$S;`2`L$p`G,'rq',0)`Asqp`0t,a`1,e="
+"t`4@e,q=e<0?'':@Yt`3e+1)`Rsqq[q]`e`5e>=0)`Lt`30,e),`G@b`20`Asqs`0$pq`1;^7u[u@oq;`20`Asq`0q`1,k=@Nsq',v=^Vk),x,c=0;^7q`E;^7u`E;^7q[q]`e;`Lv,'&`Gsqp',0);`L^C,`G@bv`e;^B@x^7u`Q)^7q[^7u[x]]+=(^7q[^7u[x"
+"]]?`G`j+x;^B@x^7q`Q&&^7q[x]^mx==q||c<2)){v+=(v#8'`j+^7q[x]+'`Px);c++}`2^Wk,v,0)`Awdl`7'e`G`Ks=`9,r=@p,b=^X(`F,\"^v\"),i,o,oc`5b)r=^S$f^Bi=0;i<s.d.`Ns`C@A{o=s.d.`Ns[i];oc=o.`k?\"\"+o.`k:\"\"`5(oc`4$"
+"B<0||oc`4\"@0oc(\")>=0)&&oc`4$W<0)^X(o,\"`k\",0,s.lc);}`2r^R`Fs`0`1`5`O>3^m!^Y$es.^f||`O#E`Hs.b^E$D^Q)s.$D^Q('`k',s.bc);`Bs.b^Eb.add^Q$A)s.b.add^Q$A('clic$a,false);`m^X(`F,'^v',0,`Fl)}`Avs`0x`1,v=s"
+".`c^N,g=s.`c^N#5k=@Nvsn^n^C+(g?'^ng`j,n=^Vk),e`Z,y=e.g@K);e.s@Ky+10@l1900:0))`5v){v*=100`5!n`H!^Wk,x,e))`20;n=x`ln%10000>v)`20}`21`Adyasmf`0t,m`H#Am&&m`4t)>=0)`21;`20`Adyasf`0t,m`1,i=t?t`4@e:-1,n,x"
+"`5i>=0&&m){`Kn=t`30,i),x=t`3i+1)`5`Lx,`G,'dyasm^um))`2n}`20`Auns`0`1,x=s.`MSele@6,l=s.`MList,m=s.`MM$s,n,i;^C=^C`8`5x&&l`H!m)m=`F`J^5`5!m.toLowerCase)m`e+m;l=l`8;m=m`8;n=`Ll,';`Gdyas^um)`5n)^C=n}i="
+"^C`4`G`Rfun=i<0?^C:^C`30,i)`Asa`0un`1;^C=un`5!@S)@S=un;`B(`G+@S+`G)`4$S<0)@S+=`G+un;^Cs()`Am_i`0n,a`1,m,f=n`30,1),r,l,i`5!`Wl)`Wl`E`5!`Wnl)`Wnl`U;m=`Wl[n]`5!a&&m&&m._e@Lm^s)`Wa(n)`5!m){m`E,m._c=@Nm"
+"';m^sn=`F`hn;m^sl=s^sl;m^sl[m^s@om;`F`hn++;m.s=s;m._n=n;m._l`U('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_l'`Rm_l[@om;`Wnl[`Wnl`C]=n}`Bm._r@Lm._m){r=m._r;r._m=m;l=m._l;^B"
+"i=0;i<l`C@A@tm[l[i]])r[l[i]]=m[l[i]];r^sl[r^s@or;m=`Wl[@or`lf==f`D())s[@om;`2m`Am_a`7'n`Gg`G@t!g)g=#2;`Ks=`9,c=s[$V,m,x,f=0`5!c)c=`F$u$V`5c&&s_d)s[g]`7\"s\",s_ft(s_d(c)));x=s[g]`5!x)x=`F$ug];m=`Wi("
+"n,1)`5x){m^s=f=1`5(\"\"+x)`4\"fun@6\")>=0)x(s);`m`Wm(\"x\",n,x)}m=`Wi(n,1)`5@Zl)@Zl=@Z=0;`pt();`2f'`Rm_m`0t,n,d){t='^nt;`Ks=^S,i,x,m,f='^nt`5`Wl&&`Wnl)^Bi=0;i<`Wnl`C@A{x=`Wnl[i]`5!n||x==n){m=`Wi(x)"
+"`5m[t]`Ht`t_d')`21`5d)m#Fd);`mm#F)`lm[t+1]@Lm[f]`Hd)$gd);`m$g)}m[f]=1}}`20`AloadModule`0n,u,d,l`1,m,i=n`4':'),g=i<0?#2:n`3i+1),o=0,f,c=s.h?s.h:s.b,^d`5i>=0)n=n`30,i);m=`Wi(n)`5(l$e`Wa(n,g))&&u^Ed&&"
+"c^E$E`S`Hd){@Z=1;@Zl=1`l@3)u=`vu,@u:`Ghttps:^Rf`7'e`G`9.m_a(\"$J+'\",\"'+g+'\")^R^d`7's`Gf`Gu`Gc`G`Ke,o=0@Oo=s.$E`S(\"script\")`5o){@4=\"text/`o\"`5f)o.^v=f;o@I=u;c.appendChild(o)}`bo=0}`2o^Ro=^d(s"
+",f,u,c)}`mm=`Wi(n);m._e=1;`2m`Avo1`0t,a`Ha[t]||$P)^S#Da[t]`Avo2`0t,a`H#H{a#D^S[t]`5#H$P=1}`Adlt`7'`Ks=`9,d`Z,i,vo,f=0`5`pl)^Bi=0;i<`pl`C@A{vo=`pl[i]`5vo`H!`Wm(\"d\")||d`T-$C>=^8){`pl[i]=0;s.t(@i}`m"
+"f=1}`l`pi)clear@5`pi`Rdli=0`5f`H!`pi)`pi=set@5`pt,^8)}`m`pl=0'`Rdl`0vo`1,d`Z`5!@ivo`E;`L^9,`G$72',@i;$C=d`T`5!`pl)`pl`U;`pl[`pl`C]=vo`5!^8)^8=250;`pt()`At`0vo,id`1,trk=1,tm`Z,sed=Math&&@P$l?@P$r@P$"
+"l()*10000000000000):tm`T,@q='s'+@P$rtm`T/10800000)%10+sed,y=tm.g@K),vt=tm.getDate(@f`sMonth(@f'@ly+1900:y)+' `sHour$K:`sMinute$K:`sSecond$K `sDay()+' `sTimezoneO@z(),^d,^T=s.g^T(),ta`e,q`e,qs`e,$m`"
+"e,vb`E#1^9`Runs()`5!s.td){`Ktl=^T`J,a,o,i,x`e,c`e,v`e,p`e,bw`e,bh`e,^H0',k=^W@Ncc`G@p',0^q,hp`e,ct`e,pn=0,ps`5^3&&^3.prototype){^H1'`5j.m$s){^H2'`5tm.setUTCDate){^H3'`5^Y^E^f&&`O#E^H4'`5pn.toPrecis"
+"ion){^H5';a`U`5a.forEach){^H6';i=0;o`E;^d`7'o`G`Ke,i=0@Oi=new Iterator(o)`b}`2i^Ri=^d(o)`5i&&i.next)^H7'}}}}`l`O>=4)x=^iwidth+'x'+^i$j`5s.isns||s.^e`H`O>=3$Q`f(^q`5`O>=4){c=^ipixelDepth;bw=`F$z@2;b"
+"h=`F$z^b}}$8=s.n.p^J}`B^Y`H`O>=4$Q`f(^q;c=^i^2`5`O#E{bw=s.d.^L`S.o@z@2;bh=s.d.^L`S.o@z^b`5!s.^f^Eb){^d`7's`Gtl`G`Ke,hp=0`qh$b\");hp=s.b.isH$b(tl)?\"Y\":\"N\"`b}`2hp^Rhp=^d(s,tl);^d`7's`G`Ke,ct=0`qc"
+"lientCaps\");ct=s.b.`g`b}`2ct^Rct=^d(s)}}}`mr`e`l$8)^4pn<$8`C&&pn<30){ps=^j$8[pn].^w@v#9`5p`4ps)<0)p+=ps;pn++}s.^U=x;s.^2=c;s.`o^k=j;s.`f=v;s.`u@9=k;s.`z@2=bw;s.`z^b=bh;s.`g=ct;s.^x=hp;s.p^J=p;s.td"
+"=1`l@i{`L^9,`G$72',vb);`L^9,`G$71',@i`ls.useP^J)s.doP^J(s);`Kl=`F`J,r=^T.^L.`X`5!s.^I)s.^I=l^h?l^h:l`5!s.`X@Ls._1_`X#C`X=r;s._1_`X=1}`Wm('g')`5(vo&&$C)$e`Wm('d')`Hs.@G||^D){`Ko=^D?^D:s.@G`5!o)`2'';"
+"`Kp=$4'#4`i'),w=1,^G,@a,x=`yt,h,l,i,oc`5^D&&o==^D){^4o@Ln@W$HBODY'){o=o^0`S?o^0`S:o^0Node`5!o)`2'';^G;@a;x=`yt}oc=o.`k?''+o.`k:''`5(oc`4$B>=0&&oc`4\"@0oc(\")<0)||oc`4$W>=0)`2''}ta=n?o$T:1;h@ki=h`4'"
+"?^Rh=s.`N@c^3||i<0?h:h`30,i);l=s.`N`i?s.`N`i:s.ln(h);t=s.`N^M?s.`N^M`8:s.lt(h)`5t^mh||l))q+=$2=@G^n(t`td$I`te'?@y(t):'o')+(h?$2v1`Ph)`j+(l?$2v2`Pl)`j;`mtrk=0`5s.`x@T`H!p$L$4'^I^Rw=0}^G;i=o.sourceIn"
+"dex`5$3'^y')@g$3'^y^Rx=1;i=1`lp&&n@W)qs='&pid`P^jp,255))+(w#8p#3w`j+'&oid`P^jn@v)+(x#8o#3x`j+'&ot`Pt)+(i#8oi='+i`j}`l!trk@Lqs)`2'';@j=s.vs(sed)`5trk`H@j)$m=s.mr(@q,(vt#8t`Pvt)`j+s.hav()+q+(qs?qs:s."
+"rq(^C)),0,id,ta);qs`e;`Wm('t')`5s.p_r)s.p_r(`R`X`e}^7(qs);^z`p(@i;`l@i`L^9,`G$71',vb`R@G=^D=s.`N`i=s.`N^M=`F@0^y=s.ppu=^p=^pv1=^pv2=^pv3`e`5$x)`F@0@G=`F@0eo=`F@0`N`i=`F@0`N^M`e`5!id@Ls.tc#Ctc=1;s.f"
+"lush`a()}`2$m`Atl`0o,t,n,vo`1;s.@G=@wo`R`N^M=t;s.`N`i=n;s.t(@i}`5pg){`F@0co`0o){`K@J\"_\",1,#B`2@wo)`Awd@0gs`0$S{`K@J$p1,#B`2s.t()`Awd@0dc`0$S{`K@J$p#B`2s.t()}}@3=(`F`J`Y`8`4@us@d0`Rd=^L;s.b=s.d.bo"
+"dy`5$c`S#7`i#Ch=$c`S#7`i('HEAD')`5s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@R=s.u`4'N$X6/^R`Kapn$F`i,v$F^k,ie=v`4$n'),o=s.u`4'@M '),i`5v`4'@M@d0||o>0)apn='@M';^Y$9`tMicrosoft Internet Explore"
+"r'`Risns$9`tN$X'`R^e$9`t@M'`R^f=(s.u`4'Mac@d0)`5o>0)`O`rs.u`3o+6));`Bie>0){`O=^Fi=v`3ie+5))`5`O>3)`O`ri)}`B@R>0)`O`rs.u`3@R+10));`m`O`rv`Rem=0`5^3#6^l){i=^g^3#6^l(256))`D(`Rem=(i`t%C4%80'?2:(i`t%U0"
+"100'?1:0))}s.sa(un`Rvl_l='^K,`cID,vmk,ppu,@E,`c`ispace,c`V,`u@7,#4`i,^I,`X,@H';^a=^Z+',^o,$R,server,#4^M,#0@6ID,purchaseID,@r,state,zip,$k,products,`N`i,`N^M';^B`Kn=1;n<51;n++)^a+=',prop$J+',eVar$J"
+"+',hier$J;^Z2=',^U,^2,`o^k,`f,`u@9,`z@2,`z^b,`g,^x,pe$q1$q2$q3,p^J';^a+=^Z2;^9=^a+',$i,`c^N,`c^N#5`MSele@6,`MList,`MM$s,`x^PLinks,`x@D,`x@T,`N@c^3,`N^PFile^Ms,`NEx`n,`NIn`n,`N@UVa$o`N@U^Qs,`N`is,@G"
+",eo';$x=pg#1^9)`5!ss)`Fs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}
w.s_r=new Function("x","o","n","var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x");
w.s_d=new Function("x","var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i"
+"=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=(n-n%62)/62;k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_r(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_r(x"
+",w+' ',w)}}return x");
w.s_fe=new Function("c","return s_r(s_r(s_r(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}

function captureOmnitureDownloads(element, pageName, delimeter) {
	//alert("captureOmnitureDownloads: event22");
	s.events = "event22";
}

function captureOmnitureTabSelections(element, pageName, delimeter) {
	//alert("captureOmnitureTabSelections: " + pageName + " " + delimeter + " " + jQuery(element).text());
	s.prop22 = pageName + " " + delimeter + " " + jQuery(element).text();
}

function captureOmnitureWorkflowChevronSelections(element, pageName, delimeter) {
	//alert("captureOmnitureWorkflowChevronSelections: " + pageName + " " + delimeter + " " + jQuery(element).text());
	s.prop23 = pageName + " " + delimeter + " " + jQuery(element).text();
}

function captureOmnitureLeftNavigationSelections(element, pageName, delimeter) {
	
	var target = element.href;
	if(target != undefined && target != null && target != '') {
		var value = renderPageNavigationLocation(target, delimeter, pageName);
		if(value != "") {
			s.prop23 = value;
		}
	}
	//alert("setOmintureSelectedLeftNavigationClick: " + value);	
}

function captureOmnitureCountryCookieChange(element, pageName, delimeter) {
	//alert("captureOmnitureCountryCookieChange: event16");
	s.events = "event16";
}

function captureOmnitureLogOut(element, pageName, delimeter) {
	//alert("captureOmnitureLogOut: event15");
	s.events = "event15";
}

function captureOmnitureMyBasketSelections(element, pageName, delimeter) {
	var value = "";
	var eParent = jQuery(element).parent();
	if(eParent.attr("id") == "my-baskets-orders") {
		value = removeHTMLTags(jQuery(element).text());
	}
	else {
		var parentValue = removeHTMLTags(jQuery("#my-baskets-orders > a").html());
		value = parentValue + " " + delimeter + " " + jQuery(element).text();
	}
	s.prop21 = value;
	s.eVar21 = value;
	//alert("captureOmnitureMyBasketSelections: " + value);
}

function captureOmnitureMyAccountSelections(element, pageName, delimeter) {
	var value = "";
	var eParent = jQuery(element).parent().parent();
	if(eParent.attr("class").indexOf("my-account") != -1) {
		value = jQuery(element).text();
	}
	else {
		var parentValue = jQuery("li.my-account > span a").text();
		value = parentValue + " " + delimeter + " " + jQuery(element).text();
	}
	s.prop20 = value;
	s.eVar20 = value;
	//alert("captureOmnitureMyAccountSelections: " + value);
}

function captureOmnitureTopNavigationSelections(element, pageName, delimeter) {
	var value = "";
	
	if(jQuery(element).parent().parent().attr("id") == "primary-nav") {
		value = jQuery(element).text();
	}
	else {
		var parentElement = jQuery(element).parent();
		while(parentElement.length > 0 && jQuery(parentElement).attr("id").indexOf("nav-") == -1) {
			parentElement = jQuery(parentElement).parent();
		}	
		value = jQuery(parentElement).children("a").text() + " " + delimeter + " " + removeHTMLTags(jQuery(element).text());
	}
	s.prop18 = value;
	s.eVar18 = value;
	//alert("captureOmnitureTopNavigationSelections: " + value);
}

function captureOmnitureCountryCodeSelection(element, pageName, delimeter) {
	var country = jQuery("#countryCodeValue").val();
	s.prop8 = country;
	s.eVar8 = country;

	//alert("captureOmnitureCountryCodeSelection: " + value);
}

function captureOmnitureAddToBasket(element, pageName, delimeter) {
	var checkedBoxes = 0;
	var productList = '';
	jQuery(element).parents('.solution-content').find('input[type="checkbox"]').each(function() {
		if (jQuery(this).is(':checked')) {
			checkedBoxes++;
			var productId = jQuery(this).parent().parent().find('.product-id').html();
			var price = jQuery(this).parent().parent().find('.price').html();
			productList = productList + 'catalog product;' + productId + ';1;' + price + ',';								
		}
	});
	//alert("captureOmnitureAddToBasket: scAdd, " + productList);
	var s=s_gi("invitrogenabprod");
	s.linkTrackVars='events,products';
    s.linkTrackEvents='scAdd';
	s.events="scAdd";
	s.products=productList;
	var thisForm = jQuery(element).parents("form.addToBasket");
	s.tl(thisForm,'o','Add To Basket');
}

function captureOmnitureAddToFavorites(element, pageName, delimeter) {
	//alert("captureOmnitureAddToFavorites: event13");
	s.events="event13";
}

function captureOmnitureContactSales(element, pageName, delimeter) {
	s.events="event4";
	//alert("captureOmnitureContactSales: event4");
}

function captureOmnitureViewProducts(element, pageName, delimeter) {
	//alert("captureOmnitureViewProducts: prodView");
	s.events="prodView";
}

function captureOmnitureSearchTypes(element, pageName, delimeter) {
	var value = jQuery(element).text() != "" ? jQuery(element).text() : "";
	//alert("captureOmnitureSearchTypes: " + value);
}

function captureOmnitureSoftwareType(element, pageName, delimeter) {
	
}

function captureOmnitureProductHelp(element, pageName, delimeter) {
	s.events = "event12";
	//alert("captureOmnitureProductHelp: event12");
}

function linkIsSelected(expression, captureFunction, pageName, delimeter) {

      var isSelected = false;

      jQuery(expression).click(function(){
	      captureFunction(this, pageName, delimeter);
      });
}

function renderPageNavigationLocation(target, delimeter, pageName) {
		target = target.replace("#","");
		var ary = target.split("/");
		var value = "";
		if(ary.length > 6) {
			for(var i = 6; i < ary.length; i++) {
				value = value + " " + ary[i] + " " + delimeter;
			}
			value = value.substr(0,value.length-2);
			value = value.split(".")[0];
		}
		
		return value;
}

function initOminture() {
	linkIsSelected(".software-downloads-table .downloads-platform a", captureOmnitureDownloads, document.title, "");
	linkIsSelected(".tabs .tabs-nav li a", captureOmnitureTabSelections, document.title, ">");
	linkIsSelected("#tab-workflow .jcarousel-skin-workflow .jcarousel-clip ul li span a", captureOmnitureWorkflowChevronSelections, document.title, ">");
	linkIsSelected("#support-nav ul li a", captureOmnitureLeftNavigationSelections, document.title, ">");
	linkIsSelected("a.changeCountryModalLink", captureOmnitureCountryCookieChange, document.title, ">");
	linkIsSelected("a#logoutLink", captureOmnitureLogOut, document.title, ">");
	linkIsSelected("li#my-baskets-orders a", captureOmnitureMyBasketSelections, document.title, ">");
	linkIsSelected("li.my-account a", captureOmnitureMyAccountSelections, document.title, ">");
	linkIsSelected("#global-nav #primary-nav a", captureOmnitureTopNavigationSelections, document.title, ">");	
	linkIsSelected("#selectCountry input", captureOmnitureCountryCodeSelection, document.title, ">");
	linkIsSelected(".product-help", captureOmnitureProductHelp, document.title, "");
	linkIsSelected("div#global-search-category ul#categoryList li a", captureOmnitureSearchTypes, document.title, "");
	linkIsSelected(".contact-sales-rep", captureOmnitureContactSales, document.title, "");
	linkIsSelected("a.view-products img", captureOmnitureViewProducts, document.title, "");
	
	var s_code=s.t();if(s_code)document.write(s_code); 
}

jQuery(document).ready(function(){
	initOminture();
});

String.prototype.endsWith = function(str)
{return (this.match(str+"$")==str)}

String.prototype.startsWith = function(str)
{return (this.match("^"+str)==str)}

String.prototype.trim = function(){return
(this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""))}

function removeHTMLTags(str){
 	return str.replace(/<\/?[^>]+(>|$)/g, "");
}	

