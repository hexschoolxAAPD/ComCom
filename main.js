import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

console.log("Hello world!");

// swiper 選擇器
const SWIPER_SELECTORS = {
  exploreSearchLocation: ".search-location-swiper",
  exploreCourseTheme: ".course-theme-swiper",
  exploreCourseCard: [
    ".course-swiper-1",
    ".course-swiper-2",
    ".course-swiper-3",
    ".course-swiper-4",
    ".course-swiper-5",
    ".course-swiper-6",
  ],
  landmarks: [".san-francisco-swiper", ".teacher-landmark-swiper"],
  teacherThemeTags: ".teacher-theme-tags-swiper",
};

// swiper 設定
const SWIPER_CONFIG = {
  exploreSearchLocation: { slidesPerView: 4, spaceBetween: 8 },
  exploreCourseTheme: { slidesPerView: 3.2, spaceBetween: 16 },
  exploreCourseCard: { slidesPerView: 1.2, spaceBetween: 16 },
  landmarks: { slidesPerView: 3.6, spaceBetween: 12 },
  teacherThemeTags: { slidesPerView: 4.2, spaceBetween: 12 },
};

// swiper 初始化
// 探索課程 - 搜尋頁面 城市地標 swiper
const exploreSearchLocationSwiper = new Swiper(
  SWIPER_SELECTORS.exploreSearchLocation,
  SWIPER_CONFIG.exploreSearchLocation
);

// 探索課程 - 課程主題 swiper
const exploreCourseThemeSwiper = new Swiper(
  SWIPER_SELECTORS.exploreCourseTheme,
  SWIPER_CONFIG.exploreCourseTheme
);

// 探索課程 課程卡片 swiper
SWIPER_SELECTORS.exploreCourseCard.forEach(
  (selector) => new Swiper(selector, SWIPER_CONFIG.exploreCourseCard)
);

// 城市地標 swiper
SWIPER_SELECTORS.landmarks.forEach(
  (selector) => new Swiper(selector, SWIPER_CONFIG.landmarks)
);

// 教師個人頁 - 主題標籤 swiper
const teacherThemeTagsSwiper = new Swiper(
  SWIPER_SELECTORS.teacherThemeTags,
  SWIPER_CONFIG.teacherThemeTags
);
