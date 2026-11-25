
// Atualiza automaticamente o ano do rodapé.
document.getElementById("year").textContent = new Date().getFullYear();

// Botão voltar ao topo.
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 350 ? "grid" : "none";
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Fecha o menu no celular depois de clicar em um link.
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
