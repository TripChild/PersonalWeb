$(function () {
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
   
});
var innerObj = getEById("inner");
var ulObj = innerObj.children[0];
var slideList = ulObj.children;
var rectangleObj = getEById("rectangle");
var spans = getEById("rectangle").children;
var innerWidth = inner.offsetWidth;
var number = 0;
for(var i=0;i<slideList.length;i++){
    var spanObj = document.createElement("span");
    rectangleObj.appendChild(spanObj);
	  spanObj.setAttribute("index",i);
	  spanObj.onmouseover = function(){
		for(var j=0;j<spans.length;j++){
			rectangleObj.children[j].removeAttribute("class");
		}
		this.className ="current";
		var number=this.getAttribute("index");
        animate(ulObj,-number*innerWidth);
	}
} 
rectangleObj.children[0].className="current";
ulObj.appendChild(ulObj.children[0].cloneNode(true));
var timeId = setInterval(slideShow,3000);
function slideShow() { 	  
   	if(number==slideList.length-1) {
   		number=0;
   		ulObj.style.left = 0 +"px";
   	}
  	number++;
 	 animate(ulObj,-number*innerWidth);
 	 if(number==slideList.length-1){
 		 rectangleObj.children[rectangleObj.children.length-1].removeAttribute("class");
 	   rectangleObj.children[0].className="current";    	
 	 }else {
 		for(var i=0;i<rectangleObj.children.length;i++){
        rectangleObj.children[i].removeAttribute("class");
 		}
 		rectangleObj.children[number].className="current";
 	}
 }
getEById("content").onmouseover = function(){
	clearInterval(timeId);
}
getEById("content").onmouseout = function(){
	timeId = setInterval(slideShow,3000);
}

