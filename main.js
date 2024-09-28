// SCSS and Bootstrap imports
import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// Swiper imports
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* 
    Swipers
*/

// swiper 選擇器
const SWIPER_SELECTORS = {
  indexSwiper: ".swiper-container",
  landmarkPageCard: ".swiper-landmark",
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
  landmarkPageCard: { slidesPerView: 1.4, spaceBetween: 16 },
  exploreSearchLocation: { slidesPerView: 4, spaceBetween: 8 },
  exploreCourseTheme: { slidesPerView: 3.2, spaceBetween: 16 },
  exploreCourseCard: { slidesPerView: 1.2, spaceBetween: 16 },
  landmarks: { slidesPerView: 4.2, spaceBetween: 12 },
  teacherThemeTags: { slidesPerView: 4.2, spaceBetween: 12 },
};

// swiper 初始化 function
function initializeSwiper(selector, config) {
  return new Swiper(selector, config);
}

// index - 城市地標 swiper
initializeSwiper(SWIPER_SELECTORS.indexSwiper, SWIPER_CONFIG.landmarks);

// landmark - 城市地標卡片 swiper
initializeSwiper(
  SWIPER_SELECTORS.landmarkPageCard,
  SWIPER_CONFIG.landmarkPageCard
);

// 探索課程 - 搜尋頁面 城市地標 swiper
initializeSwiper(
  SWIPER_SELECTORS.exploreSearchLocation,
  SWIPER_CONFIG.exploreSearchLocation
);

// 探索課程 - 課程主題 swiper
initializeSwiper(
  SWIPER_SELECTORS.exploreCourseTheme,
  SWIPER_CONFIG.exploreCourseTheme
);

// 探索課程 - 課程卡片 swiper
SWIPER_SELECTORS.exploreCourseCard.forEach((el) =>
  initializeSwiper(el, SWIPER_CONFIG.exploreCourseCard)
);

// 城市地標 swiper
SWIPER_SELECTORS.landmarks.forEach((el) =>
  initializeSwiper(el, SWIPER_CONFIG.landmarks)
);

// 教師個人頁 - 主題標籤 swiper
initializeSwiper(
  SWIPER_SELECTORS.teacherThemeTags,
  SWIPER_CONFIG.teacherThemeTags
);

// 執行字數統計
characterCounter("inputText", "charCount", 200);

/*
   Utility Functions
*/
// 字數計算 - feedback page
function characterCounter(textareaId, charCountId, limit) {
  const textarea = document.getElementById(textareaId);
  const charCount = document.getElementById(charCountId);

  if (textarea && charCount) {
    // 監聽輸入事件
    textarea.addEventListener("input", function () {
      const currentLength = textarea.value.length;

      // 更新字數顯示
      charCount.textContent = `已輸入字數: ${currentLength} / ${limit}`;

      // 如果字數超過 200，添加紅色警告
      if (currentLength > limit) {
        charCount.classList.add("error");
        charCount.textContent = `字數超過限制！已輸入字數: ${currentLength} / ${limit}`;
      } else {
        // 當字數在限制內，移除紅色警告
        charCount.classList.remove("error");
      }
    });
  }
}
