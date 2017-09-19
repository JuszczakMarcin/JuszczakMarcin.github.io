'use strict';

$(document).ready( function() {
    
    $( "button" ).click( function() {
        
    $.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function (data) {
        
    console.log(data);
    
   $("body").append("<div id=dane-programisty>Imię: "+ data.imie+"</div>");    
    $("body").append("<div id=dane-programisty>Nazwisko: "+ data.nazwisko+"</div>"); 
    $("body").append("<div id=dane-programisty>Zawód: "+ data.zawod+"</div>");
     $("body").append("<div id=dane-programisty>Firma: "+ data.firma+"</div>");
} );
} );
});