$(function (){
  $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
         $("html, body").animate({
          scrollTop: elementOffset  
        },500);
    });
});
 $(document).ready(function(){
          $("#back-top").hide();
          $(function (){
              $(window).scroll(function (){
                  if ($(this).scrollTop() > 100){
                      $('#back-top').fadeIn();
                  } else{
                      $('#back-top').fadeOut();
                  }
              });

             $('#back-top a').click(function (){
                 $('body,html').animate({
                     scrollTop:0
                  }, 400);
                  return false;
              });
          });
      });
 function sound(){
        var audio= new Audio();
        audio.src="Welcome.mp3";
        audio.play(); 
}
function sign_in(){
     document.getElementById('log').innerHTML = 'Alisher 128';
     window.location.href="index.html";
}

 