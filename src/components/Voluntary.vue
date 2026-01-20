<template>
<div class="layout-container">
  <div class="voluntary-wrapper">
    <div class="voluntary-container">
      <p>
        Atualmente nosso projeto depende unicamente de doações para continuar ajudando milhares de pessoas.
        Ajude nos a continuar em atividade por mais anos.
      </p>
      <button @click="redirectToWhatsApp" class="voluntary-button">
        Quero ser voluntário!
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Voluntary",
  methods: {
    redirectToWhatsApp() {
      const phoneNumber = "5551998472398"; 
      const message = "Olá, gostaria de ajudar como voluntário!";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.voluntary-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.voluntary-container {
  background: var(--tomato);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  color: #000;
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-size: var(--font-size-md);
  line-height: 1.5;
  margin: 0 auto 50px;
  width: 320px;
  max-width: 100%;
  box-sizing: border-box;
}

.voluntary-container p {
  margin-bottom: 16px;
}

.voluntary-button {
  background: var(--background);
  color: var(--textDark);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.voluntary-button:hover {
  background: var(--background);
  transform: scale(1.05);
}

@media (min-width: 580px) {
  .voluntary-container {
    width: 500px;
    max-width: 500px;
    height: auto;
    padding-bottom: 32px;
    margin: 0 auto 50px;
  }
}

@media (min-width: 1028px) {

  .voluntary-wrapper {
        justify-content: flex-end;
        position: absolute;
        top: 193px;
        left: 650px;
  }

  .voluntary-container {
        width: 320px;
  }
}
</style>