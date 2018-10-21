jQuery(function($){


/* -------
smartRollover
------- */
  var imgCount = 0;
  var images_pre = new Array();
  $('img[src*="_off."],input[src*="_off."]').each (function(){
    images_pre[imgCount] = new Image();
    images_pre[imgCount].src = $(this).attr("src").replace("_off.", "_on.");
    $(this).hover(
      function () {
        $(this).attr("src", $(this).attr("src").replace("_off.", "_on."));
      },
      function () {
        $(this).attr("src", $(this).attr("src").replace("_on.", "_off."));
      }
    );
    imgCount ++;
  });


/* -------
smooth scroll
------- */
function smoothScroll(target) {
  var speed = 400;
	var position = target.offset().top;
	if($(window).width() > 768){
		// position = position - 100;
	}
	else{
		position = position - 50;
	}
	$('html,body').animate({scrollTop:position}, speed, 'swing');
}
$('a[href^="#"]').on('click',function() {
	var href= $(this).attr("href");
	var target = $(href == "#header" || href == "#"  || href == "" ? 'html' : href);
  smoothScroll(target);
	return false;
});

// jQuery
if($(window).width() > 768){
  var headerOffset = $(".header").offset();
  $(window).scroll(function () {
    if($(this).scrollTop() > headerOffset.top && $(".header").hasClass('scrl') == false) {
      $(".header").addClass('scrl');
    }
    else if($(this).scrollTop() <= headerOffset.top && $(".header").hasClass('scrl') == true){
      $(".header").removeClass('scrl');
      
    }
  });
}


/* -------
select color
------- */
if($('select').find('option:selected').hasClass('not-select')) {
  $('select').css({'color': '#666'});
}


$('select').on('change', function(){
  if($(this).find('option:selected').hasClass('not-select')) {
    $(this).css({'color': '#666'});
  } else {
    $(this).css({'color': '#333'});
  }
});

/* -------
menu
------- */
$(".menu").click(function(){
  $(".menu1").toggleClass("menuclick1");
  $(".menu2").toggleClass("menuclick2");
  $(".menu3").toggleClass("menuclick3");
  $(".nav-spbox").toggleClass('nav-spbox-on');
});

//画面リサイズ時の高さ取得
// h = $(window).height();
// $(".main").css("height", h + "px");

$(window).resize(function() {
  // SPメニュー対応
  if($(window).width() > 768){
    $(".menu1").addClass("menuclick1");
    $(".menu2").addClass("menuclick2");
    $(".menu3").addClass("menuclick3");
    $(".nav-spbox").addClass('nav-spbox-on');
  }
  else{
    $(".menu1").removeClass("menuclick1");
    $(".menu2").removeClass("menuclick2");
    $(".menu3").removeClass("menuclick3");
    $(".nav-spbox").removeClass('nav-spbox-on');
  }
});



//------------------------
// アニメーション
//------------------------
$(window).load(function(){
  var anime_time_init = 0;
  if ($('#home').get(0)) {
    anime_time_init = 2400;
  }
  
  setTimeout(function(){

    //------------------------
    // loading
    //------------------------
    $('.wrap').css(
      {
        'display':'block',
        'position':'relative;'
      }
    );
    setTimeout(function(){
      $('.loading-top,.loading-bottom').css({
        'display': 'none',
      });
    },800);

    //------------------------
    // main
    //------------------------
    $('.main-bg').addClass('main-bg-off');
    $('.main').addClass('main-on');
    $('.main-txt01').addClass('main-txt01-on');
    $('.main-txt02').addClass('main-txt02-on');
    //------------------------
    // header
    //------------------------
    $('.header-logo').addClass('header-logo-on');
    // 繰り返し処理
    $('.nav-menu li').each(function(i) {
      // 遅延させてフェードイン
      $(this).delay(500 * i).addClass('nav-menu-on');
    });
    $('.twitter').addClass('twitter-on');
    $('.instagram').addClass('instagram-on');
    $('.facebook').addClass('facebook-on');
    
  },anime_time_init);
  

  //------------------------
  // main content
  //------------------------
  var anime_time = 400;
  $('.aboutus-content').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.aboutus-tit01').stop().addClass('fade-in-up');
      },anime_time);
      setTimeout(function(){
        $('.aboutus-tit02').stop().addClass('fade-in-up');
      },anime_time+200);
      setTimeout(function(){
        $('.aboutus-img').stop().addClass('fade-in-left');
      },anime_time+300);
      setTimeout(function(){
        $('.aboutus-content').stop().addClass('fade-in-right');
      },anime_time+400);
    }
  });


  var anime_time02 = 100;
  $('.aboutus-support').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.aboutus-support-content').stop().addClass('fade-in-up');
      },anime_time02);
      setTimeout(function(){
        $('.list01').stop().addClass('fade-in-left-up');
      },anime_time02+400);
      setTimeout(function(){
        $('.list02').stop().addClass('fade-in-right-up');
      },anime_time02+500);
      setTimeout(function(){
        $('.list03').stop().addClass('fade-in-left-down');
      },anime_time02+600);
      setTimeout(function(){
        $('.list04').stop().addClass('fade-in-right-down');
      },anime_time02+700);
    }
  });


  $('.news').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.news-tit01').stop().addClass('fade-in-up');
      },anime_time02);
      setTimeout(function(){
        $('.news-tit02').stop().addClass('fade-in-up');
      },anime_time02+200);

      setTimeout(function(){
        $('.news-article-list01').stop().addClass('fade-in-up');
      },anime_time02+400);
      setTimeout(function(){
        $('.news-article-list02').stop().addClass('fade-in-up');
      },anime_time02+500);
      setTimeout(function(){
        $('.news-article-list03').stop().addClass('fade-in-up');
      },anime_time02+600);
      setTimeout(function(){
        $('.news-article-list04').stop().addClass('fade-in-up');
      },anime_time02+700);

      setTimeout(function(){
        $('.content').stop().addClass('fade-in-up');
      },anime_time02+400);
      
    }
  });


  $('.recruit-content').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.recruit-tit01').stop().addClass('fade-in-up');
      },anime_time02);
      setTimeout(function(){
        $('.recruit-tit02').stop().addClass('fade-in-up');
      },anime_time02+200);
      setTimeout(function(){
        $('.recruit-img').stop().addClass('fade-in-right');
      },anime_time02+400);
      setTimeout(function(){
        $('.recruit-content').stop().addClass('fade-in-left');
      },anime_time02+800);
    }
  });

  //------------------------
  // service-list
  //------------------------
   $('.service-list').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.consul').stop().addClass('fade-in-up-scale');
      },anime_time02);
      setTimeout(function(){
        $('.produce').stop().addClass('fade-in-up-scale');
      },anime_time02+300); 
      setTimeout(function(){
        $('.online').stop().addClass('fade-in-up-scale');
      },anime_time02+600);
      setTimeout(function(){
        $('.social').stop().addClass('fade-in-up-scale');
      },anime_time02+900);
    }
  });
  

  //------------------------
  // consultation
  //------------------------
  $('.consultation').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.consultation-tit').stop().addClass('fade-in-up');
      },anime_time02-200);
      setTimeout(function(){
        $('.consultation-txt').stop().addClass('fade-in-up');
      },anime_time02); 
      setTimeout(function(){
        $('.consultation .btn').stop().addClass('fade-in-up');
      },anime_time02+200);
    }
  });


  //------------------------
  // news single page
  //------------------------
  $('.post-main').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
     
        $('.post-main-txt01').stop().addClass('fade-in-up');
        $('.post-main-txt02').stop().addClass('fade-in-up');

      setTimeout(function(){
        $('.post-content').stop().addClass('fade-in-up');
      },anime_time02);
    }
  });

  //------------------------
  // company
  //------------------------
  $('.mission-descript-tit02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.mission-descript').stop().addClass('fade-in-up');
      },anime_time02+700);

      setTimeout(function(){
        $('.mission-img').stop().addClass('fade-in-left-up');
      },anime_time02+1400);
    }
  });


  $('.stuff-list').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.stuff .inner').stop().addClass('fade-in-up');
      },anime_time02)
    }
  });

  $('.company-detail').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.company .inner').stop().addClass('fade-in-up');
      },anime_time02);
    }
  });

  $('.access #map').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      setTimeout(function(){
        $('.access-tit01').stop().addClass('fade-in-up');
      },anime_time02);
      setTimeout(function(){
        $('.access-tit02').stop().addClass('fade-in-up');
      },anime_time02+100);
      setTimeout(function(){
        $('.access-txt01').stop().addClass('fade-in-up');
      },anime_time02+200);
      setTimeout(function(){
        $('#map').stop().addClass('fade-in-up');
      },anime_time02+400);
    }
  });
  

});

});
