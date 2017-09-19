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
})