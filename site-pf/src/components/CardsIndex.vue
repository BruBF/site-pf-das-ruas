<template>
  <div class="container-index">
    
      <div class="about-container">
        <h1>Temperando a vida, com amor e solidariedade</h1>
        <p>
          Somos uma associação, sem fins lucrativos, sem vínculos com política ou religião, engajada em fazer a diferença na vida das pessoas em situação de vulnerabilidade social, em especial com histórico de situação de rua e drogadição, levando-lhes alimento e outras ações que, através dos nossos parceiros, lhes conferem um pouco de dignidade em suas vidas, como corte de cabelo, acompanhamento médico e psiquiátrico, além de acompanhamento veterinário aos seus pets. 
          Afinal, alimentação e saúde são importantes, são direitos básicos.
          <br>
          <span class="indent">
          Iniciamos nosso trabalho há 8 anos e meio, servindo 50 marmitas e suco para as pessoas em situação de rua nas redondezas do viaduto Imperatriz Leopoldina, em Porto Alegre, onde atuamos até hoje.
          Nós do PF das Ruas, nos preocupamos com a importância da preservação do planeta e das ações que podemos tomar para garantir um futuro sustentável, por isso, utilizamos marmitas de papel Kraft, que é 100% reciclável, biodegradável e demora apenas 60 dias para se decompor em ambiente natural. Já a marmita de isopor pode demorar 500 anos e a de alumínio 200 anos.
          </span>
        </p>
        <div class="slider">
          <button @click="prevSlide" class="nav-btn nav-btn-left">‹</button>
          <img :src="aboutImages[currentAboutImage]" alt="Slide Sobre" />
          <button @click="nextSlide" class="nav-btn nav-btn-right">›</button>
        </div>
      </div>

      <div class="voluntary-container">
        <h1>Valores que Transformam Vidas</h1>
      <p>
        • Missão: Promover alimentação para pessoas em situação de vulnerabilidade social;<br> 
        • Visão: Ser uma organização de referência e credibilidade na promoção e articulação da solidariedade, e do voluntariado;<br>
        • Valores: Comprometimento, solidariedade e empatia com ser humano;<br>
        • Fonte de Captação e Utilização: Mantemos as refeições com doações de pessoas físicas e jurídicas;<br>
        • Voluntários: Somos  mais de 100 voluntários que são fundamentais para mantermos o projeto.<br>
        • Espaços de Atuação: Entregamos café da manhã e refeições embaixo do Viaduto Imperatriz Leopoldina, em Porto Alegre, RS.<br>
        Atualmente nosso projeto depende unicamente de doações para continuar ajudando milhares de pessoas.
        Ajude nos a continuar em atividade por mais anos.
      </p>

        <button @click="abrirWhatsApp" class="voluntary-button">
          <a
          href="https://wa.me/5551998472398"
          target="_blank"
          rel="noopener noreferrer"
          >
          Quero ser voluntário!
          </a>
        </button>
      </div>

      <div class="partnerships-container">
      <h1>Quem Caminha Conosco</h1>
        <p>
        Ampliamos a nossa atuação, com a ajuda de diversos parceiros:<br>
        • Alimentação: todos os sábados distribuímos café da manhã e mais de 1000/1200 marmitas caprichadas;<br>
        • Saúde: através da parceria com a ONG Médicos do Mundo, mensalmente, é oferecido atendimento veterinário, atendimento médico com laboratório para exames e testes rápidos de HIV e DSTs, quiropraxistas, enfermeiros e psicólogos;<br>
        • Higiene e bem estar: semanalmente o grupo Barbeiros Guerreiros oferece corte de cabelo e barba, trazendo dignidade;<br>
        • Reabilitação: encaminhamento para Comunidades Terapeúticas para oferecerem uma segunda chance para quem quer sair das drogas e ser reinserido na sociedade.Atualmente temos 2  são voluntários.<br>
        • Assessoria Jurídica Gratuita:  com a CGI Advogados.
        </p>
      </div>

      <div class="cards-container">
        <div class="card">
          <div class="icon-container">
            <img :src="greenCardImages['calendar-minus-fill.svg']" alt="Ícone de calendário" />
          </div>
          <p>Há 8 anos atuando em cozinhar e servir alimentação, aos sábados das 7h até 13h.</p>
        </div>
        <div class="card">
          <div class="icon-container">
            <img :src="greenCardImages['fork-knife.svg']" alt="Ícone de talheres" />
          </div>
          <p>Em média, 200 café da manhã e 1000 almoços servidos.</p>
        </div>
        <div class="card">
          <div class="icon-container">
            <img :src="greenCardImages['handshake-svgrepo-com.svg']" alt="Ícone de aperto de mãos" />
          </div>
          <p>Extensão de atividades durante datas comemorativas como distribuição de alimentos, brinquedos e kits de higiene em comunidades carentes.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AboutVoluntaryCards",
  data() {
    return {
      greenCardImages: {},
      aboutImages: [],
      currentAboutImage: 0,
      aboutImageTimer: null,
    };
  },
  async created() {
    // Carregar imagens dos cards verdes
    const greenCardModules = import.meta.glob('@/assets/green-card/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
    const greenCardImages = {};
    for (const [key, value] of Object.entries(greenCardModules)) {
      const fileName = key.split('/').pop();
      greenCardImages[fileName] = value;
    }
    this.greenCardImages = greenCardImages;

    // Carregar imagens do About
    const aboutModules = import.meta.glob('@/assets/about/*.jpg', { eager: true, import: 'default' });
    this.aboutImages = Object.values(aboutModules);
    this.startAboutImageTimer();
  },
  beforeUnmount() {
    clearInterval(this.aboutImageTimer);
  },
  methods: {
     abrirWhatsApp() {
      const numero = '5551998472398';
      const mensagem = encodeURIComponent('Olá, gostaria de ser voluntário no projeto! Como faço para começar?');
      const url = `https://web.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
      window.open(url, '_blank');
    },
    nextSlide() {
      this.currentAboutImage = (this.currentAboutImage + 1) % this.aboutImages.length;
      this.restartAboutImageTimer();
    },
    prevSlide() {
      this.currentAboutImage = (this.currentAboutImage - 1 + this.aboutImages.length) % this.aboutImages.length;
      this.restartAboutImageTimer();
    },
    startAboutImageTimer() {
      this.aboutImageTimer = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    restartAboutImageTimer() {
      clearInterval(this.aboutImageTimer);
      this.startAboutImageTimer();
    },
  },
};
</script>

<style scoped>
/* Estilos globais (podem ser movidos para um arquivo global se aplicável) */
* {
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-size: var(--font-size-lg);
  color: var(--textDark);
  box-sizing: border-box; 
  
}
h1 {
  text-align: center;
}

.container-index {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
    
}



/* Estilos base para todos os tamanhos de tela */
.about-container,
.voluntary-container,
.partnerships-container,
.cards-container {
  border-radius: 16px;
  padding: 24px;

}

.about-container {
  overflow: hidden;
  width: 100%;
  background: var(--gold);
}

.about-container p {
  margin-top: 0;
  margin-bottom: 16px;
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
  width: 100%;
}

.slider img {
  width: 100%;
  height: 600px; 
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

.voluntary-container {
  background: var(--tomato);
  line-height: 1.2;
}

.partnerships-container {
  background: var(--sky);
  line-height: 1.5;
  text-align: left;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
}

.card {
  width: 100%;
  background: var(--mint);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

}


.icon-container  {
  background: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container img {
    width: 70px;
    height: 40px;
}

.voluntary-container {
  justify-items: center;
}
.voluntary-button {
  background: var(--background);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;

  a {
    text-decoration: none;
  }
}

.voluntary-button:hover {
  background: var(--background);
  transform: scale(1.05);
}

.partnerships-container ol {
  padding-left: 20px;
}

.partnerships-container li {
  margin-bottom: 8px;
}

@media (min-width: 768px) and (max-width: 1027px) {
    .container-index {
    display: grid;
    grid-template-areas:
   "about about"
   "voluntary voluntary"
   "partnerships cards";
    gap: 20px;
    padding: 60px;
  
  }

    .about-container {
    grid-area: about;
  }

  .partnerships-container {
    grid-area: partnerships;
  }

  .voluntary-container {
    grid-area: voluntary;
  }

}
@media (min-width: 1028px) {
  .container-index {
    display: grid;
    grid-template-areas:
   "about about voluntary voluntary"
   "about about partnerships partnerships"
   "cards cards cards cards";
   gap: 48px;
    
  
  }

  .about-container {
    grid-area: about;
  }

  .partnerships-container {
    grid-area: partnerships;
  }

  .voluntary-container {
    grid-area: voluntary;
  }

  .cards-container {
    grid-area: cards;
    flex-wrap: nowrap;
  }

  .slider {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .slider img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    display: block;
  }
}
</style>
