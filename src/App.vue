<script setup lang="ts">
import Header from "./components/blocks/Header.vue";
import HeroSection from "./components/blocks/HeroSection.vue";
import ProductsGrid from "./components/blocks/ProductsGrid.vue";
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
  </div>
</template>

<style scoped></style>
