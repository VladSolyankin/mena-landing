<script setup lang="ts">
/**
 * ProductionSites.vue - Секция о производственных площадках и логистике
 *
 * Структура компонента:
 * 1. Sites Container - карта мира со статистикой и переключателем стран
 * 2. Full Cycle Production - этапы производства
 * 3. Door-to-Door - схема логистики доставки
 * 4. Bottom cards - карточки преимуществ (Any size, Worldwide, Express)
 */

import { ref } from "vue";

// Типизация для стран
type Country = {
  id: string;
  name: string;
  flagBg: string;
  flagImage: string;
};

// Данные о странах для переключателя
const countries: Country[] = [
  {
    id: "china",
    name: "China",
    flagBg: "#ee1c25",
    flagImage: "/images/production-sites/Flag.png",
  },
  {
    id: "brazil",
    name: "Brazil",
    flagBg: "#009440",
    flagImage: "/images/production-sites/Flag-2.png",
  },
  {
    id: "russia",
    name: "Russia",
    flagBg: "#ff7e7e",
    flagImage: "/images/production-sites/Flag-1.png",
  },
  {
    id: "iran",
    name: "Iran",
    flagBg: "#ff7e7e",
    flagImage: "/images/production-sites/Flag-3.png",
  },
];

// Активная страна
const activeCountry = ref("russia");

// Этапы производства
const productionSteps = [
  { id: 1, label: "1.RAW MATERIALS", variant: "dark" },
  { id: 2, label: "2.LOGISTIC", variant: "light" },
  { id: 3, label: "3.PRODUCTION", variant: "light" },
  { id: 4, label: "4.QUALITY CONTROL", variant: "accent" },
  { id: 5, label: "5.PACKING", variant: "light" },
];

// Карточки преимуществ внизу
const benefitCards = [
  {
    id: "any-size",
    title: "Any size",
    description: "From sample boxes to full container loads.",
    icon: "frame",
    variant: "dark",
  },
  {
    id: "worldwide",
    title: "Worldwide",
    description:
      "Our network covers major global markets and remote locations.",
    icon: "globe",
    variant: "light",
  },
  {
    id: "express",
    title: "Express",
    description: "We prioritize urgent shipments for critical timelines.",
    icon: "lightning",
    variant: "light",
  },
];
</script>

<template>
  <section class="production-sites">
    <div class="production-sites__container">
      <!-- ============================================
           SITES CONTAINER - Карта мира и статистика
           ============================================ -->
      <div class="sites-section">
        <!-- Заголовок секции -->
        <div class="sites-section__header">
          <p class="sites-section__subtitle">Worldwide</p>
          <h2 class="sites-section__title">
            4 Production Sites<br />around the World
          </h2>
        </div>

        <!-- Контейнер с картой и статистикой -->
        <div class="sites-section__content">
          <!-- Верхняя карточка с картой -->
          <div class="map-card">
            <!-- Фоновое изображение карты -->
            <img
              src="/images/production-sites/Map-v2 2.png"
              alt="World Map"
              class="map-card__map"
            />
            <!-- Облака поверх карты -->
            <img
              src="/images/production-sites/Map-1A-Cloud 1.png"
              alt=""
              class="pt-3"
            />
            <!-- Градиент слева -->
            <div class="map-card__gradient"></div>

            <!-- Статистика -->
            <div class="map-card__stats">
              <div class="map-card__stat">
                <p class="map-card__stat-value">7 500 m<sup>2</sup></p>
                <p class="map-card__stat-label">
                  finished products<br />per month
                </p>
              </div>
              <div class="map-card__stat">
                <p class="map-card__stat-value">35+</p>
                <p class="map-card__stat-label">
                  modern machines<br />on the line
                </p>
              </div>
            </div>
          </div>

          <!-- Переключатель стран -->
          <div class="country-switcher">
            <button
              v-for="country in countries"
              :key="country.id"
              :class="[
                'country-switcher__item',
                {
                  'country-switcher__item--active':
                    activeCountry === country.id,
                },
              ]"
              @click="activeCountry = country.id"
            >
              <span
                class="country-switcher__flag"
                :style="{ backgroundColor: country.flagBg }"
              >
                <img :src="country.flagImage" :alt="country.name" />
              </span>
              <span class="country-switcher__name">{{ country.name }}</span>
            </button>
          </div>

          <!-- Нижняя карточка с фото производства -->
          <div class="production-photo">
            <img
              src="/images/production-sites/2019-07-10 13.06.31.jpg"
              alt="Production facility"
              class="production-photo__image"
            />
          </div>
        </div>
      </div>

      <!-- ============================================
           FULL CYCLE PRODUCTION
           ============================================ -->
      <div class="full-cycle">
        <!-- Левая часть с текстом -->
        <div class="full-cycle__text">
          <h3 class="full-cycle__title">Full Cycle<br />Production</h3>
          <p class="full-cycle__description">
            Our end-to-end control over mining, cutting, and polishing ensures
            flawless quality and
            <span class="full-cycle__highlight">predictable timelines</span>.
          </p>

          <!-- Логотипы сертификации -->
          <div class="full-cycle__certifications">
            <!-- CE Logo -->
            <svg
              class="full-cycle__cert-logo full-cycle__cert-logo--ce"
              width="106"
              height="75"
              viewBox="0 0 106 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1" clip-path="url(#clip0_ce)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.6429 74.812C40.3849 74.9373 39.1214 75 37.8571 75C27.8168 75 18.1877 71.0491 11.0881 64.0165C3.98851 56.9839 0 47.4456 0 37.5C0 27.5544 3.98851 18.0161 11.0881 10.9835C18.1877 3.95088 27.8168 0 37.8571 0C39.1214 -3.60537e-08 40.3849 0.0627356 41.6429 0.187971V11.438C40.3871 11.2859 39.122 11.2231 37.8571 11.25C30.8289 11.25 24.0885 14.0156 19.1188 18.9384C14.1491 23.8613 11.3571 30.5381 11.3571 37.5C11.3571 44.4619 14.1491 51.1387 19.1188 56.0616C24.0885 60.9844 30.8289 63.75 37.8571 63.75C39.122 63.7769 40.3871 63.7141 41.6429 63.562V74.812Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M106 74.812C104.742 74.9373 103.479 75 102.214 75C92.174 75 82.5449 71.0491 75.4453 64.0165C68.3457 56.9839 64.3572 47.4456 64.3572 37.5C64.3572 27.5544 68.3457 18.0161 75.4453 10.9835C82.5449 3.95088 92.174 0 102.214 0C103.479 -3.60537e-08 104.742 0.0627356 106 0.187971V11.438C104.744 11.2859 103.479 11.2231 102.214 11.25C96.1722 11.2495 90.3114 13.2943 85.6032 17.0455C80.8951 20.7967 77.6224 26.0289 76.3277 31.875H98.4286V43.125H76.3277C77.6224 48.9711 80.8951 54.2033 85.6032 57.9545C90.3114 61.7057 96.1722 63.7505 102.214 63.75C103.479 63.7769 104.744 63.7141 106 63.562V74.812Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_ce">
                  <rect width="106" height="75" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <!-- ISO Logo -->
            <svg
              class="full-cycle__cert-logo full-cycle__cert-logo--iso"
              width="120"
              height="100"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1" clip-path="url(#clip0_iso)">
                <path
                  d="M99.9168 21.9665C93.1629 12.0871 83.7693 5.13259 72.8062 1.92843C69.239 0.884656 65.2438 0.217123 61.8906 0.0957538C60.9156 0.0714799 59.9168 0.0229321 59.6909 0.0107952C58.7872 -0.0498896 54.9108 0.156439 53.4483 0.35063C47.6576 1.11526 42.7349 2.6081 37.6932 5.15686C31.0821 8.49453 25.4935 13.0823 20.9275 18.9202C19.8573 20.3038 17.9548 22.9982 17.9548 23.156C17.9548 23.1924 18.7396 23.2288 19.7146 23.2288H21.4626L22.176 22.2214C23.7575 20.0004 26.8371 16.5535 28.7515 14.8786L29.3817 14.3324L31.6052 14.8907C35.2081 15.7888 39.9168 16.6748 43.1629 17.0511C43.8526 17.1239 44.4471 17.2331 44.4947 17.2695C44.5541 17.3181 44.4352 17.8764 44.2331 18.5075C43.7218 20.1703 43.044 22.7433 43.044 23.0103C43.044 23.2045 43.1748 23.2288 44.5184 23.2288H45.981L46.302 22.003C46.7063 20.4616 47.5624 17.7307 47.6576 17.6337C47.7051 17.5851 48.5731 17.6215 49.5838 17.7065C53.5315 18.0463 59.4412 18.1798 63.6385 18.0342C65.8264 17.9492 68.3591 17.8278 69.2509 17.755C70.1546 17.6822 70.9394 17.6701 70.9869 17.7307C71.0821 17.84 71.6647 19.6484 72.0452 20.9834C72.1641 21.4447 72.3663 22.1486 72.4614 22.5248L72.6635 23.2288H74.138C75.2557 23.2288 75.6243 23.1924 75.6243 23.071C75.6243 22.8768 74.9108 20.2552 74.4471 18.6896C74.245 18.0342 74.0785 17.4516 74.0785 17.403C74.0785 17.3666 74.8157 17.2331 75.7194 17.1118C79.7146 16.6141 83.7218 15.8738 87.3603 14.9635L89.3936 14.4416L90.2259 15.1941C92.1641 16.954 95.113 20.3038 96.6231 22.4399L97.1701 23.2288H98.8823C100.059 23.2288 100.595 23.1924 100.595 23.0953C100.595 23.0225 100.285 22.5127 99.9168 21.9665Z"
                  fill="black"
                />
                <path
                  d="M114.102 33.9584C110.832 30.6328 106.611 28.5938 101.308 27.7806C100 27.5743 95.1843 27.4287 93.9952 27.55C90.4518 27.9263 87.5862 28.6909 84.9346 29.9653C78.585 33.0359 74.6373 38.7403 73.6623 46.2652C73.4602 47.8552 73.4245 51.6904 73.6028 53.2076C74.0547 57.0064 75.1843 60.2591 77.0155 63.0992C78.5256 65.4295 81.3199 67.9904 83.9477 69.4468C87.8359 71.6072 93.2699 72.6874 98.6088 72.3718C108.799 71.7528 116.04 66.631 118.835 58.0623C119.655 55.5379 120 53.1347 120 49.9306C120.012 43.2431 118.086 38.0242 114.102 33.9584Z"
                  fill="black"
                />
                <path
                  d="M56.3021 27.8533C58.157 28.0839 59.2034 28.1325 64.1855 28.1689L69.9168 28.2174V41.3132H59.7028L59.6671 39.8932L59.6314 38.461L58.918 38.1697C56.8728 37.3444 54.1261 36.8953 51.0702 36.8832C48.0619 36.8832 46.7063 37.1502 45.4103 38.0362C44.0785 38.9222 43.8883 40.7306 44.9941 41.8472C46.1475 43.0366 47.5625 43.4129 53.8645 44.2139C59.3104 44.9179 61.415 45.3669 64.0547 46.4228C65.327 46.9326 66.9323 47.8914 67.9311 48.7531C69.4055 50.0032 70.6183 52.0665 71.1772 54.2512C71.5934 55.8775 71.7123 59.0089 71.415 60.6716C70.9037 63.5117 69.8574 65.5507 67.943 67.4076C65.874 69.4224 63.2105 70.7453 59.5363 71.5827C55.4816 72.5173 49.7384 72.6629 43.9834 71.9954C42.0095 71.7769 40.868 71.7284 36.1237 71.692L30.5589 71.6434V58.669H40.7848V61.3392L41.2485 61.5819C42.7587 62.3587 45.8621 62.9291 49.132 63.0019C54.7682 63.1476 57.3009 62.1281 57.3128 59.7007C57.3128 58.754 57.0512 58.2442 56.2664 57.6859C55.1249 56.8606 53.5197 56.4844 48.3948 55.8168C42.2355 55.0037 39.7979 54.4332 37.1225 53.1467C32.8538 51.0834 30.7491 47.94 30.3211 42.9881C30.0833 40.3665 30.4994 37.9148 31.5101 35.7787C33.7812 30.9846 38.9774 28.2295 47.0274 27.5499C48.6445 27.4164 54.2331 27.5984 56.3021 27.8533Z"
                  fill="black"
                />
                <path
                  d="M27.4673 33.7271V39.1281H24.019H20.5707V50.0513V60.9746H24.019H27.4673V66.3755V71.7765L13.7693 71.7522L0.059453 71.7158L0.0237812 66.3391L0 60.9746H3.44828H6.89655V50.0513V39.1281L3.48395 39.1038L0.059453 39.0674L0.0237812 33.6907L0 28.3262H13.7336H27.4673V33.7271Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_iso">
                  <rect width="120" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Правая часть с этапами производства -->
        <div class="full-cycle__card">
          <!-- Верхний блок с этапами -->
          <div class="production-steps">
            <!-- Фоновое изображение склада -->

            <img
              src="/images/production-sites/Background Image.png"
              alt=""
              class="production-steps__bg-overlay object-cover"
            />

            <!-- Этапы производства -->
            <div class="production-steps__content">
              <!-- Ряд 1: Raw Materials -->
              <div class="production-steps__row production-steps__row--1">
                <span
                  class="production-steps__step production-steps__step--dark"
                >
                  1.RAW MATERIALS
                </span>
                <span class="production-steps__arrow">
                  <svg
                    width="191"
                    height="56"
                    viewBox="0 0 191 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="191"
                      height="56"
                      rx="28"
                      fill="white"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M45.7929 40.2927C45.4024 40.6833 45.4024 41.3164 45.7929 41.707L52.1569 48.0709C52.5474 48.4614 53.1805 48.4614 53.5711 48.0709C53.9616 47.6804 53.9616 47.0472 53.5711 46.6567L47.9142 40.9999L53.5711 35.343C53.9616 34.9525 53.9616 34.3193 53.5711 33.9288C53.1805 33.5383 52.5474 33.5383 52.1569 33.9288L45.7929 40.2927ZM153.5 40.9999L153.5 39.9999L46.5 39.9999L46.5 40.9999L46.5 41.9999L153.5 41.9999L153.5 40.9999ZM23 14L23 15L153.5 15L153.5 14L153.5 13L23 13L23 14ZM153.5 14L153.5 15C160.404 15 166 20.5964 166 27.4999L167 27.4999L168 27.4999C168 19.4919 161.508 13 153.5 13L153.5 14ZM153.5 40.9999L153.5 41.9999C161.508 41.9999 168 35.508 168 27.4999L167 27.4999L166 27.4999C166 34.4034 160.404 39.9999 153.5 39.9999L153.5 40.9999Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>

              <!-- Ряд 2: Logistic + Production -->
              <div class="production-steps__row production-steps__row--2">
                <span
                  class="production-steps__step production-steps__step--light"
                >
                  2.LOGISTIC
                </span>
                <span
                  class="production-steps__arrow production-steps__arrow--small"
                >
                  <svg
                    width="81"
                    height="56"
                    viewBox="0 0 81 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="81" height="56" rx="28" fill="white" />
                    <path
                      d="M65.7071 28.7071C66.0976 28.3166 66.0976 27.6834 65.7071 27.2929L59.3431 20.9289C58.9526 20.5384 58.3195 20.5384 57.9289 20.9289C57.5384 21.3195 57.5384 21.9526 57.9289 22.3431L63.5858 28L57.9289 33.6569C57.5384 34.0474 57.5384 34.6805 57.9289 35.0711C58.3195 35.4616 58.9526 35.4616 59.3431 35.0711L65.7071 28.7071ZM16 28V29L65 29V28V27L16 27V28Z"
                      fill="#E88C0A"
                    />
                  </svg>
                </span>
                <span
                  class="production-steps__step production-steps__step--light"
                >
                  3.PRODUCTION
                </span>
              </div>

              <!-- Ряд 3: Quality Control -->
              <div class="production-steps__row production-steps__row--3">
                <span
                  class="production-steps__step production-steps__step--accent"
                >
                  4.QUALITY CONTROL
                </span>
              </div>

              <!-- Ряд 4: Packing -->
              <div class="production-steps__row production-steps__row--4">
                <span
                  class="production-steps__step production-steps__step--light"
                >
                  5.PACKING
                </span>
                <span
                  class="production-steps__arrow production-steps__arrow--reverse"
                >
                  <svg
                    width="81"
                    height="56"
                    viewBox="0 0 81 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="81"
                      height="56"
                      rx="28"
                      fill="white"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M29.2929 27.2929C28.9024 27.6834 28.9024 28.3166 29.2929 28.7071L35.6569 35.0711C36.0474 35.4616 36.6805 35.4616 37.0711 35.0711C37.4616 34.6805 37.4616 34.0474 37.0711 33.6569L31.4142 28L37.0711 22.3431C37.4616 21.9526 37.4616 21.3195 37.0711 20.9289C36.6805 20.5384 36.0474 20.5384 35.6569 20.9289L29.2929 27.2929ZM50 17L49 17L49 20L50 20L51 20L51 17L50 17ZM42 28L42 27L30 27L30 28L30 29L42 29L42 28ZM50 20L49 20C49 23.866 45.866 27 42 27L42 28L42 29C46.9706 29 51 24.9706 51 20L50 20Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <!-- Стрелка вниз -->
            <div class="production-steps__down-arrow">
              <svg
                width="56"
                height="120"
                viewBox="0 0 56 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip_container)">
                  <rect
                    x="5.24537e-06"
                    y="120"
                    width="120"
                    height="56"
                    rx="28"
                    transform="rotate(-90 5.24537e-06 120)"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M27.2929 100.707C27.6834 101.098 28.3166 101.098 28.7071 100.707L35.0711 94.3431C35.4616 93.9526 35.4616 93.3195 35.0711 92.9289C34.6806 92.5384 34.0474 92.5384 33.6569 92.9289L28 98.5858L22.3432 92.9289C21.9526 92.5384 21.3195 92.5384 20.9289 92.9289C20.5384 93.3195 20.5384 93.9526 20.9289 94.3431L27.2929 100.707ZM28 20L27 20L27 100L28 100L29 100L29 20L28 20Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip_container">
                    <rect
                      x="5.24537e-06"
                      y="120"
                      width="120"
                      height="56"
                      rx="28"
                      transform="rotate(-90 5.24537e-06 120)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <!-- Нижний блок с результатом -->
          <div class="excellent-result">
            <div class="excellent-result__overlay">
              <svg
                width="209"
                height="123"
                viewBox="0 0 209 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H177V67C177 80.2548 166.255 91 153 91H0V0Z"
                  fill="#F5F5F7"
                />
                <path
                  d="M0 115L0 123H-2L-2 89H32V91H24C10.7452 91 0 101.745 0 115Z"
                  fill="#F5F5F7"
                />
                <path
                  d="M177 24V32H175V-2H209V0H201C187.745 0 177 10.7452 177 24Z"
                  fill="#F5F5F7"
                />
              </svg>
            </div>
            <p class="excellent-result__text">excellent<br />result</p>
            <img
              src="/images/production-sites/freepik__enhance__70227 1.png"
              alt="Finished product"
              class="excellent-result__image"
            />
          </div>
        </div>
      </div>

      <!-- ============================================
           DOOR-TO-DOOR - Схема доставки
           ============================================ -->
      <div class="door-to-door">
        <h3 class="door-to-door__title">Door-to-Door</h3>
      </div>

      <!-- ============================================
           BOTTOM CARDS - Преимущества доставки
           ============================================ -->
      <div class="benefits-row">
        <!-- Any size -->
        <div class="benefit-card benefit-card--dark">
          <div class="benefit-card__icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.10127 9.97742L9.81865 14.0613C10.1162 14.2737 10.2649 14.3799 10.4206 14.4045C10.5576 14.4259 10.6979 14.4042 10.8219 14.3423C10.9629 14.2719 11.0726 14.1257 11.292 13.8333L12.5001 12.2224C12.5621 12.1396 12.5932 12.0983 12.6296 12.0626C12.662 12.0309 12.6975 12.0026 12.7356 11.9782C12.7785 11.9506 12.8258 11.9296 12.9202 11.8876L18.0784 9.59511C18.2922 9.50009 18.399 9.45257 18.4797 9.37835C18.551 9.31273 18.6072 9.23233 18.6442 9.14278C18.6861 9.04154 18.6938 8.92481 18.7094 8.69134L19.0872 3.02619M18 18.0003L21.488 19.4951C21.8926 19.6686 22.095 19.7554 22.2022 19.8994C22.2962 20.0258 22.3425 20.1814 22.3328 20.3386C22.3217 20.5178 22.1996 20.701 21.9553 21.0673L20.3166 23.5254C20.2009 23.699 20.1429 23.7858 20.0665 23.8487C19.9988 23.9043 19.9208 23.9461 19.8369 23.9715C19.7422 24.0003 19.6378 24.0003 19.4292 24.0003H16.7688C16.4924 24.0003 16.3541 24.0003 16.2365 23.9541C16.1326 23.9133 16.0406 23.847 15.969 23.7614C15.888 23.6645 15.8442 23.5333 15.7569 23.271L14.8064 20.4195C14.7548 20.2647 14.729 20.1874 14.7222 20.1089C14.7162 20.0391 14.7212 19.9689 14.737 19.9007C14.7549 19.8239 14.7913 19.751 14.8642 19.6051L15.5862 18.1611C15.7329 17.8677 15.8062 17.721 15.9193 17.6299C16.0188 17.5497 16.1394 17.4998 16.2665 17.4861C16.4108 17.4706 16.5664 17.5225 16.8776 17.6262L18 18.0003ZM29.3333 16.0003C29.3333 23.3641 23.3637 29.3337 16 29.3337C8.63616 29.3337 2.66663 23.3641 2.66663 16.0003C2.66663 8.63653 8.63616 2.66699 16 2.66699C23.3637 2.66699 29.3333 8.63653 29.3333 16.0003Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="benefit-card__title">Any size</h4>
          <p class="benefit-card__description">
            From sample boxes to full container loads.
          </p>
        </div>

        <!-- Worldwide -->
        <div class="benefit-card benefit-card--light">
          <div class="benefit-card__icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3333 9.70345L16 15.9998M16 15.9998L4.66663 9.70345M16 15.9998V28.6665M18.6667 27.8517L17.036 28.7575C16.6579 28.9677 16.4688 29.0726 16.2687 29.1138C16.0913 29.1503 15.9087 29.1503 15.7315 29.1138C15.5312 29.0726 15.3421 28.9677 14.964 28.7575L5.09729 23.2761C4.69795 23.0542 4.49824 22.9433 4.35284 22.7854C4.22421 22.6459 4.12687 22.4805 4.06731 22.3002C4 22.0965 4 21.8681 4 21.4111V10.5884C4 10.1315 4 9.9031 4.06731 9.69937C4.12687 9.51913 4.22421 9.35369 4.35284 9.2141C4.49824 9.05631 4.69793 8.94538 5.09729 8.72351L14.964 3.24204C15.3421 3.03196 15.5312 2.92692 15.7315 2.88573C15.9087 2.84929 16.0913 2.84929 16.2687 2.88573C16.4688 2.92692 16.6579 3.03196 17.036 3.24204L26.9027 8.72351C27.3021 8.94538 27.5017 9.05631 27.6472 9.2141C27.7757 9.35369 27.8732 9.51913 27.9327 9.69937C28 9.9031 28 10.1315 28 10.5884V16.6665M10 5.99978L22 12.6664M21.3333 23.9998L24 26.6665L29.3333 21.3331"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="benefit-card__title">Worldwide</h4>
          <p class="benefit-card__description">
            Our network covers major global markets and remote locations.
          </p>
        </div>

        <!-- Express -->
        <div class="benefit-card benefit-card--light">
          <div class="benefit-card__icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3333 2.66699L5.4579 16.9175C4.99282 17.4755 4.76029 17.7546 4.75673 17.9903C4.75364 18.1951 4.84494 18.3901 5.0043 18.5189C5.18762 18.667 5.55086 18.667 6.27734 18.667H16L14.6666 29.3337L26.542 15.0831C27.007 14.5251 27.2396 14.2461 27.2432 14.0103C27.2462 13.8055 27.155 13.6106 26.9956 13.4818C26.8122 13.3337 26.449 13.3337 25.7226 13.3337H16L17.3333 2.66699Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h4 class="benefit-card__title">Express</h4>
          <p class="benefit-card__description">
            We prioritize urgent shipments for critical timelines.
          </p>
        </div>

        <!-- Вертикальный разделитель -->
        <div class="benefits-row__divider"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Переменные цветов
$color-primary: #088ea1;
$color-accent: #a76508;
$color-dark: #333333;
$color-light-bg: #f5f5f7;
$color-border: #ededed;

.production-sites {
  position: relative;
  width: 100%;
  background: $color-light-bg;
  padding: 80px 0 120px;

  &__container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

// ===========================================
// SITES SECTION - Карта мира и статистика
// ===========================================
.sites-section {
  margin-bottom: 160px;

  &__header {
    text-align: center;
    margin-bottom: 64px;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: $color-accent;
    margin: 0 0 8px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 64px;
    line-height: normal;
    color: $color-dark;
    margin: 0;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

// Карточка с картой мира
.map-card {
  position: relative;
  width: 100%;
  height: 300px;
  background: $color-primary;
  border-radius: 32px;
  overflow: hidden;

  &__map {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-50% - 74.5px));
    width: 1172px;
    height: 659px;
    object-fit: cover;
    pointer-events: none;
  }

  &__clouds {
    position: absolute;
    left: -416px;
    top: 0;
    width: 1920px;
    height: 1080px;
    object-fit: cover;
    pointer-events: none;
  }

  &__gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(36, 39, 48, 0.6) 0%,
      rgba(36, 39, 48, 0) 100%
    );
    mix-blend-mode: multiply;
  }

  &__stats {
    position: absolute;
    left: 61px;
    top: 76px;
    display: flex;
    gap: 61px;
    z-index: 2;
  }

  &__stat {
    &-value {
      font-family: "Lora", serif;
      font-weight: 500;
      font-size: 64px;
      line-height: normal;
      color: white;
      margin: 0 0 6px;

      sup {
        font-size: 41.28px;
        vertical-align: super;
      }
    }

    &-label {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: normal;
      color: white;
      margin: 0;
      white-space: pre-wrap;
    }
  }
}

// Переключатель стран
.country-switcher {
  position: absolute;
  left: 50%;
  top: 286px;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  padding: 4px;
  background: $color-border;
  border: 8px solid white;
  border-radius: 16px;
  z-index: 10;

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 131px;
    height: 36px;
    padding: 0 16px 0 22px;
    background: transparent;
    border: none;
    border-radius: 32px;
    cursor: pointer;
    transition: all 0.2s;

    &--active {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;

      .country-switcher__name {
        color: #000;
      }
    }
  }

  &__flag {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.6);
    transition: color 0.2s;
  }
}

// Фото производства
.production-photo {
  width: 100%;
  height: 420px;
  border-radius: 32px;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// ===========================================
// FULL CYCLE PRODUCTION
// ===========================================
.full-cycle {
  display: flex;
  gap: 32px;
  margin-bottom: 160px;

  &__text {
    flex: 0 0 352px;
    padding-top: 62px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 48px;
    line-height: normal;
    color: #000;
    margin: 0 0 24px;
  }

  &__description {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    color: $color-dark;
    margin: 0 0 48px;
  }

  &__highlight {
    font-style: italic;
    color: $color-accent;
  }

  &__certifications {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__cert-logo {
    opacity: 0.1;

    &--ce {
      width: 106px;
      height: 75px;
    }

    &--iso {
      width: 120px;
      height: 100px;
    }
  }

  &__card {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: $color-light-bg;
    border-radius: 32px;
    overflow: hidden;
  }
}

// Блок с этапами производства
.production-steps {
  position: relative;
  height: 376px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  margin: 8px 8px 0;

  &__bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  &__bg-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;
    padding: 64px 69px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 8px;

    &--1 {
      margin-left: 38px;
    }

    &--2 {
      margin-left: 0;
    }

    &--3 {
      margin-left: 118px;
    }

    &--4 {
      margin-left: 142px;
    }
  }

  &__step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 32px 13px;
    border-radius: 32px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    white-space: nowrap;

    &--dark {
      background: url("/images/production-sites/Nero Marquina 1.png") center /
        cover;
      color: white;
    }

    &--light {
      background: white;
      color: #000;
    }

    &--accent {
      background: $color-primary;
      color: white;
    }
  }

  &__arrow {
    flex-shrink: 0;

    img {
      display: block;
      height: 56px;
      width: auto;
    }

    &--small img {
      width: 81px;
    }

    &--reverse {
      img {
        width: 81px;
      }
    }
  }

  &__down-arrow {
    position: absolute;
    left: 50%;
    bottom: -60px;
    transform: translateX(-50%) rotate(90deg);
    z-index: 3;

    img {
      width: 56px;
      height: 120px;
    }
  }
}

// Блок с результатом
.excellent-result {
  position: relative;
  height: 222px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  margin: 0 8px 8px;

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

    svg {
      display: block;
    }
  }

  &__text {
    position: absolute;
    left: 16px;
    top: 16px;
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 32px;
    line-height: normal;
    color: $color-accent;
    margin: 0;
    z-index: 3;
  }

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}

// ===========================================
// DOOR-TO-DOOR - Схема доставки
// ===========================================
.door-to-door {
  margin-bottom: 32px;

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 48px;
    line-height: normal;
    color: #000;
    margin: 0 0 32px;
  }

  &__scheme {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 290px;
    padding-top: 50px;
  }

  // Точки на схеме
  &__point {
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    &--start {
      left: -20px;
      top: calc(50% + 72px);
    }

    &--mid1 {
      left: calc(33.33% - 20px);
      top: calc(50% + 72px);
    }

    &--mid2 {
      left: calc(66.67% - 20px);
      top: calc(50% + 73px);
    }
  }

  &__diamond {
    width: 8px;
    height: 8px;
    background: white;
    transform: rotate(45deg);
  }

  // Сегменты схемы
  &__segment {
    position: relative;

    &--ship {
      padding-right: 20px;
    }

    &--train {
      padding: 0 20px;
    }

    &--auto {
      padding-left: 20px;
    }
  }

  // Линии SVG
  &__line {
    position: absolute;

    &--ship {
      left: 0;
      top: 32px;
      width: 100%;
      height: 164px;
    }

    &--train-top {
      left: 0;
      top: 0;
      width: 100%;
      height: 169px;
    }

    &--train-mid {
      left: 0;
      top: 80px;
      width: 100%;
      height: 89px;
    }

    &--train-bottom {
      left: 0;
      top: 161px;
      width: 100%;
      height: 8px;
    }
  }

  // Контейнеры справа
  &__containers {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__container-line {
    position: relative;
    width: 373px;
    height: 64px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: calc(100% - 50px);
      height: 2px;
      background: $color-primary;
      border-radius: 1px;
    }
  }

  &__container-point {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background: white;
      transform: rotate(45deg);
    }
  }

  // Подписи
  &__label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 32px;
    line-height: normal;
    color: #b9b9b9;
    text-align: center;
    margin: 0;
  }

  // Разделители
  &__divider {
    position: absolute;
    top: calc(100% - 32px);
    width: 2px;
    height: 26px;
    background: #b9b9b9;
    border-radius: 1px;

    &--1 {
      left: calc(33.33% - 1px);
    }

    &--2 {
      left: calc(66.67% - 1px);
    }
  }
}

// ===========================================
// BENEFITS ROW - Карточки преимуществ
// ===========================================
.benefits-row {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(90deg, $color-light-bg 0%, $color-light-bg 100%);

  &__divider {
    position: absolute;
    left: calc(66.67% + 0.33px);
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.08) 20%,
      rgba(0, 0, 0, 0.08) 80%,
      transparent 100%
    );
  }
}

.benefit-card {
  position: relative;
  padding: 32px;
  min-height: 269px;

  &--dark {
    background: $color-dark;

    .benefit-card__icon {
      background: white;
    }

    .benefit-card__title,
    .benefit-card__description {
      color: white;
    }
  }

  &--light {
    background: $color-light-bg;

    .benefit-card__icon {
      background: #e9e9ea;
    }

    .benefit-card__title,
    .benefit-card__description {
      color: #000;
    }
  }

  &__icon {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 32px;
    line-height: normal;
    margin: 0 0 16px;
  }

  &__description {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 20px;
    line-height: 1.3;
    margin: 0;
    max-width: 315px;
  }
}

// ===========================================
// АДАПТИВНОСТЬ
// ===========================================
@media (max-width: 1200px) {
  .production-sites__container {
    max-width: 100%;
    padding: 0 16px;
  }

  .map-card__stats {
    left: 32px;
  }

  .full-cycle {
    &__text {
      flex: 0 0 300px;
    }
  }

  .production-steps__content {
    padding: 40px;
  }
}

@media (max-width: 992px) {
  .sites-section__title {
    font-size: 48px;
  }

  .map-card {
    height: 250px;

    &__stat-value {
      font-size: 48px;
    }

    &__stat-label {
      font-size: 18px;
    }
  }

  .country-switcher {
    top: 236px;
    flex-wrap: wrap;
    width: calc(100% - 32px);
    max-width: 560px;

    &__item {
      width: calc(50% - 2px);
    }
  }

  .production-photo {
    height: 320px;
    margin-top: 30px;
  }

  .full-cycle {
    flex-direction: column;

    &__text {
      flex: none;
      padding-top: 0;
    }

    &__title {
      font-size: 40px;
    }
  }

  .production-steps {
    height: auto;
    min-height: 350px;

    &__content {
      padding: 32px 24px;
    }

    &__step {
      font-size: 16px;
      padding: 10px 20px;
    }

    &__row {
      margin-left: 0 !important;
      flex-wrap: wrap;
    }
  }

  .door-to-door {
    &__title {
      font-size: 40px;
    }

    &__scheme {
      display: none; // Схема сложная, скрываем на мобильных
    }
  }

  .benefits-row {
    grid-template-columns: 1fr;
  }

  .benefit-card {
    min-height: auto;
    padding: 24px;

    &--dark {
      border-radius: 32px 32px 0 0;
    }
  }
}

@media (max-width: 768px) {
  .production-sites {
    padding: 40px 0 60px;
  }

  .sites-section {
    margin-bottom: 80px;

    &__header {
      margin-bottom: 32px;
    }

    &__subtitle {
      font-size: 24px;
    }

    &__title {
      font-size: 32px;
    }
  }

  .map-card {
    height: 200px;

    &__gradient {
      width: 150px;
    }

    &__stats {
      top: 24px;
      left: 16px;
      gap: 24px;
    }

    &__stat-value {
      font-size: 32px;
    }

    &__stat-label {
      font-size: 14px;
    }
  }

  .country-switcher {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin-top: -30px;
    margin-bottom: 16px;
    width: 100%;
    max-width: none;
    border-width: 4px;
  }

  .production-photo {
    height: 250px;
    margin-top: 0;
  }

  .full-cycle {
    margin-bottom: 80px;

    &__title {
      font-size: 32px;
    }

    &__description {
      font-size: 18px;
    }

    &__certifications {
      gap: 16px;
    }

    &__cert-logo {
      &--ce {
        width: 70px;
        height: auto;
      }

      &--iso {
        width: 80px;
        height: auto;
      }
    }
  }

  .production-steps {
    &__step {
      font-size: 12px;
      padding: 8px 12px;
      letter-spacing: 1px;
    }

    &__arrow img {
      height: 40px;
    }

    &__down-arrow {
      bottom: -40px;

      img {
        width: 40px;
        height: 86px;
      }
    }
  }

  .excellent-result {
    height: 180px;

    &__text {
      font-size: 24px;
    }
  }

  .door-to-door {
    margin-bottom: 24px;

    &__title {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  .benefit-card {
    &__title {
      font-size: 24px;
    }

    &__description {
      font-size: 16px;
    }
  }
}
</style>
