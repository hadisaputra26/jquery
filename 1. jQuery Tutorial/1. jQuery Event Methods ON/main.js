$(document).ready(function(){
// Menambahkan lebih dari 1 even
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });

    $("#h11").on({
        mouseenter: function(){
            $(this).css("color", "red");
        },
        mouseleave: function(){
            $(this).css("color", "blue");
        }
    });

    $("#btn").on({
        click: function(){
            $("#h12").css("color", "green");
            $("#h12").css("background-color", "red");
        }
    });

});

