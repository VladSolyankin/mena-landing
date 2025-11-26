<script setup lang="ts">
import ImagePattern from "../../assets/svg/hero-section/image-pattern.vue";

// Story images (можно заменить на реальные изображения)
const stories = [
  { id: 1, image: "/images/hero-section/news-1.png", alt: "Stone processing" },
  { id: 2, image: "/images/hero-section/news-2.jpg", alt: "Desert landscape" },
  { id: 3, image: "/images/hero-section/news-3.jpg", alt: "Stone texture" },
];

// Статистика для Info Container
const stats = [
  { value: "21M $", label: "Revenue of the Sputnik Group" },
  { value: "4", label: "Production sites across the world" },
  { value: "25K m²", label: "Monthly production capacity" },
];
</script>

<template>
  <section class="hero-section">
    <ImagePattern class="hero-section__pattern" />

    <!-- Главное изображение с clip-path -->
    <div class="hero-section__image-container">
      <img
        src="/images/hero-section/hero-image.png"
        alt="Stone processing machinery"
        class="hero-section__image"
      />
    </div>

    <!-- Круглые превью сторис -->
    <div class="hero-section__stories">
      <div v-for="story in stories" :key="story.id" class="hero-section__story">
        <img :src="story.image" :alt="story.alt" />
      </div>
    </div>

    <!-- Кнопка News -->
    <div class="hero-section__news-badge">
      <span class="hero-section__news-text">News</span>
      <div class="hero-section__news-arrow"></div>
    </div>

    <!-- Tagline текст -->
    <div class="hero-section__tagline">
      <p>
        Production and supply of natural stone products to major construction
        sites worldwide
      </p>
    </div>

    <!-- Info Container со статистикой -->
    <div class="hero-section__info-container">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="hero-section__stat"
      >
        <span class="hero-section__stat-value" v-html="stat.value"></span>
        <span class="hero-section__stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 622px;
  flex-shrink: 0;
  background: radial-gradient(85.82% 104.82% at 50% 0%, #e88c0a 0%, #333 100%);

  &__pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    :deep(svg) {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__image-container {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 1120px;
    height: 580px;
    z-index: 2;
    clip-path: path(
      "M0 32C0 14.3269 14.3269 0 32 0H1088C1105.67 0 1120 14.3269 1120 32V408C1120 425.673 1105.67 440 1088 440H480C462.327 440 448 454.327 448 472V548C448 565.673 433.673 580 416 580H32C14.3269 580 0 565.673 0 548V32Z"
    );
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__stories {
    position: absolute;
    top: 0px;
    right: calc(50% - 560px + 80px);
    display: flex;
    gap: 0;
    z-index: 3;
  }

  &__story {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 4px solid #ea9236;
    background: white;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease;
    margin-left: -24px;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      transform: scale(1.05);
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__news-badge {
    position: absolute;
    top: 90px;
    right: calc(50% - 560px + 110px);
    background: #ea9236;
    border-radius: 8px;
    padding: 6px 24px;
    z-index: 3;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #d57e2d;
    }
  }

  &__news-text {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: white;
    text-align: center;
    line-height: 1.1;
  }

  &__news-arrow {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ea9236;
  }

  &__tagline {
    position: absolute;
    top: 0;
    left: calc(50% - 560px + 40px);
    max-width: 434px;
    z-index: 3;

    p {
      font-family: "Lora", serif;
      font-weight: 500;
      font-size: 48px;
      line-height: 1.2;
      color: white;
      margin: 0;
    }
  }

  &__info-container {
    position: absolute;
    // Позиционируем в вырезе изображения (448px от левого края изображения + 5px gap)
    // Изображение: left: 50%, transform: translateX(-50%) = calc(50% - 560px)
    // Info container: calc(50% - 560px + 448px + 5px) = calc(50% - 107px)
    left: calc(50% - 107px);
    // Верх изображения: -20px, вырез начинается на y=440px + 5px gap
    top: 425px;
    // Ширина: 1120px - 448px - 5px = 667px
    width: 667px;
    // Высота: 580px - 440px - 5px = 135px
    height: 135px;
    background: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(10px);
    // Скругление соответствует внутреннему углу выреза (32px минус часть gap)
    border-radius: 27px;
    // Левый верхний угол должен соответствовать скруглению выреза
    border-top-left-radius: 27px;
    display: flex;
    z-index: 3;
    overflow: hidden;
  }

  &__stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 24px;
    position: relative;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      right: 0;
      top: 24px;
      height: calc(100% - 48px);
      width: 1px;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__stat-value {
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 36px;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 6px;
  }

  &__stat-label {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    line-height: 1.3;
  }

  // Адаптивность для меньших экранов
  @media (max-width: 1200px) {
    &__image-container {
      width: 90%;
      height: auto;
      aspect-ratio: 1120 / 580;
    }

    &__stories {
      right: 10%;
    }

    &__news-badge {
      right: 10%;
    }

    &__tagline {
      left: 5%;
      max-width: 350px;

      p {
        font-size: 36px;
      }
    }

    &__info-container {
      // На меньших экранах позиционируем по-другому
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 667px;
      top: auto;
      bottom: 32px;
    }
  }

  @media (max-width: 768px) {
    height: 550px;

    &__image-container {
      top: 30px;
      width: 95%;
      clip-path: path(
        "M0 24C0 10.7452 10.7452 0 24 0H816C829.255 0 840 10.7452 840 24V306C840 319.255 829.255 330 816 330H360C346.745 330 336 340.745 336 354V411C336 424.255 325.255 435 312 435H24C10.7452 435 0 424.255 0 411V24Z"
      );
    }

    &__stories {
      top: 40px;
      right: 5%;

      .hero-section__story {
        width: 48px;
        height: 48px;
        margin-left: -16px;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    &__news-badge {
      top: 100px;
      right: 5%;
      padding: 4px 16px;

      .hero-section__news-text {
        font-size: 14px;
      }
    }

    &__tagline {
      bottom: 200px;
      left: 5%;
      max-width: 280px;

      p {
        font-size: 24px;
      }
    }

    &__info-container {
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      width: 95%;
      height: auto;
      flex-direction: column;
      border-radius: 24px;
      bottom: 16px;
    }

    &__stat {
      padding: 16px 24px;

      &:not(:last-child)::after {
        right: 24px;
        left: 24px;
        top: auto;
        bottom: 0;
        height: 1px;
        width: auto;
      }
    }

    &__stat-value {
      font-size: 32px;
    }

    &__stat-label {
      font-size: 14px;
    }
  }
}
</style>
