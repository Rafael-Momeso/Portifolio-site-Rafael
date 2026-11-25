
"use strict";

// =====================================
// CONFIGURAÇÃO DO WHATSAPP DA RM
// =====================================

const WHATSAPP = "5519997538639";

// =====================================
// FUNÇÃO PRINCIPAL
// =====================================

function abrirWhatsApp(mensagem) {
  const link =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(mensagem);

  window.open(link, "_blank", "noopener,noreferrer");
}

// =====================================
// CONSULTA DE PRODUTOS
// =====================================

document.querySelectorAll(".consultar").forEach(botao => {
  botao.addEventListener("click", function(event) {
    event.preventDefault();

    const produto = this.dataset.produto;

    if (!produto) return;

    abrirWhatsApp(
      "Olá! Acessei o site da RM Soluções & Tecnologia e gostaria de consultar: " +
      produto +
      "."
    );
  });
});

// =====================================
// CONTATO
// =====================================

const contato = document.getElementById("contatoWhats");

if (contato) {
  contato.addEventListener("click", function(event) {
    event.preventDefault();

    abrirWhatsApp(
      "Olá! Acessei o site da RM Soluções & Tecnologia e gostaria de mais informações."
    );
  });
}

// =====================================
// BOTÃO FLUTUANTE
// =====================================

const whatsappFlutuante =
  document.getElementById("whatsappFlutuante");

if (whatsappFlutuante) {
  whatsappFlutuante.addEventListener("click", function(event) {
    event.preventDefault();

    abrirWhatsApp(
      "Olá! Vim pelo site da RM Soluções & Tecnologia."
    );
  });
}

// =====================================
// ANO AUTOMÁTICO
// =====================================

const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}

// =====================================
// MENU ATIVO
// =====================================

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll(".menu a").forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
