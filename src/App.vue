<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Header from "./components/blocks/Header.vue";
import HeroSection from "./components/blocks/HeroSection.vue";
import ProductsGrid from "./components/blocks/ProductsGrid.vue";
import StoneTypes from "./components/blocks/StoneTypes.vue";
import ProductionSites from "./components/blocks/ProductionSites.vue";
import Portfolio from "./components/blocks/Portfolio.vue";
import Roadmap from "./components/blocks/Roadmap.vue";
import ContactUs from "./components/blocks/ContactUs.vue";
import Benefits from "./components/blocks/Benefits.vue";
import Service from "./components/blocks/Service.vue";
import Calculate from "./components/blocks/Calculate.vue";
import Footer from "./components/blocks/Footer.vue";
import ContactUsModal from "./components/ContactUsModal.vue";
import ThankYouModal from "./components/ThankYouModal.vue";
import Presentations from "./components/Presentations.vue";
import StoneInfo from "./components/blocks/StoneInfo.vue";
import { getStoneData } from "./data/stones";

// Управление страницами
const currentPage = ref<"home" | "presentations" | "stone-detail">("home");
const currentStoneId = ref<string | null>(null);

// Управление модалками
type ModalType = "contact" | "thankyou" | null;
type ContactModalVariant =
  | "get-in-touch"
  | "free-samples"
  | "request-catalog"
  | "make-enquiry";

const activeModal = ref<ModalType>(null);
const contactModalVariant = ref<ContactModalVariant>("get-in-touch");

// Функции для открытия модалок
const openContactModal = (variant: ContactModalVariant) => {
  contactModalVariant.value = variant;
  activeModal.value = "contact";
};

const openThankYouModal = () => {
  activeModal.value = "thankyou";
};

const closeModal = () => {
  activeModal.value = null;
};

// Обработчик отправки формы
const handleFormSubmit = (data: { name: string; phone: string }) => {
  console.log("Form submitted:", data);
  // Закрываем модалку контакта и открываем модалку благодарности
  closeModal();
  openThankYouModal();
};

// Маппинг заголовков для разных вариантов
const modalTitles: Record<ContactModalVariant, string> = {
  "get-in-touch": "Get in touch",
  "free-samples": "Free samples or project calculation",
  "request-catalog": "Request catalog",
  "make-enquiry": "Make an enquiry",
};

// Обработчик возврата на главную страницу
const handleNavigateHome = () => {
  if (currentPage.value !== "home") {
    currentPage.value = "home";
    currentStoneId.value = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Обработчик открытия страницы камня
const handleOpenStonePage = (stoneId: string) => {
  currentStoneId.value = stoneId;
  currentPage.value = "stone-detail";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Обработка навигации по якорям
const handleNavigation = (event: Event) => {
  const target = event.target as HTMLAnchorElement;
  const href = target.getAttribute("href");

  if (href === "#presentations") {
    event.preventDefault();
    currentPage.value = "presentations";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (href?.startsWith("#") && currentPage.value === "presentations") {
    // Если мы на странице презентаций и кликнули на другую ссылку, возвращаемся на главную
    event.preventDefault();
    currentPage.value = "home";
    // Прокручиваем к нужному разделу после небольшой задержки
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 149;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  }
};

// Обработка при монтировании
onMounted(() => {
  // Обработка кликов по ссылкам навигации
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a[href]");
    if (link) {
      handleNavigation(e);
    }
  });

  // Проверка hash в URL при загрузке
  if (window.location.hash === "#presentations") {
    currentPage.value = "presentations";
  } else if (window.location.hash.startsWith("#stone-")) {
    const stoneId = window.location.hash.replace("#stone-", "");
    const stoneData = getStoneData(stoneId);
    if (stoneData) {
      currentStoneId.value = stoneId;
      currentPage.value = "stone-detail";
    }
  }
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Страница презентаций -->
    <Presentations
      v-if="currentPage === 'presentations'"
      @open-contact-modal="openContactModal"
      @navigate-home="handleNavigateHome"
    />

    <!-- Страница информации о камне -->
    <StoneInfo
      v-else-if="currentPage === 'stone-detail' && currentStoneId"
      :stone-data="getStoneData(currentStoneId)!"
      @open-contact-modal="openContactModal"
      @navigate-home="handleNavigateHome"
    />

    <!-- Главная страница -->
    <template v-else>
      <!-- Центрированный контейнер для всего лендинга -->
      <div class="max-w-[1440px] mx-auto w-full">
        <Header
          @open-contact-modal="openContactModal"
          @navigate-home="handleNavigateHome"
        />
      </div>
      <!-- HeroSection на всю ширину экрана -->
      <HeroSection />
      <!-- Центрированный контейнер для остальных блоков лендинга -->
      <div class="mx-auto w-full">
        <ProductsGrid
          id="products"
          class="pt-[80px]"
          @open-contact-modal="openContactModal"
        />
      </div>

      <StoneTypes
        id="stones"
        @open-contact-modal="openContactModal"
        @open-stone-page="handleOpenStonePage"
      />

      <ProductionSites id="manufactory" />

      <Portfolio id="projects" />

      <Roadmap />

      <ContactUs />

      <Benefits @open-contact-modal="openContactModal" />

      <Service />

      <Calculate />

      <div class="w-full bg-[#333333]">
        <Footer
          id="contacts"
          class="mx-auto w-full max-w-[1440px]"
          @navigate-home="handleNavigateHome"
        />
      </div>
    </template>

    <!-- Модальные окна -->
    <ContactUsModal
      v-if="activeModal === 'contact'"
      :title="modalTitles[contactModalVariant]"
      button-text="Contact Manager"
      @close="closeModal"
      @submit="handleFormSubmit"
    />

    <ThankYouModal v-if="activeModal === 'thankyou'" @close="closeModal" />
  </div>
</template>

<style scoped></style>
