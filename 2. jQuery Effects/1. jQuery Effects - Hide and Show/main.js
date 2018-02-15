$(document).ready(function(){
    $(".ex .hide").click(function(){
        //$(this).parents(".ex").hide("slow");
        $(this).parent(".ex").hide("slow");
    });
    $("#h1").click(function(){
        $(".1x").show("slow");
    });
     $("#h2").click(function(){
        $(".2x").show("slow");
    });
    
    $("p").click(function(){
        $(this).hide();
    });
    
});