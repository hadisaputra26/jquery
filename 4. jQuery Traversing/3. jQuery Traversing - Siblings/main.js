$(document).ready(function(){
	// Pengguanan Siblings()
    // $("h2").siblings().css({"color": "red", "border": "2px solid red"});

    // Pengggunaan Sibling() lebih dari satu
    // $("h2").siblings("p, h6, h5").css({"color": "red", "border": "2px solid red"});

    //Penggunaan Siblings() menggunakan ID
    $("#h3").siblings("#h1, #h2, #h6").css({"color": "red", "border": "2px solid red"});

    // Penggunaan Next()
    // $("h2").next().css({"color": "red", "border": "2px solid red"});

    // Penggunaan nextAll()
    // $("h2").nextAll().css({"color": "red", "border": "2px solid red"});

    // Penggunaan NextUntil()
    // $("h2").nextUntil("h6").css({"color": "red", "border": "2px solid red"});

     // $("h2").prev().css({"color": "red", "border": "2px solid red"});
});