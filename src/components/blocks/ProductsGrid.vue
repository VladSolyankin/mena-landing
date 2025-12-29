<script setup lang="ts">
import ProductsDetails from "../../assets/svg/products-grid/products-details.vue";
import SampleBg from "../../assets/svg/products-grid/sample-bg.vue";

// Emits
const emit = defineEmits<{
  "open-contact-modal": [variant: "free-samples" | "make-enquiry"];
}>();

// Обработчик клика на кнопку "GET SAMPLE"
const handleGetSampleClick = () => {
  emit("open-contact-modal", "free-samples");
};

// Обработчик клика на кнопку "more details" у Paving Stones
const handlePavingStonesDetailsClick = () => {
  emit("open-contact-modal", "make-enquiry");
};

// Типы продуктов
interface Product {
  id: string;
  title: string;
  features: string[];
  featuresColumn2?: string[]; // Для карточек с двумя столбцами (Curb Stones, SAF)
  image: string;
  width: "half" | "full"; // half = 552px, full = 1120px
  imageConfig?: {
    left?: number;
    top?: number;
    width: number;
    height: number;
    transform?: "rotate" | "none";
  };
  multipleImages?: Array<{
    src: string;
    left: number;
    top?: number;
    bottom?: number;
    width: number;
    height: number;
    transform?: "rotate" | "none";
  }>;
}

// Структура строки грида
interface GridRow {
  type: "products" | "sample-info";
  items?: Product[]; // Для строк с продуктами
}

// Данные продуктов
const products: Product[] = [
  {
    id: "slabs",
    title: "Slabs",
    features: ["for paving", "cladding", "ventilation facade"],
    image: "/images/products-grid/Image-1.png",
    width: "half",
    imageConfig: {
      left: 303,
      top: 40,
      width: 197,
      height: 307,
    },
  },
  {
    id: "paving-stones",
    title: "Paving stones",
    features: ["full-sawed", "sawn-chopped", "smoothed", "cone reef"],
    image: "/images/products-grid/Stone Textures.png",
    width: "half",
    multipleImages: [
      {
        src: "/images/products-grid/Stone Textures-1.png",
        left: 281,
        bottom: 30,
        width: 99,
        height: 215,
      },
      {
        src: "/images/products-grid/Stone Textures.png",
        left: 389,
        bottom: 100,
        width: 99,
        height: 215,
      },
    ],
  },
  {
    id: "tactile-tiles",
    title: "Tactile Tiles",
    features: [
      "diagonal pattern",
      "square pattern",
      "cone pattern",
      "line pattern",
    ],
    image: "/images/products-grid/Textured Surfaces.png",
    width: "half",
    imageConfig: {
      left: 311,
      top: 34,
      width: 201,
      height: 313,
    },
  },
  {
    id: "ramps",
    title: "Ramps",
    features: ["straight", "radial", "bordered"],
    image: "/images/products-grid/ramps.png",
    width: "half",
    imageConfig: {
      left: 287,
      top: 51,
      width: 225,
      height: 297,
    },
  },
  {
    id: "curb-stones",
    title: "Curb Stones",
    features: [
      "type-1 (GP-1)",
      "type-2 (GP-2)",
      "type-3 (GP-3)",
      "type-4 (GP-4)",
    ],
    featuresColumn2: ["type-5 (GP-5)", "type-6 (GP-6)", "radial", "straight"],
    image: "/images/products-grid/Stone samples.png",
    width: "full",
    multipleImages: [
      {
        src: "/images/products-grid/Stone samples.png",
        left: 719,
        top: 45.47,
        width: 186,
        height: 289,
      },
      {
        src: "/images/products-grid/Stone samples.png",
        left: 865,
        top: 45.47,
        width: 186,
        height: 289,
      },
    ],
  },
  {
    id: "staircases",
    title: "Staircases",
    features: [
      "stair cladding",
      "monolithic steps",
      "radius steps",
      "balusters",
    ],
    image: "/images/products-grid/Image.png",
    width: "half",
    imageConfig: {
      left: 289,
      top: 38,
      width: 236,
      height: 310,
    },
  },
  {
    id: "interior",
    title: "Interior",
    features: ["slabs", "fireplaces", "countertops", "windowsill"],
    image: "/images/products-grid/Product image.png",
    width: "half",
    imageConfig: {
      left: 224,
      top: 8,
      width: 274,
      height: 360,
      transform: "none",
    },
  },
  {
    id: "columns",
    title: "Columns",
    features: ["solid", "hollow", "steles"],
    image: "/images/products-grid/Column Image.png",
    width: "half",
    imageConfig: {
      left: 265,
      top: 40,
      width: 234,
      height: 308,
    },
  },
  {
    id: "bollards",
    title: "Bollards",
    features: ["square", "conical", "delineators"],
    image: "/images/products-grid/Product image-1.png",
    width: "half",
    imageConfig: {
      left: 314,
      top: 40,
      width: 198,
      height: 308,
    },
  },
  {
    id: "saf",
    title: "Small Architectural Forms (SAF)",
    features: ["tubs", "spheres", "fountains", "balusters"],
    featuresColumn2: ["trays"],
    image: "/images/products-grid/fontain.png",
    width: "full",
    imageConfig: {
      left: 632,
      top: -84,
      width: 438,
      height: 438,
    },
  },
];

// Организация грида по строкам
const gridRows: GridRow[] = [
  {
    type: "products",
    items: [
      products.find((p) => p.id === "slabs")!,
      products.find((p) => p.id === "paving-stones")!,
    ],
  },
  {
    type: "products",
    items: [
      products.find((p) => p.id === "tactile-tiles")!,
      products.find((p) => p.id === "ramps")!,
    ],
  },
  {
    type: "sample-info",
  },
  {
    type: "products",
    items: [products.find((p) => p.id === "curb-stones")!],
  },
  {
    type: "products",
    items: [
      products.find((p) => p.id === "staircases")!,
      products.find((p) => p.id === "interior")!,
    ],
  },
  {
    type: "products",
    items: [
      products.find((p) => p.id === "columns")!,
      products.find((p) => p.id === "bollards")!,
    ],
  },
  {
    type: "products",
    items: [products.find((p) => p.id === "saf")!],
  },
];
</script>

<template>
  <section
    class="products-grid"
    style="
      background: radial-gradient(
        50.24% 124.97% at 50% 46.3%,
        #f5f5f7 30.77%,
        #fff 100%
      );
    "
  >
    <!-- Заголовок секции -->
    <div class="products-grid__header">
      <p class="products-grid__subtitle">Products</p>
      <h2 class="products-grid__title mb-[40px]!">Full range of stone</h2>
    </div>

    <!-- Контейнер с карточками -->
    <div class="products-grid__container">
      <!-- Строки грида -->
      <template v-for="(row, rowIndex) in gridRows" :key="rowIndex">
        <!-- Строка с продуктами -->
        <template v-if="row.type === 'products' && row.items">
          <article
            v-for="product in row.items"
            :key="product.id"
            :class="['product-card', `product-card--${product.width}`]"
            :data-product-id="product.id"
          >
            <!-- Заголовок продукта -->
            <h3 class="product-card__title">{{ product.title }}</h3>

            <!-- Маркеры для первого столбца -->
            <template
              v-for="(feature, index) in product.features"
              :key="`bullet-col1-${index}`"
            >
              <p
                class="product-card__bullet product-card__bullet--col1"
                :style="{ top: `${100 + index * 44}px` }"
              >
                ⬩
              </p>
            </template>

            <!-- Маркеры для второго столбца (для Curb Stones и SAF) -->
            <template
              v-if="product.featuresColumn2"
              v-for="(feature, index) in product.featuresColumn2"
              :key="`bullet-col2-${index}`"
            >
              <p
                class="product-card__bullet product-card__bullet--col2"
                :style="{ top: `${100 + index * 44}px` }"
              >
                ⬩
              </p>
            </template>

            <!-- Список характеристик - первый столбец -->
            <div class="product-card__features">
              <template
                v-for="(feature, index) in product.features"
                :key="index"
              >
                <p class="product-card__feature-item">
                  <span class="product-card__feature-text">{{ feature }}</span>
                </p>
              </template>
            </div>

            <!-- Список характеристик - второй столбец (для Curb Stones и SAF) -->
            <div
              v-if="
                product.featuresColumn2 && product.featuresColumn2.length > 0
              "
              class="product-card__features product-card__features--column2"
            >
              <template
                v-for="(feature, index) in product.featuresColumn2"
                :key="`col2-${index}`"
              >
                <p class="product-card__feature-item">
                  <span class="product-card__feature-text">{{ feature }}</span>
                </p>
              </template>
            </div>

            <!-- Изображение продукта -->
            <template v-if="product.multipleImages">
              <!-- Несколько изображений (для Paving stones и Curb Stones) -->
              <div
                v-for="(imgConfig, idx) in product.multipleImages"
                :key="idx"
                class="product-card__image-wrapper"
                :style="{
                  left: `${imgConfig.left}px`,
                  ...(imgConfig.top !== undefined
                    ? { top: `${imgConfig.top}px` }
                    : {}),
                  ...(imgConfig.bottom !== undefined
                    ? { bottom: `${imgConfig.bottom}px` }
                    : {}),
                  width: `${imgConfig.width}px`,
                  height: `${imgConfig.height}px`,
                  transform:
                    imgConfig.transform === 'rotate'
                      ? 'rotate(180deg) scaleY(-1)'
                      : 'none',
                }"
              >
                <img
                  :src="imgConfig.src"
                  :alt="`${product.title} ${idx + 1}`"
                  class="product-card__image"
                />
              </div>
            </template>
            <template v-else-if="product.imageConfig">
              <!-- Одно изображение с конфигурацией -->
              <div
                class="product-card__image-wrapper"
                :style="{
                  left: `${product.imageConfig.left}px`,
                  top: `${product.imageConfig.top}px`,
                  width: `${product.imageConfig.width}px`,
                  height: `${product.imageConfig.height}px`,
                  transform:
                    product.imageConfig.transform === 'rotate'
                      ? 'rotate(180deg) scaleY(-1)'
                      : 'none',
                }"
              >
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="product-card__image"
                />
              </div>
            </template>

            <!-- Кнопка "More details" -->
            <button
              v-if="product.id === 'paving-stones'"
              class="product-card__details-button product-card__details-button--text cursor-pointer"
              @click="handlePavingStonesDetailsClick"
              aria-label="More details"
            >
              more details
            </button>
            <button
              v-else
              class="product-card__details-button cursor-pointer"
              aria-label="More details"
            >
              <ProductsDetails />
            </button>
          </article>
        </template>

        <!-- Блок с информацией о бесплатных образцах -->
        <div v-else-if="row.type === 'sample-info'" class="sample-info">
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
              <img src="/images/products-grid/BC 1.png" alt="Sample BC 1" />
            </div>
            <div class="sample-info__image sample-info__image--bc3">
              <img src="/images/products-grid/BC 3.png" alt="Sample BC 3" />
            </div>
            <div class="sample-info__image sample-info__image--bc42">
              <img src="/images/products-grid/BC 4 2.png" alt="Sample BC 4 2" />
            </div>
          </div>

          <!-- Кнопка "Get sample" -->
          <button @click="handleGetSampleClick" class="sample-info__button cursor-pointer">
            GET SAMPLE
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products-grid {
  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  padding-bottom: 80px;

  &__header {
    text-align: center;
    margin-bottom: 0;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: #a76508;
    margin: 0 0 13px;
  }

  &__title {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 64px;
    line-height: normal;
    color: #000;
    margin: 0;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 552px);
    gap: 16px;
    justify-content: center;
    max-width: 1120px;
    margin: 0 auto;
  }
}

.product-card {
  background: white;
  border-radius: 32px;
  height: 380px;
  position: relative;
  overflow: hidden;

  &--half {
    grid-column: span 1;
    width: 552px;
  }

  &--full {
    grid-column: span 2;
    width: 1120px;
  }

  &__title {
    position: absolute;
    left: 40px;
    top: 40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.1;
    color: #000;
    margin: 0;
  }

  &__features {
    position: absolute;
    left: 56px;
    top: 100px;
    width: 190px;
    z-index: 2;

    &--column2 {
      left: 304px;
      width: 190px;
      z-index: 2;
    }

    // Для SAF второй столбец шире
    [data-product-id="saf"] &--column2 {
      width: 231px;
    }
  }

  &__feature-item {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    color: #333333;
    margin: 0 0 10px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  &__bullet {
    position: absolute;
    color: #e88c0a;
    font-size: 24px;
    line-height: 1.4;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    z-index: 3;

    &--col1 {
      left: 40px;
    }

    &--col2 {
      left: 288px;
    }
  }

  &__feature-text {
    flex: 1;
  }

  &__image-wrapper {
    position: absolute;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__details-button {
    position: absolute;
    left: 32px;
    top: 300px;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }

    &--text {
      width: auto;
      height: auto;
      min-width: 136px;
      padding: 12px 24px;
      background: linear-gradient(90deg, #a76508 0%, #e88c0a 100%);
      border-radius: 16px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 1.1;
      color: white;
      text-transform: lowercase;
      white-space: nowrap;
      transition: background 0.2s, opacity 0.2s;

      &:hover {
        background: linear-gradient(90deg, #8d5506 0%, #d17a09 100%);
        opacity: 1;
      }

      &:active {
        background: linear-gradient(90deg, #6d4105 0%, #b86807 100%);
        opacity: 1;
      }
    }
  }
}

.sample-info {
  position: relative;
  grid-column: span 2;
  width: 1120px;
  height: 190px;
  border-radius: 32px;
  overflow: hidden;

  &__text {
    position: absolute;
    left: 0px;
    top: 28px;
    left: 32px;
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

    &--samples {
      // Группа изображений образцов - позиционирование через абсолютные значения
      // Это сложная композиция, упростим до одного изображения
      left: 560px;
      top: 0;
      width: 280.969px;
      height: 190.333px;
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

    &:hover {
      background: #8d5506;
    }

    &:active {
      background: #6d4105;
    }
  }
}

// Адаптивность для мобильных устройств
@media (max-width: 1200px) {
  .products-grid__container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 100%;
    padding: 0 16px;
  }

  .product-card {
    &--half {
      width: 100%;
    }

    &--full {
      width: 100%;
    }
  }

  .sample-info {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .products-grid {
    padding-top: 80px;
  }

  .products-grid__container {
    grid-template-columns: 1fr;
  }

  .products-grid__subtitle {
    color: #a76508;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 44.8px */
  }

  .products-grid__title {
    color: #000;
    text-align: center;
    font-family: Lora;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .product-card {
    height: auto;
    min-height: 380px;
    padding-bottom: 40px;

    &--half,
    &--full {
      grid-column: span 1;
      width: 100%;
    }

    &__title {
      font-size: 28px;
      left: 24px;
      top: 24px;
    }

    &__features {
      left: 40px;
      top: 80px;
      width: auto;
      max-width: 200px;
    }

    &__feature-item {
      font-size: 18px;
    }

    &__image-wrapper {
      position: relative;
      width: 100%;
      height: 200px;
      margin-top: 20px;
    }
  }

  .sample-info {
    grid-column: span 1;
    height: auto;
    min-height: 190px;
    padding: 24px;
    width: 100%;

    &__text {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      font-size: 24px;
      margin-bottom: 20px;
    }

    &__images {
      display: none; // Скрываем сложную композицию на мобильных
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
