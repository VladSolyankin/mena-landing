<script setup lang="ts">
// Интерфейс для элемента benefits
interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  position: string;
  height: string;
  width?: string;
  iconClass?: string;
  titleHeight?: string;
}

// Маппинг иконок: первые 4 используют 1-4.png, вторые 4 используют 4,1,2,3.png
// Файлы из public доступны по путям, начинающимся с /
const iconMapping = [
  "/images/benefits/1.png", // 1
  "/images/benefits/2.png", // 2
  "/images/benefits/3.png", // 3
  "/images/benefits/4.png", // 4
  "/images/benefits/4.png", // 5
  "/images/benefits/1.png", // 6
  "/images/benefits/2.png", // 7
  "/images/benefits/3.png", // 8
];

// Данные для benefits
const benefitsData: Benefit[] = [
  {
    id: 1,
    icon: iconMapping[0],
    title: "Turnkey work",
    description: "We solve all the problems associated with natural stone.",
    position: "top-0 left-0",
    height: "h-80",
  },
  {
    id: 2,
    icon: iconMapping[1],
    title: "Large volumes",
    description:
      "We supply up to 25,000 m2 per month from our four in-house production facilities.",
    position: "top-0 left-[284px]",
    height: "h-[272px]",
    iconClass: "mt-4 w-8 h-8 ml-4",
  },
  {
    id: 3,
    icon: iconMapping[2],
    title: "Own logistics",
    description: "Reduces delivery times with guaranteed safety.",
    position: "top-0 left-[568px]",
    height: "h-[272px]",
  },
  {
    id: 4,
    icon: iconMapping[3],
    title: "Low prices",
    description:
      "We maintain our position thanks to large production volumes and a well-established system.",
    position: "top-0 left-[852px]",
    height: "h-80",
  },
  {
    id: 5,
    icon: iconMapping[4],
    title: "Reliable\nsupplier",
    description:
      "Turnover exceeds 2.2 billion rubles according to open sources.",
    position: "top-[336px] left-0",
    height: "h-80",
    titleHeight: "h-[58px]",
  },
  {
    id: 6,
    icon: iconMapping[5],
    title: "Control quality",
    description: "At all stages from production to delivery to the site.",
    position: "top-[400px] left-[284px]",
    height: "h-64",
  },
  {
    id: 7,
    icon: iconMapping[6],
    title: "Positive reviews",
    description:
      "The country's largest companies recommend us to their partners.",
    position: "top-[400px] left-[568px]",
    height: "h-64",
    iconClass: "mt-4 w-8 h-8 ml-4",
  },
  {
    id: 8,
    icon: iconMapping[7],
    title: "100% responsibility",
    description: "Warranty obligations\nfor all types of work.",
    position: "top-[336px] left-[856px]",
    height: "h-80",
    width: "w-[264px]",
    titleHeight: "h-[58px]",
  },
];

// Emits
const emit = defineEmits<{
  "open-contact-modal": [variant: "make-enquiry"];
}>();

// Обработчик клика на кнопку
const handleEnquiryClick = () => {
  emit("open-contact-modal", "make-enquiry");
};
</script>

<template>
  <section
    class="w-full h-[1105px] flex flex-col bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,245,232,1)_100%),linear-gradient(0deg,rgba(255,245,232,1)_0%,rgba(255,245,232,1)_100%)]"
  >
    <!-- Заголовок "Roadmap" -->
    <header
      class="h-[45px] w-[576px] self-center mt-20 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#a76508] text-[32px] text-center tracking-[0] leading-[44.8px]"
    >
      Roadmap
    </header>

    <!-- Основной заголовок -->
    <h1
      class="h-[164px] w-[576px] self-center [font-family:'Lora-Medium',Helvetica] font-medium text-[#333333] text-[64px] text-center tracking-[0] leading-[normal]"
    >
      Benefits of working with us
    </h1>

    <!-- Контейнер с карточками benefits -->
    <div class="mx-auto max-w-[1120px] w-[1120px] h-[656px] relative mt-20">
      <!-- Карточки benefits -->
      <article
        v-for="benefit in benefitsData"
        :key="benefit.id"
        :class="[
          benefit.position,
          benefit.width || 'w-[268px]',
          benefit.height,
          'absolute flex flex-col bg-white rounded-[32px] overflow-hidden',
        ]"
      >
        <!-- Иконка -->

        <img
          :src="benefit.icon"
          :class="['aspect-[1] object-contain w-16 h-16 ml-8 mt-8']"
          :alt="benefit.title"
        />

        <!-- Заголовок -->
        <h2
          :class="[
            'ml-8',
            benefit.titleHeight || 'h-[29px]',
            benefit.id === 1 ? 'w-[187px]' : 'w-52',
            benefit.id === 5 || benefit.id === 8 ? 'mt-[13px]' : 'mt-3',
            `[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[28.8px] whitespace-pre-line`,
          ]"
        >
          {{ benefit.title }}
        </h2>

        <!-- Описание -->
        <p
          :class="[
            'ml-8 w-52',
            benefit.id === 1 ||
            benefit.id === 2 ||
            benefit.id === 5 ||
            benefit.id === 6 ||
            benefit.id === 7
              ? 'h-[66px]'
              : benefit.id === 3 || benefit.id === 8
              ? 'h-11'
              : 'h-[88px]',
            benefit.id === 5 ? 'mt-[7px]' : 'mt-2',
            `[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[22.4px] whitespace-pre-line`,
          ]"
        >
          {{ benefit.description }}
        </p>
      </article>

      <!-- Кнопка "Make an enquiry" -->
      <button
        @click="handleEnquiryClick"
        class="all-[unset] box-border absolute top-72 right-[284px] w-[552px] h-24 flex items-center justify-center rounded-[32px] overflow-hidden bg-[linear-gradient(0deg,rgba(167,101,8,1)_0%,rgba(167,101,8,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity"
      >
        <span
          class="-mt-px h-[35px] ml-px w-[243px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[35.2px] whitespace-nowrap"
        >
          Make an enquiry
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
