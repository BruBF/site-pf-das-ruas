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
* {
  font-family: var(--font-family-primary);

}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
