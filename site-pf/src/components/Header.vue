<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-area">
        <img src="./icons/soup.png" alt="Logo PF das Ruas" class="logo" />
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
.header {
  background-color: var(--primary);
  padding: 1.2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.logo {
  width: 40px;
  height: 40px;
}

.logo-text {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.donate-btn {
  background: #fff;
  color: #253e85;
  font-weight: bold;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
}

.donate-btn:hover {
  background: #f7b731;
  color: #253e85;
}
</style>