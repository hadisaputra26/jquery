$(document).ready(function(){
     $("#btn2").click(function(){
        $("#div1").width(300).height(100);
     	var txt = "";
        txt += "Widht = "+$("#div1").width()+" px<br>";
        txt += "Height = "+$("#div1").height()+" px";
        $("#div1").html(txt);
    });

    $("#btn1").click(function(){
        $("#div1").width(400).height(200);
    	var txt = "";
        txt += "Widht = "+$("#div1").width()+" px<br>";
        txt += "Height = "+$("#div1").height()+" px";
        $("#div1").html(txt);
    });
});