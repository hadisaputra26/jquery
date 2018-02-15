$(document).ready(function(){
    $("#btn1").click(function(){
        var p1 = $("#test").text();
        alert("Text: " + $("#test").text());
        $("#p1").text("Text : "+p1);
    });

    $("#btn2").click(function(){
        var p1 = $("#test").html();
        alert("HTML: " + $("#test").html());
        $("#p1").html("HTML : "+p1);
    });

    $("#btn3").click(function(){
        alert("Value: " + $("#input").val());
        var p2 = $("#input").val();
        $("#p2").text("Nama Kamu Adalah : "+p2);
        console.log(typeof(p2));

    });
});