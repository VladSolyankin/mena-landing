<script setup lang="ts">
import { ref } from "vue";
import { vMaska } from "maska/vue";

// Состояние формы
const name = ref<string>("");
const phone = ref<string>("");

// Пути к изображениям
const storageImage = "/images/calculate/storage-1-2.png";
const phoneIcon = "/images/calculate/phone.png";
const emailIcon = "/images/calculate/email.png";
const whatsappIcon = "/images/calculate/whatsapp.png";
const telegramIcon = "/images/calculate/telegram.png";

// Обработчик изменения имени
const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  name.value = target.value;
};

// Обработчик изменения телефона
const handlePhoneChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  phone.value = target.value;
};

// Обработчик отправки формы
const handleSubmit = (event: Event) => {
  event.preventDefault();
  console.log("Form submitted:", { name: name.value, phone: phone.value });
};

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
  <section
    class="relative w-full h-[990px] bg-white"
    aria-label="Calculation of materials supply"
  >
    <!-- Фоновое изображение storage -->
    <img
      class="absolute top-0 left-0 w-full h-full object-cover"
      alt="Storage"
      :src="storageImage"
    />

    <!-- Белая карточка с формой -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[928px] h-[670px] flex items-center justify-center bg-white rounded-[32px]"
    >
      <div class="h-[510px] w-[608px] relative">
        <!-- Заголовок -->
        <h1
          class="absolute top-0 left-[calc(50.00%_-_368px)] w-[736px] font-['Lora'] font-medium text-black text-4xl text-center tracking-[0] leading-[50.4px]"
        >
          Calculation of materials supply
        </h1>

        <!-- Описательный текст -->
        <p
          class="absolute top-[53px] left-[calc(50.00%_-_224px)] w-[448px] [font-family:var(--font-montserrat)] font-normal text-[#000000cc] text-sm text-center tracking-[0] leading-[16.8px]"
        >
          Send us your contact information, our specialists will contact you to
          clarify the specifics and details of delivery.
        </p>

        <!-- Форма -->
        <form @submit.prevent="handleSubmit" class="contents">
          <!-- Контейнер для полей ввода -->
          <div
            class="absolute top-[105px] left-[calc(50.00%_-_304px)] w-[608px] h-[66px] rounded-2xl overflow-hidden border-2 border-solid border-[#33333333]"
          >
            <!-- Поле ввода имени -->
            <label for="name-input" class="sr-only">Name</label>
            <input
              id="name-input"
              type="text"
              :value="name"
              @input="handleNameChange"
              placeholder="NAME"
              class="absolute top-5 left-4 w-[calc(50%_-_32px)] [font-family:var(--font-montserrat)] font-normal text-black text-xl tracking-[0] leading-[28.0px] placeholder:text-[#33333333] outline-none bg-transparent"
              aria-label="Name"
            />

            <!-- Разделительная линия -->
            <div
              class="absolute top-[calc(50.00%_-_17px)] right-[214px] w-0.5 h-[34px] bg-[#33333333]"
              aria-hidden="true"
            ></div>

            <!-- Поле ввода телефона -->
            <label for="phone-input" class="sr-only">Phone Number</label>
            <input
              id="phone-input"
              type="tel"
              v-model="phone"
              v-maska="'+7 (###) ###-##-##'"
              @input="handlePhoneChange"
              placeholder="PHONE NUMBER"
              class="absolute top-[18px] right-[195px] translate-x-[100%] w-[181px] [font-family:var(--font-montserrat)] font-normal text-black text-xl tracking-[0] leading-[28.0px] text-left placeholder:text-[#33333333] placeholder:uppercase outline-none bg-transparent"
              aria-label="Phone Number"
            />
          </div>

          <!-- Кнопка отправки -->
          <button
            type="submit"
            class="flex w-[608px] items-center justify-center gap-2.5 p-4 absolute top-[189px] left-[calc(50.00%_-_304px)] rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(167,101,8,1)_0%,rgba(167,101,8,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Calculate"
          >
            <span
              class="relative w-fit mt-[-1.00px] [font-family:var(--font-montserrat)] font-normal text-white text-2xl text-center tracking-[0] leading-[33.6px] whitespace-nowrap"
            >
              Calculate
            </span>
          </button>
        </form>

        <!-- Текст перед кнопками контактов -->
        <p
          class="absolute top-[285px] left-[calc(50.00%_-_224px)] w-[448px] text-[#000000cc] text-sm text-center leading-[16.8px] [font-family:var(--font-montserrat)] font-normal tracking-[0]"
        >
          Or contact us in a way convenient for you
        </p>

        <!-- Кнопки контактов -->
        <a
          v-for="(button, index) in contactButtons"
          :key="button.type"
          :href="button.href"
          :class="[
            'flex w-[296px] items-center justify-center gap-2.5 p-4 absolute top-[321px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity',
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
            class="relative w-fit mt-[-1.00px] [font-family:var(--font-montserrat)] font-normal text-black text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap"
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
            'flex w-[296px] items-center justify-center gap-2 p-4 absolute top-[397px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity',
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
            class="[font-family:var(--font-montserrat)] text-white relative w-fit mt-[-1.00px] font-normal text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap"
          >
            {{ button.text }}
          </span>
        </a>

        <!-- Текст с согласием -->
        <p
          class="absolute top-[476px] left-[calc(50.00%_-_224px)] w-[448px] [font-family:var(--font-montserrat)] font-normal text-[#33333366] text-xs text-center tracking-[0] leading-[16.8px]"
        >
          <span class="text-[#33333366]">
            *By clicking the button, you consent to the processing of personal
            data and accept
          </span>

          <a
            href="#"
            class="text-[#33333366] underline hover:opacity-80 transition-opacity"
          >
            the terms of the agreement
          </a>

          <span class="text-[#33333366]">.</span>
        </p>
      </div>
    </div>
  </section>
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
