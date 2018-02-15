$(document).ready(function(){
// Latihan 1
    // $("#btn1").click(function(){
    //     $("#test1").text("Hello world!");
    // });
    // $("#btn2").click(function(){
    //     $("#test2").html("<h1>Hello world!</h1>");
    // });
    // $("#btn3").click(function(){
    //     $("#test3").val("Dolly Duck");
    // });

// Latihan 2
// Penggunaak Callback (masih Belum terlalu mengerti)
    // $("#btn11").click(function(){
    //     $("#p1").text(function(i, textAsli){
    //         return "Old text: " + textAsli + " New text: Hello world!"; 
    //     });
    // });
    
    // $("#btn22").click(function(){
    //     $("#p2").html(function(i, origText){
    //         return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    //     });
    // });

// Latihan 3
// Penggunaan Untuk mengubah attribut
    // $("button").click(function(){
    //     $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    //     var x = $("#w3s").attr("href");
    //     alert(x);
    // });

// Latihan 4
// Penggunaan untuk mengubah lebih dari satu atribut
    // $("button").click(function(){
    //     $("#w3s").attr({
    //         "href" : "https://www.w3schools.com/jquery/",
    //         "title" : "W3Schools jQuery Tutorial"
    //     });
    // });

// Contoh Latihan
    $("#btn1").click(function(){
        // BIASA
        $("#p1").text("Nama Saya Adalah Hadi Saputra");

//         // CALLBACK
//         var nama = "Hadi Saputra";
//         $("#p1").text(function(i, textAsli){
//             return textAsli+" "+nama;
//         });
    });
});