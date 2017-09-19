 'use strict';
$(function(){
    var slider = $("#slider");
    var slideShow = $(".slide-show");
    var slideCount = $(".slide-show").children().length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    slideShow.css("width",slideCount*100+"%");
/*bez nawiasów klamrowych{}*/
    
    slideShow.find(".single-slide").each(function(index) {
    $(this).css ( {"width":slideWidth+"%", "margin-left": index * slideWidth + "%"});
    });
    
$('.prev-slide').click(function(event){
    event.preventDefault(); slide(slideIndex - 1)
});
    
    $('.next-slide').click(
    function(){
        slide(slideIndex + 1)
    });
    
    function slide(newSlideIndex){
        debugger;
        if( slideIndex<0|| slideIndex>= slideCount);
        return;
    }
    
    
    
    console.log(slider);
    console.log(slideshow);
    console.log(slideCount);
    console.log(slideWidth);
    console.log(slideIndex);
    
});