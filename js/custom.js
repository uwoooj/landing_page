$(function () {
    $(".link_contact").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 2, scrollTo: ".works" });
    });
    $(".link_call").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 4, scrollTo: "footer" });
    });

    $(".arrow_btn").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 2, scrollTo: ".cont" });
    });

    $(".get_btn").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 2, scrollTo: ".works" });
    });

    $("body").mousemove(function (e) {
        xVal = e.clientX; //보고있는 창기준좌표
        yVal = e.clientY; //보고있는 창기준좌표

        // console.log()
        gsap.to(".cursor", 0.2, {
            x: xVal,
            y: yVal,
            stagger: 0.02,
        });
    });

    gsap.to(".main_vis .circle", {
        scrollTrigger: {
            trigger: ".main_vis", //시발점
            start: "top top", //[시발점기준,윈도우기준ㄴ]
            // end:"bottom top",//[시발점기준,윈도우기준ㄴ]
            end: "+=3000",
            // markers:true,
            scrub: true,
            pin: true,
        },

        width: "130vw",
        height: "130vw",
    });

    header = gsap.timeline({});

    header
        .to("header .logo a", { color: "#fff" })
        .to("header .link_contact", { color: "#fff" })
        .to("header .link_call", { color: "#fff" });

    ScrollTrigger.create({
        animation: header,
        trigger: ".intro",
        start: "top 100%",
        end: "bottom top",
        // markers:true,

        onLeaveBack: function () {
            header.reverse();
        },
    });

    gsap.to(".intro .circle", {
        scrollTrigger: {
            trigger: ".intro", //시발점
            start: "top 100%", //[시발점기준,윈도우기준ㄴ]
            end: "bottom top", //[시발점기준,윈도우기준ㄴ]
            scrub: true,
        },

        // width:'130vw',
        // height:'130vw',

        yPercent: 320,
        ease: "none",
    });

    AOS.init();

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    };

    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    };

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }

    // 초기 실행
    setTimeout(typing, 1500);

    // all
    $(function () {
        gsap.registerPlugin(ScrollTrigger);

        //로드//ani
        const loadAni = gsap.timeline();
        loadAni
            .to(".load_page .text_wrap", {
                duration: 1,
                opacity: 1,
                delay: 0.5,
            })
            .to(".load_page .text_wrap", {
                duration: 0.8,
                opacity: 0,
                delay: 0.6,
            })
            .addLabel("b")
            .to(".load_page", { duration: 0.5, display: "none" }, "b")
            .to(".wrapper", { height: "initial", overflow: "visible" }, "b+0.3")
            .addLabel("c")
            .to(".wrapper", { duration: 1, opacity: 1 }, "c-=0.2")
            .to(".group_intro", { duration: 0.6, scale: 1 }, "c-=0.2");

        //메인//intro Hover ani
        $(document).ready(function () {
            $(".spread").mouseover(function () {
                $(this).addClass("on");
                $(this).siblings().css("opacity", ".1");
            });
            $(".spread").mouseout(function () {
                $(this).removeClass("on");
                $(this).siblings().css("opacity", "1");
            });
        });
    });
});
