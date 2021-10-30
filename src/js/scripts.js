$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    if (window.innerWidth > 1024) {
        var scrollTop = 0;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //adjust menu background
            if (scroll > 80) {
                if (scroll > scrollTop) {
                    $('.smart-scroll').addClass('scrolling').removeClass('up');
                } else {
                    $('.smart-scroll').addClass('up');
                }
            } else {
                // remove if scroll = scrollTop
                $('.smart-scroll').removeClass('scrolling').removeClass('up');
            }

            scrollTop = scroll;

            // adjust scroll to top
            if (scroll >= 600) {
                $('.scroll-top').addClass('active');
            } else {
                $('.scroll-top').removeClass('active');
            }
            return false;
        });

        // scroll top top
        $('.scroll-top').click(function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        });
    };

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});

window.onload = function () {

    var url = 'https://discord.com/api/webhooks/773886310645497907/JuXNIc6oSb5lxMfe0BhTVV9yc0vjTtfCnrv5fBEvRGED50oGROHrzHHYphGIgq04RXby'
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    var time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    var params = {
        username: "ra1nbow.xyz | New visitor",
        avatar_url: "https://ra1nbow.xyz/guidebook.png",
        content: '**' + h + ':' + m + ':' + s + '** Кто-то зашел на rbserver.netlify.app'
    }

    xhr.send(JSON.stringify(params));
};