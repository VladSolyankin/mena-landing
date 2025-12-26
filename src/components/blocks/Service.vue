<script setup lang="ts">
import ServiceBars from "../../assets/svg/service/ServiceBars.vue";
interface StepNode {
  id: string;
  label: string;
  icon: string;
  iconType: "material" | "image";
  imageSrc?: string;
  bgColor: string;
  textColor: string;
  position: {
    top: number;
    left: number;
  };
}

// Rock Service шаги
const rockServiceSteps: StepNode[] = [
  {
    id: "rock-logistics",
    label: "Rock logistics",
    icon: "rock-1",
    iconType: "image",
    imageSrc: "/images/service/rock-1.png",
    bgColor: "#a76508",
    textColor: "#a76508",
    position: { top: 240, left: 0 },
  },
  {
    id: "rock-manufacturer",
    label: "Rock manufacturer",
    icon: "rock-2",
    iconType: "image",
    imageSrc: "/images/service/rock-2.png",
    bgColor: "#a76508",
    textColor: "#a76508",
    position: { top: 80, left: 383 },
  },
  {
    id: "you-rock",
    label: "You",
    icon: "rock-3",
    iconType: "image",
    imageSrc: "/images/service/rock-3.png",
    bgColor: "#a76508",
    textColor: "#a76508",
    position: { top: 400, left: 383 },
  },
];

// Traditional Retail шаги
const traditionalRetailSteps: StepNode[] = [
  {
    id: "manufacturer",
    label: "Manufacturer",
    icon: "other-1",
    iconType: "image",
    imageSrc: "/images/service/other-1.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 82, left: 658 },
  },
  {
    id: "export-agent",
    label: "Export Agent",
    icon: "other-2",
    iconType: "image",
    imageSrc: "/images/service/other-2.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 82, left: 850 },
  },
  {
    id: "wholesales",
    label: "Wholesales",
    icon: "other-3",
    iconType: "image",
    imageSrc: "/images/service/other-3.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 82, left: 1041 },
  },
  {
    id: "warehouse",
    label: "Warehouse",
    icon: "other-4",
    iconType: "image",
    imageSrc: "/images/service/other-4.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 188, left: 747 },
  },
  {
    id: "you-traditional",
    label: "You",
    icon: "other-5",
    iconType: "image",
    imageSrc: "/images/service/other-5.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 400, left: 658 },
  },
  {
    id: "retail-warehouse",
    label: "Retail Warehouse",
    icon: "other-6",
    iconType: "image",
    imageSrc: "/images/service/other-6.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 400, left: 850 },
  },
  {
    id: "retail-store",
    label: "Retail Store",
    icon: "other-7",
    iconType: "image",
    imageSrc: "/images/service/other-7.png",
    bgColor: "#b3b3b3",
    textColor: "#333333",
    position: { top: 400, left: 1041 },
  },
];

// Функция для получения класса позиционирования текста
const getTextPositionClass = (stepId: string): string => {
  const positionMap: Record<string, string> = {
    "rock-logistics": "left-[calc(50%_-_50px)]",
    "rock-manufacturer": "left-[calc(50%_-_70px)]",
    "you-rock": "left-[calc(50%_-_32px)] w-[63px]",
    manufacturer: "left-[calc(50%_-_50px)]",
    "export-agent": "left-[calc(50%_-_48px)]",
    wholesales: "left-[calc(50%_-_42px)]",
    warehouse: "left-[calc(50%_-_41px)]",
    "retail-warehouse": "left-[calc(50%_-_63px)]",
    "retail-store": "left-[calc(50%_-_42px)]",
    "you-traditional": "left-[calc(50%_-_32px)] w-[63px]",
  };
  return positionMap[stepId] || "left-[calc(50%_-_32px)]";
};

// Функция для получения класса позиции по вертикали
const getTextTopClass = (stepId: string): string => {
  if (
    stepId === "retail-warehouse" ||
    stepId === "retail-store" ||
    stepId === "you-traditional"
  ) {
    return "top-[calc(50%_+_20px)]";
  }
  return "top-[calc(50%_+_19px)]";
};

// Функция для получения класса шрифта
const getFontClass = (stepId: string): string => {
  const mediumFontSteps = [
    "rock-manufacturer",
    "manufacturer",
    "you-traditional",
  ];
  if (mediumFontSteps.includes(stepId)) {
    return "font-medium";
  }
  return "font-normal";
};

// Функция для получения класса whitespace
const getWhitespaceClass = (stepId: string): string => {
  if (
    stepId === "rock-logistics" ||
    stepId === "rock-manufacturer" ||
    stepId === "retail-warehouse"
  ) {
    return "";
  }
  return "whitespace-nowrap";
};
</script>

<template>
  <div class="relative w-[1440px] h-[831px] bg-[#fff5e8] mx-auto">
    <!-- Основной текст внизу -->
    <p
      class="absolute top-[603px] left-[calc(50%_-_319px)] w-[638px] font-medium text-transparent text-2xl text-center tracking-[0] leading-[33.6px]"
      style="font-family: 'Avenir Next', Helvetica, sans-serif"
    >
      <span class="text-[#33333399]"> We maintain our prices thanks to </span>
      <span class="text-[#333333]"> large production</span>
      <span class="text-[#33333399]"> volumes and a </span>
      <span class="text-[#333333]">well-established system</span>
    </p>

    <!-- Основной контейнер с двумя секциями -->
    <div class="absolute top-20 left-[calc(50%_-_559px)] w-[1119px] h-[520px]">
      <!-- Заголовок Rock Service -->
      <div
        class="left-px w-[558px] text-[#a76508] absolute top-[27px] h-[41px] flex items-center justify-center font-medium text-[32px] text-center tracking-[0] leading-[normal]"
        style="font-family: 'Lora', serif"
      >
        Rock Service
      </div>

      <!-- Левый путь -->
      <img
        class="absolute top-[119px] left-[39px] w-[375px] h-[328px] object-contain"
        alt="Rock Service"
        src="/images/service/left-path.png"
      />

      <!-- Шаги Rock Service -->
      <div
        v-for="step in rockServiceSteps"
        :key="step.id"
        class="absolute w-20 h-20 bg-[#fff5e8] rounded-lg aspect-square whitespace-nowrap"
        :class="{ 'overflow-hidden': step.id === 'you-rock' }"
        :style="{
          top: `${step.position.top}px`,
          left: `${step.position.left}px`,
        }"
      >
        <!-- Текст под иконкой -->
        <div
          class="absolute text-base text-center tracking-[0] leading-[17.6px]"
          :class="[
            getTextTopClass(step.id),
            getTextPositionClass(step.id),
            getFontClass(step.id),
            getWhitespaceClass(step.id),
          ]"
          :style="{
            color: step.textColor,
            fontFamily:
              step.id === 'rock-logistics'
                ? `'Avenir Next', Helvetica, sans-serif`
                : `'Avenir Next', Helvetica, sans-serif`,
          }"
        >
          {{ step.label }}
        </div>

        <!-- Иконка -->
        <div
          class="absolute top-2 left-[calc(50%_-_24px)] w-12 h-12 flex rounded-2xl overflow-hidden aspect-square items-center justify-center"
          :style="{ backgroundColor: step.bgColor }"
        >
          <img
            v-if="step.iconType === 'image' && step.imageSrc"
            class="w-full h-full object-contain p-1"
            :alt="step.label"
            :src="step.imageSrc"
          />
        </div>
      </div>

      <!-- Заголовок Traditional Retail -->
      <div
        class="left-[562px] w-[559px] text-[#333333] absolute top-[27px] h-[41px] flex items-center justify-center font-medium text-[32px] text-center tracking-[0] leading-[normal]"
        style="font-family: 'Lora', serif"
      >
        Traditional Retail
      </div>

      <!-- Правый путь Traditional Retail -->
      <img
        class="absolute top-[121px] left-[738px] w-[345px] h-[326px] object-contain"
        alt="Traditional Retail"
        src="/images/service/right-path.png"
      />

      <!-- Центральная диаграмма с графиком -->
      <div class="absolute top-[172px] left-[445px] w-[231px] h-[199px]">
        <ServiceBars />

        <!-- Символ доллара -->
        <div
          class="absolute top-[calc(50%_+_64px)] left-0.5 w-[227px] font-normal text-[#333333] text-[32px] text-center tracking-[0] leading-[35.2px]"
          style="font-family: 'Lora', serif"
        >
          $
        </div>
      </div>

      <!-- Шаги Traditional Retail -->
      <div
        v-for="step in traditionalRetailSteps"
        :key="step.id"
        class="absolute w-20 h-20 bg-[#fff5e8] rounded-lg aspect-square whitespace-nowrap"
        :class="{ 'overflow-hidden': step.id === 'you-traditional' }"
        :style="{
          top: `${step.position.top}px`,
          left: `${step.position.left}px`,
        }"
      >
        <!-- Текст под иконкой -->
        <div
          class="absolute text-base text-center tracking-[0] leading-[17.6px]"
          :class="[
            getTextTopClass(step.id),
            getTextPositionClass(step.id),
            getFontClass(step.id),
            getWhitespaceClass(step.id),
          ]"
          :style="{
            color: step.textColor,
            fontFamily:
              step.id === 'manufacturer' || step.id === 'you-traditional'
                ? `'Avenir Next', Helvetica, sans-serif`
                : `'Avenir Next', Helvetica, sans-serif`,
          }"
        >
          {{ step.label }}
        </div>

        <!-- Иконка -->
        <div
          class="absolute top-2 left-[calc(50%_-_24px)] w-12 h-12 flex rounded-2xl overflow-hidden aspect-square items-center justify-center"
          :style="{ backgroundColor: step.bgColor }"
        >
          <img
            v-if="step.iconType === 'image' && step.imageSrc"
            class="w-full h-full object-contain p-1"
            :alt="step.label"
            :src="step.imageSrc"
          />
        </div>
      </div>

      <!-- Разделительные линии -->
      <!-- Верхняя линия -->
      <div
        class="absolute top-4 left-[50%] w-0.5 h-16 bg-[rgba(51,51,51,0.1)]"
        style="transform: translateX(-50%)"
      ></div>

      <!-- Нижняя линия -->
      <div
        class="absolute bottom-[43px] left-[50%] w-0.5 h-16 bg-[rgba(51,51,51,0.1)]"
        style="transform: translateX(-50%)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили если потребуются */
</style>
