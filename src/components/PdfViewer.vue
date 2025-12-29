<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  src: string; // Путь к PDF файлу
  width?: string; // Ширина (по умолчанию 100%)
  height?: string; // Высота (по умолчанию 600px)
  title?: string; // Заголовок PDF
  showDownload?: boolean; // Показывать кнопку скачивания
  viewerType?: "iframe" | "embed" | "object"; // Тип просмотрщика
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "600px",
  title: "PDF Document",
  showDownload: true,
  viewerType: "iframe",
});

// Вычисляемое свойство для URL PDF
const pdfUrl = computed(() => {
  // Если это внешний URL, возвращаем как есть
  if (props.src.startsWith("http://") || props.src.startsWith("https://")) {
    return props.src;
  }
  // Если это локальный файл, добавляем путь к public
  return props.src.startsWith("/") ? props.src : `/${props.src}`;
});

// Обработчик скачивания
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = pdfUrl.value;
  link.download = props.title || "document.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="pdf-viewer-container">
    <!-- Заголовок и кнопка скачивания -->
    <div
      v-if="title || showDownload"
      class="pdf-viewer-header flex items-center justify-between mb-4"
    >
      <h3 v-if="title" class="text-xl font-semibold">{{ title }}</h3>
      <button
        v-if="showDownload"
        @click="handleDownload"
        class="px-4 py-2 bg-[#a76508] text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
        aria-label="Download PDF"
      >
        Download PDF
      </button>
    </div>

    <!-- Вариант 1: iframe (рекомендуемый) -->
    <iframe
      v-if="viewerType === 'iframe'"
      :src="pdfUrl"
      :width="width"
      :height="height"
      :title="title"
      class="pdf-viewer border border-gray-300 rounded-lg"
      frameborder="0"
      aria-label="PDF Viewer"
    >
      <p>
        Your browser does not support PDFs.
        <a :href="pdfUrl" target="_blank" rel="noopener noreferrer"
          >Download the PDF</a
        >.
      </p>
    </iframe>
  </div>
</template>

<style scoped>
.pdf-viewer-container {
  width: 100%;
}

.pdf-viewer {
  width: 100%;
  min-height: 400px;
}

.pdf-viewer-header {
  padding: 0 4px;
}

/* Стили для лучшего отображения PDF */
.pdf-viewer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
