$(function () {
   
    //首页的轮播
    if ($(".Min_swiper .swiper-container .swiper-slide").size() >= 1) {
        var Min_swiper = new Swiper('.Min_swiper .swiper-container', {
            lazy: true,
            speed: 200,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.Min_swiper .swiper-pagination',
                clickable: true,
            }
        });
    }
    //首页颜色标签
    $('.Color_label li').each(function () {
        $(this).attr('class',`cl_${Math.round(Math.random()*3)}`)
    })
    //导航头部
    if ($(".Min_nav .swiper-container .swiper-slide").size() >= 1) {
        var side = 5;
        var swiper_nav = new Swiper('.Min_nav .swiper-container', {
            slidesPerView: side,
        });
        $(".Min_nav .swiper-container .swiper-slide").each(function () {
            if ($(this).hasClass("on")) {
                var index_ = $(this).index();
                swiper_nav.slideTo(index_, false);//切换到第一个slide，速度为1秒;
            }
        })
    }
    //游戏评测
    if ($(".Min2 .swiper-container .swiper-slide").size() >= 1) {
        var Min2_swiper = new Swiper('.Min2 .swiper-container', {
            lazy: true,
            speed: 200,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.Min2 .swiper-pagination',
                clickable: true,
            },

        });
    }
    //新游测试
    if ($(".Min3 .swiper-container .swiper-slide").size() >= 1) {
        var Min3_swiper = new Swiper('.Min3 .swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            initialSlide: 1,
            loop: true,
            slidesPerView: "auto",
            observer: true,
            centeredSlides: true,
            autoplay: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 73,
                depth: 300,
                modifier: 1,
                slideShadows: true
            }
        });
    }

    //网游活动
    if ($(".Min4 .swiper-container .swiper-slide").size() >= 1) {
        var Min4_swiper = new Swiper('.Min4 .swiper-container', {
            slidesPerView: 3,
        });
    }
    //首页切换
    $('.tab_wrap .tabhd span').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.tab_wrap .tabbd .list_tj').hide().eq($(this).index()).show();
    })
    // 问答切换
    $('.tab_hd .item').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        $('.tab_bd ul').hide().eq($(this).index()).show();
    })
    //标签
    if ($(".swiper_nav_ .swiper-container .swiper-slide").size() >= 1) {
        var swiper_nav_ = new Swiper('.swiper_nav_ .swiper-container', {
            slidesPerView: 4,
        });
        $(".swiper_nav_ .swiper-container .swiper-slide").each(function () {
            if ($(this).hasClass("on")) {
                var index_ = $(this).index();
                swiper_nav_.slideTo(index_, false);//切换到第一个slide，速度为1秒;
            }
        })
    }
    //落地页截图
    if ($('#Gm-pic').size() >= 1) {
        var _test = $('#Gm-pic .swiper-slide').eq(0).find('img');
        var imgObj = new Image();
        imgObj.src = _test.attr("src");

        imgObj.onload = function () {
            var img_h = imgObj.height;
            var img_w = imgObj.width;
            if (img_h > 0) {
                if (img_h > img_w) {
                    new Swiper('#Gm-pic', {
                        //loop: true,
                        slidesPerView: 2,
                        autoHeight: true,
                        spaceBetween: 4,
                        // zoom : true,
                    })
                } else {
                    new Swiper('#Gm-pic', {
                        // loop: true,
                        autoHeight: true,
                    })
                }
            }
        }
    }
    //展开更多版本
    if($('.bblist a').length>4){$('.open_more').show()}
    $('.open_more').click(function(){
        if($(this).html()=='展开更多版本'){
            $(this).html('收起更多版本')
            $('.bblist').css('max-height','inherit')
        }else{
            $(this).html('展开更多版本')
            $('.bblist').css('max-height','35px')
        }
    })
     //单机首页
if ($('.swiper_Classic .swiper-slide').size()>=1) {
	var swiper_Classic = new Swiper('.swiper_Classic .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 6,
		loop: true,
		on: {
			slideChangeTransitionStart: function(){
				var box= this.$el;
				var index_=this.realIndex
				var leng= $(box).parents(".Min9").find(".item_box .item ").size();
				if(index_==leng-1){index_=0}else{index_=index_+1};
				$(box).parents(".Min9").find(".item_box .item ").eq(index_).addClass("on_box").siblings().removeClass("on_box");
			},
		},
	});
}
})
$(window).load(function(){
	//单机首页
if ($('.swiper_strategy .swiper-slide').size()>=1) {
	$(".swiper_strategy").each(function () {
	 var h=$(this).find(".swiper-slide").eq(0).find("img").height();
	 var w=$(this).find(".swiper-slide").eq(0).find("img").width();
	 var box_=$(this).find(".swiper-container");
	 if(h>w){
		 var swiper_strategy1 = new Swiper(box_, {
			 slidesPerView: 2.7,
			 spaceBetween: 10,
		 });
	 }else{
		 $(this).css("width","100%");
		 var swiper_strategy2 = new Swiper(box_, {
			 slidesPerView:2,
			 spaceBetween: 6,
		 });
	 }
	 var h2=$(this).find(".swiper-slide").eq(0).find("img").height();
	  $(this).find(".swiper-slide img").css("height",h2+"px");
	})
    }
});

