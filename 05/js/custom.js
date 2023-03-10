// slideDown은 filter:none;과 충돌이 생기고 내려오는순간 블랙현상이
// 나타나기때문에 show 기법으로 합니다

$(function () {
    $(".gnb > li").hover(
        function () {
            //클래스로~!
            $(this).children("ul").show(); //메뉴보임 //slideDown디스플레이가 논이여야 사용가능
        },
        function () {
            //마우스 뗐을때
            $(this).children("ul").hide(); //메뉴사라짐
        }
    );

    //

    $(window).scroll(function () {
        curr = $(window).scrollTop();

        if (curr > $("header").height()) {
            $("header").addClass("show");
        } else {
            $("header").removeClass("show");
        }
    });

    $(window).scroll(function () {
        curr = $(window).scrollTop();

        if (curr < $(".story").height()) {
            $(".story .inner .img_wrap").addClass("on");
        } else {
            $(".story .inner .img_wrap").removeClass("on");
        }
    });

    AOS.init();

    var a = $("html");

    $("html").mouseover(function () {
        if ($("html").is(":animated")) {
            $(this).animate(
                {
                    backgroundColor: "#555",
                    color: "#fff",
                },
                1000
            );
        }
    });

    // $("header").mouseout(function () {
    //     $(this).animate({
    //         backgroundColor: "#fff",
    //         color: "rgb(102, 102, 102)",
    //         filter: "invert(none)",
    //     });
    // });

    $(".top > li > a").click(function (e) {
        e.preventDefault();

        // $('.gnb .sub').removeClass('on')
        // $(this).siblings().addClass('on');

        if ($(this).siblings().hasClass("on")) {
            $(".top .bot").removeClass("on");
        } else {
            $(".top .bot").removeClass("on");
            $(this).siblings().addClass("on");
        }
    });

    $(".m_menu").click(function (e) {
        e.preventDefault();
        $("header").toggleClass("show");
        $(".mobile_wrap").toggleClass("show");
    });
});
