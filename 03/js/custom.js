$(function () {
    var swiper = new Swiper(".slide01", {
        slidesPerView: "auto",
        freeMode: !0,
        freeModeMomentumBounce: !1,
        pagination: !1,
        centeredSlides: !1,
        disableTouchControl: !0,
        lazy: !0,
        navigation: !1,
    });
    /* new Swiper(".slide01", {
        slidesPerView: 1,
        spaceBetween: 0,

        // allowSlidePrev: false,
        allowSlideNext: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    }); */
    swiper.params.breakpoints = {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    };

    var swiper_2 = new Swiper(".slide02", {
        slidesPerView: 3,
        spaceBetween: 30,
        allowSlideNext: false,

        freeMode: true,
        longSwipes: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper_3 = new Swiper(".slide03", {
        // slidesPerView: 2,
        autoplay: true,
        loof: true,

        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            BulletPerView: 2,
            clickable: true,
        },
    });

    $(".tab_nav a").on("click", function () {
        const num = $(".tab_nav a").index($(this));
        $(".tab_nav a").removeClass("on");
        $(".tab_con .con").removeClass("on");

        $(".tab_nav a:eq(" + num + ")").addClass("on");
        $(".tab_con .con:eq(" + num + ")").addClass("on");
    });

    $(".even_nav a").on("click", function () {
        const num = $(".even_nav a").index($(this));
        $(".even_nav a").removeClass("on");
        $(".even_con .con").removeClass("on");

        $(".even_nav a:eq(" + num + ")").addClass("on");
        $(".even_con .con:eq(" + num + ")").addClass("on");
    });

    //

    //
    $(".menu").click(function (e) {
        e.preventDefault();

        $(".rht-wrap").addClass("on");
        $("body").addClass("hidden");
    });

    $(".btn-close").click(function (e) {
        e.preventDefault();

        $(".rht-wrap").removeClass("on");
        $("body").addClass("hidden");
    });

    //

    //

    $(".btn-more").click(function (e) {
        e.preventDefault();
        $(".allmenu-list").toggleClass("show");
    });
});
