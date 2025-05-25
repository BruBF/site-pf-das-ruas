<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-area">
        <img src="/icons/soup.png" alt="Logo PF das Ruas" class="logo" />
        <span class="logo-text">PF das Ruas</span>
      </div>
      <button class="donate-btn">Quero doar</button>
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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}

.header {
  background-color: var(--primary);
  padding: 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 50px;
  height: 50px;
}

.logo-text {
  color: var(--background);
  font-family: "Ephesis ", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  letter-spacing: 1px;
}

.donate-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 24px;
  background: var(--mint);
  color: var(--textDark);
  white-space: nowrap;
  max-width: 100%;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.donate-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (min-width: 1000px) {
  .header-content {
    flex-direction: row; /* Em telas maiores: lado a lado */
    justify-content: space-between;
    align-items: center;
  }

  .logo-text {

    white-space: nowrap;
  }

  .donate-btn {
    margin-left: 400px;
  }
}
</style>

