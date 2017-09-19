 'use strict';
$(function(){
     $('#mouseover').on({
      'mouseenter': function(){
         $('.hideShow').show(3000);
      },
      'mouseleave': function(){
      $('.hideShow').hide(3000);
  }
  }) 
    
    $('#mouseover1').on({
      'mouseenter': function(){
         $('.hideShow1').fadeIn("slow");
      },
      'mouseleave': function(){
      $('.hideShow1').fadeOut("slow");
  }
  }) 
    
    $('#mouseover2').on({
      'mouseenter': function(){
         $('.hideShow2').slideDown("slow");
      },
      'mouseleave': function(){
      $('.hideShow2').slideUp("slow");
  }
  }) 
    
    
})