<template>
  <div class="layout-container">
    
      <CardsIndex />
  </div>
</template>

<script>
import CardsIndex from '../components/CardsIndex.vue';


export default {
  components: {
    CardsIndex,
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column; /* Empilha os componentes verticalmente por padrão */
  align-items: center; /* Centraliza os componentes horizontalmente */
  margin: 0 auto; /* Centraliza o contêiner na página */
  padding: 16px; /* Adiciona espaçamento interno */
  box-sizing: border-box;
}

@media (min-width: 1028px) {
  .layout-container {
    flex-direction: row; 
    justify-content: center; 
    align-items: flex-start; 
    gap: 48px; 
    max-width: 1200px; 
  }
}
</style>
