
const WHATSAPP = "5519997538639";

function abrirWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);

  window.open(
    `https://wa.me/${WHATSAPP}?text=${texto}`,
    "_blank"
  );
}


// BOTÕES DE PRODUTOS

document.querySelectorAll(".consultar").forEach(botao => {

  botao.addEventListener("click", function(event) {

    event.preventDefault();

    const produto = this.dataset.produto;

    abrirWhatsApp(
      `Olá! Gostaria de consultar o produto: ${produto}.`
    );

  });

});


// CONTATO

document.getElementById("contact-whatsapp").addEventListener("click", function(event) {

  event.preventDefault();

  abrirWhatsApp(
    "Olá! Vim pelo site da RM Soluções & Tecnologia e gostaria de informações."
  );

});


// WHATSAPP FIXO

document.getElementById("floating-whatsapp").addEventListener("click", function(event) {

  event.preventDefault();

  abrirWhatsApp(
    "Olá! Vim pelo site da RM Soluções & Tecnologia."
  );

});


// GRAVAÇÃO A LASER

document.getElementById("laser-whatsapp").addEventListener("click", function(event) {

  event.preventDefault();

  abrirWhatsApp(
    "Olá! Gostaria de informações sobre gravação e personalização a laser."
  );

});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent = new Date().getFullYear();
