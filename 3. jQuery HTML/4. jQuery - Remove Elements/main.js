$(document).ready(function(){
    // Remove Element
    $("#btn1").click(function(){
        $("#div1").remove();
    });

    $("#btn2").click(function(){
        $("#p2").remove();
    });

    // Empty Element
      $("#btn3").click(function(){
        $("#div1").empty();
    });

    $("#btn4").click(function(){
        $("#p3").empty();
    });

});