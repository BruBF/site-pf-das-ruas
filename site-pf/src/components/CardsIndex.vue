<template>
<div class="container-index">
   <div class="about-voluntary-cards-container">
    <!-- Seção About -->
    <About :images="greenCardImages" />

    <!-- Seção Voluntary -->
    <div class="voluntary-container">
      <p>
        Atualmente nosso projeto depende unicamente de doações para continuar ajudando milhares de pessoas.
        Ajude nos a continuar em atividade por mais anos.
      </p>
      <button @click="redirectToWhatsApp" class="voluntary-button">
        Quero ser voluntário!
      </button>
    </div>

    <!-- Seção Parceiros -->
     <div class="partnerships-cards-wrapper">
            <div class="partnerships-container">
                <p>
                    Temos uma parceria com outros projetos sociais, que visam auxiliar os assistidos em outras necessidades básicas:
                </p>
                <ol>
                    <li>ONG Viver de Rir;</li>
                    <li>Barbeiros Guerreiros POA-RS;</li>
                    <li>Banho Solidário;</li>
                    <li>Veterinários de rua;</li>
                    <li>Enfermagem de Rua;</li>
                    <li>Laboratório de Rua;</li>
                    <li>Médicos de Rua;</li>
                    <li>Mentes de Rua;</li>
                    <li>Reabilitação de Rua.</li>   
                </ol>
            </div>

            <!-- Seção Cards -->
            <div class="cards-container">
            <div class="card">
                <div class="icon-container">
                <img :src="greenCardImages['calendar-minus-fill.svg']" alt="Ícone de calendário" />
                </div>
                <p>Há 8 anos atuando em cozinhar e servir alimentação, aos sábados das 7:30 até 14h.</p>
            </div>
            <div class="card">
                <div class="icon-container">
                <img :src="greenCardImages['fork-knife.svg']" alt="Ícone de talheres" />
                </div>
                <p>Em média, 300 café da manhã e 1000 almoços servidos.</p>
            </div>
            <div class="card">
                <div class="icon-container">
                <img :src="greenCardImages['handshake-svgrepo-com.svg']" alt="Ícone de aperto de mãos" />
                </div>
                <p>Extensão de atividades durante datas comemorativas como distribuição de alimentos em comunidades.</p>
            </div>
        </div>
        </div>
  </div>
</div>
</template>

<script>
import About from './About.vue';

export default {
  name: "AboutVoluntaryCards",
  components: {
    About,

  },
  data() {
    return {
      greenCardImages: {},
    };
  },
    created() {
    const modules = import.meta.glob('@/assets/green-card/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
    const images = {};
    for (const [key, value] of Object.entries(modules)) {
      const fileName = key.split('/').pop(); 
      images[fileName] = value;
    }
    this.greenCardImages = images;
  },
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
.container-index {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 320px; 
  box-sizing: border-box;
  padding: 16px; 
}
.about-voluntary-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;
  min-width: 320px;
}

.about-container,
.voluntary-container {
  background: var(--gold);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;
  text-align: center;
}

.voluntary-container {
    background: var(--tomato);
}
.about-container p,
.voluntary-container p {
  margin-bottom: 16px;
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-size: var(--font-size-md);
  color: var(--textDark);
}

.about-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
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

.partnerships-cards-wrapper {
  display: flex;
  flex-direction: column; 
  gap: 24px; 
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  box-sizing: border-box;
}
.partnerships-container {
  background: var(--sky); 
  border-radius: 16px; 
  padding: 24px; 
  width: 100%;
  max-width: 320px; 
  box-sizing: border-box; 
  color: var(--textDark); 
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-size: var(--font-size-md);
  line-height: 1.5; 
}

.partnerships-container p {
  margin-bottom: 16px; 
}

.partnerships-container ol {
  padding-left: 20px; 
}

.partnerships-container li {
  margin-bottom: 8px; 
}
.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;
}

.card {
   background: var(--mint);
  border-radius: 16px;
  padding: 10px;
  display: flex;
  align-items: center; 
  gap: 16px; 
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-size: var(--font-size-sm);
  color: var(--textDark);
  max-width: 320px;
  width: 100%;
  box-sizing: border-box;
}

.icon-container {
  background: white; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px; 
  display: flex;
  align-items: center;
  justify-content: center; 
}

.icon-container img {
    width: 50px;
    height: 25px;
}

@media (min-width: 768px) {
  .about-container,
    .voluntary-container  {
    gap: 32px;
    max-width: 500px;
    flex-direction: column;
  }

    .partnerships-cards-wrapper {
     display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: stretch;
    gap: 24px;
    max-width: 500px;
  }

  .partnerships-container,
  .cards-container {
    flex: 1; 
    max-width: 50%; 
  }

  .cards-container {
    display: flex;
    flex-direction: column; 
    gap: 16px; 
  }

  .card {
    flex: 1; 
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
    padding: 15px; 
    box-sizing: border-box; 
    height: 100%; 
  }

  .icon-container  {
    width: 60px;
    height: 60px;
  }
  .icon-container img {
    width: 60px;
    height: 35px;
    }
}

@media (min-width: 1028px) {
    .about-voluntary-cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    gap: 32px; 
    }
  
     .about-container {
    flex: 1; 
    max-width: 33%; 
    min-width: 400px;
    max-height: 800px;
    width: auto; 
    box-sizing: border-box; 
    padding: 24px;
    text-align: justify; 
  }
    .voluntary-container {
    flex: 1;
    max-width: 33%; 
    min-width: 300px;
    width: auto;
    box-sizing: border-box;
    padding: 24px;
  }
 

  .partnerships-cards-wrapper {
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: stretch; 
    gap: 32px; 
    max-width: 1200px; 
    margin: 0 auto; 
  }

  .partnerships-container,
  .cards-container {
    flex: 1; 
    max-width: 48%; 
  }
    .cards-container {
    display: flex;
    flex-direction: row; 
    gap: 16px; 
  }

  .card {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
    padding: 24px; 
    box-sizing: border-box; 
    height: 100%; 
  }

  .icon-container {
    width: 60px; 
    height: 60px;
  }
 .icon-container img {
    width: 60px;
    height: 35px;
  }
}
</style>