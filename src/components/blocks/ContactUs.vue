<script setup lang="ts">
import { ref } from "vue";

// Состояние формы
const email = ref<string>("");
const isSubmitting = ref<boolean>(false);
const isEmailValid = ref<boolean>(true);

// Пути к изображениям (можно настроить при необходимости)
const backgroundImage = "/images/contact-us/background.png";
const contactIconImage = "/images/contact-us/icon.png";

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

// Обработчик отправки формы
const handleSubmit = async (event: Event) => {
  event.preventDefault();
  isSubmitting.value = true;

  // Симуляция отправки формы
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Form submitted with email:", email.value);
  isSubmitting.value = false;
  email.value = "";
};
</script>

<template>
  <section
    id="contacts"
    class="relative top-0 left-0 w-full h-[720px] mx-auto contact-section"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    aria-label="Contact Us Section"
  >
    <!-- Белая карточка с формой -->
    <div
      class="absolute top-10 left-[calc(50.00%_-_368px)] w-[736px] h-[480px] bg-white rounded-[32px] overflow-hidden"
    >
      <form @submit.prevent="handleSubmit" class="w-full h-full relative">
        <!-- Иконка контакта -->
        <img
          class="absolute top-6 left-[calc(50.00%_-_32px)] w-16 h-16 aspect-[1] object-cover"
          alt="Contact icon"
          :src="contactIconImage"
        />

        <!-- Заголовок -->
        <h2
          class="absolute top-24 left-[calc(50.00%_-_272px)] w-[544px] [font-family:'Lora-Regular',Helvetica] font-normal text-[#333333] text-[32px] text-center tracking-[0] leading-[44.8px]"
        >
          Do you have questions or need professional help?
        </h2>

        <!-- Описательный текст -->
        <p
          class="absolute top-[194px] left-[calc(50.00%_-_272px)] w-[544px] [font-family:var(--font-montserrat)] font-normal text-[#33333366] text-2xl text-center tracking-[0] leading-[33.6px]"
        >
          Leave your contact information, and a specialist will help you
          understand the details, send you fragments, and offer the best
          solution.
        </p>

        <!-- Поле ввода email -->
        <div
          :class="[
            'absolute top-[336px] left-24 w-[376px] h-16 rounded-2xl border-2 border-solid transition-colors',
            isEmailValid && email.length > 0
              ? 'border-[#33333333]'
              : email.length > 0
              ? 'border-red-500'
              : 'border-[#33333333]',
          ]"
        >
          <label for="email-input" class="sr-only">Email address</label>
          <input
            id="email-input"
            type="email"
            :value="email"
            @input="handleEmailChange"
            placeholder="Enter your email"
            required
            :class="[
              'w-full h-full px-6 [font-family:var(--font-montserrat)] font-normal text-[#333333] text-lg tracking-[0] leading-[26.4px] rounded-2xl outline-none transition-colors',
              isEmailValid && email.length > 0
                ? 'focus:border-[#a76508]'
                : email.length > 0
                ? 'focus:border-red-500'
                : 'focus:border-[#a76508]',
            ]"
            aria-label="Email address"
            :aria-invalid="!isEmailValid && email.length > 0"
          />
        </div>

        <!-- Кнопка отправки -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="all-[unset] box-border top-[336px] right-24 w-40 h-16 rounded-2xl bg-[linear-gradient(0deg,rgba(167,101,8,1)_0%,rgba(167,101,8,1)_100%),linear-gradient(0deg,rgba(232,140,10,1)_0%,rgba(232,140,10,1)_100%)] absolute flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send form"
        >
          <span
            class="h-[26px] ml-px w-[57px] [font-family:var(--font-montserrat)] font-normal text-white text-2xl tracking-[0] leading-[26.4px] whitespace-nowrap"
          >
            {{ isSubmitting ? "..." : "Send" }}
          </span>
        </button>

        <!-- Текст с согласием -->
        <p
          class="absolute top-[408px] left-[calc(50.00%_-_272px)] w-[544px] [font-family:var(--font-montserrat)] font-normal text-[#33333366] text-xs text-center tracking-[0] leading-[16.8px]"
        >
          <span
            class="[font-family:var(--font-montserrat)] font-normal text-[#33333366] text-xs tracking-[0] leading-[16.8px]"
          >
            *By clicking the button, you consent to the processing of personal
            data and accept
          </span>

          <a
            href="#terms"
            class="underline hover:text-[#333333] transition-colors"
          >
            the terms of the agreement
          </a>

          <span
            class="[font-family:var(--font-montserrat)] font-normal text-[#33333366] text-xs tracking-[0] leading-[16.8px]"
          >
            .
          </span>
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-repeat: repeat-x;
  background-size: auto 560px;
  background-position: top center;
}

/* Дополнительные стили, если необходимо */
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
