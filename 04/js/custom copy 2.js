// #박스오피스, 상영예정 단독 돌비시네마
var data = [
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/whzCk46ejtIoWU1eavvF9lJ8rC2Wbvf7_600.jpg"alt=""/><i class="sprite-12"></i><div class="lank">1</div></div><div class="txt_wrap"><strong class="tit">더 퍼스트슬램덩크</strong><span class="percent">예매율 21.8%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/9vUySe7DNMro6tdYRPEbjzF2ebr48MwE_600.jpg"alt=""/><i class="sprite-12"></i><div class="lank">2</div></div><div class="txt_wrap"><strong class="tit">아바타: 물의 길</strong><span class="percent">예매율 15.2%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/N67yV4h2TbGbhDibKQlqCuqDnDJgT8w4_600.jpg"alt=""/><i class="sprite-18"></i><div class="lank">3</div></div><div class="txt_wrap"><strong class="tit">바빌론</strong><span class="percent">예매율 7.2%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jaP2f1q8F51aGyRb804y51pU7pHe8mhV_316.jpg"alt=""/><i class="sprite-12"></i><div class="lank">4</div></div><div class="txt_wrap"><strong class="tit">교섭</strong><span class="percent">예매율 5.1%</span><em class="num">7.8</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/0dtC3qJrRigt7SeAhU42UyXDq4XpahTl_316.jpg"alt=""/><i class="sprite-15"></i><div class="lank">5</div></div><div class="txt_wrap"><strong class="tit">상견니</strong><span class="percent">예매율 4.9%</span><em class="num">8</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/l5Xk0admyRtAuzrBRuac8sv2usMPBnfX_600.jpg"alt=""/><i class="sprite-15"></i><div class="lank">6</div></div><div class="txt_wrap"><strong class="tit">[10th REPLAY] 헤어질결심</strong><span class="percent">예매율 3.6%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/nrQUhgkUlGUzPCu81twxvZbDuXNi1AGQ_600.jpg"alt=""/><i class="sprite-15"></i><div class="lank">7</div></div><div class="txt_wrap"><strong class="tit">극장판 전생했더니슬라임이었던 건에대하여: 홍련의인연</strong><span class="percent">예매율 3.6%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/R9Ampe0ZSlp43ijQqlmZzcUySIu9TTbJ_600.jpg"alt=""/><i class="sprite-0"></i><div class="lank">8</div></div><div class="txt_wrap"><strong class="tit">어메이징 모리스</strong><span class="percent">예매율 3.6%</span><em class="num">9.4</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/xo1VEjALK6IBcdM9VnsHH8MMRYBm3cCT_600.jpg"alt=""/><i class="sprite-12"></i></div><div class="txt_wrap"><strong class="tit">[베로나 오페라페스티벌]투란도트</strong><span class="percent">예매율 1.8%</span><em class="day">D-1</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/N67yV4h2TbGbhDibKQlqCuqDnDJgT8w4_600.jpg"alt=""/><i class="sprite-18"></i></div><div class="txt_wrap"><strong class="tit">바빌론</strong><span class="percent">예매율 8.1%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/b2GtjeNeINQiEhpJV5FPxIKJw2eV11Ng_600.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">애프터썬</strong><span class="percent">예매율 1.9%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/ema.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">이마 베프</strong><span class="percent">예매율 0.3%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/gub.jpg"alt=""/><i class="sprite-0"></i></div><div class="txt_wrap"><strong class="tit">[시네마캐슬] 극장판겁쟁이 페달</strong><span class="percent">예매율 0.1%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/easy.jpg"alt=""/><i class="sprite-18"></i></div><div class="txt_wrap"><strong class="tit">단순한 열정</strong><span class="percent">예매율 0.1%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/5hu.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">5월 이후</strong><span class="percent">예매율 0%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">개봉예정</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/mon.jpg"alt=""/><i class="sprite-18"></i></div><div class="txt_wrap"><strong class="tit">데몬러버</strong><span class="percent">예매율 0%</span><em class="day">D-2</em></div><div class="btn_wrap"><a href="" class="tick">개봉예정</a></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/nrQUhgkUlGUzPCu81twxvZbDuXNi1AGQ_600.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">극장판 전생했더니슬라임이었던 건에대하여: 홍련의인연</strong><span class="percent">예매율 3.7%</span><em class="day">D-3</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/air.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">프로메어</strong><span class="percent">예매율 0.2%</span><em class="num">9.2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/the.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">양자경의 더 모든 날모든 순간</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/slam.jpg"alt=""/><i class="sprite-12"></i></div><div class="txt_wrap"><strong class="tit">더 퍼스트 슬램덩크</strong><span class="percent">예매율 3.7%</span><em class="day">D-3</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/dan2.jpg"alt=""/><i class="sprite-18"></i></div><div class="txt_wrap"><strong class="tit"> 궁지에 몰린 쥐는 치즈 꿈을 꾼다 </strong><span class="percent">예매율 3.7%</span><em class="day">D-3</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/air.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">프로메어</strong><span class="percent">예매율 0.2%</span><em class="num">9.2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/the.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">양자경의 더 모든 날모든 순간</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/the.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">양자경의 더 모든 날모든 순간</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/cle1.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">[베로나 오페라 페스티벌 앙코르] 카르멘</strong><span class="percent">예매율 3.7%</span><em class="day">D-3</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/cle2.jpg"alt=""/><i class="sprite-12"></i></div><div class="txt_wrap"><strong class="tit"> [오페라] 메데아 @The Met2023</strong><span class="percent">예매율 0.2%</span><em class="num">9.2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/cle3.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit"> [ROH 발레] 달콤 쌉사름한 초콜릿</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/feel1.jpg"alt=""/><i class="sprite-12"></i></div><div class="txt_wrap"><strong class="tit">애프터썬</strong><span class="percent">예매율 3.7%</span><em class="day">D-3</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/feel2.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">더 웨일</strong><span class="percent">예매율 0.2%</span><em class="num">9.2</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/feel3.jpg"alt=""/><i class="sprite-18"></i></div><div class="txt_wrap"><strong class="tit">성스러운 거미</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/feel4.jpg"alt=""/><i class="sprite-15"></i></div><div class="txt_wrap"><strong class="tit">단순한 열정</strong><span class="percent">예매율 0.1%</span><em class="num">9</em></div><div class="btn_wrap"><a href="" class="tick">바로예매</a></div></a></li>',
    ],

    // [
    //     '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick1.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
    //     '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick2.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
    //     '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick3.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
    //     '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick4.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
    // ],
];

var data2 = [
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick1.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick2.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick3.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/pick4.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/movie1.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/movie2.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/movie3.jpg" alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.28</p></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/chip.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/chip.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/chip.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jehu1.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jehu2.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jehu3.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jehu4.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/jehu5.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
    ],
    [
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/sisa1.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/sisa2.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/sisa3.png"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/sisa4.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
        '<li class="swiper-slide"><a href=""><div class="img_wrap"><img src="./img/sisa5.jpg"alt=""/></div><div class="txt_wrap"><p class="txt">2023.01.19 - 2023.02.23</p></div></a></li>',
    ],
];

var swiper_2;
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>;

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
        slidesPerView: 5,
        freeMode: !0,
        freeModeMomentumBounce: !1,
        pagination: !1,
        centeredSlides: !1,
        disableTouchControl: !0,
        lazy: !0,
        navigation: !1,
    });

    $(".even_nav a").on("click", function () {
        const num = $(".even_nav a").index($(this));
        $(".even_nav a").removeClass("on");
        $(".even_nav a:eq(" + num + ")").addClass("on");

        //슬라이드 삭제
        swiper_2.removeAllSlides();
        //새 슬라이드 생성
        swiper_2.appendSlide(data2[num]);
        swiper_2.update();
    });

    //

    var swiper_3 = new Swiper(".slide03", {
        slidesPerView: 5,
        freeMode: !0,
        freeModeMomentumBounce: !1,
        pagination: !1,
        centeredSlides: !1,
        disableTouchControl: !0,
        lazy: !0,
        navigation: !1,

        // slidesPerView: 2,
        // autoplay: true,
        // loof: true,

        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "bullets",
        //     BulletPerView: 2,
        //     clickable: true,
        // },
    });

    var swiper_4 = new Swiper(".slide04", {
        slidesPerView: 1,
        autoplay: true,
        loof: true,

        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            BulletPerView: 2,
            clickable: true,
        },
    });

    var swiper_5 = new Swiper(".slide05", {
        slidesPerView: 5,
        freeMode: !0,
        freeModeMomentumBounce: !1,
        pagination: !1,
        centeredSlides: !1,
        disableTouchControl: !0,
        lazy: !0,
        navigation: !1,
    });

    $(".tab_nav a").on("click", function () {
        const num = $(".tab_nav a").index($(this));
        $(".tab_nav a").removeClass("on");
        $(".tab_nav a:eq(" + num + ")").addClass("on");

        //슬라이드 삭제
        swiper_5.removeAllSlides();
        //새 슬라이드 생성
        swiper_5.appendSlide(data[num]);
        swiper_5.update();
    });

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
