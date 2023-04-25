$(function () {
    // a 태그는 펑션에 e를 함께해야 링크로 빠지지않는다 //
    $(".menu_btn").click(function (e) {
        e.preventDefault();

        $("header .side-menu").addClass("on");
        $("body").addClass("hidden");
    });

    $(".side-menu .close").click(function (e) {
        e.preventDefault();

        $("header .side-menu").removeClass("on");
        $("body").removeClass("hidden");
    });

    // main_vis
    var swiper = new Swiper(".main_vis", {
        loop: true,
        autoplay: true, //자동실행
        pauseOnHover: true, //마우스올렸을때 멈춤기능
        autoplaySpeed: 20000, //슬라이드간격(시간)
        speed: 700, //애니메이션 속도
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //sc_prd //

    var swiper = new Swiper(".sc_prd .swiper", {
        slidesPerView: 2.3,
        spaceBetween: 10,
        freeMode: true,
        autoplay: true,
    });

    // curr 현재 //
    $(window).scroll(function () {
        curr = $(window).scrollTop();

        if (curr > 0) {
            $(".logo_area").addClass("white");
        } else {
            $(".logo_area").removeClass("white");
        }
    });

    $(window).scroll(function () {
        curr = $(window).scrollTop();

        if (curr > 0) {
            $(".top_menu").addClass("white");
            $(".top_area").show();
        } else {
            $(".top_menu").removeClass("white");
            $(".top_area").hide();
        }
    });

    $(".dep1").click(function (e) {
        e.preventDefault();
        $(this).siblings().stop().slideToggle();
    });

    $(".dep2").click(function (e) {
        e.preventDefault();
        $(this).siblings().stop().slideToggle();
    });

    $(".open_btn").click(function (e) {
        e.preventDefault();

        if ($(this).hasClass("on")) {
            $(".logo_area .top_menu_all,.all").hide();
            $(this).removeClass("on");
        } else {
            $(".logo_area .top_menu_all,.all").show();
            $(this).addClass("on");
        }
    });

    $("body").click(function (e) {
        // console.log(e.target); 특정영역 이외 클릭(자바스크립트)

        if ($(e.target).has(".side-menu").length) {
            $("body").removeClass("hidden");
            $(".side-menu").removeClass("on");
        }
    });

    //상단이동 클릭
    //제이쿼리 이벤트를 자바스크립트로 시도
    const topBtnElement = document.querySelector(".btn-top");

    topBtnElement.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    let lastScroll = 0; //초기화
    $(window).scroll(function () {
        const current = $(this).scrollTop();

        if (current > lastScroll) {
            //내릴때
            $(".quick").removeClass("show");
        } else {
            //올릴때
            $(".quick").addClass("show");
        }

        lastScroll = current;

        if (current < 10) {
            $(".quick").removeClass("show");
        } else {
        }
    });
});
