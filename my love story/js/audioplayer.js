function audioplayer(){
	var currsong = 0;
	$("#audioplayer")[0].src = $("#playlist li a")[0];
	$("#audioplayer")[0].play();
	$("#playlist li a").click(function(e){
		e.preventDefault();
		$("#audioplayer")[0].src = this;
		$("#audioplayer")[0].play();
		$("#playlist li").removeClass("currentsong");
		currentsong = $(this).parent().index();
		$(this).parent().addClass("currentsong");
	});
	$("#audioplayer")[0].addEventListener("ended",function(){
		currsong++;
		if(currsong == $("#playlist li a").length)
			currsong = 0;
		$("#playlist li").removeClass("currentsong");
		$("#playlist li:eq("+currsong+")").addClass("currentsong");
		$("#audioplayer")[0].src = $("#playlist li a")[currsong].href;
		$("#audioplayer")[0].play();
	});

}