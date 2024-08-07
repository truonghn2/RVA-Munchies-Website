$(document).ready(function(){

    /*Hide and show toggle effect for cobra cabana description on home page*/
    $(".hidecobra").click(function(){
      $(".cobradescript").toggle();
    });


     /*Hide and show toggle effect for fighting fish description on home page*/
     $(".hideff").click(function(){
      $(".fightingdescript").toggle();
    });

    /*Hide and show toggle effect for can can description on home page*/
    $(".hidecancan").click(function(){
      $(".cancandescript").toggle();
    });

     /*Hide and show toggle effect for edos squid description on home page*/
     $(".hide-es").click(function(){
      $(".edosdescript").toggle();
    });

    
    //fade effect of images on home page
    $(".fadebutton").click(function(){
      $(".cobra").fadeToggle("slow");
      $(".fighting").fadeToggle("slow");
      $(".edos").fadeToggle("slow");
      $(".cancan").fadeToggle("slow");
    });

    //animate effect on logo on home page
      $(".logo").click(function(){
        $(".logo").animate({
          width: '500px', 
          height: '200px', 
        });
        $(".logo").animate({
          width: '350px', 
          height: '150px', 
        });
      });

    //animate effect on profile picture on about us page
      $(".card").click(function(){
        $(".card-image").animate({
          width: '500px', 
          height: '200px', 
        });
        $(".card-image").animate({
          width: '350px', 
          height: '150px', 
        });
      });

    //slide effect on description on about us page
      $(".flip").click(function(){
        $(".panel").slideToggle("slow");
      });

    //fade effect of top image on cobra cabana page when you click on the "Cobra Cabana" header
      $(".h1cc").click(function(){
        $(".cc2").fadeToggle("slow");
      });

    //fade effect of bottom image on cobra cabana page when you click on the "The side of Cobra Cabana" figcaption 
      $("figcaption").click(function(){
        $(".cc1").fadeToggle("slow");
      });
    
  });