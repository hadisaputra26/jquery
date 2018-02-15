$(document).ready(function(){

    $("#btn1").click(function(){
        $("#p1").prepend("Hadi Saputra (prepend) ");
    });

    $("#btn2").click(function(){
        $("#p1").append("Hadi Saputra (append)");
    });

    // Menambahkan Elemen Baru Menggunakan JQuery
    // Cara 1 (membingungkan)
    $("#btn3").click(function(){
        var baru = $("<p></p>").text("ini Element baru");
        $("body").append(baru);
    });
    // Cara 2
    $("#btn4").click(function(){
        $("body").append("<p> baris baru </p>");
    });

    // Menambahkan After dan Before
    $("#btn5").click(function(){
        $("#p2").after("<p>Element baru menggunakan After</p>");
    });
    $("#btn6").click(function(){
        $("#p2").before("<p>Element baru menggunakan before</p>");
    });

    // Latihan Percobaan
    $("#btn7").click(function(){
        var satu = $("<b></b>").text("Selamat ");
        var dua = $("<i></i>").text("Datang ");
        var tiga = $("<b></b>").text("Hadi ");
        var empat = $("<i></i>").text("Saputra");
        $("#p1").before(satu, dua, tiga, empat);
    });

});