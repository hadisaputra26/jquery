$(document).ready(function(){
    // $("button").click(function(){
    //     var div = $("div");
    //     div.animate({height: '300px', opacity: '0.4'}, "slow");
    //     div.animate({width: '300px', opacity: '0.8'}, "slow");
    //     div.animate({height: '100px', opacity: '0.4'}, "slow");
    //     div.animate({width: '100px', opacity: '0.8'}, "slow");
    // });

$("#btn1").click(function(){
	var kotak = $("#kotak");
	kotak.animate({left: "500px"}, "slow");
	kotak.animate({lineHeight: "100px"});
});

$("#btnKI").click(function(){
	var kotak = $("#kotak2");
	kotak.animate({top: "+=20px"});
});

});