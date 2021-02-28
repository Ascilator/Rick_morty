jQuery(function () {


    function card_paralax() {
        $('.card_item>.img').on('mousemove', function (e) {
            var target = this.getBoundingClientRect();
            var x = e.clientX - target.left;
            var y = e.clientY - target.top;
            console.log(x, y);
            $(this).css({
                'transform': `rotateX(${y / 2}deg)`
            })
        });
    }

    //card_paralax();










    var slider = $('.card_cont');
    var sliderIsLive = false;





    if ($('html').width() < 650) {

        if (sliderIsLive === false) {
            slider.slick({
                arrows: false,
                dots: false,
                infinite: false,
                slidesToScroll: 1,
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                waitForAnimate: false,
                speed: 300,
                easing: 'ease',

            });
            sliderIsLive = true;
        }

    } else {

        if (sliderIsLive === true) {
            slider.slick('unslick');
            sliderIsLive = false;
        }
    }
    $(window).resize(function () {
        if ($('html').width() < 650) {

            if (sliderIsLive === false) {
                slider.slick({
                    arrows: false,
                    dots: false,
                    infinite: false,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    centerMode: true,
                    waitForAnimate: false,
                    variableWidth: true,
                    speed: 300,
                    easing: 'ease',
                });
                sliderIsLive = true;
            }
        } else {

            if (sliderIsLive === true) {
                slider.slick('unslick');
                sliderIsLive = false;
            }
        }

    });

});