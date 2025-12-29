<script setup lang="ts">
import SampleBg from "../../assets/svg/products-grid/sample-bg.vue";
import CtaPattern from "../../assets/svg/products-grid/cta-pattern.vue";

// Emits
const emit = defineEmits<{
  "open-contact-modal": [variant: "request-catalog"];
  "open-stone-page": [stoneId: string];
}>();

// Обработчик клика на кнопку "Request catalog"
const handleRequestCatalogClick = () => {
  emit("open-contact-modal", "request-catalog");
};

// Маппинг ID камней из компонента в ID в данных
const stoneIdMap: Record<string, string> = {
  "bianco-carrara": "bianco-carrara",
  // Добавьте другие камни по мере необходимости
};

// Обработчик клика на карточку продукта
const handleProductCardClick = (card: ProductCard) => {
  // Проверяем, есть ли маппинг для этого камня
  const stoneId = stoneIdMap[card.id];
  if (stoneId) {
    emit("open-stone-page", stoneId);
  }
};

/**
 * Карточка материала в сетке.
 * Размеры карточки: 268x296px, скругление 16px
 * Внутренний контейнер изображения: 260x288px, скругление 12px, padding 4px
 */
type ProductCard = {
  type: "product";
  id: string;
  title: string;
  image: string;
  accentColor: string; // Цвет вертикальной полоски слева внизу
  accentHeight?: number; // Высота полоски (по умолчанию ~100px)
  badge?: "best-seller";
};

type CatalogCtaCard = {
  type: "cta";
  id: string;
  stats: string;
  buttonLabel: string;
};

type SectionCard = ProductCard | CatalogCtaCard;

type StoneSection = {
  id: string;
  title: string;
  cards: SectionCard[];
  showLoadMore?: boolean;
};

const IMAGE_ROOT = "/images/stone-types";

// Описание секций и карточек вынесено в данные для облегчения поддержки.
const sections: StoneSection[] = [
  {
    id: "marble",
    title: "Marble",
    cards: [
      {
        type: "product",
        id: "thassos-white",
        title: "Thassos White",
        image: `${IMAGE_ROOT}/Group 80.png`,
        accentColor: "#d5d3cf",
        accentHeight: 148,
      },
      {
        type: "product",
        id: "bianco-carrara",
        title: "Bianco Carrara",
        image: `${IMAGE_ROOT}/НейроХолст (2) 2.png`,
        accentColor: "#c8c8c8",
        accentHeight: 148,
        badge: "best-seller",
      },
      {
        type: "product",
        id: "statuario",
        title: "Statuario",
        image: `${IMAGE_ROOT}/closeup-pristine-white-marble-surface-with-soft-veining 2.png`,
        accentColor: "#edeae6",
        accentHeight: 110,
      },
      {
        type: "product",
        id: "arabescato",
        title: "Arabescato Classico",
        image: `${IMAGE_ROOT}/closeup-pristine-white-marble-surface-with-soft-veining 1.png`,
        accentColor: "#f2efea",
        accentHeight: 180,
      },
      {
        type: "product",
        id: "crema-marfil",
        title: "Crema Marfil",
        image: `${IMAGE_ROOT}/НейроХолст (2) 1.png`,
        accentColor: "#e2c6a3",
        accentHeight: 139,
      },
      {
        type: "product",
        id: "crema-uno",
        title: "Crema Uno",
        image: `${IMAGE_ROOT}/Crema Uno текстура 1.png`,
        accentColor: "#d9c3a4",
        accentHeight: 125,
      },
      {
        type: "product",
        id: "botticino",
        title: "Botticino Classico",
        image: `${IMAGE_ROOT}/Botticino Classico текстура 1.png`,
        accentColor: "#dbc3a5",
        accentHeight: 165,
      },
      {
        type: "product",
        id: "brown-imperial",
        title: "Brown Imperial Espera",
        image: `${IMAGE_ROOT}/Rosso Levanto текстура 1.png`,
        accentColor: "#5c2c1f",
        accentHeight: 202,
        badge: "best-seller",
      },
      {
        type: "product",
        id: "bidasar-green",
        title: "Bidasar Green",
        image: `${IMAGE_ROOT}/Bidasar Green тиекстура 1.png`,
        accentColor: "#3d4a34",
        accentHeight: 141,
      },
      {
        type: "product",
        id: "crema-marfil-alt",
        title: "Rosso Levanto",
        image: `${IMAGE_ROOT}/Rosso Levanto текстура 1-1.png`,
        accentColor: "#8b3d2e",
        accentHeight: 140,
      },
      {
        type: "product",
        id: "emperador",
        title: "Emperador Dark",
        image: `${IMAGE_ROOT}/freepik__enhance__80710 2-2.png`,
        accentColor: "#3f2c1f",
        accentHeight: 159,
      },
      {
        type: "product",
        id: "nero-portoro",
        title: "Nero Portoro",
        image: `${IMAGE_ROOT}/Nero Portoro 2.png`,
        accentColor: "#1a1610",
        accentHeight: 135,
      },
      {
        type: "product",
        id: "black-gold",
        title: "Black and Gold",
        image: `${IMAGE_ROOT}/freepik__enhance__80710 2-1.png`,
        accentColor: "#1f1410",
        accentHeight: 147,
      },
      {
        type: "product",
        id: "nero-marquina",
        title: "Nero Marquina",
        image: `${IMAGE_ROOT}/Nero Marquina 1.png`,
        accentColor: "#0f0f10",
        accentHeight: 151,
      },
      {
        type: "product",
        id: "belgium-black",
        title: "Belgium Black",
        image: `${IMAGE_ROOT}/Product Image.png`,
        accentColor: "#040404",
        accentHeight: 146,
      },
      {
        type: "cta",
        id: "catalog-cta",
        stats: "150+",
        buttonLabel: "Request catalog",
      },
    ],
  },
  {
    id: "granite",
    title: "Granite",
    showLoadMore: true,
    cards: [
      {
        type: "product",
        id: "kashmir-white",
        title: "Kashmir White",
        image: `${IMAGE_ROOT}/Kashmir White текстура 1.png`,
        accentColor: "#d9d7d2",
        accentHeight: 148,
        badge: "best-seller",
      },
      {
        type: "product",
        id: "kashmir-gold",
        title: "Kashmir Gold",
        image: `${IMAGE_ROOT}/Kashmir Gold текстура 1.png`,
        accentColor: "#d2b58a",
        accentHeight: 139,
      },
      {
        type: "product",
        id: "azul-bahia",
        title: "Azul Bahia",
        image: `${IMAGE_ROOT}/Azul Bahia текстура 1.png`,
        accentColor: "#1f3558",
        accentHeight: 118,
      },
      {
        type: "product",
        id: "blue-pearl",
        title: "Blue Pearl",
        image: `${IMAGE_ROOT}/freepik__enhance__9569 1.png`,
        accentColor: "#162034",
        accentHeight: 116,
      },
    ],
  },
  {
    id: "travertine",
    title: "Travertine",
    showLoadMore: true,
    cards: [
      {
        type: "product",
        id: "white-travertine",
        title: "White",
        image: `${IMAGE_ROOT}/Bianco Travertine 1.png`,
        accentColor: "#d8cdbf",
        accentHeight: 93,
      },
      {
        type: "product",
        id: "bianco-travertine",
        title: "Bianco",
        image: `${IMAGE_ROOT}/Bianco Travertine 1-1.png`,
        accentColor: "#d6c4b1",
        accentHeight: 93,
      },
      {
        type: "product",
        id: "silver-travertine",
        title: "Silver",
        image: `${IMAGE_ROOT}/Silver Travertine текстура 1.png`,
        accentColor: "#a7a099",
        accentHeight: 85,
      },
      {
        type: "product",
        id: "classic-travertine",
        title: "Classic",
        image: `${IMAGE_ROOT}/polnyi-kadr-teksturirovannoi-steny 1.png`,
        accentColor: "#c9b8a3",
        accentHeight: 93,
      },
    ],
  },
  {
    id: "onyx",
    title: "Onyx",
    showLoadMore: true,
    cards: [
      {
        type: "product",
        id: "costa-blanca",
        title: "Costa Blanca",
        image: `${IMAGE_ROOT}/polnyi-kadr-abstraktnogo-fona 1.png`,
        accentColor: "#c9bfb4",
        accentHeight: 140,
      },
      {
        type: "product",
        id: "black-white-onyx",
        title: "Black & White",
        image: `${IMAGE_ROOT}/blizkii-vzglad-na-polirovannyi-oniksovyi-kamen-s-sloistymi-teksturami-i-venami.png`,
        accentColor: "#4d4946",
        accentHeight: 140,
      },
      {
        type: "product",
        id: "honey-onyx",
        title: "Honey",
        image: `${IMAGE_ROOT}/abstraktnyi-estestvennyi-serohovatyi-teksturu-fona 1.png`,
        accentColor: "#b5986a",
        accentHeight: 93,
      },
      {
        type: "product",
        id: "oriental-onyx",
        title: "Oriental",
        image: `${IMAGE_ROOT}/freepik__enhance__64764 1.png`,
        accentColor: "#d6b66c",
        accentHeight: 103,
        badge: "best-seller",
      },
    ],
  },
  {
    id: "limestone",
    title: "Limestone",
    showLoadMore: true,
    cards: [
      {
        type: "product",
        id: "capri",
        title: "Capri",
        image: `${IMAGE_ROOT}/freepik__enhance__80710 2.png`,
        accentColor: "#d7c9b8",
        accentHeight: 83,
      },
      {
        type: "product",
        id: "limra",
        title: "Limra",
        image: `${IMAGE_ROOT}/freepik__enhance__7258 1.png`,
        accentColor: "#f2e3cd",
        accentHeight: 86,
        badge: "best-seller",
      },
      {
        type: "product",
        id: "blanco-paloma",
        title: "Blanco Paloma",
        image: `${IMAGE_ROOT}/freepik__enhance__7261 1.png`,
        accentColor: "#e3d1c0",
        accentHeight: 150,
      },
      {
        type: "product",
        id: "moleanos",
        title: "Moleanos",
        image: `${IMAGE_ROOT}/freepik__enhance__7260 1.png`,
        accentColor: "#d8cab8",
        accentHeight: 118,
      },
    ],
  },
  {
    id: "precious",
    title: "Semiprecious stone",
    showLoadMore: true,
    cards: [
      {
        type: "product",
        id: "agate",
        title: "Agate",
        image: `${IMAGE_ROOT}/1 754380794.png`,
        accentColor: "#6a4f4a",
        accentHeight: 88,
      },
      {
        type: "product",
        id: "amethyst",
        title: "Amethyst",
        image: `${IMAGE_ROOT}/текстура 2.png`,
        accentColor: "#4b2761",
        accentHeight: 114,
      },
      {
        type: "product",
        id: "malachite",
        title: "Malachite",
        image: `${IMAGE_ROOT}/freepik__enhance__46933 1.png`,
        accentColor: "#19573d",
        accentHeight: 115,
      },
      {
        type: "product",
        id: "tiger-eye",
        title: "Tiger Eye",
        image: `${IMAGE_ROOT}/Тайгер ай 1.png`,
        accentColor: "#7d4c16",
        accentHeight: 110,
      },
    ],
  },
];

const isProductCard = (card: SectionCard): card is ProductCard =>
  card.type === "product";

const isCtaCard = (card: SectionCard): card is CatalogCtaCard =>
  card.type === "cta";
</script>

<template>
  <section class="stone-types">
    <!-- Заголовок секции -->
    <div class="stone-types__header">
      <p class="stone-types__subtitle">Palette</p>
      <h2 class="stone-types__title">Types of stones</h2>
    </div>

    <!-- Контейнер с секциями -->
    <div class="stone-types__container">
      <div
        v-for="section in sections"
        :key="section.id"
        class="stone-section"
        :data-section-id="section.id"
      >
        <!-- Заголовок секции с маркером -->
        <div class="stone-section__header">
          <span class="stone-section__marker"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8L8 0L16 8L8 16L0 8Z" fill="#A76508" />
            </svg>
          </span>
          <h3 class="stone-section__title">{{ section.title }}</h3>
        </div>

        <!-- Сетка карточек -->
        <div class="stone-section__grid">
          <template v-for="card in section.cards" :key="card.id">
            <!-- Карточка продукта -->
            <article
              v-if="isProductCard(card) && card.id !== 'statuario'"
              class="product-card cursor-pointer"
              :data-card-id="card.id"
              @click="handleProductCardClick(card)"
            >
              <!-- Контейнер изображения -->
              <div class="product-card__image-container">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="product-card__image"
                />
                <!-- Название камня -->
                <p class="product-card__title tracking-0! whitespace-nowrap">
                  {{ card.title }}
                </p>
              </div>
              <!-- Бейдж Best seller -->
              <span
                v-if="card.badge === 'best-seller'"
                class="product-card__badge"
              >
                Best seller
              </span>
            </article>

            <!-- Карточка продукта Statuario -->
            <article
              v-else-if="card.id === 'statuario'"
              class="product-card relative"
            >
              <div class="product-card__image-container">
                <img src="/images/stone-types/statuario.png" alt="Statuario" />
                <img
                  src="/images/stone-types/BC 1.png"
                  alt="Statuario"
                  class="w-[72px] h-[72px] object-contain absolute top-1 left-1"
                />
                <div class="flex flex-col gap-1 pl-4 pt-2">
                  <p class="text-black text-[20px] font-normal leading-110%">
                    Statuario
                  </p>
                  <span class="text-black text-[14px] font-normal leading-110%">
                    Perfectly suited for large-scale interior and exterior
                    applications.</span
                  >

                  <button
                    class="product-card__button cursor-pointer"
                    @click="handleRequestCatalogClick"
                  >
                    <svg
                      width="111"
                      height="32"
                      viewBox="0 0 111 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="111" height="32" rx="8" fill="#E88C0A" />
                      <rect width="111" height="32" rx="8" fill="#A76508" />
                      <path
                        d="M17.198 14.568C17.3847 14.1853 17.6693 13.8773 18.052 13.644C18.444 13.4013 18.878 13.28 19.354 13.28C19.5313 13.28 19.7133 13.2987 19.9 13.336C20.096 13.3733 20.2827 13.448 20.46 13.56C20.6467 13.6627 20.8147 13.8027 20.964 13.98C21.1227 14.1573 21.258 14.386 21.37 14.666C21.594 14.218 21.8973 13.8773 22.28 13.644C22.672 13.4013 23.134 13.28 23.666 13.28C24.4967 13.28 25.1173 13.5273 25.528 14.022C25.948 14.5167 26.158 15.17 26.158 15.982V20H25.206V16.374C25.206 15.6833 25.0753 15.128 24.814 14.708C24.562 14.288 24.128 14.078 23.512 14.078C23.1667 14.078 22.8727 14.148 22.63 14.288C22.3967 14.428 22.2053 14.6147 22.056 14.848C21.916 15.072 21.8133 15.3287 21.748 15.618C21.6827 15.9073 21.65 16.206 21.65 16.514V20H20.698V16.178C20.698 15.8607 20.6747 15.5713 20.628 15.31C20.5813 15.0487 20.4973 14.8293 20.376 14.652C20.264 14.4653 20.1053 14.3253 19.9 14.232C19.6947 14.1293 19.4333 14.078 19.116 14.078C18.892 14.078 18.6633 14.1293 18.43 14.232C18.206 14.3347 18.0007 14.4933 17.814 14.708C17.6367 14.9133 17.492 15.1793 17.38 15.506C17.268 15.8233 17.212 16.2013 17.212 16.64V20H16.26V14.89C16.26 14.7127 16.2553 14.484 16.246 14.204C16.2367 13.924 16.2227 13.672 16.204 13.448H17.114C17.1327 13.6253 17.1467 13.8213 17.156 14.036C17.1653 14.2507 17.17 14.428 17.17 14.568H17.198ZM35.1294 16.724C35.1294 17.2187 35.0407 17.676 34.8634 18.096C34.6954 18.516 34.4574 18.88 34.1494 19.188C33.8414 19.496 33.4727 19.7387 33.0434 19.916C32.614 20.084 32.1427 20.168 31.6294 20.168C31.1254 20.168 30.6587 20.084 30.2294 19.916C29.8 19.7387 29.4314 19.496 29.1234 19.188C28.8154 18.88 28.5727 18.516 28.3954 18.096C28.2274 17.676 28.1434 17.2187 28.1434 16.724C28.1434 16.2293 28.2274 15.772 28.3954 15.352C28.5727 14.932 28.8154 14.568 29.1234 14.26C29.4314 13.952 29.8 13.714 30.2294 13.546C30.6587 13.3687 31.1254 13.28 31.6294 13.28C32.1427 13.28 32.614 13.3687 33.0434 13.546C33.4727 13.714 33.8414 13.952 34.1494 14.26C34.4574 14.568 34.6954 14.932 34.8634 15.352C35.0407 15.772 35.1294 16.2293 35.1294 16.724ZM34.1214 16.724C34.1214 16.36 34.0607 16.0193 33.9394 15.702C33.8274 15.3753 33.664 15.0953 33.4494 14.862C33.2347 14.6193 32.9734 14.428 32.6654 14.288C32.3574 14.148 32.012 14.078 31.6294 14.078C31.2467 14.078 30.9014 14.148 30.5934 14.288C30.2947 14.428 30.038 14.6193 29.8234 14.862C29.6087 15.0953 29.4407 15.3753 29.3194 15.702C29.2074 16.0193 29.1514 16.36 29.1514 16.724C29.1514 17.088 29.2074 17.4333 29.3194 17.76C29.4407 18.0773 29.6087 18.3573 29.8234 18.6C30.038 18.8333 30.2947 19.02 30.5934 19.16C30.9014 19.2907 31.2467 19.356 31.6294 19.356C32.012 19.356 32.3574 19.2907 32.6654 19.16C32.9734 19.02 33.2347 18.8333 33.4494 18.6C33.664 18.3573 33.8274 18.0773 33.9394 17.76C34.0607 17.4333 34.1214 17.088 34.1214 16.724ZM37.178 14.89C37.178 14.7127 37.1733 14.484 37.164 14.204C37.1546 13.924 37.1406 13.672 37.122 13.448H38.032C38.0506 13.6253 38.0646 13.8213 38.074 14.036C38.0833 14.2507 38.088 14.428 38.088 14.568H38.116C38.3026 14.1853 38.5826 13.8773 38.956 13.644C39.3293 13.4013 39.7493 13.28 40.216 13.28C40.3373 13.28 40.4446 13.2847 40.538 13.294C40.6406 13.3033 40.7433 13.322 40.846 13.35L40.72 14.246C40.664 14.2273 40.5706 14.2087 40.44 14.19C40.3093 14.1713 40.1786 14.162 40.048 14.162C39.796 14.162 39.5533 14.2087 39.32 14.302C39.0866 14.3953 38.8813 14.5447 38.704 14.75C38.536 14.946 38.396 15.2027 38.284 15.52C38.1813 15.828 38.13 16.2013 38.13 16.64V20H37.178V14.89ZM46.9748 16.22C46.9468 15.604 46.7461 15.0953 46.3728 14.694C46.0088 14.2833 45.4861 14.078 44.8048 14.078C44.4875 14.078 44.1935 14.1387 43.9228 14.26C43.6521 14.372 43.4141 14.5307 43.2088 14.736C43.0035 14.932 42.8401 15.1607 42.7188 15.422C42.5975 15.674 42.5275 15.94 42.5088 16.22H46.9748ZM47.9408 16.528C47.9408 16.5933 47.9408 16.6633 47.9408 16.738C47.9408 16.8127 47.9361 16.892 47.9268 16.976H42.4948C42.5041 17.3027 42.5695 17.6107 42.6908 17.9C42.8121 18.1893 42.9801 18.4413 43.1948 18.656C43.4095 18.8707 43.6615 19.0433 43.9508 19.174C44.2401 19.2953 44.5528 19.356 44.8888 19.356C45.3835 19.356 45.8081 19.244 46.1628 19.02C46.5268 18.7867 46.8021 18.5207 46.9888 18.222L47.7028 18.782C47.3108 19.2767 46.8768 19.6313 46.4008 19.846C45.9341 20.0607 45.4301 20.168 44.8888 20.168C44.4035 20.168 43.9508 20.084 43.5308 19.916C43.1201 19.7387 42.7655 19.496 42.4668 19.188C42.1681 18.88 41.9301 18.516 41.7528 18.096C41.5848 17.676 41.5008 17.2187 41.5008 16.724C41.5008 16.2293 41.5848 15.772 41.7528 15.352C41.9208 14.932 42.1541 14.568 42.4528 14.26C42.7515 13.952 43.1015 13.714 43.5028 13.546C43.9041 13.3687 44.3381 13.28 44.8048 13.28C45.3181 13.28 45.7708 13.3687 46.1628 13.546C46.5548 13.714 46.8815 13.9473 47.1428 14.246C47.4041 14.5353 47.6001 14.876 47.7308 15.268C47.8708 15.66 47.9408 16.08 47.9408 16.528ZM58.8785 18.894C58.5985 19.314 58.2345 19.6313 57.7865 19.846C57.3385 20.0607 56.8765 20.168 56.4005 20.168C55.8872 20.168 55.4205 20.0793 55.0005 19.902C54.5898 19.7247 54.2352 19.482 53.9365 19.174C53.6472 18.866 53.4185 18.502 53.2505 18.082C53.0918 17.662 53.0125 17.2093 53.0125 16.724C53.0125 16.2387 53.0918 15.786 53.2505 15.366C53.4185 14.946 53.6472 14.582 53.9365 14.274C54.2352 13.966 54.5898 13.7233 55.0005 13.546C55.4205 13.3687 55.8872 13.28 56.4005 13.28C56.8765 13.28 57.3385 13.392 57.7865 13.616C58.2345 13.8307 58.5985 14.1527 58.8785 14.582H58.9065V9.416H59.8585V20H58.9065V18.894H58.8785ZM54.0205 16.724C54.0205 17.088 54.0765 17.4333 54.1885 17.76C54.3005 18.0773 54.4592 18.3573 54.6645 18.6C54.8792 18.8333 55.1405 19.02 55.4485 19.16C55.7565 19.2907 56.1065 19.356 56.4985 19.356C56.8625 19.356 57.1985 19.2907 57.5065 19.16C57.8145 19.02 58.0805 18.8333 58.3045 18.6C58.5285 18.3667 58.7012 18.0913 58.8225 17.774C58.9532 17.4473 59.0185 17.0973 59.0185 16.724C59.0185 16.3507 58.9532 16.0053 58.8225 15.688C58.7012 15.3613 58.5285 15.0813 58.3045 14.848C58.0805 14.6053 57.8145 14.4187 57.5065 14.288C57.1985 14.148 56.8625 14.078 56.4985 14.078C56.1065 14.078 55.7565 14.148 55.4485 14.288C55.1405 14.428 54.8792 14.6193 54.6645 14.862C54.4592 15.0953 54.3005 15.3753 54.1885 15.702C54.0765 16.0193 54.0205 16.36 54.0205 16.724ZM67.4006 16.22C67.3726 15.604 67.1719 15.0953 66.7986 14.694C66.4346 14.2833 65.9119 14.078 65.2306 14.078C64.9132 14.078 64.6192 14.1387 64.3486 14.26C64.0779 14.372 63.8399 14.5307 63.6346 14.736C63.4292 14.932 63.2659 15.1607 63.1446 15.422C63.0232 15.674 62.9532 15.94 62.9346 16.22H67.4006ZM68.3666 16.528C68.3666 16.5933 68.3666 16.6633 68.3666 16.738C68.3666 16.8127 68.3619 16.892 68.3526 16.976H62.9206C62.9299 17.3027 62.9952 17.6107 63.1166 17.9C63.2379 18.1893 63.4059 18.4413 63.6206 18.656C63.8352 18.8707 64.0872 19.0433 64.3766 19.174C64.6659 19.2953 64.9786 19.356 65.3146 19.356C65.8092 19.356 66.2339 19.244 66.5886 19.02C66.9526 18.7867 67.2279 18.5207 67.4146 18.222L68.1286 18.782C67.7366 19.2767 67.3026 19.6313 66.8266 19.846C66.3599 20.0607 65.8559 20.168 65.3146 20.168C64.8292 20.168 64.3766 20.084 63.9566 19.916C63.5459 19.7387 63.1912 19.496 62.8926 19.188C62.5939 18.88 62.3559 18.516 62.1786 18.096C62.0106 17.676 61.9266 17.2187 61.9266 16.724C61.9266 16.2293 62.0106 15.772 62.1786 15.352C62.3466 14.932 62.5799 14.568 62.8786 14.26C63.1772 13.952 63.5272 13.714 63.9286 13.546C64.3299 13.3687 64.7639 13.28 65.2306 13.28C65.7439 13.28 66.1966 13.3687 66.5886 13.546C66.9806 13.714 67.3072 13.9473 67.5686 14.246C67.8299 14.5353 68.0259 14.876 68.1566 15.268C68.2966 15.66 68.3666 16.08 68.3666 16.528ZM73.3683 14.246H71.5203V18.068C71.5203 18.3107 71.5436 18.5113 71.5903 18.67C71.637 18.8287 71.7023 18.9547 71.7863 19.048C71.8796 19.132 71.987 19.1927 72.1083 19.23C72.2296 19.258 72.3603 19.272 72.5003 19.272C72.631 19.272 72.7663 19.2533 72.9063 19.216C73.0556 19.1787 73.1956 19.1273 73.3263 19.062L73.3683 19.888C73.2003 19.9533 73.023 20 72.8363 20.028C72.659 20.0653 72.463 20.084 72.2483 20.084C72.071 20.084 71.8843 20.0607 71.6883 20.014C71.4923 19.9673 71.3103 19.8787 71.1423 19.748C70.9743 19.6173 70.8343 19.44 70.7223 19.216C70.6196 18.992 70.5683 18.698 70.5683 18.334V14.246H69.2103V13.448H70.5683V11.6H71.5203V13.448H73.3683V14.246ZM78.9877 15.772C78.9877 15.2027 78.8383 14.778 78.5397 14.498C78.241 14.218 77.807 14.078 77.2377 14.078C76.8457 14.078 76.4817 14.148 76.1457 14.288C75.8097 14.428 75.525 14.6147 75.2917 14.848L74.7597 14.218C75.0303 13.9473 75.385 13.7233 75.8237 13.546C76.2717 13.3687 76.7757 13.28 77.3357 13.28C77.6903 13.28 78.0217 13.3313 78.3297 13.434C78.6377 13.5273 78.9083 13.672 79.1417 13.868C79.375 14.064 79.557 14.3113 79.6877 14.61C79.8183 14.9087 79.8837 15.2587 79.8837 15.66V18.53C79.8837 18.782 79.893 19.0433 79.9117 19.314C79.9303 19.5847 79.9583 19.8133 79.9957 20H79.1417C79.1137 19.8413 79.0903 19.6687 79.0717 19.482C79.053 19.2953 79.0437 19.1133 79.0437 18.936H79.0157C78.717 19.3747 78.3763 19.692 77.9937 19.888C77.6203 20.0747 77.1677 20.168 76.6357 20.168C76.3837 20.168 76.1223 20.1307 75.8517 20.056C75.5903 19.9907 75.3477 19.8787 75.1237 19.72C74.909 19.5613 74.727 19.356 74.5777 19.104C74.4377 18.852 74.3677 18.544 74.3677 18.18C74.3677 17.676 74.4937 17.2793 74.7457 16.99C75.007 16.6913 75.3523 16.472 75.7817 16.332C76.211 16.1827 76.701 16.0893 77.2517 16.052C77.8117 16.0053 78.3903 15.982 78.9877 15.982V15.772ZM78.7077 16.724C78.3157 16.724 77.919 16.7427 77.5177 16.78C77.1257 16.808 76.7663 16.8733 76.4397 16.976C76.1223 17.0693 75.861 17.2093 75.6557 17.396C75.4503 17.5827 75.3477 17.83 75.3477 18.138C75.3477 18.3713 75.3897 18.5673 75.4737 18.726C75.567 18.8847 75.6883 19.0153 75.8377 19.118C75.987 19.2113 76.1503 19.2813 76.3277 19.328C76.5143 19.3653 76.701 19.384 76.8877 19.384C77.2237 19.384 77.5223 19.328 77.7837 19.216C78.045 19.0947 78.2643 18.936 78.4417 18.74C78.619 18.5347 78.7543 18.3013 78.8477 18.04C78.941 17.7787 78.9877 17.5033 78.9877 17.214V16.724H78.7077ZM83.3022 20H82.3502V13.448H83.3022V20ZM83.4982 10.928C83.4982 11.124 83.4282 11.2873 83.2882 11.418C83.1482 11.5393 82.9942 11.6 82.8262 11.6C82.6582 11.6 82.5042 11.5393 82.3642 11.418C82.2242 11.2873 82.1542 11.124 82.1542 10.928C82.1542 10.732 82.2242 10.5733 82.3642 10.452C82.5042 10.3213 82.6582 10.256 82.8262 10.256C82.9942 10.256 83.1482 10.3213 83.2882 10.452C83.4282 10.5733 83.4982 10.732 83.4982 10.928ZM86.8162 20H85.8642V9.416H86.8162V20ZM92.8495 15.002C92.7095 14.7313 92.4948 14.512 92.2055 14.344C91.9255 14.1667 91.6035 14.078 91.2395 14.078C91.0715 14.078 90.9035 14.0967 90.7355 14.134C90.5675 14.1713 90.4182 14.232 90.2875 14.316C90.1568 14.4 90.0495 14.5073 89.9655 14.638C89.8908 14.7687 89.8535 14.9227 89.8535 15.1C89.8535 15.408 89.9795 15.646 90.2315 15.814C90.4835 15.9727 90.8802 16.108 91.4215 16.22C92.1962 16.3787 92.7655 16.612 93.1295 16.92C93.5028 17.2187 93.6895 17.6247 93.6895 18.138C93.6895 18.5113 93.6148 18.8287 93.4655 19.09C93.3255 19.342 93.1388 19.552 92.9055 19.72C92.6722 19.8787 92.4062 19.9907 92.1075 20.056C91.8182 20.1307 91.5242 20.168 91.2255 20.168C90.7308 20.168 90.2502 20.0653 89.7835 19.86C89.3168 19.6547 88.9342 19.3327 88.6355 18.894L89.3915 18.334C89.5595 18.6233 89.8068 18.866 90.1335 19.062C90.4602 19.258 90.8195 19.356 91.2115 19.356C91.4168 19.356 91.6128 19.3373 91.7995 19.3C91.9862 19.2627 92.1495 19.1973 92.2895 19.104C92.4295 19.0107 92.5415 18.894 92.6255 18.754C92.7095 18.6047 92.7515 18.4227 92.7515 18.208C92.7515 17.8627 92.5835 17.606 92.2475 17.438C91.9208 17.2607 91.4448 17.0973 90.8195 16.948C90.6235 16.9013 90.4135 16.8453 90.1895 16.78C89.9748 16.7053 89.7742 16.6027 89.5875 16.472C89.4008 16.332 89.2468 16.1593 89.1255 15.954C89.0042 15.7487 88.9435 15.492 88.9435 15.184C88.9435 14.848 89.0088 14.5633 89.1395 14.33C89.2702 14.0873 89.4428 13.8913 89.6575 13.742C89.8815 13.5833 90.1335 13.4667 90.4135 13.392C90.6935 13.3173 90.9828 13.28 91.2815 13.28C91.7388 13.28 92.1822 13.3827 92.6115 13.588C93.0408 13.7933 93.3628 14.0827 93.5775 14.456L92.8495 15.002Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            <!-- CTA карточка (Request catalog) -->
            <article v-else-if="isCtaCard(card)" class="cta-card">
              <!-- Паттерн фона -->
              <CtaPattern class="cta-card__pattern" />
              <!-- Статистика -->
              <p class="cta-card__stats">{{ card.stats }}</p>
              <!-- Кнопка -->
              <button
                @click="handleRequestCatalogClick"
                class="cta-card__button cursor-pointer"
                type="button"
              >
                {{ card.buttonLabel }}
              </button>
            </article>
          </template>
        </div>

        <!-- Кнопка Load more -->
        <button
          v-if="section.showLoadMore"
          type="button"
          class="load-more-button cursor-pointer"
        >
          Load more
        </button>

        <!-- Блок с информацией о бесплатных образцах (после Travertine) -->
        <div v-if="section.id === 'travertine'" class="sample-info">
          <!-- Текст -->
          <p class="sample-info__text">
            We send samples and mockups for your project in any quantity
            <span class="sample-info__text--highlight">absolutely free</span>
            of charge.
          </p>

          <!-- Изображения образцов -->
          <div class="sample-info__images">
            <!-- SVG фон с группами изображений -->
            <SampleBg class="sample-info__bg" />

            <!-- Декоративные элементы -->
            <div class="sample-info__image sample-info__image--bc1">
              <img src="/images/stone-types/BC 1.png" alt="Sample BC 1" />
            </div>
            <div class="sample-info__image sample-info__image--bc3">
              <img src="/images/products-grid/BC 3.png" alt="Sample BC 3" />
            </div>
            <div class="sample-info__image sample-info__image--bc42">
              <img src="/images/stone-types/BC 4 2.png" alt="Sample BC 4 2" />
            </div>
          </div>

          <!-- Кнопка "Get sample" -->
          <button class="sample-info__button cursor-pointer">GET SAMPLE</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stone-types {
  position: relative;
  width: 100%;
  background: #f5f5f7;
  padding-bottom: 160px;

  &__header {
    text-align: center;
    padding-top: 80px;
    margin-bottom: 64px;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: #a76508;
    margin: 0 0 8px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 64px;
    line-height: normal;
    color: #333333;
    margin: 0;
  }

  &__container {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
}

.stone-section {
  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 4px;
  }

  &__marker {
    font-size: 24px;
    color: #a76508;
    flex-shrink: 0;
    line-height: 1;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 48px;
    line-height: normal;
    color: #333333;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
}

// Карточка продукта - точные размеры из Figma
.product-card {
  position: relative;
  width: 100%;
  width: 268px;
  height: 296px;
  background: white;
  border-radius: 16px;
  overflow: hidden;

  &__image-container {
    position: absolute;
    left: 4px;
    top: 4px;
    right: 4px;
    bottom: 4px;
    background: #f5f5f7;
    border-radius: 12px;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }

  // Цветная вертикальная полоска слева внизу
  &__accent {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 59px;
    border-radius: 0 12px 0 0;
    z-index: 2;
  }

  // Угловая рамка для названия
  &__title {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 55px;
    display: flex;
    align-items: flex-end;
    padding: 0 0 8px 6px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1;
    color: #000;
    margin: 0;
    z-index: 3;
    background: white;
    clip-path: path(
      "M2.33613e-06 59L-2.57897e-06 1.055e-05C-2.19271e-06 8.83657 7.16344 16 16 16L220.889 16C229.725 16 236.889 23.1634 236.889 32L236.889 43C236.889 51.8365 244.052 59 252.889 59L260 59L2.33613e-06 59Z"
    );
  }

  &__badge {
    position: absolute;
    left: 0;
    top: 32px;
    background: #e88c0a;
    padding: 6px 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1;
    color: white;
    text-transform: uppercase;
    z-index: 4;
  }
}

// CTA карточка (Request catalog) - точные размеры из Figma
.cta-card {
  position: relative;
  width: 100%;
  aspect-ratio: 268 / 296;
  background: #a76508;
  border-radius: 16px;
  overflow: hidden;

  &__pattern {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__stats {
    position: absolute;
    left: 8px;
    top: 16px;
    font-family: "Lora", serif;
    font-weight: 700;
    font-size: 96px;
    line-height: 1;
    color: #f5f5f7;
    margin: 0;
    text-align: center;
  }

  &__button {
    position: absolute;
    left: 50%;
    bottom: 4px;
    transform: translateX(-50%);
    width: 260px;
    height: 48px;
    background: #f5f5f7;
    border-radius: 12px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1;
    text-align: center;
    color: #333333;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: #e8e8ea;
    }

    &:active {
      background: #d8d8da;
    }
  }
}

// Кнопка Load more - точные размеры из Figma
.load-more-button {
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.1;
  color: #000;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 16px;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  &:active {
    background: rgba(255, 255, 255, 0.9);
  }
}

// Блок с информацией о бесплатных образцах - скопировано из ProductsGrid.vue
.sample-info {
  position: relative;
  width: 100%;
  height: 190px;
  border-radius: 32px;
  overflow: hidden;
  margin-top: 48px;

  &__text {
    position: absolute;
    left: 32px;
    top: 28px;
    width: 498px;
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: #000;
    margin: 0;
    z-index: 1;
  }

  &__text--highlight {
    color: #a76508;
  }

  &__images {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__bg {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1120px;
    height: 190px;
    z-index: 0;
    pointer-events: none;
  }

  &__image {
    position: absolute;
    pointer-events: none;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--bc1 {
      left: 705px;
      top: 69px;
      width: 99px;
      height: 99px;
      transform: rotate(180deg) scaleY(-1);
    }

    &--bc3 {
      left: 830px;
      top: -192px;
      width: 324px;
      height: 324px;
      transform: rotate(180deg) scaleY(-1);
    }

    &--bc42 {
      left: 584px;
      top: 18px;
      width: 59px;
      height: 59px;
      transform: rotate(180deg) scaleY(-1);
      opacity: 0.9;
    }
  }

  &__button {
    position: absolute;
    left: 871px;
    bottom: 16px;
    width: 233px;
    height: 42px;
    background: #a76508;
    border-radius: 16px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    z-index: 2;

    &:hover {
      background: #8d5506;
    }

    &:active {
      background: #6d4105;
    }
  }
}

// Адаптивность
@media (max-width: 1200px) {
  .stone-types {
    &__container {
      max-width: 100%;
      padding: 0 16px;
    }
  }

  .stone-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .sample-info {
    &__button {
      left: auto;
      right: 16px;
    }
  }
}

@media (max-width: 992px) {
  .stone-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .stone-types {
    &__header {
      padding-top: 40px;
      margin-bottom: 32px;
    }

    &__subtitle {
      font-size: 24px;
    }

    &__title {
      font-size: 40px;
    }

    &__container {
      gap: 32px;
    }
  }

  .stone-section {
    &__header {
      gap: 12px;
    }

    &__marker {
      font-size: 18px;
    }

    &__title {
      font-size: 32px;
    }

    &__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }

  .product-card {
    &__image-container {
      left: 3px;
      top: 3px;
      right: 3px;
      bottom: 3px;
    }

    &__title {
      width: 160px;
      height: 48px;
      font-size: 14px;
      padding: 0 0 6px 8px;

      clip-path: path(
        "M0 48L0 0C0 7.2 5.8 13 13 13L134 13C141.2 13 147 18.8 147 26L147 35C147 42.2 152.8 48 160 48L0 48Z"
      );
    }

    &__accent {
      width: 40px;
    }

    &__badge {
      font-size: 14px;
      padding: 4px 10px;
      top: 20px;
    }
  }

  .cta-card {
    &__stats {
      font-size: 48px;
    }

    &__button {
      width: calc(100% - 8px);
      height: 40px;
      font-size: 16px;
    }
  }

  .load-more-button {
    height: 60px;
    font-size: 20px;
  }

  .sample-info {
    height: auto;
    min-height: 190px;
    padding: 24px;

    &__text {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      font-size: 24px;
      margin-bottom: 20px;
    }

    &__images {
      display: none;
    }

    &__button {
      position: relative;
      left: 0;
      bottom: 0;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
