<script setup lang="ts">
import { ref, computed } from "vue";
import PdfViewer from "./PdfViewer.vue";
import Header from "./blocks/Header.vue";
import Footer from "./blocks/Footer.vue";

// Emits
const emit = defineEmits<{
  "open-contact-modal": [variant: "get-in-touch"];
  "navigate-home": [];
}>();

// Список презентаций из папки /public/documents
const presentations = ref([
  {
    id: "family",
    title: "ROCK Family of Companies",
    src: "/documents/ROCK Family of Companies.pdf",
    description: "Overview of ROCK family of companies",
  },
  {
    id: "natural-stones",
    title: "ROCK Natural Stones",
    src: "/documents/ROCK Natural Stones.pdf",
    description: "Natural stones catalog and information",
  },
  {
    id: "stone-products",
    title: "ROCK Stone Products",
    src: "/documents/ROCK Stone Products.pdf",
    description: "Stone products catalog",
  },
]);

// Выбранная презентация
const selectedPresentation = ref<string | null>(null);

// Обработчик выбора презентации
const selectPresentation = (id: string) => {
  selectedPresentation.value = id;
  // Прокрутка к просмотрщику
  setTimeout(() => {
    const viewer = document.getElementById("pdf-viewer");
    if (viewer) {
      viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
};

// Обработчик закрытия просмотра
const closeViewer = () => {
  selectedPresentation.value = null;
};

// Получить текущую презентацию
const currentPresentation = computed(() => {
  return presentations.value.find((p) => p.id === selectedPresentation.value);
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="max-w-[1440px] mx-auto w-full">
      <Header
        @open-contact-modal="emit('open-contact-modal', 'get-in-touch')"
        @navigate-home="emit('navigate-home')"
      />
    </div>

    <!-- Основной контент -->
    <div class="max-w-[1440px] mx-auto w-full px-4 py-12">
      <!-- Заголовок страницы -->
      <div class="text-center mb-12">
        <h1
          class="font-['Lora'] font-medium text-black text-5xl mb-4 tracking-[0] leading-[1.2]"
        >
          Presentations
        </h1>
        <p
          class="[font-family:var(--font-montserrat)] font-normal text-[#33333399] text-xl max-w-2xl mx-auto"
        >
          Browse our company presentations and product catalogs
        </p>
      </div>

      <!-- Список презентаций -->
      <div
        v-if="!selectedPresentation"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        <div
          v-for="presentation in presentations"
          :key="presentation.id"
          @click="selectPresentation(presentation.id)"
          class="bg-white border-2 border-[#33333333] rounded-2xl p-6 cursor-pointer hover:border-[#a76508] hover:shadow-lg transition-all duration-300"
        >
          <div class="mb-4">
            <!-- Иконка PDF -->
            <div
              class="w-16 h-16 bg-[#a76508] rounded-xl flex items-center justify-center mb-4"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3
              class="font-['Lora'] font-medium text-black text-2xl mb-2 leading-[1.3]"
            >
              {{ presentation.title }}
            </h3>
            <p
              class="[font-family:var(--font-montserrat)] font-normal text-[#33333399] text-base leading-[1.5]"
            >
              {{ presentation.description }}
            </p>
          </div>
          <div
            class="text-[#a76508] [font-family:var(--font-montserrat)] font-medium text-sm uppercase tracking-wider"
          >
            View PDF →
          </div>
        </div>
      </div>

      <!-- Просмотрщик PDF -->
      <div
        v-if="selectedPresentation && currentPresentation"
        id="pdf-viewer"
        class="mb-12"
      >
        <!-- Кнопка назад -->
        <button
          @click="closeViewer"
          class="mb-6 flex items-center gap-2 text-[#333333] hover:text-[#a76508] transition-colors cursor-pointer [font-family:var(--font-montserrat)] font-normal text-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back to Presentations
        </button>

        <!-- Просмотрщик -->
        <div class="bg-white border-2 border-[#33333333] rounded-2xl p-6">
          <PdfViewer
            :src="currentPresentation.src"
            :title="currentPresentation.title"
            height="800px"
            :show-download="true"
            viewer-type="iframe"
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full bg-[#333333] mt-20">
      <Footer class="mx-auto w-full max-w-[1440px]" />
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>

