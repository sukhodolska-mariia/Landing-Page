$(document).ready(function() {


    // Анимация меню
    $("#nav a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


    // Анимация h1 в header
    var i=-1;
    var textNew = "we build innovative companies";
    var textId = "#text-header";

    function printText() {
        i++;
        var textTitle = $(textId).text();
        textTitle = textTitle + textNew.charAt(i);
        $(textId).text(textTitle);
        if (i<textNew.length){
            setTimeout(function(){printText()}, 70);
        }
    };

    printText();

    // Анимация section-1
    $('.section-1').waypoint(function(direction) {
        $('.number-section-1 h2').animate({opacity:1}, 1000);
        $('.section-1 .text').addClass('animated fadeInRight');
        $('.section-1 img').addClass('animated fadeInLeft');
    }, {
        offset: '45%'
    });

    // Анимация section-2
    $('.section-2').waypoint(function(direction) {
        $('.number-section-2 h2').animate({opacity:1}, 1000);
        $('.logos').addClass('animated fadeIn');
    }, {
        offset: '45%'
    });

    // Анимация section-3
    $('.section-3').waypoint(function(direction) {
        $('.number-section-3 h2').animate({opacity:1}, 1000);
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
        $('.number-section-4 h2').animate({opacity:1}, 1000);
        $('.text-section-4').addClass('animated fadeInRight');
    }, {
        offset: '45%'
    });

})

