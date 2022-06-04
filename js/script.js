<<<<<<< HEAD
$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
=======

>>>>>>> 8ef17d5a7dfe2b72ae6ece7cff5e7ecad1b1cb67
