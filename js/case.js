/**
 * Created by SunShine on 2018/12/17.
 */
 $(function(){
     $("nav ul li").children().eq(0).css("color","#d63c5d");
     $("nav ul").children("li").on("click",function(){
         var index = $(this).index();
         $(this).siblings("li").children().css("color"," #fff");
         $(this).children().eq(0).css("color","#d63c5d");
         $("#main-content").children("ul").eq(index).addClass("current").siblings().removeClass("current");
         $("#main-content>h2").text($(this).children().eq(0).text());
     });
 })

