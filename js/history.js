$(document).ready(function(){
    //site_map header
  $('.menu').click(function(){
    $('.site_map,.logo,.lang,.menu').toggleClass('on');
    $('.map_navi ul li').addClass('on');
  });
// history tab
$('.btn a').click(function(){
    let tab_id = $(this).attr('data-tab');
  
    $('.btn a').removeClass('current');
    $('.desc>div').removeClass('current');
    $('.btn a').removeClass('on')
  
    $(this).addClass('current');
    $(this).addClass('on');
    $("#"+tab_id).addClass('current');
  });
//history scroll
$(window).scroll(function(){
    let TOP2 = $(window).scrollTop();
    console.log(TOP2);
    if(TOP2>100){
      $('.line').after().css({
        "height":"20px",
        "background-color":"#00abcd",
        "width":"px"
      });
    }
    if(TOP2>500){
      $('.line').after().css({
        "height":"420px",
        "background-color":"#00abcd",
        "width":"3px"
      });
    }
    if(TOP2>1100){
      $('.line').after().css({
        "height":"1000px",
        "background-color":"#00abcd",
        "width":"3px"
      });
    }
});
$(window).scroll(function(){
  let TOP3 = $(window).scrollTop();
  console.log(TOP3);
  if(TOP3>100){
    $('.line2').after().css({
      "height":"20px",
      "background-color":"#00abcd",
      "width":"px"
    });
  }
  if(TOP3>500){
    $('.line2').after().css({
      "height":"420px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP3>1100){
    $('.line2').after().css({
      "height":"1000px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP3>1600){
    $('.line2').after().css({
      "height":"1500px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP3>2500){
    $('.line2').after().css({
      "height":"2800px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
});
$(window).scroll(function(){
  let TOP4 = $(window).scrollTop();
  console.log(TOP4);
  if(TOP4>100){
    $('.line3').after().css({
      "height":"20px",
      "background-color":"#00abcd",
      "width":"px"
    });
  }
  if(TOP4>500){
    $('.line3').after().css({
      "height":"420px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP4>1100){
    $('.line3').after().css({
      "height":"1000px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP4>1600){
    $('.line3').after().css({
      "height":"1500px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
});
$(window).scroll(function(){
  let TOP5 = $(window).scrollTop();
  console.log(TOP5);
  if(TOP5>100){
    $('.line4').after().css({
      "height":"20px",
      "background-color":"#00abcd",
      "width":"px"
    });
  }
  if(TOP5>500){
    $('.line4').after().css({
      "height":"420px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP5>1100){
    $('.line4').after().css({
      "height":"1000px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
  if(TOP5>1700){
    $('.line4').after().css({
      "height":"2000px",
      "background-color":"#00abcd",
      "width":"3px"
    });
  }
});
});
  