<script setup lang="ts">
import Logo from "../../assets/svg/logo.vue";
</script>

<template>
  <!-- Header Container -->
  <header class="relative w-full h-[149px] bg-white">
    <!-- Menu Container -->
    <nav
      class="absolute w-full max-w-[1120px] h-[42px] left-1/2 -translate-x-1/2 top-[40px] bg-white px-4"
    >
      <!-- Group 102: Logo Section (слева) -->
      <div class="absolute w-[305px] h-[45px] left-0 -top-px">
        <Logo />
      </div>

      <!-- Group 113: Navigation Menu (центр) -->
      <div class="absolute w-[508px] h-[40px] left-[373px] top-px">
        <!-- Products -->
        <a
          href="#products"
          class="absolute w-[84px] h-[40px] left-0 top-0 font-['Lora'] font-normal text-base leading-[160%] flex items-center text-center text-black"
        >
          Products
        </a>

        <!-- Stones -->
        <a
          href="#stones"
          class="absolute w-[64px] h-[40px] left-[104px] top-0 font-['Lora'] font-normal text-base leading-[160%] flex items-center text-center text-black"
        >
          Stones
        </a>

        <!-- Projects -->
        <a
          href="#projects"
          class="absolute w-[76px] h-[40px] left-[188px] top-0 font-['Lora'] font-normal text-base leading-[160%] flex items-center text-center text-black"
        >
          Projects
        </a>

        <!-- Manufactory -->
        <a
          href="#manufactory"
          class="absolute w-[120px] h-[40px] left-[284px] top-0 font-['Lora'] font-normal text-base leading-[160%] flex items-center text-center text-black"
        >
          Manufactory
        </a>

        <!-- Contacts -->
        <a
          href="#contacts"
          class="absolute w-[84px] h-[40px] left-[424px] top-0 font-['Lora'] font-normal text-base leading-[160%] flex items-center text-center text-black"
        >
          Contacts
        </a>
      </div>

      <!-- Sample Button Container (справа) -->
      <button
        class="absolute w-[199px] h-[40px] left-[921px] top-px bg-[#EA9236] rounded-xl overflow-hidden text-nowrap"
        style="
          background: linear-gradient(
              0deg,
              rgba(255, 201, 126, 0) 32.81%,
              rgba(255, 165, 38, 0.6) 108.59%
            ),
            #ea9236;
          background-blend-mode: screen, normal;
        "
      >
        <!-- Sample Button Text -->
        <span
          class="w-[167px] right-4 font-['Avenir_Next'] font-medium text-lg leading-[120%] text-center tracking-[0.2em] uppercase text-white"
        >
          ORDER A CALL
        </span>

        <!-- Ellipse 6: декоративный элемент (скрыт по умолчанию) -->
        <div
          class="absolute w-[11.26px] h-[19.41px] left-[7px] top-[-0.46px] bg-white/60 rotate-[39.12deg] invisible"
        ></div>
      </button>

      <!-- Product Button Container (скрыт, видимость: hidden) -->
      <div
        class="absolute w-[133px] h-[40px] right-0 top-1/2 -translate-y-1/2 bg-[#A76508] rounded-lg invisible"
      >
        <span
          class="absolute w-[97px] h-[20px] left-1/2 -translate-x-1/2 top-[10px] font-['Avenir_Next'] font-normal text-lg leading-[110%] text-center text-white"
        >
          Product name
        </span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Используем кастомные шрифты через @font-face если они будут добавлены */
/* Для текущей реализации используем fallback шрифты */
</style>
