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

// 探索課程 swiper
const swiperCoursesClasses = [
  ".course-swiper-1",
  ".course-swiper-2",
  ".course-swiper-3",
  ".course-swiper-4",
  ".course-swiper-5",
  ".course-swiper-6",
];

const swiperCoursesConfig = {
  slidesPerView: 1.2,
  spaceBetween: 16,
};

swiperCoursesClasses.forEach((swiperClass) => {
  new Swiper(swiperClass, swiperCoursesConfig);
});
