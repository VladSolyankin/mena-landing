<script setup lang="ts">
import SampleBg from "../../assets/svg/products-grid/sample-bg.vue";
import CtaPattern from "../../assets/svg/products-grid/cta-pattern.vue";

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
    title: "Precious stone",
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
              v-if="isProductCard(card)"
              class="product-card"
              :data-card-id="card.id"
            >
              <!-- Контейнер изображения -->
              <div class="product-card__image-container">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="product-card__image"
                />
                <!-- Название камня -->
                <p class="product-card__title tracking-0!">{{ card.title }}</p>
              </div>
              <!-- Бейдж Best seller -->
              <span
                v-if="card.badge === 'best-seller'"
                class="product-card__badge"
              >
                Best seller
              </span>
            </article>

            <!-- CTA карточка (Request catalog) -->
            <article v-else-if="isCtaCard(card)" class="cta-card">
              <!-- Паттерн фона -->
              <CtaPattern class="cta-card__pattern" />
              <!-- Статистика -->
              <p class="cta-card__stats">{{ card.stats }}</p>
              <!-- Кнопка -->
              <button class="cta-card__button" type="button">
                {{ card.buttonLabel }}
              </button>
            </article>
          </template>
        </div>

        <!-- Кнопка Load more -->
        <button
          v-if="section.showLoadMore"
          type="button"
          class="load-more-button"
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
              <img src="/images/stone-types/BC 3.png" alt="Sample BC 3" />
            </div>
            <div class="sample-info__image sample-info__image--bc42">
              <img src="/images/stone-types/BC 4 2.png" alt="Sample BC 4 2" />
            </div>
          </div>

          <!-- Кнопка "Get sample" -->
          <button class="sample-info__button">GET SAMPLE</button>
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
    padding: 0 20px;
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
    width: 200px;
    height: 56px;
    display: flex;
    align-items: flex-end;
    padding: 0 0 8px 12px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1;
    color: #000;
    margin: 0;
    z-index: 3;
    background: white;
    clip-path: path(
      "M0 59L0 0C0 8.83656 7.16344 16 40 16L168 16C176.837 16 184 23.1634 184 32L184 43C184 51.8365 191.163 59 200 59L0 59Z"
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
    white-space: pre-wrap;
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
