$(document).ready(function(){

    // Methode Chaining
    // $("button").click(function(){
    //     $("#p1").css("color", "red")
    //         .slideUp(2000)
    //         .slideDown(2000)
    //         .animate({fontSize: "50px"}, "slow", function(){
    //             $(this).css("backgroundColor", "lightblue");
    //         })
    //         .animate({fontSize: "20px"}, "slow", function(){
    //             $(this).css("backgroundColor", "white"),
    //             $(this).css("textAlign", "left");
    //         })
    //         ;
    // });

    $("button").click(function(){
       $("#p1").slideUp(3000)
       .slideDown(3000, function(){
        $(this).css("color", 'blue');
       })
       ;
    });
});