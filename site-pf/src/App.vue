<template>
  <Header />
   <router-view /> 
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* src/assets/main.css */
@import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');

.header {
  line-height: 1.5;
}

.logo-text {
  color: var(--background);
  font-family: "Ephesis", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  letter-spacing: 1px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
