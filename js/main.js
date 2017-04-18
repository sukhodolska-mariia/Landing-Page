$(document).ready(function() {


    // Анимация меню
    $("li:nth-child(1) a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("li:nth-child(2) a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("li:nth-child(3) a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("li:nth-child(4) a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // Анимация h1 в header
    $(function () {
        $('header .tlt').css('opacity', 1);
        $('header .tlt').textillate();
    });

    // Анимация section-1
    $('.section-1').waypoint(function(direction) {
        $('.number-section-1 .tlt').css('opacity', 1);
        $('.number-section-1 .tlt').textillate();
        $('.section-1 .text').addClass('animated fadeInRight');
        $('.section-1 img').addClass('animated fadeInLeft');
    }, {
        offset: '45%'
    });

    // Анимация section-2
    $('.section-2').waypoint(function(direction) {
        $('.number-section-2 .tlt').css('opacity', 1);
        $('.number-section-2 .tlt').textillate();
        $('.logos').css('animation', 'opacity-menu 2s linear forwards');
    }, {
        offset: '45%'
    });

    // Анимация section-3
    $('.section-3').waypoint(function(direction) {
        $('.number-section-3 .tlt').css('opacity', 1);
        $('.number-section-3 .tlt').textillate();
        $('.text-george').addClass('animated fadeInLeft');
        $('img.george').addClass('animated fadeInRight');
        }, {
        offset: '45%'
    });

    $('img.kenneth').waypoint(function(direction) {
        $('.text-kenneth').addClass('animated fadeInRight');
        $('img.kenneth').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('img.richard').waypoint(function(direction) {
        $('.text-richard').addClass('animated fadeInLeft');
        $('img.richard').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    $('img.judith').waypoint(function(direction) {
        $('.text-judith').addClass('animated fadeInRight');
        $('img.judith').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('img.donald').waypoint(function(direction) {
        $('.text-donald').addClass('animated fadeInLeft');
        $('img.donald').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    // Анимация section-4
    $('.section-4').waypoint(function(direction) {
        $('.number-section-4 .tlt').css('opacity', 1);
        $('.number-section-4 .tlt').textillate();
        $('.text-section-4').addClass('animated fadeInRight');
    }, {
        offset: '45%'
    });

})

