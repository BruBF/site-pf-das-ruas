<template>
  <div class="donation-container">
  <div class="donation-info-card">
    <div class="text-section">
      <p>Nosso prato mais comum para servir é arroz, feijão, massa com molho vermelho e salsicha ou alguma outra proteína. Gostaríamos de ampliar nosso cardápio com proteínas mais substanciosas, como carne de gado, porco ou frango. Para que isto se concretize precisamos de tua ajuda</p>
    </div>
    <div class="collection-points">
      <h3>Postos de coleta:</h3>
      <ol>
        <li>Maison Q cabelereiros: R. Quintino Bocaiúva, 310 - Moinhos de Vento, Porto Alegre - RS;</li>
        <li>Estética Blond Hair: R. Barão do Amazonas, 809 - Petrópolis, Porto Alegre - RS;</li>
        <li>Café Madeira: Av. Neusa Goulart Brizola, 414 - Bela Vista, Porto Alegre - RS;</li>
      </ol>
    </div>
    <div class="donation-call">
      <p>Quer ajudar com valores? Temos conta no Bradesco, Banrisul e Cef.</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DonationInfoCard'
}
</script>

<style scoped>
.donation-container {
 
  margin: 20px;
}

.donation-info-card {
  background-color: var(--skySoft);
  color: var(--sky);
  border-radius: 10px;
  border: 2px solid var(--sky);
   max-width: 700px; 
   margin: 0 auto;
}

.donation-info-card p,
.donation-info-card li,
.donation-info-card h3 {
  padding: 20px;
  font-weight: 600;
}

.text-section p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.collection-points {
  margin-bottom: 15px;
}

.collection-points h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.collection-points li {
  margin-bottom: 8px;
  line-height: 1.4;
}
</style>
