<template>
  <div class="about-container">
    <p>
        Em meio ao cinza da cidade, transformamos um viaduto vazio em um espaço de acolhimento, amor e cuidado. Todos os sábados, levamos alimento para o corpo e aconchego para a alma de quem enfrenta a fome e a solidão.<br>
         <span class="indent">
            Ali, entre sorrisos e abraços, crianças desenham seus sonhos, vestem capas de super-heróis e, por algumas horas, podem simplesmente ser crianças. Acreditamos que cada gesto de amor tem o poder de transformar vidas e reacender a esperança.
        </span>
    </p>
    <div class="slider">
      <button @click="prevSlide" class="nav-btn nav-btn-left">‹</button>
      <img :src="images[current]" alt="Slide" />
      <button @click="nextSlide" class="nav-btn nav-btn-right">›</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
        images: [],
        current: 0,
        timer: null
    }
  },
  async created() {
    const modules = import.meta.glob('@/assets/about/*.jpg', { eager: true, import: 'default' });
    this.images = Object.values(modules);
},
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
     importAllImages() {
        const context = require.context('@/assets/about', false, /\.jpg$/);
        return context.keys().map(context);
    },
    nextSlide() {
      this.current = (this.current + 1) % this.images.length;
      this.restartTimer();
    },
    prevSlide() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
      this.restartTimer();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 4000); 
    },
    restartTimer() {
      clearInterval(this.timer);
      this.startTimer();
    }
  }
}
</script>

<style scoped>
.about-container {
      display: flex;
  flex-direction: column;
  background: var(--gold);
  border-radius: 16px;
  padding: 24px;
  width: 320px;
  max-width: 100%;
  margin: 50px 0 50px 0;
  box-sizing: border-box;
  overflow: hidden; 
}
.about-container p {
    margin-top: 0;
  margin-bottom: 16px;
  font-family: var(--font-family-primary, 'Inter', sans-serif);;
    font-size: var(--font-size-md);
  color: var(--textDark);
   line-height: 1.2;
   text-indent: 2em;
}
.slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}
.slider img {
  width: 272px; 
  height: 250px;
  object-fit: cover;
  display: block;
    margin: 0 auto;
}

.indent {
  display: block;
  text-indent: 2em;
}
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--mint);
  background: rgba(0,0,0,0.40); 
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: background 0.2s;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
    padding: 0;
  line-height: 1;
}
.nav-btn:hover {
  background: rgba(0,0,0,0.65); 
  cursor: pointer;
}
.nav-btn-left {
  left: 10px;
}
.nav-btn-right {
  right: 10px;
}
.nav-btn:hover {
  cursor: pointer;
}

@media (min-width: 580px) {
     .about-container {
    width: 500px;
    max-width: 500px;
    height: auto;
    min-height: 585px;
    padding-bottom: 32px;
  }
  .slider img {
    width: 100%;
    max-width: 448px;
    height: 350px;
    max-height: 350px;
  }

    .nav-btn {
        width: 40px;
        height: 40px;
        font-size: 2rem;
    }
}

@media (min-width: 1028px) {
  .about-container {
    max-width: 500px;
     max-height: 600px;
    position: static;
    margin-left: 100px;
    margin-right: 32px; 
  }
}
</style>