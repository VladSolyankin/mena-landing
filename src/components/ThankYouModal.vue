<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

// Emits
const emit = defineEmits<{
  close: [];
}>();

// Пути к изображениям
const thankYouImage = "/images/roadmap/6.png";
const phoneIcon = "/images/calculate/phone.png";
const emailIcon = "/images/calculate/email.png";
const whatsappIcon = "/images/calculate/whatsapp.png";
const telegramIcon = "/images/calculate/telegram.png";

// Обработчик закрытия модалки
const handleClose = () => {
  emit("close");
};

// Обработчик клика на overlay
const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    handleClose();
  }
};

// Обработчик нажатия клавиши Escape
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    handleClose();
  }
};

// Добавляем обработчик при монтировании компонента
onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

// Удаляем обработчик при размонтировании
onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});

// Кнопки контактов
const contactButtons = [
  {
    type: "phone",
    icon: phoneIcon,
    text: "+7 (499) 112-28-29",
    href: "tel:+74991122829",
    className: "border border-solid border-black",
  },
  {
    type: "email",
    icon: emailIcon,
    text: "ORDER@RCK.OOO",
    href: "mailto:ORDER@RCK.OOO",
    className: "border border-solid border-black",
  },
];

// Социальные кнопки
const socialButtons = [
  {
    type: "whatsapp",
    text: "WhatsApp",
    icon: whatsappIcon,
    href: "https://wa.me/74991122829",
    className:
      "bg-[linear-gradient(0deg,rgba(66,148,15,0.8)_0%,rgba(66,148,15,0.8)_100%)]",
  },
  {
    type: "telegram",
    text: "Telegram",
    icon: telegramIcon,
    href: "https://t.me/",
    className:
      "bg-[linear-gradient(0deg,rgba(28,120,200,0.8)_0%,rgba(28,120,200,0.8)_100%)]",
  },
];
</script>

<template>
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    @click="handleOverlayClick"
  >
    <!-- Белая карточка -->
    <div
      class="relative w-full max-w-[928px] h-[670px] flex items-center justify-center bg-white rounded-[32px] overflow-y-auto"
      @click.stop
    >
      <div class="h-[510px] w-[608px] relative">
        <!-- Кнопка закрытия -->
        <button
          @click="handleClose"
          class="absolute cursor-pointer -top-15 -right-35 w-8 h-8 flex items-center justify-center text-2xl rounded-full bg-[#D9D9D9] text-black hover:text-gray-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-figma-bg-blur-radius="16">
              <rect
                width="24"
                height="24"
                rx="12"
                fill="black"
                fill-opacity="0.05"
              />
              <path d="M8 8L16 16" stroke="black" />
              <path d="M16 8L8 16" stroke="black" />
            </g>
          </svg>
        </button>

        <div class="flex flex-col gap-[3px] items-center justify-center">
          <!-- Текст "Thank you!" -->
          <h1
            class="w-full mx-auto [font-family:'Lora-Medium',Helvetica] font-medium text-black text-4xl text-center tracking-[0] leading-[50.4px]"
          >
            Thank you!
          </h1>
          <!-- Текст описания -->
          <p
            class="w-[448px] mx-auto [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#000000cc] text-sm text-center tracking-[0] leading-[16.8px]"
          >
            The request has been sent. A specialist will contact you soon.
          </p>
        </div>

        <!-- Изображение благодарности -->
        <div
          class="w-[142px] h-[142px] mx-auto flex items-center justify-center mt-[45px]"
        >
          <img
            :src="thankYouImage"
            alt="Thank you"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Текст перед кнопками контактов -->
        <p
          class="mx-auto mt-[45px] w-[448px] text-[#000000cc] text-sm text-center leading-[16.8px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal tracking-[0]"
        >
          Or contact us in a way convenient for you
        </p>

        <!-- Кнопки контактов -->
        <a
          v-for="(button, index) in contactButtons"
          :key="button.type"
          :href="button.href"
          :class="[
            'flex w-[296px] items-center justify-center gap-2.5 p-4 absolute top-[376px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity',
            index === 0
              ? 'left-[calc(50.00%_-_304px)]'
              : 'left-[calc(50.00%_+_8px)]',
            button.className,
          ]"
          :aria-label="button.text"
        >
          <!-- Иконка -->
          <img
            :src="button.icon"
            :alt="button.type"
            class="w-5 h-5 object-contain"
            aria-hidden="true"
          />

          <!-- Текст -->
          <span
            class="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap"
          >
            {{ button.text }}
          </span>
        </a>

        <!-- Социальные кнопки -->
        <a
          v-for="(button, index) in socialButtons"
          :key="button.type"
          :href="button.href"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'flex w-[296px] items-center justify-center gap-2 p-4 absolute top-[452px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity',
            index === 0
              ? 'left-[calc(50.00%_-_304px)]'
              : 'left-[calc(50.00%_+_8px)]',
            button.className,
          ]"
          :aria-label="button.text"
        >
          <!-- Иконка -->
          <div
            class="relative w-7 h-7 aspect-[1] flex items-center justify-center"
          >
            <img
              :src="button.icon"
              :alt="button.type"
              class="w-full h-full object-contain"
              aria-hidden="true"
            />
          </div>

          <!-- Текст -->
          <span
            class="[font-family:'Avenir_Next-Regular',Helvetica] text-white relative w-fit mt-[-1.00px] font-normal text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap"
          >
            {{ button.text }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
