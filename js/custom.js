$(document).ready(function(){
    //gototop 스크롤시 페이드인
  $('.gototop').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('.gototop').fadeIn();
    } else {
      $('.gototop').fadeOut();
    }
  });
  //gototop click
  $('.gototop').click(function(){
    $('body,html').animate({
      scrollTop:0
    },800);
    return false;
  })
  //site_map header
  $('.menu').click(function(){
    $('.site_map,.logo,.lang,.menu').toggleClass('on');
    $('.map_navi ul li').addClass('on');
  });
  //main slide
  $(".slider2").bxSlider({
    auto:true,
    speed:500,
    mode:'horizontal',
    pager:false,
    reloadSlider:768
  }).resize();
  $(window).resize(function(){document.location.reload();
  });
  // product slide
  $(".slider").bxSlider({
    auto:true,
    speed:500,
    mode:'fade',
    pager:true,
    pause: 3000,
    Infinity:true
  });
});