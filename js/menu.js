      $(function(){
          var navHeight = document.documentElement.clientHeight;
          $(".navigation").css("height",navHeight);
          var $menuList =  $("#menuList>li"); 
          $menuList.on("mouseover",function(){
             $(this).children().eq(0).addClass("current");        
          } );
           $menuList.on("mouseout",function(){
             $(this).children().eq(0).removeClass("current");        
          } );
           $(".navbar").on("click",function(){
              
               $("#navigation").fadeOut(1000);
                $(".main-button").fadeIn(1000);
           });
          
           $(".main-button").on("click",function(){
             $("#navigation").fadeIn(1000);
             $(this).fadeOut(1000);
         
           });
      })
 
     