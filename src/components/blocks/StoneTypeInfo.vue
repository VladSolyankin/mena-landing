<script setup lang="ts">
import type { StoneTypeData } from "../../data/stones";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SampleBgOrange from "../../assets/svg/products-grid/sample-bg-orange.vue";
import ProductionSites from "./ProductionSites.vue";
import Calculate from "./Calculate.vue";

// Props
interface Props {
  stoneTypeData: StoneTypeData;
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
</script>

<template>
  <div class="stone-type-info-page min-h-screen bg-white">
    <!-- Header -->
    <div class="max-w-[1440px] mx-auto w-full">
      <Header
        @open-contact-modal="handleOpenContactModal"
        @navigate-home="handleNavigateHome"
      />
    </div>

    <!-- Первый блок: Название, 3 картинки, описание, теги, количество опций -->
    <section class="w-full max-w-[1120px] mx-auto mb-16">
      <button
        class="flex px-[12px] py-[16px] bg-[white] rounded-2xl border border-[#A76508] text-[#A76508] items-center gap-2 cursor-pointer transition-all hover:bg-[#A76508] hover:text-white mb-8"
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
      <!-- Название -->
      <h1
        class="font-medium text-black text-5xl tracking-[0] leading-[normal] mb-8"
        style="font-family: 'Lora', serif"
      >
        {{ stoneTypeData.title }}
      </h1>

      <!-- Блок с изображениями -->
      <div class="flex gap-4 mb-4">
        <!-- Главное изображение с наложением -->
        <article class="w-[736px] h-[456px] flex flex-col gap-2">
          <div
            class="h-[416px] relative bg-[#f5f5f7] rounded-2xl overflow-hidden"
          >
            <img
              class="w-[736px] h-[416px] object-cover! object-center!"
              alt="Background image"
              :src="stoneTypeData.mainImage"
            />
            <img
              v-if="stoneTypeData.mainImageOverlay"
              class="w-[736px] h-[416px] aspect-[1.49] absolute object-cover"
              alt="Background image overlay"
              :src="stoneTypeData.mainImageOverlay"
            />
          </div>
          <!-- Теги под главным изображением -->
          <div
            v-if="stoneTypeData.tags && stoneTypeData.tags.length > 0"
            class="inline-flex w-auto h-[21px] relative items-center gap-1"
          >
            <div
              v-for="(tag, index) in stoneTypeData.tags"
              :key="index"
              class="inline-flex items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] bg-[#f5f5f7] rounded-lg overflow-hidden"
            >
              <div
                class="relative w-fit -mt-px text-xs text-center leading-[13.2px] whitespace-nowrap font-normal text-[#333333] tracking-[0]"
                style="font-family: 'Montserrat', sans-serif"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </article>

        <!-- Два маленьких изображения -->
        <div class="flex flex-col gap-4 w-[368px]">
          <!-- Первое маленькое изображение с наложением -->
          <div
            class="w-[368px] h-[200px] flex items-center justify-center bg-[#f5f5f7] rounded-2xl overflow-hidden relative"
          >
            <div v-if="stoneTypeData.smallImageOverlay" class="ml-[45.6px]">
              <img
                class="w-[368px] h-[200px] mix-blend-multiply aspect-[1.78] object-cover"
                alt="Product page"
                :src="stoneTypeData.smallImageOverlay"
              />
              <img
                v-if="stoneTypeData.smallImages[0]"
                class="top-[31px] left-[95px] w-[368px] h-[200px] aspect-[1.78] absolute object-cover"
                alt="Background image"
                :src="stoneTypeData.smallImages[0].src"
              />
            </div>
            <img
              v-else-if="stoneTypeData.smallImages[0]"
              class="w-[1000px] h-[1000px] object-contain"
              :alt="stoneTypeData.smallImages[0].alt"
              :src="stoneTypeData.smallImages[0].src"
            />
          </div>
          <!-- Второе маленькое изображение -->
          <div
            v-if="stoneTypeData.smallImages[1]"
            class="w-[368px] h-[200px] flex bg-[#f5f5f7] rounded-2xl overflow-hidden relative"
          >
            <img
              class="w-[368px] h-[200px] aspect-[0.75] object-cover grayscale absolute top-0 left-0"
              :alt="stoneTypeData.smallImages[1].alt"
              :src="stoneTypeData.smallImages[1].src"
            />
          </div>
        </div>
      </div>

      <!-- Описание и количество опций -->
      <div class="flex gap-8 mt-4">
        <!-- Описание -->
        <div class="flex flex-col w-[736px] items-start gap-4">
          <p
            class="relative self-stretch -mt-px font-normal text-[#333333] text-xl tracking-[0] leading-[32px]"
            style="font-family: 'Montserrat', sans-serif"
          >
            {{ stoneTypeData.description }}
          </p>
        </div>

        <!-- Количество опций -->
        <aside class="w-[368px] h-[69px] flex justify-center">
          <div
            class="inline-flex -mt-7 w-auto h-[123px] relative items-center gap-4"
          >
            <div
              class="relative w-fit -mt-px font-medium text-[#00000033] text-8xl tracking-[0] leading-[normal]"
              style="font-family: 'Lora', serif"
            >
              {{ stoneTypeData.optionsCount.number }}
            </div>
            <div
              class="relative w-auto font-medium text-[#00000033] text-2xl tracking-[0] leading-[normal]"
              style="font-family: 'Montserrat', sans-serif"
            >
              {{ stoneTypeData.optionsCount.text }}
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Баннер Order free samples -->
    <div
      class="sample-info relative w-full h-[157px] bg-[#fff5e8] overflow-hidden my-10"
    >
      <!-- Фоновое изображение на всю ширину -->
      <div class="sample-info__bg absolute inset-0 w-full h-full">
        <SampleBgOrange />
      </div>

      <!-- Контейнер для контента -->
      <div class="sample-info__content relative max-w-[1120px] h-full mx-auto">
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
          class="sample-info__images absolute top-[-126px] left-[400px] w-[757px] h-[312px] flex"
        >
          <img
            class="mt-[126px] w-[114px] h-[74px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/banner-stone-1.png"
          />
          <img
            class="mt-[212px] w-[100px] h-[71px] ml-[121px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/banner-stone-2.png"
          />
          <img
            class="mt-[126px] w-[252px] h-[126px] ml-[170px] aspect-[1] object-cover"
            alt="Image"
            src="/images/stone-info/types/banner-stone-3.png"
          />
        </div>

        <!-- Кнопка "Contact Manager" -->
        <div
          class="sample-info__button-wrapper flex flex-col w-[322px] items-start gap-2.5 p-2 absolute top-[61px] right-0 bg-[#ffffff1a] rounded-[32px] overflow-hidden border-[none] backdrop-blur-lg backdrop-brightness-100"
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

    <!-- Блок характеристик -->
    <section
      class="w-full max-w-[1120px] mx-auto mb-16 rounded-2xl overflow-hidden border-2 border-solid border-[#f5f5f7]"
    >
      <div class="relative w-[1120px] h-[330px] p-10">
        <!-- DIMENSIONS -->
        <div class="absolute top-10 left-10">
          <h3
            class="font-normal text-[#333333] text-2xl tracking-[2.40px] leading-[31.2px] whitespace-nowrap mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            DIMENSIONS:
          </h3>
          <div class="left-0 h-[53px] absolute w-[470px]">
            <p
              class="absolute top-0 left-0 font-normal text-[#33333380] text-xl tracking-[0] leading-[26px] whitespace-nowrap"
              style="font-family: 'Lora', serif"
            >
              <span class="font-medium"
                >{{ stoneTypeData.characteristics.dimensions.min }}
              </span>
              <span class="font-normal">
                {{ stoneTypeData.characteristics.dimensions.unit }}</span
              >
            </p>
            <div
              class="absolute top-0 left-[395px] font-medium text-[#33333380] text-xl text-right tracking-[0] leading-[26px] whitespace-nowrap"
              style="font-family: 'Lora', serif"
            >
              {{ stoneTypeData.characteristics.dimensions.max }}
              {{ stoneTypeData.characteristics.dimensions.unit }}
            </div>
            <div
              class="top-[30px] left-0 h-[23px] flex gap-2 absolute w-[470px]"
            >
              <div
                class="mt-0.5 w-7 h-[21px] font-normal text-[#33333380] text-base tracking-[0] leading-[20.8px] whitespace-nowrap"
                style="font-family: 'Montserrat', sans-serif"
              >
                min
              </div>
              <img
                v-if="stoneTypeData.dimensionsBar"
                class="w-[391px] h-[18px]"
                alt="Dimensions bar"
                :src="stoneTypeData.dimensionsBar"
              />
              <div
                class="mt-0.5 w-[31px] h-[21px] font-normal text-[#33333380] text-base text-right tracking-[0] leading-[20.8px] whitespace-nowrap"
                style="font-family: 'Montserrat', sans-serif"
              >
                max
              </div>
            </div>
          </div>
        </div>

        <!-- STRENGTH -->
        <div class="absolute top-[178px] left-10">
          <h3
            class="font-normal text-[#333333] text-2xl tracking-[2.40px] leading-[31.2px] whitespace-nowrap mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            STRENGTH:
          </h3>
          <p
            class="absolute top-[39px] left-0 font-normal text-[#33333380] text-xl tracking-[0] leading-[26px] whitespace-nowrap"
            style="font-family: 'Lora', serif"
          >
            <span class="font-medium"
              >{{ stoneTypeData.characteristics.grain.min }}
            </span>
            <span class="font-normal">
              {{ stoneTypeData.characteristics.grain.unit }}</span
            >
          </p>
          <div
            class="absolute top-[39px] left-[428px] font-medium text-[#33333380] text-xl text-right tracking-[0] leading-[26px] whitespace-nowrap"
            style="font-family: 'Lora', serif"
          >
            {{ stoneTypeData.characteristics.grain.max }}
            {{ stoneTypeData.characteristics.grain.unit }}
          </div>
          <div class="absolute top-[73px] left-0 w-[470px] h-[38px] flex">
            <div
              class="mt-[17px] w-7 h-[21px] font-normal text-[#33333380] text-base tracking-[0] leading-[20.8px] whitespace-nowrap"
              style="font-family: 'Montserrat', sans-serif"
            >
              min
            </div>
            <img
              v-if="stoneTypeData.strengthBar"
              class="w-[395px] h-[33px] ml-2"
              alt="Strength bar"
              :src="stoneTypeData.strengthBar"
            />
            <div
              class="mt-[17px] w-[31px] h-[21px] ml-1 font-normal text-[#33333380] text-base text-right tracking-[0] leading-[20.8px] whitespace-nowrap"
              style="font-family: 'Montserrat', sans-serif"
            >
              max
            </div>
          </div>
        </div>

        <!-- GRAIN -->
        <div class="absolute top-10 left-[623px]">
          <h3
            class="font-normal text-[#333333] text-2xl tracking-[2.40px] leading-[31.2px] whitespace-nowrap mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            GRAIN:
          </h3>
          <div class="absolute left-0 w-[463px] h-[61px]">
            <div
              v-for="(grain, index) in stoneTypeData.characteristics.strength"
              :key="index"
              :class="[
                'absolute top-0 h-[25px] flex items-end justify-center font-medium text-[#33333380] text-xl tracking-[0] leading-[26px] whitespace-nowrap',
                index === 0
                  ? 'left-0 w-9'
                  : index === 1
                  ? 'left-[190px] w-[77px]'
                  : 'left-[395px] w-[62px] text-right',
              ]"
              style="font-family: 'Lora', serif"
            >
              {{ grain }}
            </div>
            <div
              v-if="stoneTypeData.grainBar"
              class="absolute top-[29px] left-0 w-[457px] h-8 flex justify-center overflow-hidden -rotate-180"
            >
              <img
                class="mt-0 w-[457px] h-8 rotate-180 object-cover"
                alt="Grain bar"
                :src="stoneTypeData.grainBar"
              />
            </div>
          </div>
        </div>

        <!-- SHAPE -->
        <div class="absolute top-[178px] left-[623px]">
          <h3
            class="font-normal text-[#333333] text-2xl tracking-[2.40px] leading-[31.2px] whitespace-nowrap mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            SHAPE:
          </h3>
          <div class="flex gap-4">
            <img
              v-for="(shape, index) in stoneTypeData.characteristics.shape"
              :key="index"
              :alt="shape.alt"
              :src="shape.src"
            />
          </div>
        </div>
      </div>
      <!-- Patterns внизу -->
    </section>
    <div class="flex justify-between max-w-[1120px] mx-auto">
      <div
        v-for="(pattern, index) in stoneTypeData.patterns"
        :key="index"
        :class="[
          'h-[120px] flex justify-between bg-[#f5f5f7] rounded-2xl overflow-hidden',
          index === 0
            ? 'left-0'
            : index === 1
            ? 'left-[284px]'
            : index === 2
            ? 'left-[568px]'
            : 'left-[852px]',
        ]"
      >
        <div
          :class="[
            'w-[106px] self-center ml-5 font-normal text-[#333333] text-xl tracking-[0] leading-[24px]',
          ]"
          style="font-family: 'Montserrat', sans-serif"
        >
          {{ pattern.name }}
        </div>
        <img
          class="self-end w-[142px] h-[110px] aspect-[0.89] object-cover"
          :alt="pattern.name"
          :src="pattern.image"
        />
      </div>
    </div>

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

  &__button-wrapper {
    position: absolute;
    top: 61px;
    right: 0;
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
@media (max-width: 1120px) {
  section {
    padding: 0 20px;
  }

  .sample-info__content {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 0 20px;
  }

  h1 {
    font-size: 32px;
  }

  .flex.gap-4 {
    flex-direction: column;
  }

  .flex.flex-col.gap-4 {
    width: 100%;
  }

  .grid.grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .grid.grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .sample-info {
    height: auto;
    min-height: 157px;
    padding: 20px;

    &__text {
      position: relative;
      top: 0;
      width: 100%;
      margin-bottom: 20px;
    }

    &__button-wrapper {
      position: relative;
      top: 0;
      right: 0;
      width: 100%;
    }
  }
}
</style>
