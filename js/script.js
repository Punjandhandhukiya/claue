
function plus(s){
    var txt=document.getElementById('box');
    if (s == '+') {
        txt.value++;
    }

    if (s == '-') {
        if (txt.value > 1) {
            
            txt.value--;
        }
    }
    
  }

  $(document).ready(function(){

    $('#main').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('#blog').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    
    $('#insta').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
    
    $('#product').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

   

        $('.bottom_top').click(function(){
            $('html, body').animate({
              scrollTop: '0px'
            },500);
            return false;
        })
      
        $('.bottom_top').hide();
        $(window).scroll(function(){
            if ($(window).scrollTop() > 100) {
            $('.bottom_top').fadeIn();
            }
            else{
            $('.bottom_top').fadeOut();
            }
        })

         var $grid = $('.grid').isotope({
        // options
      });
      // filter items on button click
      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });


  });


  setTimeout(() => {
    $('.preloder').fadeOut();
  }, 3000);

  