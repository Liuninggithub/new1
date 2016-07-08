$(function($) {
	function scrol(){
		var fTop = $("html").scrollTop();
		var oTop = $("body").scrollTop();
		if(fTop >= 40 || oTop >= 40){
			$(".header").css("background-color","#212121");
		}else{
			$(".header").css("background-color","transparent");
		}
	}
	scrol();
	$(window).scroll(function() {
		scrol();
	})

})