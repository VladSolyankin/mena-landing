<script setup lang="ts">
import type { StoneData } from "../../data/stones";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SampleBgOrange from "../../assets/svg/products-grid/sample-bg-orange.vue";
import ProductsDetails from "../../assets/svg/products-grid/products-details.vue";
import ProductionSites from "./ProductionSites.vue";
import Calculate from "./Calculate.vue";
// Props
interface Props {
  stoneData: StoneData;
}

const props = defineProps<Props>();

// Emits
const emit = defineEmits<{
  "open-contact-modal": [variant: "get-in-touch" | "free-samples"];
  "navigate-home": [];
}>();

// Обработчики
const handleOpenContactModal = (variant: "get-in-touch" | "free-samples") => {
  emit("open-contact-modal", variant);
};

const handleNavigateHome = () => {
  emit("navigate-home");
};

// Full range of stone products data
interface ProductCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName: string;
  width: string;
}

interface LargeProductCard {
  title: string;
  description: string;
  images: Array<{
    src: string;
    className: string;
  }>;
  descriptionWidth: string;
}

const productCards: ProductCard[] = [
  {
    title: "Slabs",
    description: "paving, cladding, ventilated facades",
    image: "/images/products-grid/Image-1.png",
    imageAlt: "Image",
    imageClassName:
      "top-[140px] right-[23px] w-[134px] h-52 aspect-[0.64] absolute object-cover",
    width: "w-[270px]",
  },
  {
    title: "Paving Stones",
    description: "tumbled, split, sawn & split, fully sawn",
    image: "/images/products-grid/Stone Textures.png",
    imageAlt: "Stone textures",
    imageClassName:
      "absolute left-[145px] bottom-[34px] w-[91px] h-[197px] aspect-[0.46]",
    width: "w-[270px]",
  },
  {
    title: "Tactile Tiles",
    description: "square, cone, line, diagonal pattern",
    image: "/images/products-grid/Textured Surfaces.png",
    imageAlt: "Textured surfaces",
    imageClassName:
      "absolute left-28 bottom-[34px] w-32 h-[199px] aspect-[0.64] object-cover",
    width: "w-[270px]",
  },
  {
    title: "Ramps",
    description: "straight, radial, bordered",
    image: "/images/products-grid/ramps.png",
    imageAlt: "Product image",
    imageClassName:
      "absolute top-36 left-24 w-[155px] h-[204px] aspect-[0.76] object-cover",
    width: "w-[270px]",
  },
];

const largeProductCards: LargeProductCard[] = [
  {
    title: "Curb Stones",
    description:
      "type-1,2,3,4,5,6, type-2 (GP-2), type-3 (GP-3), type-4 (GP-4), type-5 (GP-5), type-6 (GP-6), radial, straight",
    images: [
      {
        src: "/images/products-grid/Stone samples.png",
        className:
          "absolute top-0 left-[190px] w-[122px] h-[190px] aspect-[0.64] object-cover",
      },
      {
        src: "/images/products-grid/Stone samples.png",
        className:
          "absolute top-12 left-[95px] w-[121px] h-[142px] aspect-[0.85]",
      },
      {
        src: "/images/products-grid/Stone samples.png",
        className:
          "absolute top-[91px] left-0 w-[121px] h-[99px] aspect-[1.23]",
      },
    ],
    descriptionWidth: "w-[488px]",
  },
  {
    title: "Small Architectural Forms (SAF)",
    description: "tub, spheres, fountains, balusters, trays",
    images: [
      {
        src: "/images/products-grid/fontain.png",
        className:
          "top-[45px] left-[193px] w-[316px] h-[316px] aspect-[1] absolute object-cover",
      },
    ],
    descriptionWidth: "w-[488px]",
  },
];

const bottomProductCards: ProductCard[] = [
  {
    title: "Staircases",
    description: "stair cladding, monolithic steps, radius",
    image: "/images/products-grid/Image.png",
    imageAlt: "Image",
    imageClassName:
      "top-[138px] left-[108px] w-40 h-[210px] aspect-[0.76] absolute object-cover",
    width: "w-[270px]",
  },
  {
    title: "Interior",
    description: "slabs, fireplaces, countertops, windowsill",
    image: "/images/products-grid/Product image.png",
    imageAlt: "Product image",
    imageClassName:
      "top-[126px] left-[91px] w-[169px] h-[222px] aspect-[0.76] absolute object-cover",
    width: "w-[270px]",
  },
  {
    title: "Columns",
    description: "solid, hollow, steles",
    image: "/images/products-grid/Column Image.png",
    imageAlt: "Column image",
    imageClassName:
      "absolute top-[142px] left-[104px] w-[156px] h-[206px] aspect-[0.76] object-cover",
    width: "w-[270px]",
  },
  {
    title: "Bollards",
    description: "square, conical, delineators",
    image: "/images/products-grid/Product image-1.png",
    imageAlt: "Product image",
    imageClassName:
      "top-[142px] left-[105px] w-[132px] h-[206px] aspect-[0.64] absolute object-cover",
    width: "w-[270px]",
  },
];
</script>

<template>
  <div class="stone-info-page min-h-screen bg-white">
    <!-- Header -->
    <div class="max-w-[1440px] mx-auto w-full">
      <Header
        @open-contact-modal="handleOpenContactModal"
        @navigate-home="handleNavigateHome"
      />
    </div>

    <!-- Кнопка возврата -->
    <div class="w-full max-w-[1120px] mx-auto mt-8 mb-4">
      <button
        class="flex px-[12px] py-[16px] bg-[white] rounded-2xl border border-[#A76508] text-[#A76508] items-center gap-2 cursor-pointer transition-all hover:bg-[#A76508] hover:text-white"
        @click="handleNavigateHome"
        aria-label="Back to Products"
      >
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.146447 3.32845C-0.0488155 3.52372 -0.0488155 3.8403 0.146447 4.03556L3.32843 7.21754C3.52369 7.4128 3.84027 7.4128 4.03553 7.21754C4.2308 7.02228 4.2308 6.7057 4.03553 6.51043L1.20711 3.68201L4.03553 0.85358C4.2308 0.658318 4.2308 0.341735 4.03553 0.146473C3.84027 -0.0487893 3.52369 -0.0487893 3.32843 0.146473L0.146447 3.32845ZM0.5 3.68201V4.18201H12.5V3.68201V3.18201H0.5V3.68201Z"
            fill="currentColor"
          />
        </svg>
        <span
          class="font-normal text-base"
          style="font-family: 'Montserrat', sans-serif"
        >
          Back to Products
        </span>
      </button>
    </div>

    <!-- Hero Section -->
    <div
      class="relative w-full h-[512px] overflow-hidden"
      :style="{
        background: stoneData.heroImageBackground,
      }"
    >
      <!-- Заголовок -->
      <h1
        class="absolute top-[74px] left-1/2 -translate-x-[560px] w-[632px] font-medium text-white text-5xl tracking-[0] leading-[normal]"
        style="font-family: 'Lora', serif"
      >
        {{ stoneData.title }}
      </h1>

      <!-- Коллекция -->
      <p
        class="absolute top-10 left-1/2 -translate-x-[560px] w-[576px] text-2xl leading-[33.6px] font-normal text-white/60 tracking-[0]"
        style="font-family: 'Montserrat', sans-serif"
      >
        {{ stoneData.collection }}
      </p>

      <!-- Главное изображение -->
      <img
        class="absolute top-0 left-[calc(50%-560px+666px)] w-[774px] h-[439px] aspect-[1.04] object-cover"
        :alt="`${stoneData.title} marble texture`"
        :src="stoneData.heroImage"
      />

      <!-- Бейдж с локацией -->
      <div
        class="inline-flex items-center gap-2 px-6 py-3 absolute top-[164px] left-[calc(50%-750px+1080px)] bg-black/12 rounded-[100px] border-none backdrop-blur-[1.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] backdrop-hue-rotate-[-3.6deg] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.20),inset_-1px_0_1px_rgba(0,0,0,0.16)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[100px] before:bg-[conic-gradient(from_90deg_at_100%_100%,rgba(255,255,255,0)_13%,rgba(255,255,255,0.35)_38%,rgba(255,255,255,0)_63%,rgba(255,255,255,0.35)_88%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
      >
        <img
          class="relative w-[27px] h-[30.08px]"
          :alt="stoneData.location.text"
          :src="stoneData.location.icon"
          aria-hidden="true"
        />
        <span
          class="relative w-fit font-normal text-white text-xl tracking-[0] leading-[28.0px] whitespace-nowrap"
          style="font-family: 'Montserrat', sans-serif"
        >
          {{ stoneData.location.text }}
        </span>
      </div>

      <!-- Короткое описание -->
      <p
        class="absolute top-[184px] left-1/2 -translate-x-[560px] w-[411px] h-14 flex items-end justify-center text-xl leading-[28.0px] font-normal text-white/60 tracking-[0]"
        style="font-family: 'Montserrat', sans-serif"
      >
        {{ stoneData.shortDescription }}
      </p>
    </div>

    <!-- Галерея изображений -->
    <section
      class="relative top-[-260px] w-[1120px] h-[416px] flex gap-4 mx-auto"
      aria-label="Marble gallery"
    >
      <div
        v-for="image in stoneData.galleryImages"
        :key="image.id"
        :class="[
          image.width,
          'flex',
          image.id === 1
            ? 'items-center justify-center bg-[#f5f5f7]'
            : 'bg-[#c9c9c9]',
          'rounded-2xl overflow-hidden',
        ]"
      >
        <img
          :class="[
            image.id === 1 ? 'h-[416px] w-[736px]' : 'w-[368px] h-[416px]',
            image.aspectRatio,
            'object-cover',
          ]"
          :alt="image.alt"
          :src="image.src"
        />
      </div>
    </section>

    <!-- Контейнер с описанием и цветами -->
    <div class="relative top-[-260px] w-[1120px] mx-auto mb-8 mt-8 flex gap-4">
      <!-- Описание -->
      <p
        class="w-[736px] font-normal text-black text-xl tracking-[0] leading-[32.0px]"
        style="font-family: 'Montserrat', sans-serif"
      >
        {{ stoneData.description }}
      </p>

      <!-- Блок с цветами -->
      <div
        v-if="stoneData.colorOptions && stoneData.colorOptions.length > 0"
        class="w-[368px] border-2 border-solid border-[#f5f5f7] rounded-2xl overflow-hidden pt-4 pb-2 px-2 flex gap-1"
      >
        <div
          v-for="color in stoneData.colorOptions"
          :key="color.ralCode"
          class="flex flex-col gap-1 items-center flex-1"
        >
          <!-- Название цвета -->
          <p
            class="font-normal text-[#333] text-base text-center leading-normal"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ color.name }}
          </p>
          <!-- Контейнер с кодом RAL -->
          <div
            class="w-full h-[41px] flex items-center justify-center px-4 py-1 rounded-lg"
            :style="{
              backgroundColor: color.backgroundColor,
              border:
                color.backgroundColor === '#fcfcfa'
                  ? '1px solid rgba(255,255,255,0)'
                  : 'none',
            }"
          >
            <p
              class="font-normal text-2xl text-center leading-normal whitespace-nowrap"
              :style="{
                color: color.textColor || 'rgba(0, 0, 0, 0.8)',
                fontFamily: 'Montserrat, sans-serif',
              }"
            >
              {{ color.ralCode }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sample-info relative top-[-260px] w-full h-[157px] bg-[#fff5e8] overflow-hidden my-10"
    >
      <!-- Фоновое изображение на всю ширину -->
      <div class="sample-info__bg absolute inset-0 w-full h-full">
        <SampleBgOrange />
      </div>

      <!-- Контейнер для контента -->
      <div class="sample-info__content relative max-w-[1120px] h-full">
        <!-- Текст -->
        <p
          class="sample-info__text absolute top-[calc(50.00%-52px)] w-[321px] font-normal text-2xl tracking-[0] leading-[33.6px]"
        >
          <span class="text-black">Order </span>
          <span class="text-[#e88c0a]">free samples</span>
          <span class="text-black"> or an accurate estimate for your </span>
          <span class="text-[#e88c0a]">project of any complexity</span>
          <span class="text-black">.</span>
        </p>

        <!-- Изображения образцов -->
        <div
          class="sample-info__images absolute top-[-126px] left-[579px] w-[757px] h-[312px] flex"
        >
          <img
            class="mt-[126px] w-[114px] h-[74px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/bianco-carrara/image 44546.png"
          />
          <img
            class="mt-[212px] w-[100px] h-[71px] ml-[121px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/bianco-carrara/image 44545.png"
          />
          <img
            class="mt-[126px] w-[252px] h-[126px] ml-[170px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/bianco-carrara/image 44544.png"
          />
        </div>

        <!-- Кнопка "Contact Manager" -->
        <div
          class="sample-info__button-wrapper flex flex-col w-[322px] items-start gap-2.5 p-2 absolute top-[61px] left-[966px] bg-[#ffffff1a] rounded-[32px] overflow-hidden border-[none] backdrop-blur-lg backdrop-brightness-100"
        >
          <button
            type="button"
            class="sample-info__button relative w-[306px] h-16 rounded-3xl overflow-hidden border-[none] shadow-[0px_8px_16px_#00000029,0px_2px_6px_#00000014] cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Contact Manager"
            @click="handleOpenContactModal('get-in-touch')"
          >
            <span
              class="absolute top-[calc(50.00%-10px)] left-[calc(50.00%-129px)] font-medium text-white text-xl text-center tracking-[4.00px] leading-[24.0px] whitespace-nowrap"
            >
              CONTACT MANAGER
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Спецификации продукта -->
    <div
      class="relative top-[-260px] w-[1120px] rounded-2xl overflow-hidden border-2 border-solid border-[#f5f5f7] mx-auto mb-16 py-10 px-10"
    >
      <div class="flex justify-between items-start">
        <div
          v-for="spec in stoneData.specs"
          :key="spec.label"
          class="flex-1 flex flex-col items-start"
        >
          <!-- Иконка и метка -->
          <div class="flex items-center gap-2 mb-4 whitespace-nowrap">
            <img
              :class="[spec.iconWidth, spec.iconHeight, spec.iconAspect]"
              :alt="spec.label"
              :src="spec.icon"
            />
            <p
              class="font-normal text-[#333] text-2xl tracking-[2.4px] leading-[1.3] uppercase"
              style="font-family: 'Montserrat', sans-serif"
            >
              {{ spec.label }}
            </p>
          </div>
          <!-- Значение -->
          <p
            class="font-medium text-[#333] text-[41px] tracking-[0] leading-[normal] flex gap-2 items-center"
            style="font-family: 'Lora', serif"
          >
            <span>{{ spec.value }} </span>
            <span class="text-[26px] font-normal">{{ spec.unit }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Full range of stone section -->
    <section
      class="relative w-full h-[1513px] bg-[linear-gradient(0deg,rgba(245,245,247,1)_0%,rgba(245,245,247,1)_100%)] mt-[-260px]"
    >
      <h1
        class="absolute top-20 left-1/2 -translate-x-[561px] w-[632px] font-medium text-black text-5xl tracking-[0] leading-[normal]"
        style="font-family: 'Lora', serif"
      >
        Full range of stone
      </h1>

      <div
        class="flex flex-wrap w-[1400px] items-start gap-[16px_16px] absolute top-[181px] left-1/2 -translate-x-[560px]"
      >
        <!-- Top product cards -->
        <article
          v-for="(card, index) in productCards"
          :key="index"
          :class="[
            card.width,
            index === 0
              ? '-mt-px -ml-px'
              : index === 3
              ? '-mt-px -mr-px'
              : '-mt-px',
            'relative h-[382px] rounded-[32px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]',
          ]"
        >
          <img
            :class="card.imageClassName"
            :alt="card.imageAlt"
            :src="card.image"
          />

          <h2
            class="absolute top-8 left-8 font-medium text-black text-2xl tracking-[0] leading-[26.4px] whitespace-nowrap"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.title }}
          </h2>

          <p
            :class="[
              card.width === 'w-[270px]'
                ? 'w-[204px]'
                : card.width === 'w-[190px]'
                ? 'w-[190px]'
                : 'w-[204px]',
              'absolute top-[66px] left-8 font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]',
            ]"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.description }}
          </p>

          <button
            class="absolute top-[300px] left-8 w-12 h-12 flex gap-[2.8px] bg-[#ececf0] rounded-2xl overflow-hidden border-none cursor-pointer"
            :aria-label="`View ${card.title} details`"
          >
            <ProductsDetails />
          </button>
        </article>

        <!-- Large product cards -->
        <article
          v-for="(card, index) in largeProductCards"
          :key="`large-${index}`"
          :class="[
            'w-[554px]',
            index === 0 ? '-ml-px' : '-mr-px',
            'relative h-[382px] rounded-[32px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]',
          ]"
        >
          <h2
            class="absolute top-8 left-8 font-medium text-black text-2xl tracking-[0] leading-[26.4px] whitespace-nowrap"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.title }}
          </h2>

          <template v-if="index === 0">
            <div class="absolute top-[158px] left-[199px] w-[311px] h-[190px]">
              <img
                v-for="(img, imgIndex) in card.images"
                :key="imgIndex"
                :class="img.className"
                :alt="`Stone samples ${imgIndex + 1}`"
                :src="img.src"
              />
            </div>
          </template>
          <template v-else>
            <img
              v-for="(img, imgIndex) in card.images"
              :key="imgIndex"
              :class="img.className"
              alt="Product image"
              :src="img.src"
            />
          </template>

          <button
            class="absolute top-[300px] left-8 w-12 h-12 flex gap-[2.8px] bg-[#ececf0] rounded-2xl overflow-hidden border-none cursor-pointer"
            :aria-label="`View ${card.title} details`"
          >
            <ProductsDetails />
          </button>

          <p
            :class="[
              card.descriptionWidth,
              'absolute top-[66px] left-8 font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]',
            ]"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.description }}
          </p>
        </article>

        <!-- Bottom product cards -->
        <article
          v-for="(card, index) in bottomProductCards"
          :key="`bottom-${index}`"
          :class="[
            card.width,
            index === 0
              ? '-mb-px -ml-px'
              : index === 3
              ? '-mb-px -mr-px'
              : '-mb-px',
            'relative h-[382px] rounded-[32px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]',
          ]"
        >
          <h2
            class="absolute top-8 left-8 font-medium text-black text-2xl tracking-[0] leading-[26.4px] whitespace-nowrap"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.title }}
          </h2>

          <img
            :class="card.imageClassName"
            :alt="card.imageAlt"
            :src="card.image"
          />

          <button
            class="absolute top-[300px] left-8 w-12 h-12 flex gap-[2.8px] bg-[#ececf0] rounded-2xl overflow-hidden border-none cursor-pointer"
            :aria-label="`View ${card.title} details`"
          >
            <ProductsDetails />
          </button>

          <p
            :class="[
              card.width === 'w-[270px]' ? 'w-[204px]' : 'w-[190px]',
              'absolute top-[66px] left-8 font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]',
            ]"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ card.description }}
          </p>
        </article>
      </div>
    </section>

    <!-- Production Sites Section -->
    <ProductionSites />

    <!-- Calculate Section -->
    <Calculate />

    <!-- Footer -->
    <div class="w-full bg-[#333333]">
      <Footer
        id="contacts"
        class="mx-auto w-full max-w-[1440px]"
        @navigate-home="handleNavigateHome"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sample-info {
  position: relative;
  width: 100%;
  height: 157px;
  background-color: #fff5e8;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    :deep(svg) {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__content {
    position: relative;
    max-width: 1120px;
    margin: 0 auto;
    height: 100%;
    z-index: 1;
  }

  &__text {
    position: absolute;
    top: calc(50% - 52px);
    width: 321px;
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;
    letter-spacing: 0;
    z-index: 1;
    margin: 0;
  }

  &__images {
    position: absolute;
    top: -126px;
    left: 579px;
    width: 757px;
    height: 312px;
    display: flex;
    pointer-events: none;
    z-index: 1;
  }

  &__button-wrapper {
    position: absolute;
    top: 61px;
    left: 966px;
    width: 322px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    overflow: hidden;
    border: none;
    backdrop-filter: blur(16px) brightness(100%);
    -webkit-backdrop-filter: blur(16px) brightness(100%);
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: 32px;
      background: conic-gradient(
        from 90deg at 100% 100%,
        rgba(255, 255, 255, 0) 13%,
        rgba(255, 255, 255, 0.35) 38%,
        rgba(255, 255, 255, 0) 63%,
        rgba(255, 255, 255, 0.35) 88%
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      z-index: 1;
      pointer-events: none;
    }
  }

  &__button {
    position: relative;
    width: 306px;
    height: 64px;
    border-radius: 24px;
    overflow: hidden;
    border: none;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16),
      0px 2px 6px rgba(0, 0, 0, 0.08);
    background: linear-gradient(
        0deg,
        rgba(255, 201, 126, 0) 0%,
        rgba(255, 165, 38, 0.6) 100%
      ),
      linear-gradient(
        0deg,
        rgba(234, 146, 54, 1) 0%,
        rgba(234, 146, 54, 1) 100%
      );
    cursor: pointer;
    transition: transform 0.2s;
    font-family: "Montserrat", sans-serif;

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 2px;
      border-radius: 24px;
      background: conic-gradient(
        from 90deg at 50% 50%,
        rgba(255, 255, 255, 0.3) 20%,
        rgba(222, 222, 222, 0.3) 40%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(222, 222, 222, 0.3) 80%
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      z-index: 1;
      pointer-events: none;
    }

    span {
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 129px);
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: white;
      font-size: 20px;
      text-align: center;
      letter-spacing: 4px;
      line-height: 24px;
      white-space: nowrap;
      z-index: 2;
    }
  }
}

// Адаптивность
@media (max-width: 1440px) {
  header {
    h1 {
      left: 40px;
      transform: none;
    }

    p {
      left: 40px;
      transform: none;
    }

    img {
      left: auto;
      right: 0;
    }

    div {
      left: auto;
      right: 40px;
    }
  }

  section {
    left: 40px;
    width: calc(100% - 80px);
    max-width: 1120px;
  }

  p {
    left: 40px;
    width: calc(100% - 80px);
    max-width: 736px;
  }

  div:has(.border-2) {
    width: calc(100% - 80px);
    max-width: 1120px;
    left: 40px;
  }
}

@media (max-width: 768px) {
  header {
    height: auto;
    min-height: 400px;
    padding-bottom: 40px;

    h1 {
      position: relative;
      top: 100px;
      left: 20px;
      width: calc(100% - 40px);
      font-size: 32px;
    }

    p {
      position: relative;
      top: 120px;
      left: 20px;
      width: calc(100% - 40px);
      font-size: 18px;
    }

    img {
      position: relative;
      top: 140px;
      left: 20px;
      width: calc(100% - 40px);
      height: auto;
      aspect-ratio: 1.04;
    }

    div {
      position: relative;
      top: 160px;
      left: 20px;
      right: auto;
    }
  }

  section {
    position: relative;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: auto;
    flex-direction: column;
    margin-top: 40px;

    div {
      width: 100% !important;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  p {
    position: relative;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  div:has(.border-2) {
    position: relative;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: auto;
    min-height: 170px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
