
jQuery(document).ready(function(){var userAgent=navigator.userAgent.toLowerCase();jQuery.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if(jQuery.browser.msie){jQuery('body').addClass('browserIE');jQuery('body').addClass('browserIE'+jQuery.browser.version.substring(0,1));}
if(jQuery.browser.chrome){jQuery('body').addClass('browserChrome');userAgent=userAgent.substring(userAgent.indexOf('chrome/')+7);userAgent=userAgent.substring(0,1);jQuery('body').addClass('browserChrome'+userAgent);jQuery.browser.safari=false;}
if(jQuery.browser.safari){jQuery('body').addClass('browserSafari');userAgent=userAgent.substring(userAgent.indexOf('version/')+8);userAgent=userAgent.substring(0,1);jQuery('body').addClass('browserSafari'+userAgent);}
if(jQuery.browser.mozilla){if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){jQuery('body').addClass('browserFirefox');userAgent=userAgent.substring(userAgent.indexOf('firefox/')+8);userAgent=userAgent.substring(0,1);jQuery('body').addClass('browserFirefox'+userAgent);}
else{jQuery('body').addClass('browserMozilla');}}
if(jQuery.browser.opera){jQuery('body').addClass('browserOpera');}});var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=!+"\v1",playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}}
catch(e){}}
return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac};}(),onDomLoad=function(){if(!ua.w3){return;}
if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){callDomLoadFunctions();}
if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false);}
if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions();}});if(win==top){(function(){if(isDomLoaded){return;}
try{doc.documentElement.doScroll("left");}
catch(e){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}}
if(ua.wk){(function(){if(isDomLoaded){return;}
if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}
addLoadEvent(callDomLoadFunctions);}}();function callDomLoadFunctions(){if(isDomLoaded){return;}
try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t);}
catch(e){return;}
isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){if(plugin){testPlayerVersion();}
else{matchVersions();}}
function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
else if(counter<10){counter++;setTimeout(arguments.callee,10);return;}
b.removeChild(o);t=null;matchVersions();})();}
else{matchVersions();}}
function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj);}}
else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class");}
if(obj.getAttribute("align")){att.align=obj.getAttribute("align");}
var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value");}}
showExpressInstall(att,par,id,cb);}
else{displayAltContent(obj);if(cb){cb(cbObj);}}}}
else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o;}
cb(cbObj);}}}}}
function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT"){if(typeof o.SetVariable!=UNDEF){r=o;}
else{var n=o.getElementsByTagName(OBJECT)[0];if(n){r=n;}}}
return r;}
function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312);}
function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null;}
else{storedAltContent=obj;storedAltContentId=replaceElemIdStr;}
att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){att.width="310";}
if(typeof att.height==UNDEF||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){att.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv;}
else{par.flashvars=fv;}
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
createSWF(att,par,replaceElemIdStr);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312){return r;}
if(el){if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i.toLowerCase()!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id);}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT"){if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4){removeObjectInIE(id);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.removeChild(obj);}}}
function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null;}}
obj.parentNode.removeChild(obj);}}
function getElementById(id){var el=null;try{el=doc.getElementById(id);}
catch(e){}
return el;}
function createElement(el){return doc.createElement(el);}
function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn];}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0];if(!h){return;}
var m=(media&&typeof media=="string")?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null;}
if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1];}
dynamicStylesheetMedia=m;}
if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT){dynamicStylesheet.addRule(sel,decl);}}
else{if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}}}
function setVisibility(id,isVisible){if(!autoHideShow){return;}
var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s;}
var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2]);}
var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j]);}
for(var k in ua){ua[k]=null;}
ua=null;for(var l in swfobject){swfobject[l]=null;}
swfobject=null;});}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);}
else if(callbackFn){callbackFn({success:false,id:objectIdStr});}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr);}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i];}}
att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j];}}
if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k];}
else{par.flashvars=k+"="+flashvarsObj[k];}}}
if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}
callbackObj.success=true;callbackObj.ref=obj;}
else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return;}
else{setVisibility(replaceElemIdStr,true);}
if(callbackFn){callbackFn(callbackObj);}});}
else if(callbackFn){callbackFn(callbackObj);}},switchOffAutoHideShow:function(){autoHideShow=false;},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn);}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr);}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1];}
if(param==null){return urlEncodeIfNecessary(q);}
var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
if(storedCallbackFn){storedCallbackFn(storedCallbackObj);}}
isExpressInstallActive=false;}}};}();(function(jQuery){jQuery.fn.jcarousel=function(o){return this.each(function(){new jQueryjc(this,o);});};var defaults={vertical:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null};jQuery.jcarousel=function(e,o){this.options=jQuery.extend({},defaults,o||{});this.locked=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?'left':'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){jQuery(e).removeClass(split[i]);var skin=split[i];break;}}
if(e.nodeName=='UL'||e.nodeName=='OL'){this.list=jQuery(e);this.container=this.list.parent();if(this.container.hasClass('jcarousel-clip')){if(!this.container.parent().hasClass('jcarousel-container'))
this.container=this.container.wrap('<div></div>');this.container=this.container.parent();}else if(!this.container.hasClass('jcarousel-container'))
this.container=this.list.wrap('<div></div>').parent();}else{this.container=jQuery(e);this.list=jQuery(e).find('>ul,>ol,div>ul,div>ol');}
if(skin!=''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1)
this.container.wrap('<div class=" '+skin+'"></div>');this.clip=this.list.parent();if(!this.clip.length||!this.clip.hasClass('jcarousel-clip'))
this.clip=this.list.wrap('<div></div>').parent();this.buttonPrev=jQuery('.jcarousel-prev',this.container);if(this.buttonPrev.size()==0&&this.options.buttonPrevHTML!=null)
this.buttonPrev=this.clip.before(this.options.buttonPrevHTML).prev();this.buttonPrev.addClass(this.className('jcarousel-prev'));this.buttonNext=jQuery('.jcarousel-next',this.container);if(this.buttonNext.size()==0&&this.options.buttonNextHTML!=null)
this.buttonNext=this.clip.before(this.options.buttonNextHTML).prev();this.buttonNext.addClass(this.className('jcarousel-next'));this.clip.addClass(this.className('jcarousel-clip'));this.list.addClass(this.className('jcarousel-list'));this.container.addClass(this.className('jcarousel-container'));var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,i=this.options.offset;li.each(function(){self.format(this,i++);wh+=self.dimension(this,di);});this.list.css(this.wh,wh+'px');if(!o||o.size===undefined)
this.options.size=li.size();}
this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();};this.funcPrev=function(){self.prev();};this.funcResize=function(){self.reload();};if(this.options.initCallback!=null)
this.options.initCallback(this,'init');if(jQuery.browser.safari){this.buttons(false,false);jQuery(window).bind('load',function(){self.setup();});}else
this.setup();};var jQueryjc=jQuery.jcarousel;jQueryjc.fn=jQueryjc.prototype={jcarousel:'0.2.3'};jQueryjc.fn.extend=jQueryjc.extend=jQuery.extend;jQueryjc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.tail=null;this.inTail=false;if(this.locked)
return;this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start);this.prevFirst=this.prevLast=null;this.animate(p,false);jQuery(window).unbind('resize',this.funcResize).bind('resize',this.funcResize);},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!=null)
this.options.initCallback(this,'reset');this.setup();},reload:function(){if(this.tail!=null&&this.inTail)
this.list.css(this.lt,jQueryjc.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=false;if(this.options.reloadCallback!=null)
this.options.reloadCallback(this);if(this.options.visible!=null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;jQuery('li',this.list).each(function(i){wh+=self.dimension(this,di);if(i+1<self.first)
lt=wh;});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}
this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!=undefined){this.options.size=s;if(!this.locked)
this.buttons();}
return this.options.size;},has:function(i,i2){if(i2==undefined||!i2)
i2=i;if(this.options.size!==null&&i2>this.options.size)
i2=this.options.size;for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder'))
return false;}
return true;},get:function(i){return jQuery('.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,add=0;if(e.length==0){var c,e=this.create(i),j=jQueryjc.intval(i);while(c=this.get(--j)){if(j<=0||c.length){j<=0?this.list.prepend(e):c.after(e);break;}}}else
old=this.dimension(e);e.removeClass(this.className('jcarousel-item-placeholder'));typeof s=='string'?e.html(s):e.empty().append(s);var di=this.options.visible!=null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first)
this.list.css(this.lt,jQueryjc.intval(this.list.css(this.lt))-wh+'px');this.list.css(this.wh,jQueryjc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last))
return;var d=this.dimension(e);if(i<this.first)
this.list.css(this.lt,jQueryjc.intval(this.list.css(this.lt))+d+'px');e.remove();this.list.css(this.wh,jQueryjc.intval(this.list.css(this.wh))-d+'px');},next:function(){this.stopAuto();if(this.tail!=null&&!this.inTail)
this.scrollTail(false);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!=null&&this.last==this.options.size)?1:this.first+this.options.scroll);},prev:function(){this.stopAuto();if(this.tail!=null&&this.inTail)
this.scrollTail(true);else
this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!=null&&this.first==1)?this.options.size:this.first-this.options.scroll);},scrollTail:function(b){if(this.locked||this.animating||!this.tail)
return;var pos=jQueryjc.intval(this.list.css(this.lt));!b?pos-=this.tail:pos+=this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating)
return;this.animate(this.pos(i),a);},pos:function(i){if(this.locked||this.animating)
return;i=jQueryjc.intval(i);if(this.options.wrap!='circular')
i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);var back=this.first>i;var pos=jQueryjc.intval(this.list.css(this.lt));var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);}
c=e;d=this.dimension(e);if(p)
l+=d;if(this.first!=null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size==null||j<=this.options.size))))
pos=back?pos+d:pos-d;}
var clipping=this.clipping();var cache=[];var visible=0,j=i,v=0;var c=this.get(i-1);while(++visible){e=this.get(j);p=!e.length;if(e.length==0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c.length==0?this.list.prepend(e):c[back?'before':'after'](e);}
c=e;var d=this.dimension(e);if(d==0){alert('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');return 0;}
if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size)
cache.push(e);else if(p)
l+=d;v+=d;if(v>=clipping)
break;j++;}
for(var x=0;x<cache.length;x++)
cache[x].remove();if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,jQueryjc.intval(this.list.css(this.lt))-l+'px');}}
var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size)
last=this.options.size;if(j>last){visible=0,j=last,v=0;while(++visible){var e=this.get(j--);if(!e.length)
break;v+=this.dimension(e);if(v>=clipping)
break;}}
var first=last-visible+1;if(this.options.wrap!='circular'&&first<1)
first=1;if(this.inTail&&back){pos+=this.tail;this.inTail=false;}
this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=jQueryjc.margin(this.get(last),!this.options.vertical?'marginRight':'marginBottom');if((v-m)>clipping)
this.tail=v-clipping-m;}
while(i-->first)
pos+=this.dimension(this.get(i));this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating)
return;this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p==0)
self.list.css(self.lt,0);if(self.options.wrap=='both'||self.options.wrap=='last'||self.options.size==null||self.last<self.options.size)
self.startAuto();self.buttons();self.notify('onAfterAnimation');};this.notify('onBeforeAnimation');if(!this.options.animation||a==false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?{'left':p}:{'top':p};this.list.animate(o,this.options.animation,this.options.easing,scrolled);}},startAuto:function(s){if(s!=undefined)
this.options.auto=s;if(this.options.auto==0)
return this.stopAuto();if(this.timer!=null)
return;var self=this;this.timer=setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){if(this.timer==null)
return;clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==undefined||n==null){var n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size==null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!=null&&this.last>=this.options.size)
n=this.tail!=null&&!this.inTail;}
if(p==undefined||p==null){var p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!=null&&this.first==1)
p=this.tail!=null&&this.inTail;}
var self=this;this.buttonNext[n?'bind':'unbind'](this.options.buttonNextEvent,this.funcNext)[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);this.buttonPrev[p?'bind':'unbind'](this.options.buttonPrevEvent,this.funcPrev)[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.buttonNext.length>0&&(this.buttonNext[0].jcarouselstate==undefined||this.buttonNext[0].jcarouselstate!=n)&&this.options.buttonNextCallback!=null){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);});this.buttonNext[0].jcarouselstate=n;}
if(this.buttonPrev.length>0&&(this.buttonPrev[0].jcarouselstate==undefined||this.buttonPrev[0].jcarouselstate!=p)&&this.options.buttonPrevCallback!=null){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);});this.buttonPrev[0].jcarouselstate=p;}},notify:function(evt){var state=this.prevFirst==null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}
if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}
this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==undefined||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation'))
return;var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!jQuery.isFunction(callback))
return;var self=this;if(i1===undefined)
callback(self,state,evt);else if(i2===undefined)
this.get(i1).each(function(){callback(self,this,i1,state,evt);});else{for(var i=i1;i<=i2;i++)
if(i!==null&&!(i>=i3&&i<=i4))
this.get(i).each(function(){callback(self,this,i,state,evt);});}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){var jQuerye=jQuery(e).addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i));jQuerye.attr('jcarouselindex',i);return jQuerye;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=e.jquery!=undefined?e[0]:e;var old=!this.options.vertical?el.offsetWidth+jQueryjc.margin(el,'marginLeft')+jQueryjc.margin(el,'marginRight'):el.offsetHeight+jQueryjc.margin(el,'marginTop')+jQueryjc.margin(el,'marginBottom');if(d==undefined||old==d)
return old;var w=!this.options.vertical?d-jQueryjc.margin(el,'marginLeft')-jQueryjc.margin(el,'marginRight'):d-jQueryjc.margin(el,'marginTop')-jQueryjc.margin(el,'marginBottom');jQuery(el).css(this.wh,w+'px');return this.dimension(el);},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-jQueryjc.intval(this.clip.css('borderLeftWidth'))-jQueryjc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-jQueryjc.intval(this.clip.css('borderTopWidth'))-jQueryjc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==undefined)
s=this.options.size;return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});jQueryjc.extend({defaults:function(d){return jQuery.extend(defaults,d||{});},margin:function(e,p){if(!e)
return 0;var el=e.jquery!=undefined?e[0]:e;if(p=='marginRight'&&jQuery.browser.safari){var old={'display':'block','float':'none','width':'auto'},oWidth,oWidth2;jQuery.swap(el,old,function(){oWidth=el.offsetWidth;});old['marginRight']=0;jQuery.swap(el,old,function(){oWidth2=el.offsetWidth;});return oWidth2-oWidth;}
return jQueryjc.intval(jQuery.css(el,p));},intval:function(v){v=parseInt(v);return isNaN(v)?0:v;}});})(jQuery);