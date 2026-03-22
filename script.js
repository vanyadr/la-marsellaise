import Swiper from "./assets/libs/swiper/swiper.min.mjs";
import Navigation from "./assets/libs/swiper/modules/navigation.min.mjs";
import Autoplay from "./assets/libs/swiper/modules/autoplay.min.mjs";

const changeHeaderOnScroll = () => {
    const header = document.querySelector("header");

    document.addEventListener("scroll", () => {
        if (window.pageYOffset > document.documentElement.clientHeight - header.offsetHeight) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
};
const initSliderEvents = () => {
    const swiper = new Swiper(".swiper-events", {
        modules: [Navigation],
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 12,
        navigation: {
            nextEl: ".events__btn.events.swiper-button-next",
            prevEl: ".events__btn.events.swiper-button-prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1401: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
};
const initSliderSales = () => {
    const swiper = new Swiper(".swiper-sales", {
        modules: [Navigation],
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 12,
        navigation: {
            nextEl: ".events__btn.sales.swiper-button-next",
            prevEl: ".events__btn.sales.swiper-button-prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1401: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
};
const toggleEventsPart = () => {
    const btns = document.querySelectorAll(".events__part-btn");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            btn = e.target;
            const blockId = btn.dataset.block;

            btns.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");

            document.querySelectorAll(".events__slider").forEach((slider) => {
                if (slider.dataset.block === blockId) {
                    slider.classList.add("active");
                } else {
                    slider.classList.remove("active");
                }
            });
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    changeHeaderOnScroll();
    initSliderEvents();
    initSliderSales();
    toggleEventsPart();
});