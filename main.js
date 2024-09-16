import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

console.log("Hello world!");

const exploreSearchLocationSwiper = new Swiper(".search-location-swiper", {
  slidesPerView: 4,
  spaceBetween: 8,
});

const exploreCourseThemeSwiper = new Swiper(".course-theme-swiper", {
  slidesPerView: 3.2,
  spaceBetween: 16,
});

//  popular-course-swiper
const exploreCoursePopularSwiper = new Swiper(".popular-course-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 16,
});
