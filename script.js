




























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


//Configurações do botão


gsap.from ("#btn_hero", {
  opacity:0,
  x:-1000,
  duration:2,
  delay:1,
})

const btnHero = document.querySelector("#btn_hero");

// Animação ao passar o mouse
btnHero.addEventListener("mouseenter", () => {
  gsap.to(btnHero, {
    scale: 1.2,
    borderRadius: "50%",
    backgroundColor: "#FF7A33",
    boxShadow: "0px 0px 15px #FF7A33",
    duration: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
});

// Efeito ao tirar o mouse
btnHero.addEventListener("mouseleave", () => {
  gsap.to(btnHero, {
    scale: 1,
    borderRadius: "10px",
    backgroundColor: "##FF7A33",
    boxShadow: "0px 0px 5px #FF7A33",
    duration: 0.4,
    ease: "power2.out",
  });
});

// Animação de brilho pulsante contínuo
gsap.to(btnHero, {
  boxShadow: "0px 0px 20px #FF7A33",
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  ease: "sine.inOut",
});


gsap.from("#content2", {
  opacity: 0,
  x: -1000,
  duration: 2,
  delay: 1,
});


















//Efeitos da Box2

gsap.from(".box2", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".box2 h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".box2 p", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay: 0.8,
  ease: "power3.out",
});

gsap.from(".box2 a", {
  scale: 1,
  duration: 0.8,
  delay: 1,
  ease: "elastic.out(1, 0.6)",
  onComplete: function () {
    gsap.to(".box2 a", { opacity: 1 }); /* Garante visibilidade após animação */
  },
});














































// Animação para todos os elementos dentro da seção "Sobre Nós"
gsap.from(".sobre h2, .sobre p, .sobre-texto, .sobre-imagem img, .sobre-missao h3, .sobre-valores h3, .sobre-valores li", {
  opacity: 0,
  x: -100, // Move os elementos para a direita a partir de -100px
  duration: 1,
  ease: "power3.out",
  stagger: 0.1, // Cria um pequeno atraso entre a animação de cada elemento
  scrollTrigger: {
    trigger: ".sobre",
    start: "top 100%", // Inicia a animação quando a seção entra na tela
    end: "bottom 80%", // Fim da animação quando a seção sai da tela
    scrub: 0.8, // Suaviza a animação com a rolagem
    yoyo: true, // Ativa o efeito yoyo (inverte a animação quando rolar para cima)
    once: false, // A animação não ocorre apenas uma vez, será acionada toda vez que entrar e sair
  }
});




























gsap.from(
  ".loja h2, .loja p, .vantagem, .cta-container h3, .cta-container p, .cta-container .btn",
  {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".loja",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 0.8,
      toggleActions: "play reverse play reverse",
    },
  }
);












document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".secao-atacado > *", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".secao-atacado",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 0.8,
      toggleActions: "play reverse play reverse",
    },
  });
});












document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".dropshipping > *", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".dropshipping",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 0.8,
      toggleActions: "play reverse play reverse",
    },
  });
});











document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".footer",
    {
      opacity: 0,
      y: 150,
      rotateX: 15,
    },
    {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => gsap.to(".footer", { opacity: 1 }),
    }
  );
});
