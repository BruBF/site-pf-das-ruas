<template>
<div class="location-box">
  <div class="location-container">
    <div class="location-info">
      <p class="location-text">
        Estamos localizados, em baixo do
        <strong>Viaduto Brooklyn</strong> todos os sábados das
        7h30 até 13h.
      </p>
      <div class="address">
        <strong>Endereço:</strong>
        <p>Rua Sarmento Leite, 607 - 
          Centro Histórico, Porto Alegre - RS, 90040-001</p>
      </div>
    </div>
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0804759396965!2d-51.2218507!3d-30.034549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979075511a92f%3A0xa715f67004521291!2sR.%20Sarmento%20Leite%2C%20607%20-%20Farroupilha%2C%20Porto%20Alegre%20-%20RS%2C%2090050-170!5e0!3m2!1spt-BR!2sbr!4v1748611199850!5m2!1spt-BR!2sbr" 
        width="400" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      mapEmbedUrl: `https://www.google.com/maps/dir/?api=1&destination=8{encodeURIComponent(
        'Viaduto Brooklyn, Centro Histórico, Porto Alegre - RS'
      )}&key=YOUR_API_KEY`,
    };
  },
  methods: {
    openGoogleMaps() {
      const destination = encodeURIComponent(
        'Viaduto Brooklyn, Centro Histórico, Porto Alegre - RS, 90040-001'
      );
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=9{destination}`;
      window.open(googleMapsUrl, '_blank');
    },
  },
};
</script>

<style scoped>
* {
    color: var(--mint);
    font-weight: 600;
}
.location-box {
  margin: 20px;
}

.location-container {
  background-color: var(--softMint);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--mint);
  gap: 15px;
   max-width: 700px;
  margin: 20px auto; 
}

.location-info {
  color: #2c3e50;
  padding: 20px;
}

.location-text {
  line-height: 1.5;
  margin-bottom: 10px;
  color: var(--mint);
 
}

.address {
  font-size: var(--font-size-lg);

}

.address strong {
  font-weight: bold;
}

.address p {
  margin-top: 10px;
}

.map-container {
 margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.map-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.map-container iframe {
  width: 100%;
  height: 300px; /* Adjust the height of the iframe itself */
  border-radius: 8px;

}
</style>