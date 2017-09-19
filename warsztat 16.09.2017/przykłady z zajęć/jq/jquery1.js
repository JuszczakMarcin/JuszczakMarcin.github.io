 'use strict';
//$(function(){
//   var wys = $(".jeden").text();
//    console.log(wys);
//});
//
//$(function(){
//    var zamiana = $(".dwa").text("zamiana");
//});
//    
//$(function(){
//    var grubo = $(".trzy").html("Hello <strong>world</strong>!");
//});
//
//$(function(){
//    $("p.trzy").addClass("wazne");
//});
//
//$(function(){
//    $("p.for").addClass("kolor");
//})
//
//$(function(){
//    $("div").find("p.green").css({"color":"green"})
//});
//$(function(){
//    $("div").find("p.blue").css({"color":"blue"})
//});

//$('p').each(function(index){
// $(this).text("Paragraf: "+ (index+1);})
                         
$(function(){
$('p').each(function(index){
    $(this).text("Paragraf: "+ (index+1));
});
})