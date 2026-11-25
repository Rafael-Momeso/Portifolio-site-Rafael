// =========================
// CONFIGURAÇÃO DO WHATSAPP
// =========================

const numeroWhatsApp = "5519997538639";

function abrirWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);

  const link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

  window.open(link, "_blank");
}


// =========================
// BOTÕES DOS PRODUTOS
// =========================

const botoesProdutos = document.querySelectorAll("[data-produto]");

botoesProdutos.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;

    abrirWhatsApp(
      `Olá! Gostaria de consultar informações sobre: ${produto}.`
    );
  });
});


// =========================
// BOTÃO DE CONTATO
// =========================

const contactButton = document.getElementById("contactButton");

if (contactButton) {
  contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    abrirWhatsApp(
      "Olá! Gostaria de mais informações sobre a RM Soluções & Tecnologia."
    );
  });
}


// =========================
// WHATSAPP FLUTUANTE
// =========================

const whatsappFloat = document.getElementById("whatsappFloat");

if (whatsappFloat) {
  whatsappFloat.addEventListener("click", (event) => {
    event.preventDefault();

    abrirWhatsApp(
      "Olá! Vim pelo site da RM Soluções & Tecnologia e gostaria de atendimento."
    );
  });
}


// =========================
// MENU PARA CELULAR
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}


// =========================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}