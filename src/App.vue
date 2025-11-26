<script setup lang="ts">
import Header from "./components/blocks/Header.vue";
import HeroSection from "./components/blocks/HeroSection.vue";
import ProductsGrid from "./components/blocks/ProductsGrid.vue";
import StoneTypes from "./components/blocks/StoneTypes.vue";
import ProductionSites from "./components/blocks/ProductionSites.vue";
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
  </div>
</template>

<style scoped></style>
