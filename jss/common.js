
$(function () {
    // meun
    $('.meun').click(function () {
        $(this).toggleClass('on');
        $('.header').toggleClass('on');
    })

    //跳转评论 
	 $('.detaile_top .pl,.dj_news_zl .ZL_M1 .pl').click(function(){
        var cms_top = $('.cms_wrap').offset().top;
        $("body,html").animate({scrollTop:cms_top},300);
    })
    
    //搜索
    $('.hotsearch').css('height',document.body.scrollHeight)
    $('.search_input').focus(function () {
        $('body').css({"overflow":"initial",})
        $('.hotsearch').slideDown()
    })
    $('.search_input').blur(function () {
        $('body').css({"overflow":"initial"})
        $('.hotsearch').slideUp();
    })


  $(function () {
      //sy-meun
      var num=$(".box_c .nav_c ul li").length;
      var l=$(window).width(); //屏幕宽度
      var j=0;
      var p=null;
      var b=null;

       b =$(".box_c .nav_c ul li").eq(num-1).width()+30; //最后一个a的长度
      for(var i=0;i<num;i++){
          j=j+$(".box_c .nav_c ul li").eq(i).width()+30;
      };
      $(".box_c .nav_c ul").css("width",j+"px");//ul的长度
      var obj= $(".box_c .nav_c ul li .on");
      if(obj.html()){p=obj.offset().left;}
      if(j>l){
          if(p<=j&&p>l-90){
              var e=p-l/2;
              var f=l/2-b;
              var z=j-l+12;
              if(e<f){
                  L2=l/2;
                  $(".box_c .nav_c").scrollLeft(L2);
              }else{
                  $(".box_c .nav_c").scrollLeft(z);
              }
          }
      }
  })

    //PAGE
    $(".page>span .cbtn").css("display","none");
    $(".page>span").click(function(){
        $(this).children("div").show();
    })
    $(document).click(function(){$(".page>span .cbtn").css("display","none");})
    $(".page>span .cbtn,.page>span").click(function(event){
        event.stopPropagation();
    });
    // UP
    $('footer .bot .up').click(function () {
        $("body,html").animate({scrollTop:0},300);
    })

    //游戏介绍
    if($('.Gm_jieshao').size()>=1){
        var txt_h =$('.Gm_jieshao p').height();
        if(txt_h>168){
            $('.Gm_jieshao').addClass('show_js')
            $('.Gm_jieshao .morbtn').show();
            $('.Gm_jieshao .morbtn').click(function () {
                if($('.Gm_jieshao').hasClass('show_js')){
                    $('.Gm_jieshao').removeClass('show_js');
                    $('.Gm_jieshao .morbtn span').html('收起更多')
                }else{
                    $('.Gm_jieshao').addClass('show_js');
                    $('.Gm_jieshao .morbtn span').html('展开更多')
                }
            })
        }
    }

})

//文字提示弹窗 自动关闭
window.tipsmsg = function (txt) {
    if($('.tips_wind').size()<=0){
        $('body').append('<div class="tips_wind"><span>'+txt+'</span></div>')
        $('.tips_wind').fadeIn()
        setTimeout(function () {
            $('.tips_wind').fadeOut(function () {
                $('.tips_wind').remove()
            });
        },1000)
    }
}


//文字提示 等待关闭
window.tipsmsg2 = function (txt) {
    if($('.tips_wind2').size()<=0){
        $('body').append('<div class="tips_wind2"><div class="bg"></div><span> <i>'+txt+' </i> <a href="javascript:void(0)" class="clos">确认</a> </span> </div>')
        $('.tips_wind2').fadeIn()
        $('.tips_wind2,.tips_wind2 .bg').click(function () {
            $('.tips_wind2').fadeOut(function () {
                $('.tips_wind2').remove();
            })
        })
    }
}

 //video
$(function () {
	var wind_w = $(window).width();if(wind_w<=768){
		$('.detaile_cont p iframe,.dj_news_zl .ZL_M3 p iframe , .Gm_jieshao iframe ,.detaile_cont p video,.dj_news_zl .ZL_M3 p video , .Gm_jieshao video ').css({'height':wind_w*0.6,'width':"100%"})
	}
})

 //2018-9-4调整新闻详细页评分上的发售高度；
$(function () {	
	function pt_height(){	
		 var hight_h=$(".related_cont .info .pt span").height();
		if(hight_h>=36){
			$(".related_cont .info .pt").css({"line-height":"16px","height":"auto","max-height":"33px","word-break":"break-all","overflow":"hidden"})
			$(".related_cont .info .time").css({"margin-bottom":"5px"})
			$(".related_cont .info .score_box").css({"margin-top":"0px"})
			$(".related_cont .info").css({"margin-top":"20px"})
		}
	}
	pt_height()
})

 //2018-12-28攻略的图片高度；
function news_tab_img() {
	if($(".news_tab_img ul").size()>=1){
		  var h=$(".news_tab_img ul").height();
		$(".news_tab_img ul").css("height",h);
		$(".news_tab_img ul .list_a").css("height",h);
		$(".news_tab_img ul .list_b").css("height","100%");
	}
}
news_tab_img()

 //1-2攻略的图片自适应；
function width_height() {
	if($(".dj_ycgl_warp ul li").size()>=1){
		 var wid_=$(".dj_ycgl_warp ul li a").width();
		 var hei_=wid_/0.82;
			$(".dj_ycgl_warp ul li").each(function(){
				$(this).find("img").css({"height":hei_+'px'})
			});
    }
}
width_height()

 //单机排行榜nav
$(function(){
	if($('.rakingnav').size()>=1){
		var onleft_ = $('.rakingnav ul .on').offset().left
		var w_ =$(window).width()/2;
		if(w_<=onleft_){
			$(".rakingnav ul").scrollLeft((onleft_- w_));
		}
	}
// 24-11-1  新增
    $(".addtuijiang .tablis .lab").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".addtuijiang").find(".item > a").eq($(this).index()).show().siblings().hide();
        $(window).trigger('scroll');
    })
})
