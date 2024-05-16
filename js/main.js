const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector("input");

searchEL.addEventListener("click", function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
  searchEL.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "통합검색");
});

searchInputEL.addEventListener("blur", function () {
  searchEL.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");
});

const badgeEL = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEL, 0.6, {
        opacity: 0,
        display: "none",
      }); //gsap(요소, 지속시간, 옵션) , 배지 숨기기
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEL, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
);
//._throttle (함수, 시간)

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// all => 뒤쪽에 명시하는 객체 모두를 찾아서 fadeELs에다가 부여
const fadeELs = document.querySelectorAll(".visual .fade-in");
//html에서 fade-in요소들의 갯수만큼 foreach라는 매소드의 인수로 적은 함수가 실행 된다.
fadeELs.forEach(function (fadeEL, index) {
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
}); // 반복 처리하는 함수는 기본적으로 이렇게 찾은 fade-in 이라는 클래스를
//가지고 있는 요소들을 하나씩 순차적으로 함수해서 쓸 수 있게 데이터로 내어준다(fadeEL)이라는 이름으로 받아서
//index는 반복되는 횟수를 index라는 이름으로 받아서 사용한다는 의미

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true, // 자동재생
  loop: true, // 반복재생
});
//new -> 자바스크립트 생성자 (클래스) swiper('선택자', 옵션을 객체데이터 형태로, )
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여지는 사진
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true, // 사용자의 페이지 번호 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: "awards .swiper-next",
  },
});

const promotionEL = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEL.classList.add("hide");
    //숨김처리
  } else {
    //보임처리
    promotionEL.classList.remtnarlove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1 /*무한반복*/,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소
    triggerHook: 0.8, //뷰포트가 시작하는부분 0 , 끝나는 부분 1 -> 0.8은 그것을 나눠서 지정
  })
    .setClassToggle(spyEl, "show")
    .addTo(
      new ScrollMagic.Controller()
    ); /*scene -> scrollmagic이라는 자바스크립트 라이브러리를 통해서 
  특정한 요소를 감시하는 옵션을 지정해 주는 메소드 */
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
//그 요소가 가지고 있는 글자 내용들의 값을 알아내거나
//거기다가 값을 지정하는 용도로 사용 가능하다
