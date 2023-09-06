$(document).ready(function() {

  /* TOP btn */
 
    $(window).scroll(function() {
      var curpos=$(window).scrollTop()+20;   
      $(".quick_in").stop().animate({top:curpos});

      });

    $(".topmove").click(function() {
      $("html,body").animate({scrollTop:"0"});    
    })

    $(".quick_menu li:nth-child(1)").hover(function(){
      $(".topmoveImg").addClass("hover");
    },function() {
      $(".topmoveImg").removeClass("hover");
    }
    );


   


   /* main visual */
   let $simg=$(".mainImg ul");
   let $simgli=$(".mainImg ul li");
   let $snext=$(".side_btn .rbtn_main");
   let $spre=$(".side_btn .lbtn_main");
   let simg_w=$simgli.width();  
   let simg_n=$simgli.length;  
   let soldidx=0; 
   let sindex=0; 
 

   function slideImg(sindex){
     targetX=-(sindex*simg_w); 
 
     $simg.animate({left:targetX},600);  
     soldidx=sindex;
 
   };
 
   function slideAuto(){
 
     sindex++;	
     if(sindex==simg_n){ 
       sindex=0;
     }
     slideImg(sindex);
   };
 
   auto=setInterval(slideAuto,4000);
 
   
   $snext.click(function(){
     
     clearInterval(auto); 
     $(".play").hide();
     $(".stop").show();
     sindex++;	
     if(sindex>simg_n-1){ 
       sindex=0;      
     }
     slideImg(sindex);
     auto=setInterval(slideAuto,4000);
 
   });
 
   $spre.click(function(){
 
     clearInterval(auto); 
     $(".play").hide();
     $(".stop").show();
     sindex--;
     if(sindex<0){  
       sindex=simg_n-1; 
     } 	
     slideImg(sindex);
     auto=setInterval(slideAuto,4000);
 
   });
 




  /* event */

  $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result1 = $(this).attr("data-alt");
    $("#main_con>div").removeClass("active");
    $("#" + result1).addClass("active"); 


    if (result1 == "tab2") {
      $(".left_btn").css({"opacity":"0"});
      $(".right_btn").css({"opacity":"0"});
    }
    else {
      $(".left_btn").css({"opacity":"1"});
      $(".right_btn").css({"opacity":"1"});
    }
  });

  
  $(".tab_event li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result2 = $(this).attr("data-alt");
      if(result2=="tab2_event") {
        $(".tab_now_event").css({"opacity":"0"});
      } else {
        $(".tab_now_event").css({"opacity":"1"});
      };
    $("#main_con_event>div").removeClass("active");
    $("#" + result2).addClass("active"); 
    
  });



  $(".tab_now_event li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result3 = $(this).attr("data-alt");
    $(".event_now>div").removeClass("active");
    $("#" + result3).addClass("active"); 
  
  });




/* main menu */

  $(".first").hover(function() {
    $(this).find(".sub").stop().slideDown();
  },function() {
    $(this).find(".sub").stop().slideUp();
  });
  $(".second").hover(function() {
    $(this).find(".sub").stop().slideDown();
  },function() {
    $(this).find(".sub").stop().slideUp();
  });



  /* play icon */
  $(".fa").hover(function() {
    $(this).find(".hoverText").stop().css({"opacity":"1"});
  },function() {
    $(".hoverText").stop().css({"opacity":"0"});
  });
  



  /* game */
  let goldidxA=0; 
  let gidxA=0;   

  function galleryImgA(gidxA){  

    if(goldidxA!=gidxA){ 

      $(".online_game>div").eq(goldidxA).stop().fadeOut();
      $(".online_game>div").eq(gidxA).stop().fadeIn();

    };
    goldidxA=gidxA;

  };

    $(".left_btn").click(function(){

      gidxA--;
      if(gidxA<0){  
        gidxA=0; 
      }
      galleryImgA(gidxA);
  
    });
  
  
    $(".right_btn").click(function(){
      
      gidxA++;
      if(gidxA>1){  
        gidxA=1; 
      }
      galleryImgA(gidxA);
  
    });




    /* FAQ - game */
    let goldidxB=0; 
    let gidxB=0;   
  
    function galleryImgB(gidxB){  
  
      if(goldidxB!=gidxB){ 
  	
        $(".gamelargeImg li").eq(goldidxB).stop().fadeOut(300);  
        $(".gamelargeImg li").eq(gidxB).stop().fadeIn(300); 
   
      };
      goldidxB=gidxB;
  
    };
  
    $(".game_left_btn").click(function(){
  
      gidxB--;
      if(gidxB<0){  
        gidxB=2; 
      }
      galleryImgB(gidxB);
  
    });

    $(".game_right_btn").click(function(){
      
      gidxB++;
      if(gidxB>2){  
        gidxB=0; 
      }
      galleryImgB(gidxB);
  
    });




    /* cash */
    $(".inputBox li").click(function() {
      $(".inputBox>li").removeClass("active");
      newmoney=$(this).text();
      $(this).addClass("active");
      chargeClick();
    });

      // newmoney=$(".cashText").val();
      

    
    $(".charge").click(function chargeClick() {
      if(newmoney=="") {
        alert("금액을 충전해주세요");
      } else {
        alert(newmoney+"원이 충전되었습니다!");
      } 
    });

   
    

    
    

    /*FAQ - 1-> 2 ->3 */
    $(".gamelargeImg img").click(function() {
 
      $(".FAQmainText01").find(".right_text_first01").removeClass("active")
      $(".FAQmainText01").find(".border_left01").addClass("active");
      $(".FAQmainText02").find(".right_text_first02").addClass("active")
      // $(this).siblings(".accordion_title").removeClass("active");
      });

    $(".submit").click(function() {
      $(".FAQmainText02").find(".border_left02").addClass("active")
      $(".FAQmainText02").find(".right_text_first02").removeClass("active");
      $(".FAQmainText03").find(".right_text_first03").addClass("active")
      
    })
    


    
    /* FAQ - accordion */
    $(".accordion_title").click(function() {

      $(this).siblings(".accordion_title").removeClass("active");
      $(this).toggleClass("active");      /*  */
      $(this).siblings(".content").stop().slideUp();
      $(this).next().stop().slideToggle();
  
    });



      /* faq - game */
    $(".gameselectSlide div img").click(function() {

      $(".left_ani .first").removeClass("active");
      $(".left_ani .second").addClass("active");
    });
    




    /* notice */
    $("#type-select").on("click", function(){
      let noticeResult = $(this).val();
      // console.log(noticeResult);
      $(".notice_bottomTotal>li").stop().fadeOut('fast');
      $("#" + noticeResult).stop().fadeIn('fast');


    });



  



    // $('.gameSlideImg').slick({
    //   infinite: true,
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    //   speed: 300,
    //   dots: true,
    //   autoplay: true,     
    //   autoplaySpeed: 1000
    // });


    



    
    /* footer */
    $(".s1").click(function() {
      $(".m1").stop().slideToggle();

    });

    
  


    /* login */
    let right=true;
    $(".login_container input[name=save]").click(function() {
      
      if(right) {
        $("em").css({"background-position":"right"});
        $(".id").css({"color":"#0077ff"});
        right=false;
      } else {
        $("em").css({"background-position":"left"});
        $(".id").css({"color":"#aaa"});
        right=true;
      }
     
    });


});