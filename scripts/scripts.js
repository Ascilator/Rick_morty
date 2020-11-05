jQuery(function () {

    $(window).resize(function () {
        if ($('html').width() < 786) {
            $('.slider_body').slick({
                infinite: false,
                arrows: false,
                dots: false,

                rows: 0,
                speed: 300,
                easing: 'ease',
                waitForAnimate: false,
                touchMove: true,
                touchTreshhold: 50,
                slidesToShow: 3,
                slideToScroll: 1,
                centerMode: true,
                variableWidth: true,
                //autoplay: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            autoplay: true,
                            autoplaySpeed: 2000,
                        }
                    },
                ]
            });
        } else {
            $('.slider_body').slick('unslick');
        }

    });
    if ($('html').width() < 786) {
        $('.slider_body').slick({
            infinite: false,
            arrows: false,
            dots: false,

            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 3,
            slideToScroll: 1,
            centerMode: true,
            variableWidth: true,
            //autoplay: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
            ]
        });
    }


    /*
    $('.card_item').click(function () {

        var start_angle = -Math.PI / 2;
        var step = Math.PI / 180;

        var elem = $(this);

        var radius = $('.middle_part').height() / 2;
        var x0 = +(elem.css('left').slice(0, -2));
        var y0 = +elem.css('top').slice(0, -2);


        var deltaX = $(this).width() / 2;
        var deltaY = $(this).height() / 2;

        var x1 = +$('.choose').css('left').slice(0, -2);
        var y1 = +$('.choose').css('top').slice(0, -2);
        console.log(x0);


        //$(this).css('left', 235 + radius * Math.sin(f));

        setInterval(function () {
            start_angle += step;

            elem.css('left', deltaX + radius * (1 + Math.cos(start_angle)));

            elem.css('top', radius * (1 + Math.sin(start_angle)) - deltaY);

        }, 40);
    });
    */


});


