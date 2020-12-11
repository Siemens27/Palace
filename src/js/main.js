$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
            dots:true,
            dotsEach: true,
            loop:true,
            items: 3,
            autoHeight: true,
            margin: 30,
        }
    );
// Go to the next item
    $('.customNext').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $(window).scroll(function () {
        if($(this).scrollTop() > 700) {
            $('.up-arrow').fadeIn();
        }else {
            $('.up-arrow').fadeOut();
        }
    })

    $('.information__button').on('click', function (e) {
        e.preventDefault()
        $('.overlay, .popup, .send').fadeIn('slow')
    });
    $('.close').on('click', function () {
        $('.overlay, .popup, .send, .thanks').fadeOut('slow')
    });
    $('.send-form__button').on('click',function (e) {
        e.preventDefault()
        $('.thanks').fadeIn('slow')
        $('.send').fadeOut();
    });


});