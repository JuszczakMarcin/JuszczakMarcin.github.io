 'use strict';
$(function(){
    $('p.klik').on({
        'click': function(){
            $(".klik").css({"color": "red", "background":"black"});
            alert("poszedł");
        }
    })
})