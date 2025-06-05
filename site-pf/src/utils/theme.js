// Padrão de resolução de tamanhos de telas, cores, fontes e estilos.
const theme = {
    breakpoints: {
      xs: 320,   // Mobile
      sm: 640,   // Pequeno
      md: 768,   // Tablet
      lg: 1000,  // Grande
      xl: 1280,  // Extra grande
      xxl: 1440  // Muito grande
    },
    colors: {
      primary: "#26408B",
      tomato: "#FF6B35",
      soft: "#ffedea",
      gold: "#FFC857",
      mint: "#3DDC97",
      softMint: "#eaf9ef",
      sky: "#007BFF",
      skySoft: "#bcdcf8",
      textLight: "#F0F0F0",
      textDark: "#1E1E1E",
      background: "#ffff"
    },
    fonts: {
      family: {
        primary: "'Inter', sans-serif", 
        secondary: "'Roboto', sans-serif",
        logo: "'Pacifico', cursive"
      },
      sizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px"
      },
      weight: {
        light: 300,
        regular: 400,
        bold: 700
      }
    }
  };
  
  export default theme;
  