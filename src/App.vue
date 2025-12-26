<script setup lang="ts">
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
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Центрированный контейнер для всего лендинга -->
    <div class="max-w-[1440px] mx-auto w-full">
      <Header />
    </div>
    <!-- HeroSection на всю ширину экрана -->
    <HeroSection />
    <!-- Центрированный контейнер для остальных блоков лендинга -->
    <div class="mx-auto w-full">
      <ProductsGrid class="pt-[80px]" />
    </div>

    <StoneTypes />

    <ProductionSites />

    <Portfolio />

    <Roadmap />

    <ContactUs />

    <Benefits />

    <Service />

    <Calculate />

    <Footer class="mx-auto" />
  </div>
</template>

<style scoped></style>
