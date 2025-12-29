<script setup lang="ts">
/**
 * Portfolio.vue - Секция портфолио проектов
 *
 * Структура компонента:
 * 1. Подзаголовок "Portfolio"
 * 2. Заголовок "For Business, Urban Enviroment, Residential Complexes or Private Houses"
 * 3. Галерея изображений с автоматической прокруткой
 * 4. Описание объектов с переключением через стрелки
 * 5. Счетчик изображений
 * 6. Логотипы партнеров
 */

import { ref, computed, onMounted, onUnmounted } from "vue";
import PortfolioCompanies from "../../assets/svg/portfolio/portfolio-companies.vue";

// Типизация для объектов портфолио
interface PortfolioItem {
  id: number;
  name: string;
  description: string;
  imageIndex: number; // Индекс изображения в галерее (0-11)
}

// Данные объектов портфолио
// Каждый объект связан с определенным изображением в галерее
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Expoforum",
    description:
      "Is the latest congress and exhibition center located on the Petersburg highway.",
    imageIndex: 2, // Центральное изображение (главное)
  },
  {
    id: 2,
    name: "Business Center",
    description:
      "Modern office complex with innovative architectural solutions.",
    imageIndex: 0,
  },
  {
    id: 3,
    name: "Residential Complex",
    description: "Luxury residential development with premium finishes.",
    imageIndex: 5,
  },
];

// Изображения из папки portfolio
// Файлы: 1.jpg, 2.png, 3.png, 4.png, 5.png, 6.jpg, 7.png, 8.png, 9.png, 10.jpg
const portfolioImages = [
  "/images/portfolio/1.jpg",
  "/images/portfolio/2.png",
  "/images/portfolio/3.png",
  "/images/portfolio/4.png",
  "/images/portfolio/5.png",
  "/images/portfolio/6.jpg",
  "/images/portfolio/7.png",
  "/images/portfolio/8.png",
  "/images/portfolio/9.png",
  "/images/portfolio/10.jpg",
];

// Текущий активный объект
const activeItemIndex = ref(0);
// Начинаем с центрального изображения (индекс 2 согласно макету)
const currentImageIndex = ref(2);

// Автопрокрутка галереи
let autoScrollInterval: ReturnType<typeof setInterval> | null = null;
const autoScrollDelay = 3000; // 3 секунды

// Функция для переключения на следующий объект
const nextItem = () => {
  // Переключаем изображение в галерее (смещение на ±1)
  currentImageIndex.value =
    (currentImageIndex.value + 1) % portfolioImages.length;

  // Если есть объект с соответствующим индексом изображения, переключаем описание
  const matchingItem = portfolioItems.find(
    (item) => item.imageIndex === currentImageIndex.value
  );
  if (matchingItem) {
    activeItemIndex.value = portfolioItems.findIndex(
      (item) => item.id === matchingItem.id
    );
  }
};

// Функция для переключения на предыдущий объект
const prevItem = () => {
  // Переключаем изображение в галерее (смещение на ±1)
  currentImageIndex.value =
    (currentImageIndex.value - 1 + portfolioImages.length) %
    portfolioImages.length;

  // Если есть объект с соответствующим индексом изображения, переключаем описание
  const matchingItem = portfolioItems.find(
    (item) => item.imageIndex === currentImageIndex.value
  );
  if (matchingItem) {
    activeItemIndex.value = portfolioItems.findIndex(
      (item) => item.id === matchingItem.id
    );
  }
};

// Текущий объект
const currentItem = computed(() => portfolioItems[activeItemIndex.value]);

// Счетчик изображений
const imageCounter = computed(() => {
  return `${currentImageIndex.value + 1} | ${portfolioImages.length}`;
});

// Автопрокрутка галереи
const startAutoScroll = () => {
  if (autoScrollInterval) return;
  autoScrollInterval = setInterval(() => {
    // Переключаем на следующее изображение
    currentImageIndex.value =
      (currentImageIndex.value + 1) % portfolioImages.length;

    // Обновляем описание, если есть соответствующий объект
    const matchingItem = portfolioItems.find(
      (item) => item.imageIndex === currentImageIndex.value
    );
    if (matchingItem) {
      activeItemIndex.value = portfolioItems.findIndex(
        (item) => item.id === matchingItem.id
      );
    }
  }, autoScrollDelay);
};

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});

// Структура изображений согласно правильной вёрстке
// Всего 12 позиций, главное изображение на позиции 3 (индекс 2 в массиве)
// Все изображения смещены на 225px влево (200px + 50px - 25px)
const imagePositions = [
  {
    id: 1,
    top: "0px",
    left: "1745px", // было 1720px
    width: "160px",
    height: "424px",
    imageIndex: 0, // Используем изображение 1.jpg
  },
  {
    id: 2,
    top: "0px",
    left: "-1px", // было -26px
    width: "128px", // w-32 = 128px
    height: "424px",
    imageIndex: 1, // Используем изображение 2.png
  },
  {
    id: 3,
    top: "0px",
    left: "159px", // было 134px
    width: "544px",
    height: "620px",
    imageIndex: 2, // Главное изображение - 3.png
  },
  {
    id: 4,
    top: "0px",
    left: "735px", // было 710px
    width: "160px", // w-40 = 160px
    height: "424px",
    imageIndex: 3, // Используем изображение 4.png
  },
  {
    id: 5,
    top: "0px",
    left: "927px", // было 902px
    width: "160px",
    height: "424px",
    imageIndex: 4, // Используем изображение 5.png
  },
  {
    id: 6,
    top: "0px",
    left: "1119px", // было 1094px
    width: "160px",
    height: "424px",
    imageIndex: 5, // Используем изображение 6.jpg
  },
  {
    id: 7,
    top: "0px",
    left: "1311px", // было 1286px
    width: "128px",
    height: "424px",
    imageIndex: 6, // Используем изображение 7.png
  },
  {
    id: 8,
    top: "456px",
    left: "1745px", // было 1720px
    width: "160px",
    height: "164px",
    imageIndex: 7, // Используем изображение 8.png
  },
  {
    id: 9,
    top: "456px",
    left: "-1px", // было -26px
    width: "128px",
    height: "164px",
    imageIndex: 8, // Используем изображение 9.png
  },
  {
    id: 10,
    top: "456px",
    left: "735px", // было 710px
    width: "160px",
    height: "164px",
    imageIndex: 9, // Используем изображение 10.jpg
  },
  {
    id: 11,
    top: "456px",
    left: "927px", // было 902px
    width: "352px",
    height: "164px",
    imageIndex: 0, // Используем изображение 1.jpg (циклически)
  },
  {
    id: 12,
    top: "456px",
    left: "1311px", // было 1286px
    width: "128px",
    height: "164px",
    imageIndex: 1, // Используем изображение 2.png (циклически)
  },
];

// Функция для обработки клика на миниатюру
const handleThumbnailClick = (imageIndex: number) => {
  currentImageIndex.value = imageIndex;

  // Ищем объект с соответствующим индексом изображения
  const matchingItem = portfolioItems.find(
    (item) => item.imageIndex === imageIndex
  );
  if (matchingItem) {
    activeItemIndex.value = portfolioItems.findIndex(
      (item) => item.id === matchingItem.id
    );
  }

  // Перезапускаем автопрокрутку после ручного переключения
  stopAutoScroll();
  setTimeout(() => {
    startAutoScroll();
  }, autoScrollDelay);
};

// Проверка, является ли позиция главным изображением
const isMainImage = (positionId: number): boolean => {
  return positionId === 3; // Главное изображение на позиции 3
};

// Города для полосы прокрутки
const cities = [
  "Istanbul",
  "Dubai",
  "London",
  "Cairo",
  "Alanta",
  "Doha",
  "Xiamen",
  "Moscow",
  "Riyadh",
  "Tehran",
];
</script>

<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <!-- Подзаголовок -->
      <p class="portfolio__subtitle">Portfolio</p>

      <!-- Заголовок -->
      <h2 class="portfolio__title">
        For Business, Urban Enviroment, Residential Complexes
        <br />
        or Private Houses
      </h2>

      <!-- Галерея изображений -->
      <div class="portfolio__gallery overflow-hidden">
        <div class="portfolio__gallery-container">
          <!-- Все изображения с абсолютным позиционированием -->
          <div
            v-for="position in imagePositions"
            :key="position.id"
            :class="[
              isMainImage(position.id)
                ? 'portfolio__main-image'
                : 'portfolio__thumbnail',
              {
                'portfolio__thumbnail--active':
                  !isMainImage(position.id) &&
                  position.imageIndex === currentImageIndex,
              },
            ]"
            :style="{
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height,
            }"
            @click="
              !isMainImage(position.id) &&
                handleThumbnailClick(position.imageIndex)
            "
          >
            <img
              :src="
                isMainImage(position.id)
                  ? portfolioImages[currentImageIndex]
                  : portfolioImages[position.imageIndex]
              "
              :alt="`Portfolio image ${position.id}`"
              class="portfolio__image"
            />
          </div>
        </div>
      </div>

      <!-- Описание объекта и навигация -->
      <div class="portfolio__description-section max-w-[1120px] mx-auto">
        <!-- Счетчик -->
        <div class="flex flex-col gap-4">
          <div class="portfolio__counter">
            {{ imageCounter }}
          </div>
          <!-- Описание -->
          <div class="portfolio__description">
            <p class="portfolio__description-name">{{ currentItem.name }}.</p>
            <p class="portfolio__description-text">
              {{ currentItem.description }}
            </p>
          </div>
        </div>

        <!-- Навигационные стрелки -->
        <div class="portfolio__navigation">
          <button
            class="portfolio__nav-button portfolio__nav-button--prev cursor-pointer"
            @click="prevItem"
            aria-label="Previous item"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="16"
                fill="#333333"
                fill-opacity="0.05"
              />
              <path
                d="M26 32L18 24L26 16"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="portfolio__nav-button portfolio__nav-button--next cursor-pointer"
            @click="nextItem"
            aria-label="Next item"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="16" fill="#333333" />
              <rect width="48" height="48" rx="16" fill="#A76508" />
              <path
                d="M22 16L30 24L22 32"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Логотипы партнеров -->
      <div class="flex justify-center">
        <PortfolioCompanies />
      </div>
    </div>

    <!-- Полоса прокрутки с городами (на всю ширину экрана) -->
    <div class="portfolio__city-line">
      <div class="portfolio__city-list">
        <!-- Дублируем список несколько раз для бесконечной прокрутки -->
        <template v-for="copy in [1, 2, 3]" :key="`copy-${copy}`">
          <template
            v-for="(city, index) in cities"
            :key="`city-${copy}-${index}`"
          >
            <p class="portfolio__city-item">{{ city }}</p>
            <p
              class="portfolio__city-separator"
              v-if="index < cities.length - 1"
            >
              ⬩
            </p>
          </template>
          <p class="portfolio__city-separator" v-if="copy < 3">⬩</p>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
  position: relative;
  width: 100%;
  background: #f5f5f7;
  overflow: hidden;
  padding-top: 133px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  &__subtitle {
    font-family: var(--font-montserrat);
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: #a76508;
    text-align: center;
    margin-bottom: 13px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 64px;
    line-height: normal;
    color: #333;
    text-align: center;
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }

  &__gallery {
    margin-bottom: 65px;
    overflow: hidden; // Скрываем части изображений, выходящие за границы
  }

  &__gallery-container {
    position: relative;
    height: 650px;
    margin: 0 auto;

    margin-top: 25px;
  }

  &__main-image {
    position: absolute;
    background: #d7d7d7;
    border-radius: 32px;
    overflow: hidden;
    z-index: 2;
  }

  &__thumbnail {
    position: absolute;
    background: #d7d7d7;
    border-radius: 32px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.05);
      z-index: 3;
    }

    &--active {
      opacity: 0.7;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__description-section {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 104px;
  }

  &__counter {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 24px;
    line-height: normal;
    color: rgba(51, 51, 51, 0.4);
    white-space: nowrap;
    margin-top: 9px;
  }

  &__description {
    flex: 1;
    max-width: 544px;
  }

  &__description-name {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 24px;
    line-height: 1.4;
    color: #333;
    margin-bottom: 0;
  }

  &__description-text {
    font-family: var(--font-montserrat);
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    color: rgba(51, 51, 51, 0.6);
    margin-top: 0;
  }

  &__navigation {
    display: flex;
    gap: 16px;
    margin-left: auto;
  }

  &__nav-button {
    width: 48px;
    height: 48px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  &__partners {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 40px;
    align-items: center;
    justify-items: center;
    opacity: 0.1;
    max-width: 1084px;
    margin: 0 auto;
  }

  &__partner-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }

  &__partner-logo-img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__city-line {
    background: #a76508;
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
  }

  &__city-list {
    display: flex;
    align-items: center;
    gap: 24px;
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.4);
    white-space: nowrap;
    animation: scroll-cities 30s linear infinite;
    will-change: transform;
  }

  &__city-item {
    position: relative;
    flex-shrink: 0;
    margin: 0;
  }

  &__city-separator {
    position: relative;
    flex-shrink: 0;
    margin: 0;
  }
}

@keyframes scroll-cities {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

// Адаптивность
@media (max-width: 1696px) {
  .portfolio {
    &__gallery-container {
      width: 100%;
      max-width: 1696px;
    }
  }
}

@media (max-width: 1440px) {
  .portfolio {
    &__container {
      padding: 0 80px;
    }

    &__description-section {
      padding: 0 80px;
    }
  }
}

@media (max-width: 1024px) {
  .portfolio {
    &__title {
      font-size: 48px;
      margin-bottom: 120px;
    }

    &__gallery-container {
      height: 500px;
      width: 100%;
      max-width: 100%;
    }

    &__main-image {
      left: 50% !important;
      transform: translateX(-50%);
      width: 80% !important;
      max-width: 544px;
    }

    &__thumbnail {
      display: none; // Скрываем миниатюры на планшете
    }

    &__partners {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }
}

@media (max-width: 768px) {
  .portfolio {
    padding: 60px 0 80px;

    &__subtitle {
      font-size: 24px;
    }

    &__title {
      font-size: 32px;
      margin-bottom: 60px;
    }

    &__gallery-container {
      height: 400px;
    }

    &__description-section {
      flex-direction: column;
      gap: 20px;
    }

    &__navigation {
      margin-left: 0;
    }

    &__partners {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    &__city-line {
      margin-top: 40px;
      min-height: 50px;
    }

    &__city-list {
      font-size: 18px;
      gap: 16px;
      animation-duration: 20s;
    }
  }
}
</style>
