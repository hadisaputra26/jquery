$(document).ready(function(){
   // Parent()
   // $("span").parent().css({"color": "red", "border": "2px solid red"});

   // Parents()
   //$("span").parents().css({"color": "red", "border": "2px solid red"});
   //$("span").parents("ul").css({"color": "red", "border": "2px solid red"});

   // ParentsUntil()
   $("#s1").parentsUntil("div").css({"color": "red", "border": "2px solid red"});

});