<script setup lang="ts">
// Интерфейс для сегмента текста с цветом
interface TextSegment {
  text: string;
  color: string;
}

// Интерфейс для шага roadmap
interface RoadmapStep {
  number: string;
  title: string;
  titleSegments?: Array<{ text: string; className: string }>;
  image: string;
  imageAlt: string;
  imageClasses: string;
  leftPosition: string;
}

// Данные для TitleSection
const textSegments: TextSegment[] = [
  { text: "Our ", color: "text-[#333333]" },
  { text: "mission", color: "text-[#a76508]" },
  {
    text: " isn't simply to manufacture stone products —hundreds of other companies do that. We provide a ",
    color: "text-[#333333]",
  },
  { text: "turnkey service", color: "text-[#a76508]" },
  { text: " that will solve all the ", color: "text-[#333333]" },
  { text: "complexities", color: "text-[#a76508]" },
  { text: " and ", color: "text-[#333333]" },
  { text: "issues", color: "text-[#a76508]" },
  { text: " associated with natural stone.", color: "text-[#333333]" },
];

// Функция для вычисления позиции SVG разделителя
// Разделитель должен быть справа от каждого шага (кроме последнего)
const getDividerPosition = (stepLeftPosition: string): string => {
  // Ширина каждого шага: w-40 = 160px
  // Вычисляем позицию разделителя: позиция шага + 160px (ширина шага)
  const positionMap: Record<string, string> = {
    "left-0": "left-40", // 0 + 160px = 160px
    "left-48": "left-[352px]", // 192px + 160px = 352px
    "left-96": "left-[544px]", // 384px + 160px = 544px
    "left-[576px]": "left-[736px]", // 576px + 160px = 736px
    "left-[768px]": "left-[928px]", // 768px + 160px = 928px
  };
  return positionMap[stepLeftPosition] || "left-40";
};

// Данные для RoadmapSection
const roadmapSteps: RoadmapStep[] = [
  {
    number: "1",
    title: "You place an order or send a specification",
    titleSegments: [
      {
        text: "You ",
        className:
          "[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]",
      },
      {
        text: "place an order",
        className: "[font-family:'Avenir_Next-Medium',Helvetica] font-medium",
      },
      {
        text: " or send a specification",
        className:
          "[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]",
      },
    ],
    image: "/images/roadmap/1.png",
    imageAlt: "Product image",
    imageClasses:
      "absolute top-[53px] left-0 w-[68px] h-[81px] aspect-[1] object-cover",
    leftPosition: "left-0",
  },
  {
    number: "2",
    title: "Consultation with the project manager",
    titleSegments: [
      {
        text: "Consultation\n",
        className: "font-medium",
      },
      {
        text: "with the project manager",
        className: "[font-family:'Avenir_Next-Regular',Helvetica]",
      },
    ],
    image: "/images/roadmap/2.png",
    imageAlt: "Image",
    imageClasses:
      "top-[51px] w-[77px] h-[78px] absolute left-0 aspect-[1] object-cover",
    leftPosition: "left-48",
  },
  {
    number: "3",
    title: "Order calculation and issuance of a commercial proposal",
    titleSegments: [
      {
        text: "Order calculation\n",
        className: "font-medium",
      },
      {
        text: "and issuance\nof a commercial proposal",
        className: "[font-family:'Avenir_Next-Regular',Helvetica]",
      },
    ],
    image: "/images/roadmap/3.png",
    imageAlt: "Sundial",
    imageClasses:
      "absolute top-[58px] left-0 w-[73px] h-[74px] aspect-[1] object-cover",
    leftPosition: "left-96",
  },
  {
    number: "4",
    title: "Coordination and contract conclusion",
    titleSegments: [
      {
        text: "Coordination\n",
        className: "font-medium",
      },
      {
        text: "and contract conclusion",
        className: "[font-family:'Avenir_Next-Regular',Helvetica]",
      },
    ],
    image: "/images/roadmap/4.png",
    imageAlt: "Image",
    imageClasses:
      "top-[45px] w-[85px] h-[88px] absolute left-0 aspect-[1] object-cover",
    leftPosition: "left-[576px]",
  },
  {
    number: "5",
    title: "Order production, packaging and loading",
    titleSegments: [
      {
        text: "Order ",
        className:
          "[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]",
      },
      {
        text: "production, packaging\n",
        className: "[font-family:'Avenir_Next-Medium',Helvetica] font-medium",
      },
      {
        text: "and loading",
        className:
          "[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px]",
      },
    ],
    image: "/images/roadmap/5.png",
    imageAlt: "Product image",
    imageClasses:
      "absolute top-[51px] left-0 w-[85px] h-[85px] aspect-[1] object-cover",
    leftPosition: "left-[768px]",
  },
  {
    number: "6",
    title: "Delivery of products to your site",
    titleSegments: [
      {
        text: "Delivery",
        className: "font-medium",
      },
      {
        text: " of products\nto your site",
        className: "[font-family:'Avenir_Next-Regular',Helvetica]",
      },
    ],
    image: "/images/roadmap/6.png",
    imageAlt: "Image",
    imageClasses:
      "top-[51px] w-[78px] h-20 absolute left-0 aspect-[1] object-cover",
    leftPosition: "left-[960px]",
  },
];
</script>

<template>
  <main class="relative w-[1440px] h-[995px] mx-auto" data-model-id="2276:3">
    <!-- Заголовок "Roadmap" -->
    <header class="absolute top-20 left-[calc(50.00%_-_288px)] w-[576px]">
      <p
        class="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#a76508] text-[32px] text-center tracking-[0] leading-[44.8px]"
      >
        Roadmap
      </p>
    </header>

    <!-- Основной заголовок -->
    <h1
      class="top-[125px] left-[calc(50.00%_-_349px)] w-[698px] font-medium text-black text-[64px] leading-[normal] absolute [font-family:'Lora',Helvetica] text-center tracking-[0]"
    >
      Six stages of solution
    </h1>

    <!-- Секция с шагами roadmap -->
    <section
      class="top-[271px] left-[calc(50.00%_-_560px)] w-[1120px] absolute h-[300px]"
      aria-label="Roadmap Section"
    >
      <!-- Шаги roadmap -->
      <article
        v-for="step in roadmapSteps"
        :key="step.number"
        :class="[
          'top-0 w-40 overflow-hidden absolute h-[300px]',
          step.leftPosition,
        ]"
        :aria-labelledby="`roadmap-step-${step.number}`"
      >
        <!-- Большой номер шага (фон) -->
        <div
          class="absolute top-[169px] left-0 [font-family:'Lora',Helvetica] font-bold text-[#f5f5f7] text-9xl tracking-[0] leading-[normal]"
          aria-hidden="true"
        >
          {{ step.number }}
        </div>

        <!-- Заголовок шага -->
        <p
          :id="`roadmap-step-${step.number}`"
          class="[font-family:'Avenir_Next-Medium',Helvetica] absolute top-[159px] left-0 w-40 font-normal text-[#333333] text-xl tracking-[0] leading-[28.0px] whitespace-pre-line"
        >
          <template v-if="step.titleSegments">
            <template
              v-for="(segment, index) in step.titleSegments"
              :key="index"
            >
              <span :class="segment.className">{{ segment.text }}</span>
            </template>
          </template>
          <template v-else>
            {{ step.title }}
          </template>
        </p>

        <!-- Изображение шага -->
        <img
          :class="step.imageClasses"
          :alt="step.imageAlt"
          :src="step.image"
        />
      </article>

      <!-- SVG разделители между шагами -->
      <svg
        v-for="(step, index) in roadmapSteps.slice(0, -1)"
        :key="`divider-${step.number}`"
        :class="[
          'absolute top-0 h-[295px] w-8 pointer-events-none',
          getDividerPosition(step.leftPosition),
        ]"
        width="32"
        height="295"
        viewBox="0 0 32 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M32 1C32 1 32 1 32 1C23.1634 1.00001 16 8.16344 16 17C16 17 16 17 16 17L16 278C16 286.837 8.83655 294 1.45085e-05 294"
          stroke="#F5F5F7"
          stroke-width="2"
        />
      </svg>
    </section>

    <div class="absolute top-[651px] left-[692px] w-14 h-4">
      <svg
        width="56"
        height="16"
        viewBox="0 0 56 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0L0 8L8 16L16 8L8 0Z" fill="#A76508" />
        <path d="M28 0L20 8L28 16L36 8L28 0Z" fill="#A76508" />
        <path d="M48 0L40 8L48 16L56 8L48 0Z" fill="#A76508" />
      </svg>
    </div>

    <!-- Секция с текстом миссии (TitleSection) -->
    <p
      class="top-[683px] left-[calc(50.00%_-_368px)] w-[736px] font-normal text-transparent text-2xl leading-[38.4px] absolute [font-family:'Lora',Helvetica] text-center tracking-[0]"
    >
      <span
        v-for="(segment, index) in textSegments"
        :key="index"
        :class="segment.color"
      >
        {{ segment.text }}
      </span>
    </p>
  </main>
</template>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
