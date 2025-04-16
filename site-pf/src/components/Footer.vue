<template>
    <div class="container-footer">
      <div class="midia-social">
        <div class="text-midia-social">
          Conheça mais sobre nosso trabalho nas Redes Sociais
        </div>
        <div class="icons-midia-social">
          <a href="https://www.instagram.com/pf_das_ruas/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/instagram.svg" alt="Ícone Instagram" />
          </a>
          <a href="https://www.facebook.com/pfdasruas" target="_blank" rel="noopener noreferrer">
            <img src="../assets/facebook.svg" alt="Ícone Facebook" />
          </a>
        </div>
      </div>
  
      <div class="contact">
        <div class="text-contact">
          Contato/Whatsapp
        </div>
        <div class="icons-contact">
          <div class="telephone-contact">
            <a href="tel:+5551998472398">
              <img src="../assets/telephone-fill.svg" alt="Ícone Telefone" />
            </a>
            <p>(51) 99847-2398</p>
          </div>
          <!--  -->
          <div class="email-contact">
            <a href="mailto:rosepaz@terra.com.br">
              <img src="../assets/envelope-fill.svg" alt="Ícone Envelope" />
            </a>
            <p>rosepaz@terra.com.br</p>
          </div>
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
  html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: inherit;
}
  .container-footer {
    background-color: var(--primary);
    color: var(--textLight);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 20px;
  }
  
  .midia-social, .contact {
    text-align: left; 
    width: 100%; 
  }
  
  .text-midia-social, .text-contact {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-xs);
    margin-bottom: 10px;
  }
  
  .icons-midia-social {
    display: flex;
    gap: 10px;
  }
  
  .icons-midia-social img, .icons-contact img {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0; 
    filter: brightness(0) invert(1); 
    transition: transform 0.3s ease, filter 0.3s ease; 
  }
  
  .icons-midia-social img:hover, .icons-contact img:hover {
    transform: scale(1.2); 
  }
  
  .icons-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 10px;
  }
  
  .telephone-contact, .email-contact {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .telephone-contact img, .email-contact img {
    width: 20px;
    height: 20px;
  }
  
  .telephone-contact p, .email-contact p {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-xs);
    margin: 0;
  }
  </style>