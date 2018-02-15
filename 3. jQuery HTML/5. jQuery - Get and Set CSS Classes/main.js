$(document).ready(function(){
    $("#btn1").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });

     $("#btn2").click(function(){
        $("h1, h2, p").toggleClass("blue");
        $("div").toggleClass("important");
    });
});