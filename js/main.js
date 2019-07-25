//JavaScript

window.addEventListener('load', () => {
    const preload = document.querySelector('.loader');
    preload.classList.add('load-finished');
});

$ = jQuery.noConflict();

jQuery(function ($) {
    $(".scroll-top").hide();

    //On Scroll Function

    $(window).on("scroll", function () {
        var winScroll = $(this).scrollTop();

        if (winScroll > 100) {
            $("nav")
                .animate("slow")
                .addClass("nav-scroll");
        } else {
            $("nav").removeClass("nav-scroll");
        }

        //scroll top indicator

        if (winScroll > 630) {
            $(".scroll-top").fadeIn("slow");
        } else {
            $(".scroll-top").fadeOut("slow");
        }
    });
});

$(document).ready(function () {
    //Animate Click Scroll

    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {
        e.preventDefault();

        $("body,html").animate({
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });

    //mix it up

    var containerEl = document.querySelector('.portfolio');

    var mixer = mixitup(containerEl);

    //on click active


    $(document).on('click', '.port-btn', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    //progress
    $(".progress-bar").each(function () {
        $(this).append(function () {
            $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                },
                3000
            );
        });
    });

    $(".count").each(function () {
        $(this).append(function () {
            $(this)
                .prop("Counter", 0)
                .animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });
    });
    //Home Slider

    $(".home").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        mouseDrag: false,
        responsive: {
            1280: {
                items: 1
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    //Testimonial Slider

    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            1280: {
                items: 1
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    // Counter Up 

    $('.counter').counterUp();


});

//TweenMax Animation

TweenMax.from(".page-2 .home-text h1", 0.5, {
    opacity: 0,
    x: 150,
    ease: Expo.easeInOut,
    delay: 6
});

//Wow JS

var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

var line = new ProgressBar.Line("#progress");