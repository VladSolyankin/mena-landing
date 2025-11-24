<script setup lang="ts">
import ImagePattern from "../../assets/svg/hero-section/image-pattern.vue";
</script>

<template>
  <section class="hero-section">
    <ImagePattern class="hero-section__pattern" />
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 622px;
  flex-shrink: 0;
  background: radial-gradient(85.82% 104.82% at 50% 0%, #e88c0a 0%, #333 100%);
  overflow: hidden;

  &__pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // SVG автоматически масштабируется благодаря viewBox
    :deep(svg) {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
