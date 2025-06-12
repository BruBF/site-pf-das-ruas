<template>
  <header class="header">
    <div class="header-content">
    
      <router-link to="/" class="logo-area">
        <img src="/icons/soup.png" alt="Logo PF das Ruas" class="logo" />
        <span class="logo-text">Prato Feito<br>
          das Ruas</span>
      </router-link>
      
    
      <router-link to="/doacoes" class="donate-link">
        
        <button class="donate-btn">Quero doar
        </button>
        <p> PIX: 55.669.277/0001-01</p>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap');

/* Reset básico */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}


a {
  text-decoration: none;
}


.header {
  background-color: var(--primary);
  padding: 1rem;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}


.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}


.logo {
  width: 50px;
  height: 50px;
  filter: brightness(0) invert(1); 
  display: block; 
}


.logo-text {
  color: var(--background);
  font-family: "Ephesis", cursive;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 1;
  white-space: nowrap;
}


.donate-link {
  text-decoration: none;

  p {
    color: var(--background);
    text-align: right;
    font-family: var(--font-family-primary, 'Inter', sans-serif);
    font-size: var(--font-size-sm);
    margin-top: 10px;
  }
}

.donate-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 24px;
  background: var(--mint);
  color: var(--textDark);
  white-space: nowrap;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.donate-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (min-width: 1000px) {
  .header-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .donate-btn {
    margin-left: 400px;
  }
}
</style>
