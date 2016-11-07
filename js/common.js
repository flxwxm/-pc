$(function(){
//nav
(function(){	
    var len=$("#header li").length,
        aLi=$("#header a");
        

	for(var i=0;i<len;i++){

		 aLi[i].onclick=function(){

		 	for(var i=0;i<len;i++){

		 		aLi[i].className="";

		 	}

		 	this.className="active";
		 };
		
	}
})();

//banner
(function(){

	var aImage=$('#banner .img li'),
	 aTab=$('#banner .tab li'),
	 oBanner=$("#banner"),
	 iNum=0;

	 var timer=setInterval(function(){

	iNum++;

 	if(iNum==aImage.length){

 		iNum=0;
 	}

 	common();

},3000);
	 
	for(var i=0;i<aImage.length;i++){

		aTab[i].index=i;

		aTab[i].onclick=function(){

			clearInterval(timer);

			iNum=this.index;
		 	
			common();
		};

		aImage[i].onmouseover=function(){

			clearInterval(timer);

		};

		aImage[i].onmouseout=function(){

			timer=setInterval(function(){

			iNum++;

		 	if(iNum==aImage.length){

		 		iNum=0;
		 	}

		 	common();

		},3000);
		};		
	}

	

function common(){

	for(var i=0;i<aTab.length;i++){

		 		aTab[i].className="";

		 	}

		 	aTab[iNum].className="active";

		 	for(var j=0;j<aTab.length;j++){

		 		aImage[j].style.display="none";

		 	}

		 	$(aImage[iNum]).fadeIn(500);

}

})();

$(window).scroll(function(){

	if($(this).scrollTop()>300){

		$("#re-top").css("display","block");

	}else{

		$("#re-top").css("display","none");
	}
	
});

$("#re-top").mouseover(function(){

	$(this).css("background","#FF8D18");
	$(this).text("返回顶部");
	this.style.fontSize=12+"px";

});

$("#re-top").mouseout(function(){

	$(this).css("background","#8C8C8C");
	$(this).text("^");
	this.style.fontSize=30+"px";

});

$("#re-top").click(function(){

	$("body,html").stop().animate({scrollTop:0},"0.5s");

});

});