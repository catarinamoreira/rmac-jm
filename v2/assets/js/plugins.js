// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

/* view port*/
(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return;}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else{if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0;}else{if(++counter>settings.failure_limit){return false;}}}});}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit;}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed;}$.extend(settings,options);}$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(){return update();});}this.each(function(){var self=this;var $self=$(self);self.loaded=false;if($self.attr("src")===undefined||$self.attr("src")===false){if($self.is("img")){$self.attr("src",settings.placeholder);}}$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings);}$("<img />").bind("load",function(){var original=$self.attr("data-"+settings.data_attribute);$self.hide();if($self.is("img")){$self.attr("src",original);}else{$self.css("background-image","url('"+original+"')");}$self[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return !element.loaded;});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings);}}).attr("src",$self.attr("data-"+settings.data_attribute));}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(){if(!self.loaded){$self.trigger("appear");}});}});$window.bind("resize",function(){update();});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){$window.bind("pageshow",function(event){if(event.originalEvent&&event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear");});}});}$(document).ready(function(){update();});return this;};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=(window.innerHeight?window.innerHeight:$window.height())+$window.scrollTop();}else{fold=$(settings.container).offset().top+$(settings.container).height();}return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft();}else{fold=$(settings.container).offset().left+$(settings.container).width();}return fold<=$(element).offset().left-settings.threshold;};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop();}else{fold=$(settings.container).offset().top;}return fold>=$(element).offset().top+settings.threshold+$(element).height();};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft();}else{fold=$(settings.container).offset().left;}return fold>=$(element).offset().left+settings.threshold+$(element).width();};$.inviewport=function(element,settings){return !$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a){return !$.belowthefold(a,{threshold:0});},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0});},"left-of-screen":function(a){return !$.rightoffold(a,{threshold:0});},"in-viewport":function(a){return $.inviewport(a,{threshold:0});},"above-the-fold":function(a){return !$.belowthefold(a,{threshold:0});},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0});},"left-of-fold":function(a){return !$.rightoffold(a,{threshold:0});}});})(jQuery,window,document);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof exports==="object"){factory(require("jquery"));}else{factory(jQuery);}}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}function decode(s){return config.raw?s:decodeURIComponent(s);}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s;}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*86400000);}return(document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""));}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break;}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}$.cookie(key,"",$.extend({},options,{expires:-1}));return !$.cookie(key);};}));


/** BXSLIDER /*/
(function(b){var a={};var c={mode:"horizontal",slideSelector:"",infiniteLoop:true,hideControlOnEnd:false,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:false,captions:false,ticker:false,tickerHover:false,adaptiveHeight:false,adaptiveHeightSpeed:500,video:false,useCSS:true,preloadImages:"visible",responsive:true,touchEnabled:true,swipeThreshold:50,oneToOneTouch:true,preventDefaultSwipeX:true,preventDefaultSwipeY:false,pager:true,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:true,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:false,startText:"Start",stopText:"Stop",autoControlsCombine:false,autoControlsSelector:null,auto:false,pause:4000,autoStart:true,autoDirection:"next",autoHover:false,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};b.fn.bxSlider=function(s){if(this.length==0){return this}if(this.length>1){this.each(function(){b(this).bxSlider(s)});return this}var j={};var H=this;a.el=this;var J=b(window).width();var M=b(window).height();var C=function(){j.settings=b.extend({},c,s);j.settings.slideWidth=parseInt(j.settings.slideWidth);j.children=H.children(j.settings.slideSelector);if(j.children.length<j.settings.minSlides){j.settings.minSlides=j.children.length}if(j.children.length<j.settings.maxSlides){j.settings.maxSlides=j.children.length}if(j.settings.randomStart){j.settings.startSlide=Math.floor(Math.random()*j.children.length)}j.active={index:j.settings.startSlide};j.carousel=j.settings.minSlides>1||j.settings.maxSlides>1;if(j.carousel){j.settings.preloadImages="all"}j.minThreshold=(j.settings.minSlides*j.settings.slideWidth)+((j.settings.minSlides-1)*j.settings.slideMargin);j.maxThreshold=(j.settings.maxSlides*j.settings.slideWidth)+((j.settings.maxSlides-1)*j.settings.slideMargin);j.working=false;j.controls={};j.interval=null;j.animProp=j.settings.mode=="vertical"?"top":"left";j.usingCSS=j.settings.useCSS&&j.settings.mode!="fade"&&(function(){var T=document.createElement("div");var S=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var R in S){if(T.style[S[R]]!==undefined){j.cssPrefix=S[R].replace("Perspective","").toLowerCase();j.animProp="-"+j.cssPrefix+"-transform";return true}}return false}());if(j.settings.mode=="vertical"){j.settings.maxSlides=j.settings.minSlides}H.data("origStyle",H.attr("style"));H.children(j.settings.slideSelector).each(function(){b(this).data("origStyle",b(this).attr("style"))});m()};var m=function(){H.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');j.viewport=H.parent();j.loader=b('<div class="bx-loading" />');j.viewport.prepend(j.loader);H.css({width:j.settings.mode=="horizontal"?(j.children.length*100+215)+"%":"auto",position:"relative"});if(j.usingCSS&&j.settings.easing){H.css("-"+j.cssPrefix+"-transition-timing-function",j.settings.easing)}else{if(!j.settings.easing){j.settings.easing="swing"}}var R=A();j.viewport.css({width:"100%",overflow:"hidden",position:"relative"});j.viewport.parent().css({maxWidth:L()});if(!j.settings.pager){j.viewport.parent().css({margin:"0 auto 0px"})}j.children.css({"float":j.settings.mode=="horizontal"?"left":"none",listStyle:"none",position:"relative"});j.children.css("width",D());if(j.settings.mode=="horizontal"&&j.settings.slideMargin>0){j.children.css("marginRight",j.settings.slideMargin)}if(j.settings.mode=="vertical"&&j.settings.slideMargin>0){j.children.css("marginBottom",j.settings.slideMargin)}if(j.settings.mode=="fade"){j.children.css({position:"absolute",zIndex:0,display:"none"});j.children.eq(j.settings.startSlide).css({zIndex:50,display:"block"})}j.controls.el=b('<div class="bx-controls" />');if(j.settings.captions){z()}j.active.last=j.settings.startSlide==v()-1;if(j.settings.video){H.fitVids()}var S=j.children.eq(j.settings.startSlide);if(j.settings.preloadImages=="all"){S=j.children}if(!j.settings.ticker){if(j.settings.pager){O()}if(j.settings.controls){k()}if(j.settings.auto&&j.settings.autoControls){K()}if(j.settings.controls||j.settings.autoControls||j.settings.pager){j.viewport.after(j.controls.el)}}else{j.settings.pager=false}d(S,t)};var d=function(R,V){var T=R.find("img, iframe").length;if(T==0){V();return}var S=0;var U=function(){if(++S==T){V()}};R.find("img, iframe").each(function(){var Y=b(this);if(Y.is("img")){var W=new Image(),X=false;b(W).on("load",function(){if(X){return}X=true;setTimeout(U,0)});W.src=Y.attr("src");setTimeout(function(){if(W.width&&!X){X=true;setTimeout(U,0)}},0);return}Y.on("load",function(){setTimeout(U,0)})})};var t=function(){if(j.settings.infiniteLoop&&j.settings.mode!="fade"&&!j.settings.ticker){var T=j.settings.mode=="vertical"?j.settings.minSlides:j.settings.maxSlides;var S=j.children.slice(0,T).clone().addClass("bx-clone");var R=j.children.slice(-T).clone().addClass("bx-clone");H.append(S).prepend(R)}j.loader.remove();h();if(j.settings.mode=="vertical"){j.settings.adaptiveHeight=true}j.viewport.height(o());H.redrawSlider();j.settings.onSliderLoad(j.active.index);j.initialized=true;if(j.settings.responsive){b(window).bind("resize",n)}if(j.settings.auto&&j.settings.autoStart){e()}if(j.settings.ticker){F()}if(j.settings.pager){Q(j.settings.startSlide)}if(j.settings.controls){l()}if(j.settings.touchEnabled&&!j.settings.ticker){f()}};var o=function(){var R=0;var T=b();if(j.settings.mode!="vertical"&&!j.settings.adaptiveHeight){T=j.children}else{if(!j.carousel){T=j.children.eq(j.active.index)}else{var S=j.settings.moveSlides==1?j.active.index:j.active.index*q();T=j.children.eq(S);for(i=1;i<=j.settings.maxSlides-1;i++){if(S+i>=j.children.length){T=T.add(j.children.eq(i-1))}else{T=T.add(j.children.eq(S+i))}}}}if(j.settings.mode=="vertical"){T.each(function(U){R+=b(this).outerHeight()});if(j.settings.slideMargin>0){R+=j.settings.slideMargin*(j.settings.minSlides-1)}}else{R=Math.max.apply(Math,T.map(function(){return b(this).outerHeight(false)}).get())}return R};var L=function(){var R="100%";if(j.settings.slideWidth>0){if(j.settings.mode=="horizontal"){R=(j.settings.maxSlides*j.settings.slideWidth)+((j.settings.maxSlides-1)*j.settings.slideMargin)}else{R=j.settings.slideWidth}}return R};var D=function(){var S=j.settings.slideWidth;var R=j.viewport.width();if(j.settings.slideWidth==0||(j.settings.slideWidth>R&&!j.carousel)||j.settings.mode=="vertical"){S=R}else{if(j.settings.maxSlides>1&&j.settings.mode=="horizontal"){if(R>j.maxThreshold){}else{if(R<j.minThreshold){S=(R-(j.settings.slideMargin*(j.settings.minSlides-1)))/j.settings.minSlides}}}}return S};var A=function(){var S=1;if(j.settings.mode=="horizontal"&&j.settings.slideWidth>0){if(j.viewport.width()<j.minThreshold){S=j.settings.minSlides}else{if(j.viewport.width()>j.maxThreshold){S=j.settings.maxSlides}else{var R=j.children.first().width();S=Math.floor(j.viewport.width()/R)}}}else{if(j.settings.mode=="vertical"){S=j.settings.minSlides}}return S};var v=function(){var S=0;if(j.settings.moveSlides>0){if(j.settings.infiniteLoop){S=j.children.length/q()}else{var T=0;var R=0;while(T<j.children.length){++S;T=R+A();R+=j.settings.moveSlides<=A()?j.settings.moveSlides:A()}}}else{S=Math.ceil(j.children.length/A())}return S};var q=function(){if(j.settings.moveSlides>0&&j.settings.moveSlides<=A()){return j.settings.moveSlides}return A()};var h=function(){if(j.children.length>j.settings.maxSlides&&j.active.last&&!j.settings.infiniteLoop){if(j.settings.mode=="horizontal"){var T=j.children.last();var R=T.position();B(-(R.left-(j.viewport.width()-T.width())),"reset",0)}else{if(j.settings.mode=="vertical"){var S=j.children.length-j.settings.minSlides;var R=j.children.eq(S).position();B(-R.top,"reset",0)}}}else{var R=j.children.eq(j.active.index*q()).position();if(j.active.index==v()-1){j.active.last=true}if(R!=undefined){if(j.settings.mode=="horizontal"){B(-R.left,"reset",0)}else{if(j.settings.mode=="vertical"){B(-R.top,"reset",0)}}}}};var B=function(T,S,U,W){if(j.usingCSS){var V=j.settings.mode=="vertical"?"translate3d(0, "+T+"px, 0)":"translate3d("+T+"px, 0, 0)";H.css("-"+j.cssPrefix+"-transition-duration",U/1000+"s");if(S=="slide"){H.css(j.animProp,V);H.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){H.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");p()})}else{if(S=="reset"){H.css(j.animProp,V)}else{if(S=="ticker"){H.css("-"+j.cssPrefix+"-transition-timing-function","linear");H.css(j.animProp,V);H.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){H.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");B(W.resetValue,"reset",0);u()})}}}}else{var R={};R[j.animProp]=T;if(S=="slide"){H.animate(R,U,j.settings.easing,function(){p()})}else{if(S=="reset"){H.css(j.animProp,T)}else{if(S=="ticker"){H.animate(R,speed,"linear",function(){B(W.resetValue,"reset",0);u()})}}}}};var r=function(){var U="";var T=v();for(var S=0;S<T;S++){var R="";if(j.settings.buildPager&&b.isFunction(j.settings.buildPager)){R=j.settings.buildPager(S);j.pagerEl.addClass("bx-custom-pager")}else{R=S+1;j.pagerEl.addClass("bx-default-pager")}U+='<div class="bx-pager-item"><a href="" data-slide-index="'+S+'" class="bx-pager-link">'+R+"</a></div>"}j.pagerEl.html(U)};var O=function(){if(!j.settings.pagerCustom){j.pagerEl=b('<div class="bx-pager" />');if(j.settings.pagerSelector){b(j.settings.pagerSelector).html(j.pagerEl)}else{j.controls.el.addClass("bx-has-pager").append(j.pagerEl)}r()}else{j.pagerEl=b(j.settings.pagerCustom)}j.pagerEl.delegate("a","click",x)};var k=function(){j.controls.next=b('<a class="bx-next" href="">'+j.settings.nextText+"</a>");j.controls.prev=b('<a class="bx-prev" href="">'+j.settings.prevText+"</a>");j.controls.next.bind("click",g);j.controls.prev.bind("click",N);if(j.settings.nextSelector){b(j.settings.nextSelector).append(j.controls.next)}if(j.settings.prevSelector){b(j.settings.prevSelector).append(j.controls.prev)}if(!j.settings.nextSelector&&!j.settings.prevSelector){j.controls.directionEl=b('<div class="bx-controls-direction" />');j.controls.directionEl.append(j.controls.prev).append(j.controls.next);j.controls.el.addClass("bx-has-controls-direction").append(j.controls.directionEl)}};var K=function(){j.controls.start=b('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+j.settings.startText+"</a></div>");j.controls.stop=b('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+j.settings.stopText+"</a></div>");j.controls.autoEl=b('<div class="bx-controls-auto" />');j.controls.autoEl.delegate(".bx-start","click",w);j.controls.autoEl.delegate(".bx-stop","click",P);if(j.settings.autoControlsCombine){j.controls.autoEl.append(j.controls.start)}else{j.controls.autoEl.append(j.controls.start).append(j.controls.stop)}if(j.settings.autoControlsSelector){b(j.settings.autoControlsSelector).html(j.controls.autoEl)}else{j.controls.el.addClass("bx-has-controls-auto").append(j.controls.autoEl)}G(j.settings.autoStart?"stop":"start")};var z=function(){j.children.each(function(R){var S=b(this).find("img:first").attr("title");if(S!=undefined&&(""+S).length){b(this).append('<div class="bx-caption"><span>'+S+"</span></div>")}})};var g=function(R){if(j.settings.auto){H.stopAuto()}H.goToNextSlide();R.preventDefault()};var N=function(R){if(j.settings.auto){H.stopAuto()}H.goToPrevSlide();R.preventDefault()};var w=function(R){H.startAuto();R.preventDefault()};var P=function(R){H.stopAuto();R.preventDefault()};var x=function(T){if(j.settings.auto){H.stopAuto()}var S=b(T.currentTarget);var R=parseInt(S.attr("data-slide-index"));if(R!=j.active.index){H.goToSlide(R)}T.preventDefault()};var Q=function(S){var R=j.children.length;if(j.settings.pagerType=="short"){if(j.settings.maxSlides>1){R=Math.ceil(j.children.length/j.settings.maxSlides)}j.pagerEl.html((S+1)+j.settings.pagerShortSeparator+R);return}j.pagerEl.find("a").removeClass("active");j.pagerEl.each(function(T,U){b(U).find("a").eq(S).addClass("active")})};var p=function(){if(j.settings.infiniteLoop){var R="";if(j.active.index==0){R=j.children.eq(0).position()}else{if(j.active.index==v()-1&&j.carousel){R=j.children.eq((v()-1)*q()).position()}else{if(j.active.index==j.children.length-1){R=j.children.eq(j.children.length-1).position()}}}if(j.settings.mode=="horizontal"){B(-R.left,"reset",0)}else{if(j.settings.mode=="vertical"){B(-R.top,"reset",0)}}}j.working=false;j.settings.onSlideAfter(j.children.eq(j.active.index),j.oldIndex,j.active.index)};var G=function(R){if(j.settings.autoControlsCombine){j.controls.autoEl.html(j.controls[R])}else{j.controls.autoEl.find("a").removeClass("active");j.controls.autoEl.find("a:not(.bx-"+R+")").addClass("active")}};var l=function(){if(v()==1){j.controls.prev.addClass("disabled");j.controls.next.addClass("disabled")}else{if(!j.settings.infiniteLoop&&j.settings.hideControlOnEnd){if(j.active.index==0){j.controls.prev.addClass("disabled");j.controls.next.removeClass("disabled")}else{if(j.active.index==v()-1){j.controls.next.addClass("disabled");j.controls.prev.removeClass("disabled")}else{j.controls.prev.removeClass("disabled");j.controls.next.removeClass("disabled")}}}}};var e=function(){if(j.settings.autoDelay>0){var R=setTimeout(H.startAuto,j.settings.autoDelay)}else{H.startAuto()}if(j.settings.autoHover){H.hover(function(){if(j.interval){H.stopAuto(true);j.autoPaused=true}},function(){if(j.autoPaused){H.startAuto(true);j.autoPaused=null}})}};var F=function(){var S=0;if(j.settings.autoDirection=="next"){H.append(j.children.clone().addClass("bx-clone"))}else{H.prepend(j.children.clone().addClass("bx-clone"));var R=j.children.first().position();S=j.settings.mode=="horizontal"?-R.left:-R.top}B(S,"reset",0);j.settings.pager=false;j.settings.controls=false;j.settings.autoControls=false;if(j.settings.tickerHover&&!j.usingCSS){j.viewport.hover(function(){H.stop()},function(){var W=0;j.children.each(function(X){W+=j.settings.mode=="horizontal"?b(this).outerWidth(true):b(this).outerHeight(true)});var T=j.settings.speed/W;var U=j.settings.mode=="horizontal"?"left":"top";var V=T*(W-(Math.abs(parseInt(H.css(U)))));u(V)})}u()};var u=function(W){speed=W?W:j.settings.speed;var R={left:0,top:0};var U={left:0,top:0};if(j.settings.autoDirection=="next"){R=H.find(".bx-clone").first().position()}else{U=j.children.first().position()}var T=j.settings.mode=="horizontal"?-R.left:-R.top;var S=j.settings.mode=="horizontal"?-U.left:-U.top;var V={resetValue:S};B(T,"ticker",speed,V)};var f=function(){j.touch={start:{x:0,y:0},end:{x:0,y:0}};j.viewport.bind("touchstart",E)};var E=function(R){if(j.working){R.preventDefault()}else{j.touch.originalPos=H.position();var S=R.originalEvent;j.touch.start.x=S.changedTouches[0].pageX;j.touch.start.y=S.changedTouches[0].pageY;j.viewport.bind("touchmove",I);j.viewport.bind("touchend",y)}};var I=function(S){var W=S.originalEvent;var T=Math.abs(W.changedTouches[0].pageX-j.touch.start.x);var V=Math.abs(W.changedTouches[0].pageY-j.touch.start.y);if((T*3)>V&&j.settings.preventDefaultSwipeX){S.preventDefault()}else{if((V*3)>T&&j.settings.preventDefaultSwipeY){S.preventDefault()}}if(j.settings.mode!="fade"&&j.settings.oneToOneTouch){var R=0;if(j.settings.mode=="horizontal"){var U=W.changedTouches[0].pageX-j.touch.start.x;R=j.touch.originalPos.left+U}else{var U=W.changedTouches[0].pageY-j.touch.start.y;R=j.touch.originalPos.top+U}B(R,"reset",0)}};var y=function(S){j.viewport.unbind("touchmove",I);var U=S.originalEvent;var R=0;j.touch.end.x=U.changedTouches[0].pageX;j.touch.end.y=U.changedTouches[0].pageY;if(j.settings.mode=="fade"){var T=Math.abs(j.touch.start.x-j.touch.end.x);if(T>=j.settings.swipeThreshold){j.touch.start.x>j.touch.end.x?H.goToNextSlide():H.goToPrevSlide();H.stopAuto()}}else{var T=0;if(j.settings.mode=="horizontal"){T=j.touch.end.x-j.touch.start.x;R=j.touch.originalPos.left}else{T=j.touch.end.y-j.touch.start.y;R=j.touch.originalPos.top}if(!j.settings.infiniteLoop&&((j.active.index==0&&T>0)||(j.active.last&&T<0))){B(R,"reset",200)}else{if(Math.abs(T)>=j.settings.swipeThreshold){T<0?H.goToNextSlide():H.goToPrevSlide();H.stopAuto()}else{B(R,"reset",200)}}}j.viewport.unbind("touchend",y)};var n=function(S){var R=b(window).width();var T=b(window).height();if(J!=R||M!=T){J=R;M=T;H.redrawSlider()}};H.goToSlide=function(V,X){if(j.working||j.active.index==V){return}j.working=true;j.oldIndex=j.active.index;if(V<0){j.active.index=v()-1}else{if(V>=v()){j.active.index=0}else{j.active.index=V}}j.settings.onSlideBefore(j.children.eq(j.active.index),j.oldIndex,j.active.index);if(X=="next"){j.settings.onSlideNext(j.children.eq(j.active.index),j.oldIndex,j.active.index)}else{if(X=="prev"){j.settings.onSlidePrev(j.children.eq(j.active.index),j.oldIndex,j.active.index)}}j.active.last=j.active.index>=v()-1;if(j.settings.pager){Q(j.active.index)}if(j.settings.controls){l()}if(j.settings.mode=="fade"){if(j.settings.adaptiveHeight&&j.viewport.height()!=o()){j.viewport.animate({height:o()},j.settings.adaptiveHeightSpeed)}j.children.filter(":visible").fadeOut(j.settings.speed).css({zIndex:0});j.children.eq(j.active.index).css("zIndex",51).fadeIn(j.settings.speed,function(){b(this).css("zIndex",50);p()})}else{if(j.settings.adaptiveHeight&&j.viewport.height()!=o()){j.viewport.animate({height:o()},j.settings.adaptiveHeightSpeed)}var W=0;var U={left:0,top:0};if(!j.settings.infiniteLoop&&j.carousel&&j.active.last){if(j.settings.mode=="horizontal"){var R=j.children.eq(j.children.length-1);U=R.position();W=j.viewport.width()-R.outerWidth()}else{var T=j.children.length-j.settings.minSlides;U=j.children.eq(T).position()}}else{if(j.carousel&&j.active.last&&X=="prev"){var Z=j.settings.moveSlides==1?j.settings.maxSlides-q():((v()-1)*q())-(j.children.length-j.settings.maxSlides);var R=H.children(".bx-clone").eq(Z);U=R.position()}else{if(X=="next"&&j.active.index==0){U=H.find("> .bx-clone").eq(j.settings.maxSlides).position();j.active.last=false}else{if(V>=0){var S=V*q();U=j.children.eq(S).position()}}}}if("undefined"!==typeof(U)){var Y=j.settings.mode=="horizontal"?-(U.left-W):-U.top;B(Y,"slide",j.settings.speed)}}};H.goToNextSlide=function(){if(!j.settings.infiniteLoop&&j.active.last){return}var R=parseInt(j.active.index)+1;H.goToSlide(R,"next")};H.goToPrevSlide=function(){if(!j.settings.infiniteLoop&&j.active.index==0){return}var R=parseInt(j.active.index)-1;H.goToSlide(R,"prev")};H.startAuto=function(R){if(j.interval){return}j.interval=setInterval(function(){j.settings.autoDirection=="next"?H.goToNextSlide():H.goToPrevSlide()},j.settings.pause);if(j.settings.autoControls&&R!=true){G("stop")}};H.stopAuto=function(R){if(!j.interval){return}clearInterval(j.interval);j.interval=null;if(j.settings.autoControls&&R!=true){G("start")}};H.getCurrentSlide=function(){return j.active.index};H.getSlideCount=function(){return j.children.length};H.redrawSlider=function(){j.children.add(H.find(".bx-clone")).outerWidth(D());j.viewport.css("height",o());if(!j.settings.ticker){h()}if(j.active.last){j.active.index=v()-1}if(j.active.index>=v()){j.active.last=true}if(j.settings.pager&&!j.settings.pagerCustom){r();Q(j.active.index)}};H.destroySlider=function(){if(!j.initialized){return}j.initialized=false;b(".bx-clone",this).remove();j.children.each(function(){b(this).data("origStyle")!=undefined?b(this).attr("style",b(this).data("origStyle")):b(this).removeAttr("style")});b(this).data("origStyle")!=undefined?this.attr("style",b(this).data("origStyle")):b(this).removeAttr("style");b(this).unwrap().unwrap();if(j.controls.el){j.controls.el.remove()}if(j.controls.next){j.controls.next.remove()}if(j.controls.prev){j.controls.prev.remove()}if(j.pagerEl){j.pagerEl.remove()}b(".bx-caption",this).remove();if(j.controls.autoEl){j.controls.autoEl.remove()}clearInterval(j.interval);if(j.settings.responsive){b(window).unbind("resize",n)}};H.reloadSlider=function(R){if(R!=undefined){s=R}H.destroySlider();C()};C();return this}})(jQuery);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof exports==="object"){module.exports=factory;}else{factory(jQuery);}}}(function($){var toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind=("onwheel" in document||document.documentMode>=9)?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;}}var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=handler;}$.data(this,"mousewheel-line-height",special.getLineHeight(this));$.data(this,"mousewheel-page-height",special.getPageHeight(this));},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=null;}},getLineHeight:function(elem){return parseInt($(elem)["offsetParent" in $.fn?"offsetParent":"parent"]().css("fontSize"),10);},getPageHeight:function(elem){return $(elem).height();},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type="mousewheel";if("detail" in orgEvent){deltaY=orgEvent.detail*-1;}if("wheelDelta" in orgEvent){deltaY=orgEvent.wheelDelta;}if("wheelDeltaY" in orgEvent){deltaY=orgEvent.wheelDeltaY;}if("wheelDeltaX" in orgEvent){deltaX=orgEvent.wheelDeltaX*-1;}if("axis" in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0;}delta=deltaY===0?deltaX:deltaY;if("deltaY" in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY;}if("deltaX" in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1;}}if(deltaY===0&&deltaX===0){return;}if(orgEvent.deltaMode===1){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight;}else{if(orgEvent.deltaMode===2){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight;}}absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40;}}if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40;}delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta);deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta);deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout);}nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args);}function nullLowestDelta(){lowestDelta=null;}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==="mousewheel"&&absDelta%120===0;}}));

/*ADD JSON SUPORT IE7 */
if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());


// version 1.6.0
// http://welcome.totheinter.net/columnizer-jquery-plugin/
// created by: Adam Wulf @adamwulf, adam.wulf@gmail.com

(function($){

 $.fn.columnize = function(options) {
	this.cols  =[]; 
	this.offset= 0; 
	this.before=[];
	this.lastOther=0;  
	this.prevMax =0;
	this.debug=0; 
	this.setColumnStart =null;
	this.elipsisText='';

	var defaults = {
		// default width of columns
		width: 400,
		// optional # of columns instead of width
		columns : false,
		// true to build columns once regardless of window resize
		// false to rebuild when content box changes bounds
		buildOnce : false,
		// an object with options if the text should overflow
		// it's container if it can't fit within a specified height
		overflow : false,
		// this function is called after content is columnized
		doneFunc : function(){},
		// if the content should be columnized into a 
		// container node other than it's own node
		target : false,
		// re-columnizing when images reload might make things
		// run slow. so flip this to true if it's causing delays
		ignoreImageLoading : true,
		// should columns float left or right
		columnFloat : "left",
		// ensure the last column is never the tallest column
		lastNeverTallest : false,
		// (int) the minimum number of characters to jump when splitting
		// text nodes. smaller numbers will result in higher accuracy
		// column widths, but will take slightly longer
		accuracy : false,
		// don't automatically layout columns, only use manual columnbreak
		manualBreaks : false,
		// previx for all the CSS classes used by this plugin
		// default to empty string for backwards compatibility
		cssClassPrefix : "",
		elipsisText:'...',
		debug:0
	};
	options = $.extend(defaults, options);

	if(typeof(options.width) == "string"){
		options.width = parseInt(options.width,10);
		if(isNaN(options.width)){
			options.width = defaults.width;
		}
	}
	if(typeof options.setColumnStart== 'function') {
		this.setColumnStart=options.setColumnStart;
	}
	if(typeof options.elipsisText== 'string') {
		this.elipsisText=options.elipsisText;
	}
	if(options.debug) { // assert is off by default
		this.debug=options.debug;
	}	
	
	/**
	 * appending a text node to a <table> will
	 * cause a jquery crash.
	 * so wrap all append() calls and revert to
	 * a simple appendChild() in case it fails
	 */
	function appendSafe($target, $elem){
		try{
			$target.append($elem);
		}catch(e){
			$target[0].appendChild($elem[0]);
		}
	}

    return this.each(function() {
		var $inBox = options.target ? $(options.target) : $(this);
		var maxHeight = $(this).height();
		var $cache = $('<div></div>'); // this is where we'll put the real content
		var lastWidth = 0;
		var columnizing = false;
		var manualBreaks = options.manualBreaks;
		var cssClassPrefix = defaults.cssClassPrefix;
		if(typeof(options.cssClassPrefix) == "string"){
			cssClassPrefix = options.cssClassPrefix;
		}


		var adjustment = 0;

		appendSafe($cache, $(this).contents().clone(true));

		// images loading after dom load
		// can screw up the column heights,
		// so recolumnize after images load
		if(!options.ignoreImageLoading && !options.target){
			if(!$inBox.data("imageLoaded")){
				$inBox.data("imageLoaded", true);
				if($(this).find("img").length > 0){
					// only bother if there are
					// actually images...
					var func = function($inBox,$cache){ return function(){
							if(!$inBox.data("firstImageLoaded")){
								$inBox.data("firstImageLoaded", "true");
								appendSafe($inBox.empty(), $cache.children().clone(true));
								$inBox.columnize(options);
							}
						};
					}($(this), $cache);
					$(this).find("img").one("load", func);
					$(this).find("img").one("abort", func);
					return;
				}
			}
		}

		$inBox.empty();

		columnizeIt();

		if(!options.buildOnce){
			$(window).resize(function() {
				if(!options.buildOnce){
					if($inBox.data("timeout")){
						clearTimeout($inBox.data("timeout"));
					}
					$inBox.data("timeout", setTimeout(columnizeIt, 200));
				}
			});
		}

		function prefixTheClassName(className, withDot){
			var dot = withDot ? "." : "";
			if(cssClassPrefix.length){
				return dot + cssClassPrefix + "-" + className;
			}
			return dot + className;
		}

		/**
		 * this fuction builds as much of a column as it can without
		 * splitting nodes in half. If the last node in the new column
		 * is a text node, then it will try to split that text node. otherwise
		 * it will leave the node in $pullOutHere and return with a height
		 * smaller than targetHeight.
		 * 
         * Returns a boolean on whether we did some splitting successfully at a text point
         * (so we know we don't need to split a real element). return false if the caller should
         * split a node if possible to end this column.
		 *
		 * @param putInHere, the jquery node to put elements into for the current column
		 * @param $pullOutHere, the jquery node to pull elements out of (uncolumnized html)
		 * @param $parentColumn, the jquery node for the currently column that's being added to
		 * @param targetHeight, the ideal height for the column, get as close as we can to this height
		 */
		function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
			//
			// add as many nodes to the column as we can,
			// but stop once our height is too tall
			while((manualBreaks || $parentColumn.height() < targetHeight) &&
				$pullOutHere[0].childNodes.length){
				var node = $pullOutHere[0].childNodes[0];
				//
				// Because we're not cloning, jquery will actually move the element"
				// http://welcome.totheinter.net/2009/03/19/the-undocumented-life-of-jquerys-append/
				if($(node).find(prefixTheClassName("columnbreak", true)).length){
					//
					// our column is on a column break, so just end here
					return;
				}
				if($(node).hasClass(prefixTheClassName("columnbreak"))){
					//
					// our column is on a column break, so just end here
					return;
				}
				appendSafe($putInHere, $(node));
			}
			if($putInHere[0].childNodes.length === 0) return;

			// now we're too tall, so undo the last one
			var kids = $putInHere[0].childNodes;
			var lastKid = kids[kids.length-1];
			$putInHere[0].removeChild(lastKid);
			var $item = $(lastKid);

			// now lets try to split that last node
			// to fit as much of it as we can into this column
			if($item[0].nodeType == 3){
				// it's a text node, split it up
				var oText = $item[0].nodeValue;
				var counter2 = options.width / 18;
				if(options.accuracy)
				counter2 = options.accuracy;
				var columnText;
				var latestTextNode = null;
				while($parentColumn.height() < targetHeight && oText.length){
					//
					// it's been brought up that this won't work for chinese
					// or other languages that don't have the same use of whitespace
					// as english. This will need to be updated in the future
					// to better handle non-english languages.
					//
					// https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/124
					var indexOfSpace = oText.indexOf(' ', counter2);
					if (indexOfSpace != -1) {
						columnText = oText.substring(0, indexOfSpace);
					} else {
						columnText = oText;
					}
					latestTextNode = document.createTextNode(columnText);
					appendSafe($putInHere, $(latestTextNode));

					if(oText.length > counter2 && indexOfSpace != -1){
						oText = oText.substring(indexOfSpace);
					}else{
						oText = "";
					}
				}
				if($parentColumn.height() >= targetHeight && latestTextNode !== null){
					// too tall :(
					$putInHere[0].removeChild(latestTextNode);
					oText = latestTextNode.nodeValue + oText;
				}
				if(oText.length){
					$item[0].nodeValue = oText;
				}else{
					return false; // we ate the whole text node, move on to the next node
				}
			}

			if($pullOutHere.contents().length){
				$pullOutHere.prepend($item);
			}else{
				appendSafe($pullOutHere, $item);
			}

			return $item[0].nodeType == 3;
		}

		/**
		 * Split up an element, which is more complex than splitting text. We need to create 
		 * two copies of the element with it's contents divided between each
		 */
		function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
			if($putInHere.contents(":last").find(prefixTheClassName("columnbreak", true)).length){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($pullOutHere.contents().length){
				var $cloneMe = $pullOutHere.contents(":first");
				//
				// make sure we're splitting an element
				if( typeof $cloneMe.get(0) == 'undefined' || $cloneMe.get(0).nodeType != 1 ) return;

				//
				// clone the node with all data and events
				var $clone = $cloneMe.clone(true);
				//
				// need to support both .prop and .attr if .prop doesn't exist.
				// this is for backwards compatibility with older versions of jquery.
				if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){
					//
					// ok, we have a columnbreak, so add it into
					// the column and exit
					appendSafe($putInHere, $clone);
					$cloneMe.remove();
				}else if (manualBreaks){
					// keep adding until we hit a manual break
					appendSafe($putInHere, $clone);
					$cloneMe.remove();
				}else if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){
					appendSafe($putInHere, $clone);
					if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
						//
						// we can't split an img in half, so just add it
						// to the column and remove it from the pullOutHere section
						$cloneMe.remove();
					}else if($cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn.height() < targetHeight + 20){
						//
						// pretty close fit, and we're not allowed to split it, so just
						// add it to the column, remove from pullOutHere, and be done
						$cloneMe.remove();
					}else if($clone.is("img") || $cloneMe.hasClass(prefixTheClassName("dontsplit"))){
						//
						// it's either an image that's too tall, or an unsplittable node
						// that's too tall. leave it in the pullOutHere and we'll add it to the 
						// next column
						$clone.remove();
					}else{
						//
						// ok, we're allowed to split the node in half, so empty out
						// the node in the column we're building, and start splitting
						// it in half, leaving some of it in pullOutHere
						$clone.empty();
						if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
							// this node may still have non-text nodes to split
							// add the split class and then recur
							$cloneMe.addClass(prefixTheClassName("split"));
							
							//if this node was ol element, the child should continue the number ordering
							if($cloneMe.get(0).tagName == 'OL'){
								var startWith = $clone.get(0).childElementCount + $clone.get(0).start;
								$cloneMe.attr('start',startWith+1);
							}
							
							if($cloneMe.children().length){
								split($clone, $cloneMe, $parentColumn, targetHeight);
							}
						}else{
							// this node only has text node children left, add the
							// split class and move on.
							$cloneMe.addClass(prefixTheClassName("split"));
						}
						if($clone.get(0).childNodes.length === 0){
							// it was split, but nothing is in it :(
							$clone.remove();
							$cloneMe.removeClass(prefixTheClassName("split"));
						}
					}
				}
			}
		}


		function singleColumnizeIt() {
			if ($inBox.data("columnized") && $inBox.children().length == 1) {
				return;
			}
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div class='"
				+ prefixTheClassName("first") + " "
				+ prefixTheClassName("last") + " "
				+ prefixTheClassName("column") + " "
				+ "' style='width:100%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children().eq($inBox.children().length-1);
			$destroyable = $cache.clone(true);
			if(options.overflow){
				targetHeight = options.overflow.height;
				columnize($col, $destroyable, $col, targetHeight);
				// make sure that the last item in the column isn't a "dontend"
				if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){
					split($col, $destroyable, $col, targetHeight);
				}

				while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
					var $lastKid = $col.contents(":last");
					$lastKid.remove();
					$destroyable.prepend($lastKid);
				}

				var html = "";
				var div = document.createElement('DIV');
				while($destroyable[0].childNodes.length > 0){
					var kid = $destroyable[0].childNodes[0];
					if(kid.attributes){
						for(var i=0;i<kid.attributes.length;i++){
							if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
								kid.removeAttribute(kid.attributes[i].nodeName);
							}
						}
					}
					div.innerHTML = "";
					div.appendChild($destroyable[0].childNodes[0]);
					html += div.innerHTML;
				}
				var overflow = $(options.overflow.id)[0];
				overflow.innerHTML = html;

			}else{
				appendSafe($col, $destroyable.contents());
			}
			$inBox.data("columnizing", false);

			if(options.overflow && options.overflow.doneFunc){
				options.overflow.doneFunc();
			}
			options.doneFunc();
		}

		/**
		 * returns true if the input dom node
		 * should not end a column.
		 * returns false otherwise
		 */
		function checkDontEndColumn(dom){
			if(dom.nodeType == 3){
				// text node. ensure that the text
				// is not 100% whitespace
				if(/^\s+$/.test(dom.nodeValue)){
						//
						// ok, it's 100% whitespace,
						// so we should return checkDontEndColumn
						// of the inputs previousSibling
						if(!dom.previousSibling) return false;
					return checkDontEndColumn(dom.previousSibling);
				}
				return false;
			}
			if(dom.nodeType != 1) return false;
			if($(dom).hasClass(prefixTheClassName("dontend"))) return true;
			if(dom.childNodes.length === 0) return false;
			return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);
		}

		function columnizeIt() {
			//reset adjustment var
			adjustment = 0;
			if(lastWidth == $inBox.width()) return;
			lastWidth = $inBox.width();

			var numCols = Math.round($inBox.width() / options.width);
			var optionWidth = options.width;
			var optionHeight = options.height;
			if(options.columns) numCols = options.columns;
			if(manualBreaks){
				numCols = $cache.find(prefixTheClassName("columnbreak", true)).length + 1;
				optionWidth = false;
			}

//			if ($inBox.data("columnized") && numCols == $inBox.children().length) {
//				return;
//			}
			if(numCols <= 1){
				return singleColumnizeIt();
			}
			if($inBox.data("columnizing")) return;
			$inBox.data("columnized", true);
			$inBox.data("columnizing", true);

			$inBox.empty();
			$inBox.append($("<div style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox.children(":last");
			appendSafe($col, $cache.clone());
			maxHeight = $col.height();
			$inBox.empty();

			var targetHeight = maxHeight / numCols;
			var firstTime = true;
			var maxLoops = 3;
			var scrollHorizontally = false;
			if(options.overflow){
				maxLoops = 1;
				targetHeight = options.overflow.height;
			}else if(optionHeight && optionWidth){
				maxLoops = 1;
				targetHeight = optionHeight;
				scrollHorizontally = true;
			}

			//
			// We loop as we try and workout a good height to use. We know it initially as an average 
			// but if the last column is higher than the first ones (which can happen, depending on split
			// points) we need to raise 'adjustment'. We try this over a few iterations until we're 'solid'.
			//
			// also, lets hard code the max loops to 20. that's /a lot/ of loops for columnizer,
			// and should keep run aways in check. if somehow someone has content combined with
			// options that would cause an infinite loop, then this'll definitely stop it.
			for(var loopCount=0;loopCount<maxLoops && loopCount<20;loopCount++){
				$inBox.empty();
				var $destroyable, className, $col, $lastKid;
				try{
					$destroyable = $cache.clone(true);
				}catch(e){
					// jquery in ie6 can't clone with true
					$destroyable = $cache.clone();
				}
				$destroyable.css("visibility", "hidden");
				// create the columns
				for (var i = 0; i < numCols; i++) {
					/* create column */
					className = (i === 0) ? prefixTheClassName("first") : "";
					className += " " + prefixTheClassName("column");
					className = (i == numCols - 1) ? (prefixTheClassName("last") + " " + className) : className;
					$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
				}

				// fill all but the last column (unless overflowing)
				i = 0;
				while(i < numCols - (options.overflow ? 0 : 1) || scrollHorizontally && $destroyable.contents().length){
					if($inBox.children().length <= i){
						// we ran out of columns, make another
						$inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
					}
					$col = $inBox.children().eq(i);
					if(scrollHorizontally){
						$col.width(optionWidth + "px");
					}
					columnize($col, $destroyable, $col, targetHeight);
					// make sure that the last item in the column isn't a "dontend"
					split($col, $destroyable, $col, targetHeight);

					while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
						$lastKid = $col.contents(":last");
						$lastKid.remove();
						$destroyable.prepend($lastKid);
					}
					i++;

					//
					// https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/47
					//
					// check for infinite loop.
					//
					// this could happen when a dontsplit or dontend item is taller than the column
					// we're trying to build, and its never actually added to a column.
					//
					// this results in empty columns being added with the dontsplit item
					// perpetually waiting to get put into a column. lets force the issue here
					if($col.contents().length === 0 && $destroyable.contents().length){
						//
						// ok, we're building zero content columns. this'll happen forever
						// since nothing can ever get taken out of destroyable.
						//
						// to fix, lets put 1 item from destroyable into the empty column
						// before we iterate
						$col.append($destroyable.contents(":first"));
					}else if(i == numCols - (options.overflow ? 0 : 1) && !options.overflow){
						//
						// ok, we're about to exit the while loop because we're done with all
						// columns except the last column.
						//
						// if $destroyable still has columnbreak nodes in it, then we need to keep
						// looping and creating more columns.
						if($destroyable.find(prefixTheClassName("columnbreak", true)).length){
							numCols ++;
						}
					}
				}
				if(options.overflow && !scrollHorizontally){
					var IE6 = false;
					/*@cc_on 
					@if (@_jscript_version < 5.7)
						IE6 = true;
					@end
					@*/
					var IE7 = (document.all) && (navigator.appVersion.indexOf("MSIE 7.") != -1);
					if(IE6 || IE7){
						var html = "";
						var div = document.createElement('DIV');
						while($destroyable[0].childNodes.length > 0){
							var kid = $destroyable[0].childNodes[0];
							for(i=0;i<kid.attributes.length;i++){
								if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
									kid.removeAttribute(kid.attributes[i].nodeName);
								}
							}
							div.innerHTML = "";
							div.appendChild($destroyable[0].childNodes[0]);
							html += div.innerHTML;
						}
						var overflow = $(options.overflow.id)[0];
						overflow.innerHTML = html;
					}else{
						$(options.overflow.id).empty().append($destroyable.contents().clone(true));
					}
				}else if(!scrollHorizontally){
					// the last column in the series
					$col = $inBox.children().eq($inBox.children().length-1);
					$destroyable.contents().each( function() {
						$col.append( $(this) );
					});
					var afterH = $col.height();
					var diff = afterH - targetHeight;
					var totalH = 0;
					var min = 10000000;
					var max = 0;
					var lastIsMax = false;
					var numberOfColumnsThatDontEndInAColumnBreak = 0;
					$inBox.children().each(function($inBox){ return function($item){
						var $col = $inBox.children().eq($item);
						var endsInBreak = $col.children(":last").find(prefixTheClassName("columnbreak", true)).length;
						if(!endsInBreak){
							var h = $col.height();
							lastIsMax = false;
							totalH += h;
							if(h > max) {
								max = h;
								lastIsMax = true;
							}
							if(h < min) min = h;
							numberOfColumnsThatDontEndInAColumnBreak++;
						}
					};
				}($inBox));

					var avgH = totalH / numberOfColumnsThatDontEndInAColumnBreak;
					if(totalH === 0){
						//
						// all columns end in a column break,
						// so we're done here
						loopCount = maxLoops;
					}else if(options.lastNeverTallest && lastIsMax){
						// the last column is the tallest
						// so allow columns to be taller
						// and retry
						//
						// hopefully this'll mean more content fits into
						// earlier columns, so that the last column
						// can be shorter than the rest
						adjustment += 5;

						targetHeight = targetHeight + 30;
						if(loopCount == maxLoops-1) maxLoops++;
					}else if(max - min > 30){
						// too much variation, try again
						targetHeight = avgH + 30;
					}else if(Math.abs(avgH-targetHeight) > 20){
						// too much variation, try again
						targetHeight = avgH;
					}else {
						// solid, we're done
						loopCount = maxLoops;
					}
				}else{
					// it's scrolling horizontally, fix the width/classes of the columns
					$inBox.children().each(function(i){
						$col = $inBox.children().eq(i);
						$col.width(optionWidth + "px");
						if(i === 0){
							$col.addClass(prefixTheClassName("first"));
						}else if(i==$inBox.children().length-1){
							$col.addClass(prefixTheClassName("last"));
						}else{
							$col.removeClass(prefixTheClassName("first"));
							$col.removeClass(prefixTheClassName("last"));
						}
					});
					$inBox.width($inBox.children().length * optionWidth + "px");
				}
				$inBox.append($("<br style='clear:both;'>"));
			}
			$inBox.find(prefixTheClassName("column", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
			$inBox.find(prefixTheClassName("column", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
			$inBox.find(prefixTheClassName("split", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
			$inBox.find(prefixTheClassName("split", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
			$inBox.data("columnizing", false);

			if(options.overflow){
				options.overflow.doneFunc();
			}
			options.doneFunc();
		}
    });
 };

$.fn.renumberByJS=function($searchTag, $colno, $targetId, $targetClass ) {
	this.setList = function($cols, $list, $tag1) {
		var $parents	= this.before.parents();
		var $rest;

		$rest			= $($cols[this.offset-1]).find('>*');

		if( ($rest.last())[0].tagName!=$tag1.toUpperCase()) {
			if(this.debug) {
				console.log("Last item in previous column, isn't a list...");
			}
			return 0;
		}
		$rest			= $rest.length;
		var $tint		= 1;

		if(this.lastOther<=0) {
			$tint		= this.before.children().length+1;
		} else {
			$tint		= $($parents[this.lastOther]).children().length+1;
		}
		// if the first LI in the current column is split, decrement, as we want the same number/key
		if( $($cols[this.offset]).find($tag1+':first li.split').length ) {
			var $whereElipsis=$($cols[this.offset-1]).find($tag1+':last li:last');
			if( this.elipsisText==='' || 
				$($cols[this.offset-1]).find($tag1+':last ~ div').length || 
				$($cols[this.offset-1]).find($tag1+':last ~ p').length  ) {
				;
			} else {
				if($($whereElipsis).find('ul, ol, dl').length ==0 ) {

					var $txt=$whereElipsis.last().text();
					// char counting, 'cus MSIE 8 is appearently stupid
					var $len=$txt.length;
					if($txt.substring($len-1)==';') {
						if($txt.substring($len-4)!=this.elipsisText+';') {
							$txt=$txt.substring(0, $len-1)+this.elipsisText+';';
						}
					} else {
						if($txt.substring($len-3)!=this.elipsisText) {
							$txt+=this.elipsisText;
						}
					}
					$whereElipsis.last().text($txt);
				}
			}
			// an item in split between two columns.  it only holds one key...
			if($($cols[this.offset]).find($tag1+':first >li.split >'+$tag1).length==0) {
				$tint--; 
			}
		}
		if($rest==1) {
			// the last column only held one thing, so assume its wrapped to the column before that as well.
			$tint		+= this.prevMax ;
		}
		if(this.nest>1) {
			if(this.debug) {
				console.log("Supposed to be a nested list...decr");
			}
			$tint--;
// some how, id previous list starts split, need  secins decrement, 
// if "split" is now correct, reference this
			var $tt		= $($cols[this.offset -1]).find($tag1+':first li.split:first');
			if($tt.length>0) {
				if(this.debug) {
					console.log("Previous column started with a split item, so that count is one less than expected");
				}
				$tint--;
			}


			$tt			= $($cols[this.offset]).find($tag1+':first li:first').clone();
			$tt.children().remove();
			if( $.trim($tt.text()).length>0 ){
				if(this.debug) {
					console.log("If that was a complete list in the previous column, don't decr.");
				}
				$tint++;

				if($($cols[this.offset-1]).find(">"+$tag1+':last ').children().length==0 ) {
					if(this.debug) {
						console.log("unless that was empty, in which case revert");
					}
					$tint--;
				}
			}

		} else {
			var $tt		= $($cols[this.offset]).find($tag1+':first li:first '+$tag1+".split li.split");
			if($tt.length>0) {
				if(this.debug) {
					console.log("[Nested] Column started with a split item, so that count is one less than expected");
				}
				$tint--;
			}

		}

		if(this.debug) {
			console.log("Setting the start value to "+$tint+" ("+this.prevMax +")");
		}
		if($tint >0) {
			// if the above computation leads to 0, or an empty list (more likely), don't set, leave as 1
			if(typeof this.setColumnStart == 'function') {
				this.setColumnStart($list, $tint);
			} else {
				$list.attr('start', $tint);
			}
		}
		return 0; 
	}

	if(typeof $targetId === 'undefined') { $targetId=false; }
	if(typeof $targetClass === 'undefined') { $targetClass=false; }
	if(! $targetId && !$targetClass ) {
		throw "renumberByJS(): Bad param, must pass an id or a class";
	}

	var $target 			='';
	this.prevMax			=1;
	
	if($targetClass) {
		$target 			="."+$targetClass;
	} else {
		$target 			="#"+$targetId;
	}
	var $tag1				= $searchTag.toLowerCase();
	var $tag2				= $searchTag.toUpperCase();
	
	this.cols  				= $($target);
	if(this.debug) {
		console.log("There are "+this.cols.length+" items, looking for "+$tag1);
	}

	this.before				= $(this.cols[0]).find($tag1+':last');
	this.prevMax			= this.before.children().length;

// start at 1, as must compare to previous...
	for(this.offset=1; this.offset<this.cols.length; this.offset++) {
		if(this.debug) {
			console.log("iterating "+this.offset+"...[of "+this.cols.length+"]");
		}
// if the first column again, nothing to the left of you, do nothing...
		if(this.offset % $colno==0) { 
			if(this.debug) {
				console.log("First column (in theory..)");
			}

			this.prevMax	= 1;
			continue;
		}
		
		this.before			= $(this.cols[this.offset-1]).find($tag1+':last');
// if there are no occurences of the searchTag, do nothing
		if(this.before.length) {
			if(this.debug) {
				console.log("Have some "+$searchTag+" elements in the previous column");
			}

			var $list		= $(this.cols[this.offset]).find($tag1+':first');
			var $first		= $(this.cols[this.offset]).find('*:first');
			if($first[0] !== $list[0]) {
// don't renumber anything, its not a rollover list
				continue;
			}

			var $parents	= this.before.parents();
			this.lastOther	= 0;
			var $found		= false;
			for(; this.lastOther<$parents.length; this.lastOther++) {
				if($parents[this.lastOther].tagName != $tag2 && $parents[this.lastOther].tagName != "LI") {
					$found  = true;
					this.lastOther--;
					break;
				}
			}
			
			this.nest		=1;
			if($(this.cols[this.offset]).find(">"+$tag1+':first li '+$tag1+":first").length) {
				this.nest	= 2;
			}
			this.setList(this.cols, $list, $tag1);
			this.lastOther--;
			$list			= $(this.cols[this.offset]).find($tag1+':first li '+$tag1+":first");
			if($list.length) {
// I hope the two columns have same nesting, or its busted
				
				this.before= $(this.cols[this.offset-1]).find(">"+$tag1+':last li '+$tag1+":last");
				this.prevMax= 0;
				this.nest	=1;
				this.setList(this.cols, $list, $tag1);
			}
			var $reset		= $(this.cols[this.offset-1]).find(">"+$tag1+':last');
			this.prevMax	= $reset.children().length;
		}
	}
	return 0;
};

})(jQuery);


/*!
 * jScrollPane - v2.0.19 - 2013-11-16
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(a,b,c){a.fn.jScrollPane=function(d){function e(d,e){function f(b){var e,h,j,l,m,n,q=!1,r=!1;if(P=b,Q===c)m=d.scrollTop(),n=d.scrollLeft(),d.css({overflow:"hidden",padding:0}),R=d.innerWidth()+tb,S=d.innerHeight(),d.width(R),Q=a('<div class="jspPane" />').css("padding",sb).append(d.children()),T=a('<div class="jspContainer" />').css({width:R+"px",height:S+"px"}).append(Q).appendTo(d);else{if(d.css("width",""),q=P.stickToBottom&&C(),r=P.stickToRight&&D(),l=d.innerWidth()+tb!=R||d.outerHeight()!=S,l&&(R=d.innerWidth()+tb,S=d.innerHeight(),T.css({width:R+"px",height:S+"px"})),!l&&ub==U&&Q.outerHeight()==V)return d.width(R),void 0;ub=U,Q.css("width",""),d.width(R),T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Q.css("overflow","auto"),U=b.contentWidth?b.contentWidth:Q[0].scrollWidth,V=Q[0].scrollHeight,Q.css("overflow",""),W=U/R,X=V/S,Y=X>1,Z=W>1,Z||Y?(d.addClass("jspScrollable"),e=P.maintainPosition&&(ab||db),e&&(h=A(),j=B()),g(),i(),k(),e&&(y(r?U-R:h,!1),x(q?V-S:j,!1)),H(),E(),N(),P.enableKeyboardNavigation&&J(),P.clickOnTrack&&o(),L(),P.hijackInternalLinks&&M()):(d.removeClass("jspScrollable"),Q.css({top:0,left:0,width:T.width()-tb}),F(),I(),K(),p()),P.autoReinitialise&&!rb?rb=setInterval(function(){f(P)},P.autoReinitialiseDelay):!P.autoReinitialise&&rb&&clearInterval(rb),m&&d.scrollTop(0)&&x(m,!1),n&&d.scrollLeft(0)&&y(n,!1),d.trigger("jsp-initialised",[Z||Y])}function g(){Y&&(T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),eb=T.find(">.jspVerticalBar"),fb=eb.find(">.jspTrack"),$=fb.find(">.jspDrag"),P.showArrows&&(jb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",m(0,-1)).bind("click.jsp",G),kb=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",m(0,1)).bind("click.jsp",G),P.arrowScrollOnHover&&(jb.bind("mouseover.jsp",m(0,-1,jb)),kb.bind("mouseover.jsp",m(0,1,kb))),l(fb,P.verticalArrowPositions,jb,kb)),hb=S,T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){hb-=a(this).outerHeight()}),$.hover(function(){$.addClass("jspHover")},function(){$.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",G),$.addClass("jspActive");var c=b.pageY-$.position().top;return a("html").bind("mousemove.jsp",function(a){r(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",q),!1}),h())}function h(){fb.height(hb+"px"),ab=0,gb=P.verticalGutter+fb.outerWidth(),Q.width(R-gb-tb);try{0===eb.position().left&&Q.css("margin-left",gb+"px")}catch(a){}}function i(){Z&&(T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),lb=T.find(">.jspHorizontalBar"),mb=lb.find(">.jspTrack"),bb=mb.find(">.jspDrag"),P.showArrows&&(pb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",m(-1,0)).bind("click.jsp",G),qb=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",m(1,0)).bind("click.jsp",G),P.arrowScrollOnHover&&(pb.bind("mouseover.jsp",m(-1,0,pb)),qb.bind("mouseover.jsp",m(1,0,qb))),l(mb,P.horizontalArrowPositions,pb,qb)),bb.hover(function(){bb.addClass("jspHover")},function(){bb.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",G),bb.addClass("jspActive");var c=b.pageX-bb.position().left;return a("html").bind("mousemove.jsp",function(a){t(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",q),!1}),nb=T.innerWidth(),j())}function j(){T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){nb-=a(this).outerWidth()}),mb.width(nb+"px"),db=0}function k(){if(Z&&Y){var b=mb.outerHeight(),c=fb.outerWidth();hb-=b,a(lb).find(">.jspCap:visible,>.jspArrow").each(function(){nb+=a(this).outerWidth()}),nb-=c,S-=c,R-=b,mb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),h(),j()}Z&&Q.width(T.outerWidth()-tb+"px"),V=Q.outerHeight(),X=V/S,Z&&(ob=Math.ceil(1/W*nb),ob>P.horizontalDragMaxWidth?ob=P.horizontalDragMaxWidth:ob<P.horizontalDragMinWidth&&(ob=P.horizontalDragMinWidth),bb.width(ob+"px"),cb=nb-ob,u(db)),Y&&(ib=Math.ceil(1/X*hb),ib>P.verticalDragMaxHeight?ib=P.verticalDragMaxHeight:ib<P.verticalDragMinHeight&&(ib=P.verticalDragMinHeight),$.height(ib+"px"),_=hb-ib,s(ab))}function l(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function m(a,b,c){return function(){return n(a,b,this,c),this.blur(),!1}}function n(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&vb.scrollByX(b*P.arrowButtonSpeed),0!==c&&vb.scrollByY(c*P.arrowButtonSpeed),g=setTimeout(i,h?P.initialDelay:P.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function o(){p(),Y&&fb.bind("mousedown.jsp",function(b){if(b.originalTarget===c||b.originalTarget==b.currentTarget){var d,e=a(this),f=e.offset(),g=b.pageY-f.top-ab,h=!0,i=function(){var a=e.offset(),c=b.pageY-a.top-ib/2,f=S*P.scrollPagePercent,k=_*f/(V-S);if(0>g)ab-k>c?vb.scrollByY(-f):r(c);else{if(!(g>0))return j(),void 0;c>ab+k?vb.scrollByY(f):r(c)}d=setTimeout(i,h?P.initialDelay:P.trackClickRepeatFreq),h=!1},j=function(){d&&clearTimeout(d),d=null,a(document).unbind("mouseup.jsp",j)};return i(),a(document).bind("mouseup.jsp",j),!1}}),Z&&mb.bind("mousedown.jsp",function(b){if(b.originalTarget===c||b.originalTarget==b.currentTarget){var d,e=a(this),f=e.offset(),g=b.pageX-f.left-db,h=!0,i=function(){var a=e.offset(),c=b.pageX-a.left-ob/2,f=R*P.scrollPagePercent,k=cb*f/(U-R);if(0>g)db-k>c?vb.scrollByX(-f):t(c);else{if(!(g>0))return j(),void 0;c>db+k?vb.scrollByX(f):t(c)}d=setTimeout(i,h?P.initialDelay:P.trackClickRepeatFreq),h=!1},j=function(){d&&clearTimeout(d),d=null,a(document).unbind("mouseup.jsp",j)};return i(),a(document).bind("mouseup.jsp",j),!1}})}function p(){mb&&mb.unbind("mousedown.jsp"),fb&&fb.unbind("mousedown.jsp")}function q(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),$&&$.removeClass("jspActive"),bb&&bb.removeClass("jspActive")}function r(a,b){Y&&(0>a?a=0:a>_&&(a=_),b===c&&(b=P.animateScroll),b?vb.animate($,"top",a,s):($.css("top",a),s(a)))}function s(a){a===c&&(a=$.position().top),T.scrollTop(0),ab=a;var b=0===ab,e=ab==_,f=a/_,g=-f*(V-S);(wb!=b||yb!=e)&&(wb=b,yb=e,d.trigger("jsp-arrow-change",[wb,yb,xb,zb])),v(b,e),Q.css("top",g),d.trigger("jsp-scroll-y",[-g,b,e]).trigger("scroll")}function t(a,b){Z&&(0>a?a=0:a>cb&&(a=cb),b===c&&(b=P.animateScroll),b?vb.animate(bb,"left",a,u):(bb.css("left",a),u(a)))}function u(a){a===c&&(a=bb.position().left),T.scrollTop(0),db=a;var b=0===db,e=db==cb,f=a/cb,g=-f*(U-R);(xb!=b||zb!=e)&&(xb=b,zb=e,d.trigger("jsp-arrow-change",[wb,yb,xb,zb])),w(b,e),Q.css("left",g),d.trigger("jsp-scroll-x",[-g,b,e]).trigger("scroll")}function v(a,b){P.showArrows&&(jb[a?"addClass":"removeClass"]("jspDisabled"),kb[b?"addClass":"removeClass"]("jspDisabled"))}function w(a,b){P.showArrows&&(pb[a?"addClass":"removeClass"]("jspDisabled"),qb[b?"addClass":"removeClass"]("jspDisabled"))}function x(a,b){var c=a/(V-S);r(c*_,b)}function y(a,b){var c=a/(U-R);t(c*cb,b)}function z(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),T.scrollTop(0),T.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=B(),j=h+S,h>n||c?l=n-P.horizontalGutter:n+f>j&&(l=n-S+f+P.horizontalGutter),isNaN(l)||x(l,d),i=A(),k=i+R,i>o||c?m=o-P.horizontalGutter:o+g>k&&(m=o-R+g+P.horizontalGutter),isNaN(m)||y(m,d)}function A(){return-Q.position().left}function B(){return-Q.position().top}function C(){var a=V-S;return a>20&&a-B()<10}function D(){var a=U-R;return a>20&&a-A()<10}function E(){T.unbind(Bb).bind(Bb,function(a,b,c,d){var e=db,f=ab,g=a.deltaFactor||P.mouseWheelSpeed;return vb.scrollBy(c*g,-d*g,!1),e==db&&f==ab})}function F(){T.unbind(Bb)}function G(){return!1}function H(){Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){z(a.target,!1)})}function I(){Q.find(":input,a").unbind("focus.jsp")}function J(){function b(){var a=db,b=ab;switch(c){case 40:vb.scrollByY(P.keyboardSpeed,!1);break;case 38:vb.scrollByY(-P.keyboardSpeed,!1);break;case 34:case 32:vb.scrollByY(S*P.scrollPagePercent,!1);break;case 33:vb.scrollByY(-S*P.scrollPagePercent,!1);break;case 39:vb.scrollByX(P.keyboardSpeed,!1);break;case 37:vb.scrollByX(-P.keyboardSpeed,!1)}return e=a!=db||b!=ab}var c,e,f=[];Z&&f.push(lb[0]),Y&&f.push(eb[0]),Q.focus(function(){d.focus()}),d.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(d){if(d.target===this||f.length&&a(d.target).closest(f).length){var g=db,h=ab;switch(d.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:c=d.keyCode,b();break;case 35:x(V-S),c=null;break;case 36:x(0),c=null}return e=d.keyCode==c&&g!=db||h!=ab,!e}}).bind("keypress.jsp",function(a){return a.keyCode==c&&b(),!e}),P.hideFocus?(d.css("outline","none"),"hideFocus"in T[0]&&d.attr("hideFocus",!0)):(d.css("outline",""),"hideFocus"in T[0]&&d.attr("hideFocus",!1))}function K(){d.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function L(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&Q.find(d)&&(0===T.scrollTop()?c=setInterval(function(){T.scrollTop()>0&&(z(b,!0),a(document).scrollTop(T.position().top),clearInterval(c))},50):(z(b,!0),a(document).scrollTop(T.position().top)))}}function M(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate("a[href*=#]","click",function(c){var d,e,f,g,h,i,j=this.href.substr(0,this.href.indexOf("#")),k=location.href;if(-1!==location.href.indexOf("#")&&(k=location.href.substr(0,location.href.indexOf("#"))),j===k){d=escape(this.href.substr(this.href.indexOf("#")+1));try{e=a("#"+d+', a[name="'+d+'"]')}catch(l){return}e.length&&(f=e.closest(".jspScrollable"),g=f.data("jsp"),g.scrollToElement(e,!0),f[0].scrollIntoView&&(h=a(b).scrollTop(),i=e.offset().top,(h>i||i>h+a(b).height())&&f[0].scrollIntoView()),c.preventDefault())}}))}function N(){var a,b,c,d,e,f=!1;T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=A(),b=B(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=db,j=ab;return vb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==db&&j==ab}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function O(){var a=B(),b=A();d.removeClass("jspScrollable").unbind(".jsp"),d.replaceWith(Ab.append(Q.children())),Ab.scrollTop(a),Ab.scrollLeft(b),rb&&clearInterval(rb)}var P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb=this,wb=!0,xb=!0,yb=!1,zb=!1,Ab=d.clone(!1,!1).empty(),Bb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===d.css("box-sizing")?(sb=0,tb=0):(sb=d.css("paddingTop")+" "+d.css("paddingRight")+" "+d.css("paddingBottom")+" "+d.css("paddingLeft"),tb=(parseInt(d.css("paddingLeft"),10)||0)+(parseInt(d.css("paddingRight"),10)||0)),a.extend(vb,{reinitialise:function(b){b=a.extend({},P,b),f(b)},scrollToElement:function(a,b,c){z(a,b,c)},scrollTo:function(a,b,c){y(a,c),x(b,c)},scrollToX:function(a,b){y(a,b)},scrollToY:function(a,b){x(a,b)},scrollToPercentX:function(a,b){y(a*(U-R),b)},scrollToPercentY:function(a,b){x(a*(V-S),b)},scrollBy:function(a,b,c){vb.scrollByX(a,c),vb.scrollByY(b,c)},scrollByX:function(a,b){var c=A()+Math[0>a?"floor":"ceil"](a),d=c/(U-R);t(d*cb,b)},scrollByY:function(a,b){var c=B()+Math[0>a?"floor":"ceil"](a),d=c/(V-S);r(d*_,b)},positionDragX:function(a,b){t(a,b)},positionDragY:function(a,b){r(a,b)},animate:function(a,b,c,d){var e={};e[b]=c,a.animate(e,{duration:P.animateDuration,easing:P.animateEase,queue:!1,step:d})},getContentPositionX:function(){return A()},getContentPositionY:function(){return B()},getContentWidth:function(){return U},getContentHeight:function(){return V},getPercentScrolledX:function(){return A()/(U-R)},getPercentScrolledY:function(){return B()/(V-S)},getIsScrollableH:function(){return Z},getIsScrollableV:function(){return Y},getContentPane:function(){return Q},scrollToBottom:function(a){r(_,a)},hijackInternalLinks:a.noop,destroy:function(){O()}}),f(e)}return d=a.extend({},a.fn.jScrollPane.defaults,d),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){d[this]=d[this]||d.speed}),this.each(function(){var b=a(this),c=b.data("jsp");c?c.reinitialise(d):(a("script",b).filter('[type="text/javascript"],:not([type])').remove(),c=new e(b,d),b.data("jsp",c))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}}(jQuery,this);