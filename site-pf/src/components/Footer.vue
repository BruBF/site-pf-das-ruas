<template>
  <div class="container-footer">
    <div class="footer-content">
      <!-- Endereço -->
      <div class="footer-item">
        <a
          href="https://www.google.com/maps?q=Rua+Sarmento+Leite,+607+-+Centro+Histórico,+Porto+Alegre/RS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="icon-circle">
            <img src="../assets/geo-alt-fill.svg" alt="Ícone Localização" />
          </div>
        </a>
        <div>
          <p class="footer-title">Nosso Endereço:</p>
          <p>Rua Sarmento Leite, 607 - Sala 5<br>
          Centro Histórico, Porto Alegre/RS </p>
        </div>
      </div>

      
   

      <!-- Telefone -->
      <div class="footer-item">
        <a
          href="https://wa.me/5551998472398"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="icon-circle">
            <img src="../assets/telephone-fill.svg" alt="Ícone Telefone" />
          </div>
        </a>
        <div>
          <p class="footer-title">Ligue para nós:</p>
          <p>(51) 99847-2398</p>
        </div>
      </div>


      <!-- Email -->
       <div class="email-container">
        <div class="footer-item">
          <a href="mailto:rosepaz@terra.com.br">
            <div class="icon-circle">
              <img src="../assets/envelope-fill.svg" alt="Ícone Email" />
            </div>
          </a>
          <div class="footer-title">
            <p>Envie-nos um email:</p>
            <p class="email-adress">pfdasruas.portoalegre@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- Redes Sociais -->
      <div class="footer-item">
        <div class="social-media-content">
          <p class="footer-title">Siga-nos:</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/pf_das_ruas/" target="_blank" rel="noopener noreferrer">
              <div class="icon-circle">
                <img src="../assets/instagram.svg" alt="Ícone Instagram" />
              </div>
            </a>
            <a href="https://www.facebook.com/pfdasruas" target="_blank" rel="noopener noreferrer">
              <div class="icon-circle">
                <img src="../assets/facebook.svg" alt="Ícone Facebook" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Rodapé -->
    <div class="footer-divider"></div>
    <div class="footer-bottom">
      <p>© 2025 Todos os direitos reservados para Associação de Cidadania e <br>
        Combate à Fome Prato Feito das Ruas. CNPJ: 55.669.277/0001-01
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container-footer {
  background-color: var(--primary);
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-weight: var(--font-size-xs, 12px);
  color: var(--textLight);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
    margin: 0 auto;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: var(--textLight); 
  margin: 20px 0; 
}

.social-container {
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  gap: 10px;
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 200px;
}

.icon-circle {
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  background-color: var(--background);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.icon-circle img {
  width: 50%;
  height: 50%;
  filter: invert(47%) sepia(27%) saturate(600%) hue-rotate(120deg) brightness(110%) contrast(100%);
  fill: var(--mint);
}


.icon-circle:hover {
  cursor: pointer;
  transform: scale(1.2); 
}

.footer-title {
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  font-weight: var(--font-size-xs, 12px);
  margin-bottom: 5px;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.social-icons a {
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: var(--font-size-sm);
  font-family: var(--font-family-primary, 'Inter', sans-serif);

    margin: 0 auto;
}

.footer-links a {
  color: var(--textLight);
  text-decoration: none;
  margin-left: 10px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.email-content {
  display: flex;
  flex-direction: column-reverse; 
  align-items: flex-start; 
}

@media (min-width: 500px) {
  .container-footer {
    padding: 20px 40px;
  } 

    .footer-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: flex-start; 
  }

  .footer-item {
    align-items: flex-start; 
  }

  .social-icons {
    display: flex;
    gap: 10px; 
  }

  .social-media-content{
    display: flex; 
    justify-content: flex-start; 
    margin-top: 15px;
    gap: 10px;
  }


    .email-container {
      display: flex;
      margin-top: 20px;
    }

    .email-content {
      display: flex;
      flex-direction: column-reverse; 
      align-items: flex-start; 
    }

    .email-adress {
      margin: 0px;
    }
  }

</style>