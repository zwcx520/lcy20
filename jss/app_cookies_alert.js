/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

// 弹出框的结构
var app_cookies_alert_html= `
    <style>
        .layer_app_cookies_alert{background: none; box-shadow: none;}
        .app_cookies_alert{width: 100%; display:none;}
        .app_cookies_alert .a{display: block; width: 100%;}
        .app_cookies_alert .a img{display: block; width: 100%; height: auto;}
        .app_cookies_alert .close{background: url('img.3dmgame.com/uploads/images/thumbnews/20240723/1721716939_601917.png') no-repeat;position: absolute;background-size: 100% 100%;width: 20px; height: 20px;top: 10px;right: 10px; display:none;}
        .layer_app_cookies_alert_mobile{background: none; box-shadow: none;}
        .layer_app_cookies_alert_mobile .app_cookies_alert{display:block; width:80%; margin:0 auto;position: relative; }
    </style>
    <div class="app_cookies_alert">
        <a href="h5.3dmgame.com/activities/wukong" class="a"><img src="img.3dmgame.com/uploads/images/thumbnews/20240805/1722853508_431981.png" alt=""></a>
        <div class="close" onclick="layer.closeAll()"></div>
    </div>`
function open_app_cookies_alert(){
    console.log(layer.v)
    if(layer.v=='2.0'){
        layer.open({
            type: 1,
            content:app_cookies_alert_html,
            className:'layer_app_cookies_alert_mobile',
            success: function(){
                $(".app_cookies_alert a img").on('load',function(){
                    $(".layer_app_cookies_alert_mobile .app_cookies_alert .close").show();
                })
              }    
        });
    }else{
        $("body").append(app_cookies_alert_html);
        $(".app_cookies_alert a img").on('load',function(){
            var layer_ = layer.open({
                type: 1,
                title: false,
                skin:'layer_app_cookies_alert',
                shadeClose: true,
                area: ['80%', 'auto'],
                content: $('.app_cookies_alert')
            });
          
        })
    }
}
// 设置cookies  过期时间
function recondingCookie(){
    var t = new Date();
    t.setDate(t.getDate()+1);
    t.setHours(0);
    t.setMinutes(0);
    t.setSeconds(0);
    var date = new Date();
    date.setTime(date.getTime()+(60*1000));
    if($.cookie("is3dmapp_alert")!='ok'){
    //  $.cookie("is3dmapp_alert",'ok',{ expires:date}); //测试1分钟
       $.cookie("is3dmapp_alert",'ok',{ expires:t, path:'/'}); //第二天0点失效
       open_app_cookies_alert()
    }
}
// console.log($.cookie("is3dmapp_alert"))

//$(function(){
    //if(Date.now() > new Date('2024-07-23 00:00:00').getTime() && Date.now() < new Date('2024-07-29 23:59:59').getTime()){
//        if($.cookie("is3dmapp_alert")!='ok'){
//            recondingCookie()
//        }
    //}
//});
