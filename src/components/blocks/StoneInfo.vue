<script setup lang="ts">
import type { StoneData } from "../../data/stones";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

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
            class="font-medium text-[#333] text-[41px] tracking-[0] leading-[normal]"
            style="font-family: 'Lora', serif"
          >
            <span>{{ spec.value }} </span>
            <span class="text-[26px] font-normal">{{ spec.unit }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full bg-[#333333] mt-[-260px]">
      <Footer
        id="contacts"
        class="mx-auto w-full max-w-[1440px]"
        @navigate-home="handleNavigateHome"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
