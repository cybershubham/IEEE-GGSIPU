//  SCROLLNAV
// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 123
    }, 400);
    return false;
  });
  //Scroll to Top
  $('.scrollTop a').scrollTop();
}
scrollNav();

//Dropdown transition
        $(document).ready(function(){
          $(".dropdown").hover(            
              function() {
                  $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
                  $(this).toggleClass('open');        
              },
              function() {
                  $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
                  $(this).toggleClass('open');       
              }
          );
      });


//PreLoadeMe Preloader
      $(window).load(function(){
          $("#loader").fadeOut("slow");
      });

//FB Page plugin
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));