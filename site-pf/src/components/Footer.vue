<template>
  <div class="container-footer">
    <div class="footer-content">
      <!-- Endereço -->
      <div class="footer-item">
        <div class="icon-circle">
          <img src="../assets/geo-alt-fill.svg" alt="Ícone Localização" />
        </div>
        <div>
          <p class="footer-title">Nosso Endereço:</p>
          <p>Rua Exemplo, 123, Bairro, Cidade, Estado</p>
        </div>
      </div>

      <!-- Telefone -->
      <div class="footer-item">
        <div class="icon-circle">
          <img src="../assets/telephone-fill.svg" alt="Ícone Telefone" />
        </div>
        <div>
          <p class="footer-title">Ligue para nós:</p>
          <p>(51) 99847-2398</p>
        </div>
      </div>

      <!-- Email -->
      <div class="footer-item">
        <div class="icon-circle">
          <img src="../assets/envelope-fill.svg" alt="Ícone Email" />
        </div>
        <div>
          <p class="footer-title">Envie-nos um email:</p>
          <p>rosepaz@terra.com.br</p>
        </div>
      </div>

      <!-- Redes Sociais -->
      <div class="footer-item">
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

    <!-- Rodapé -->
    <div class="footer-bottom">
      <p>© 2025 Todos os direitos reservados para PF das Ruas</p>
      <div class="footer-links">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos e Condições</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Estilo geral do footer */
.container-footer {
  background-color: var(--primary);
  color: var(--textLight);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Conteúdo principal do footer */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid var(--textLight);
  padding-bottom: 20px;
}

/* Itens do footer */
.footer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 200px;
}

/* Ícones circulares */
.icon-circle {
  width: 50px;
  height: 50px;
  background-color: #ffffff; /* Fundo branco */
  border-radius: 50%; /* Torna o fundo circular */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  transition: background-color 0.3s ease; /* Apenas o fundo muda suavemente */
}

.icon-circle img {
  width: 24px;
  height: 24px;
  filter: invert(47%) sepia(27%) saturate(600%) hue-rotate(120deg) brightness(110%) contrast(100%);
  /* Alternativa: Se o SVG suportar a propriedade fill */
  fill: var(--mint); /* Aplica a cor da variável --mint */
  transition: transform 0.3s ease; /* Transição suave para o tamanho da imagem */
}

.icon-circle:hover img {
  cursor: pointer;
  transform: scale(1.3); /* Aumenta levemente o tamanho da imagem */
}

/* Títulos dos itens */
.footer-title {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Redes sociais */
.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  text-decoration: none;
}

/* Rodapé inferior */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: var(--font-size-xs);
}

.footer-links a {
  color: var(--textLight);
  text-decoration: none;
  margin-left: 10px;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>