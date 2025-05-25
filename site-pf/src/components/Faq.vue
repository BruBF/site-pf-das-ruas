<template>
  <div class="faq-list">
    <div
      v-for="(faq, i) in faqs"
      :key="i"
      class="faq-item"
      :class="{ open: openIndex === i }"
    >
      <button class="faq-question" @click="toggle(i)">
        <span>{{ faq.question }}</span>
        <span class="faq-icon">{{ openIndex === i ? '−' : '+' }}</span>
      </button>
      <div v-if="openIndex === i" class="faq-answer">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
import faqs from '@/mocks/faqMock.js';

export default {
  name: "About",
  data() {
    return {
      openIndex: null,
      faqs,
    };
  },
  methods: {
    toggle(i) {
      this.openIndex = this.openIndex === i ? null : i;
    },
  },
};
</script>

<style scoped>
.faq-list {
  max-width: 700px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  border: 2px solid #7c2fa0;
  border-radius: 10px;
  background: #f8f0fa;
  transition: box-shadow 0.2s;
}

.faq-item.open {
  box-shadow: 0 2px 12px rgba(124, 47, 160, 0.08);
}

.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #7c2fa0;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s;
}

.faq-question:hover {
  background: #f3e6fa;
}

.faq-icon {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 1rem;
}

.faq-answer {
  padding: 0 1.5rem 1.2rem 1.5rem;
  color: #5a2b7a;
  font-size: 1rem;
  line-height: 1.6;
  animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px);}
  to { opacity: 1; transform: translateY(0);}
}
</style>