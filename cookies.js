$(function() {
    var analytics = $.cookie('analytics');
    var GA_ID = "UA-74138032-1";
    function cookiesParty() {
         
        // Google analytics
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
 
        if (!window.GA_ID) {
            console.error("There is no window.GA_ID defined. Set it to your google analytics id.")
        }
 
        ga('create', window.GA_ID, 'auto');
        ga('send', 'pageview');
        ga('set', 'anonymizeIp', true);
 
        // Facebook
//        (function (d, s, id) {
//            var js, fjs = d.getElementsByTagName(s)[0];
//            if (d.getElementById(id)) return;
//            js = d.createElement(s);
//            js.id = id;
//            js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1&appId=224722217584482";
//            fjs.parentNode.insertBefore(js, fjs);
//        }(document, 'script', 'facebook-jssdk'));
 
        // Google +
//        (function () {
//            var po = document.createElement('script');
//            po.type = 'text/javascript';
//            po.async = true;
//            po.src = 'https://apis.google.com/js/platform.js';
//            var s = document.getElementsByTagName('script')[0];
//            s.parentNode.insertBefore(po, s);
//        })();
    }
 
    function acceptCookies(e) {
        $.cookie('analytics', 'true', {expires: 728, path: '/'});
        cookiesParty();
        $(window).off("scroll click", acceptCookies);
    }
 
    if (analytics == "true") {
        cookiesParty();
    } else {
        $('body').prepend('<div onclick="$(\'.cookieMsg\').fadeOut(\'slow\');" class="cookieMsg" style="padding:0 20px;color:black;border-bottom: black 3px solid;font-size: small;"> <p>Este sitio web utiliza cookies propias y de terceros para dar un mejor servicio. Las cookies no se utilizan para recoger información de carácter personal. Si continúa navegando se considera que acepta su uso. Para más información visite nuestra <a href="aviso-legal-cookies.html">política de cookies</a> <a style="float: right;margin-right:50px">Cerrar</a>  </p></div>');
        $(window).on("scroll click", acceptCookies);
    }
});

(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(arguments.length>1&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setMilliseconds(t.getMilliseconds()+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{},cookies=document.cookie?document.cookie.split('; '):[],i=0,l=cookies.length;for(;i<l;i++){var parts=cookies[i].split('='),name=decode(parts.shift()),cookie=parts.join('=');if(key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));
