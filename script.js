
const WHATSAPP = "5519997538639";

function abrirWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, "_blank");
}

document.querySelectorAll(".consultar").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const produto = this.dataset.produto;
    abrirWhatsApp(`Olá! Gostaria de consultar o produto: ${produto}.`);
  });
});

document.getElementById("contact-whatsapp").addEventListener("click", function(event) {
  event.preventDefault();
  abrirWhatsApp("Olá! Gostaria de conhecer os produtos da RM Soluções & Tecnologia.");
});

document.getElementById("floating-whatsapp").addEventListener("click", function(event) {
  event.preventDefault();
  abrirWhatsApp("Olá! Vim pelo site da RM Soluções & Tecnologia.");
});

document.getElementById("laser-whatsapp").addEventListener("click", function(event) {
  event.preventDefault();
  abrirWhatsApp("Olá! Gostaria de informações sobre gravação e personalização a laser.");
});

document.getElementById("year").textContent = new Date().getFullYear();
