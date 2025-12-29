<script setup lang="ts">
import { ref } from "vue";
import Logo from "../../assets/svg/logo-light.vue";

// Emits
const emit = defineEmits<{
  "navigate-home": [];
}>();

// Обработчик клика на логотип
const handleLogoClick = () => {
  emit("navigate-home");
};

// Обработчик клика по якорной ссылке
const handleAnchorClick = (event: Event, href: string) => {
  event.preventDefault();
  emit("navigate-home");

  // Прокручиваем к нужному разделу после небольшой задержки
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 149; // Высота header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

// Состояние email
const email = ref<string>("");
const isEmailValid = ref<boolean>(true);

// Регулярное выражение для валидации email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Функция для фильтрации и валидации email
const validateEmail = (value: string): string => {
  // Удаляем пробелы и приводим к нижнему регистру
  let filtered = value.replace(/\s/g, "").toLowerCase();

  // Разрешаем только допустимые символы для email
  filtered = filtered.replace(/[^a-z0-9@._-]/g, "");

  return filtered;
};

// Обработчик изменения email
const handleEmailChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const filteredValue = validateEmail(target.value);
  email.value = filteredValue;

  // Проверяем валидность только если поле не пустое
  if (filteredValue.length > 0) {
    isEmailValid.value = emailRegex.test(filteredValue);
  } else {
    isEmailValid.value = true;
  }
};

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
  <footer class="relative w-full h-[480px] bg-[#333333]" aria-label="Footer">
    <!-- Социальные ссылки (справа внизу) -->
    <div
      class="absolute top-96 left-[1194px] [font-family:var(--font-montserrat)] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[2].href" class="hover:text-white transition-colors">
        {{ socialLinks[2].label }}
      </a>
    </div>

    <div
      class="absolute top-96 left-[1021px] [font-family:var(--font-montserrat)] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[1].href" class="hover:text-white transition-colors">
        {{ socialLinks[1].label }}
      </a>
    </div>

    <div
      class="absolute top-96 left-[848px] [font-family:var(--font-montserrat)] font-normal text-[#ffffff99] text-base tracking-[0] leading-4 whitespace-nowrap"
    >
      <a :href="socialLinks[0].href" class="hover:text-white transition-colors">
        {{ socialLinks[0].label }}
      </a>
    </div>

    <!-- color: #FFF;
font-family: Lora;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 56px */ -->

    <div
      class="absolute font-[Lora] top-[80px] left-[832px] w-[448px] font-normal text-[#ffffff] text-[40px] tracking-[0] leading-[56px]"
    >
      Calculation <br />
      of materials supply
    </div>

    <!-- Форма подписки на email -->
    <form
      @submit.prevent="handleSubmit"
      :class="[
        'absolute top-[211px] left-[832px] w-[448px] h-11 flex justify-between rounded-2xl overflow-hidden border-2 border-solid transition-colors',
        isEmailValid && email.length > 0
          ? 'border-[#ffffff33]'
          : email.length > 0
          ? 'border-red-500'
          : 'border-[#ffffff33]',
      ]"
    >
      <label for="email-input" class="sr-only">Email address</label>
      <input
        id="email-input"
        type="email"
        :value="email"
        @input="handleEmailChange"
        placeholder="NAME@MAIL.COM"
        class="mt-3.5 w-[161px] h-4 ml-4 [font-family:var(--font-montserrat)] font-normal text-[#ffffff80] text-base tracking-[0] leading-4 whitespace-nowrap placeholder:text-[#ffffff80] bg-transparent outline-none"
        aria-label="Email address for materials supply calculation"
        :aria-invalid="!isEmailValid && email.length > 0"
      />

      <button
        type="submit"
        class="h-9 w-12 self-center mr-1 flex items-center justify-end rounded-xl overflow-hidden bg-[linear-gradient(0deg,rgba(167,101,8,1)_0%,rgba(167,101,8,1)_100%),linear-gradient(0deg,rgba(232,140,10,1)_0%,rgba(232,140,10,1)_100%)] hover:opacity-90 transition-opacity cursor-pointer"
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

    <!-- Логотип -->
    <div
      class="absolute w-[182px] h-10 top-20 left-40 cursor-pointer"
      @click="handleLogoClick"
    >
      <Logo />
    </div>

    <!-- Навигация -->
    <nav
      class="inline-flex flex-col items-start justify-center gap-2 absolute top-[204px] left-40"
      aria-label="Main navigation"
    >
      <div
        class="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:var(--font-montserrat)] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap"
      >
        NAVIGATION:
      </div>

      <a
        v-for="(link, index) in navigationLinks"
        :key="index"
        :href="link.href"
        @click.prevent="handleAnchorClick($event, link.href)"
        class="relative flex items-center justify-center w-fit [font-family:var(--font-montserrat)] font-normal text-[#ffffff99] text-base tracking-[0] leading-[25.6px] whitespace-nowrap hover:text-white transition-colors cursor-pointer"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Контакты -->
    <address
      class="inline-flex flex-col items-start justify-center gap-2 absolute top-[204px] left-[436px] not-italic"
    >
      <div
        class="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:var(--font-montserrat)] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap"
      >
        CONTACTS:
      </div>

      <a
        v-for="(contact, index) in contactInfo"
        :key="index"
        :href="contact.href"
        class="relative flex items-center justify-center w-fit [font-family:var(--font-montserrat)] font-normal text-[#ffffff99] text-base tracking-[0] leading-[25.6px] whitespace-nowrap hover:text-white transition-colors"
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
