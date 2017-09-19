'use strict';

$(document).ready( function() {
    
    $( "button" ).click( function() {
        
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
        
    console.log(data);
    
   $("body").append("<div id=dane-programisty>Imię: "+ data.imie+"</div>");    
    $("body").append("<div id=dane-programisty>Nazwisko: "+ data.nazwisko+"</div>"); 
    $("body").append("<div id=dane-programisty>Zawód: "+ data.zawod+"</div>");
     $("body").append("<div id=dane-programisty>Firma: "+ data.firma+"</div>");
} );
} );
});