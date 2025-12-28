<script setup lang="ts">
import { ref } from "vue";
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
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Центрированный контейнер для всего лендинга -->
    <div class="max-w-[1440px] mx-auto w-full">
      <Header @open-contact-modal="openContactModal" />
    </div>
    <!-- HeroSection на всю ширину экрана -->
    <HeroSection />
    <!-- Центрированный контейнер для остальных блоков лендинга -->
    <div class="mx-auto w-full">
      <ProductsGrid
        class="pt-[80px]"
        @open-contact-modal="openContactModal"
      />
    </div>

    <StoneTypes @open-contact-modal="openContactModal" />

    <ProductionSites />

    <Portfolio />

    <Roadmap />

    <ContactUs />

    <Benefits @open-contact-modal="openContactModal" />

    <Service />

    <Calculate />

    <div class="w-full bg-[#333333]">
      <Footer class="mx-auto w-full max-w-[1440px]" />
    </div>

    <!-- Модальные окна -->
    <ContactUsModal
      v-if="activeModal === 'contact'"
      :title="modalTitles[contactModalVariant]"
      button-text="Contact Manager"
      @close="closeModal"
      @submit="handleFormSubmit"
    />

    <ThankYouModal
      v-if="activeModal === 'thankyou'"
      @close="closeModal"
    />
  </div>
</template>

<style scoped></style>
