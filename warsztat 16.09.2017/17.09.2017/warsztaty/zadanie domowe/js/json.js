'use strict';

$(document).ready( function() {
    
    $( "button" ).click( function() {
        
    $.getJSON('http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (data) {
        
    console.log(data);
    
   $("body").append("<div id=dane-programisty>"+ 
    "<p>Imię: " +   data.imie+"</p>"+ 
    "<p>Nazwisko: "+ data.nazwisko+"</p>"+ 
    "<p>Zawód: "+ data.zawod+"</p>" +
    "<p>Firma: "+ data.firma+ "</p>"+"</div>");
} );
} );
});