$(document).ready(function () {

    // script for smooth scrolling //
    jQuery(document).ready(function ($) {
        $(".scroll ").click(function (event) {
            event.preventDefault();

            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
    });

    //SlideShhow
    var slideIndex1 = 0;
    var slideIndex2 = 0;
    showSlides1();
    showSlides2();

    function showSlides1() {
        var i;
        var slides1 = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";
        }
        slideIndex1++;
        if (slideIndex1 > slides1.length) {
            slideIndex1 = 1
        }
        slides1[slideIndex1 - 1].style.display = "block";
        setTimeout(showSlides1, 4000);
    }

    function showSlides2() {
        var i;
        var slides2 = document.getElementsByClassName("mySlides2");
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slideIndex2++;
        if (slideIndex2 > slides2.length) {
            slideIndex2 = 1
        }
        slides2[slideIndex2 - 1].style.display = "block";
        setTimeout(showSlides2, 4000);
    }

    //fixed navbar
    $('a[href^="#"]').click(function (event) {
        var id = $(this).attr("href");
        var target = $(id).offset().top;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });

    var offset = $('nav').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= offset) {
            $('nav').addClass('isFixed');
            $('html').addClass('whiteSpace');
        } else {
            $('nav').removeClass('isFixed');
            $('html').removeClass('whiteSpace');
        }
    });

    //wow.js
    new WOW().init();
});