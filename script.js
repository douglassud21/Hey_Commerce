// Animação inicial para o botão
gsap.from("#info", { 
  x: 1000, // Começa fora da tela, à direita
  opacity: 0, // Começa invisível
  scale: 0.5, // Começa pequeno
  backgroundColor: "#FF5733", // Cor inicial
  duration: 2, // Duração de 2 segundos
  delay: 1, // Começa após 1 segundo
  ease: "power2.out", // Efeito de suavização ao final
});

// Efeito de hover: muda a cor do botão e aumenta de tamanho
document.querySelector("#info").addEventListener("mouseenter", () => {
  gsap.to("#info", {
    scale: 1.1, // Aumenta o tamanho do botão
    backgroundColor: "#FE9B1E", // Muda a cor para Laranja
    duration: 0.3, // Duração do efeito
    ease: "power1.inOut",
    boxShadow: "0 0 20px rgba(253, 207, 0, 0.7)", // Sombra suave
  });
});

// Efeito de retorno ao normal quando o mouse sai
document.querySelector("#info").addEventListener("mouseleave", () => {
  gsap.to("#info", {
    scale: 1, // Retorna ao tamanho original
    backgroundColor: "#FF7A33", // Retorna à cor original
    duration: 0.3, // Duração do efeito
    ease: "power1.inOut",
    boxShadow: "none", // Remove a sombra
  });
});

// Efeito de "pulse" no clique
document.querySelector("#info").addEventListener("click", () => {
  gsap.to("#info", {
    scale: 0.95, // Diminui o tamanho ao clicar
    backgroundColor: "#ffc107", // Muda para amarelo
    duration: 0.2, // Duração do efeito
    ease: "power1.out",
    onComplete: () => {
      gsap.to("#info", {
        scale: 1, // Retorna ao tamanho original
        backgroundColor: "#FF5733", // Retorna à cor original
        duration: 0.2, // Duração do efeito
        ease: "power1.inOut",
      });
    },
  });
});











































