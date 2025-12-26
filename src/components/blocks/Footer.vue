<script setup lang="ts">
import { ref } from "vue";
import Logo from "../../assets/svg/logo-light.vue";

// Состояние email
const email = ref<string>("");

// Навигационные ссылки
const navigationLinks = [
  { label: "PRODUCTS", href: "#products" },
  { label: "BREEDS", href: "#breeds" },
  { label: "PROJECTS", href: "#projects" },
  { label: "MANUFACTORY", href: "#manufactory" },
];

// Контактная информация
const contactInfo = [
  { label: "ORDER@RCK.OOO", href: "mailto:ORDER@RCK.OOO", type: "email" },
  { label: "+77 (900) 000-00-00", href: "tel:+77900000000", type: "phone" },
];

// Социальные ссылки
const socialLinks = [
  { label: "INSTAGRAM", href: "#instagram" },
  { label: "TELEGRAM", href: "#telegram" },
  { label: "FACEBOOK", href: "#facebook" },
];

// Обработчик отправки формы
const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log("Email submitted:", email.value);
};
</script>

<template>
  <footer
    class="relative w-[1440px] h-[480px] bg-[#333333]"
    aria-label="Footer"
  >
    <!-- Социальные ссылки (справа внизу) -->
    <div
      class="absolute top-96 left-[1194px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[2].href" class="hover:text-white transition-colors">
        {{ socialLinks[2].label }}
      </a>
    </div>

    <div
      class="absolute top-96 left-[1021px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[1].href" class="hover:text-white transition-colors">
        {{ socialLinks[1].label }}
      </a>
    </div>

    <div
      class="absolute top-96 left-[848px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[0].href" class="hover:text-white transition-colors">
        {{ socialLinks[0].label }}
      </a>
    </div>

    <!-- Форма подписки на email -->
    <form
      @submit.prevent="handleSubmit"
      class="absolute top-[211px] left-[832px] w-[448px] h-11 flex justify-between rounded-2xl overflow-hidden border-2 border-solid border-[#ffffff33]"
    >
      <label for="email-input" class="sr-only">Email address</label>
      <input
        id="email-input"
        type="email"
        v-model="email"
        placeholder="NAME@MAIL.COM"
        class="mt-3.5 w-[141px] h-4 ml-4 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff80] text-base tracking-[0] leading-4 whitespace-nowrap placeholder:text-[#ffffff80] bg-transparent outline-none"
        aria-label="Email address for materials supply calculation"
      />

      <button
        type="submit"
        class="h-9 w-12 self-center mr-1 flex items-center justify-end rounded-xl overflow-hidden bg-[linear-gradient(0deg,rgba(167,101,8,1)_0%,rgba(167,101,8,1)_100%),linear-gradient(0deg,rgba(232,140,10,1)_0%,rgba(232,140,10,1)_100%)] hover:opacity-90 transition-opacity"
        aria-label="Submit email"
      >
        <!-- SVG иконка стрелки вправо -->
        <svg
          class="h-[14.73px] mr-4 w-[17px]"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.5H16M16 7.5L10 1.5M16 7.5L10 13.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>

    <!-- Заголовок -->
    <h2
      class="absolute top-20 left-[calc(50.00%_+_112px)] w-[382px] h-28 flex items-center justify-center [font-family:'Lora-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[56.0px]"
    >
      Calculation of materials supply
    </h2>

    <!-- Логотип -->
    <div class="absolute w-[182px] h-10 top-20 left-40">
      <Logo />
    </div>

    <!-- Навигация -->
    <nav
      class="inline-flex flex-col items-start justify-center gap-2 absolute top-[204px] left-40"
      aria-label="Main navigation"
    >
      <div
        class="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap"
      >
        NAVIGATION:
      </div>

      <a
        v-for="(link, index) in navigationLinks"
        :key="index"
        :href="link.href"
        class="relative flex items-center justify-center w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[25.6px] whitespace-nowrap hover:text-white transition-colors"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Контакты -->
    <address
      class="inline-flex flex-col items-start justify-center gap-2 absolute top-[204px] left-[436px] not-italic"
    >
      <div
        class="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap"
      >
        CONTACTS:
      </div>

      <a
        v-for="(contact, index) in contactInfo"
        :key="index"
        :href="contact.href"
        class="relative flex items-center justify-center w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[25.6px] whitespace-nowrap hover:text-white transition-colors"
      >
        {{ contact.label }}
      </a>
    </address>
  </footer>
</template>

<style scoped>
/* Скрытый label для доступности */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
