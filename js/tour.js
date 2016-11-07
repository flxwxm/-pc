$(function(){

	var aDiv=$("#nature .nat-list div");

	$("#nature .nat-list").each(function(i,element){

		$(element).hover(function(){

			$(this).css("box-shadow","0 0 6px #FE7622");

			aDiv[i].style.display="block";
		
		},function(){

			$(this).css("box-shadow","0 0 6px #A8A8A8");

			aDiv[i].style.display="none";

		});

	});
})