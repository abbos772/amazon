const uz = document.querySelector(".uzb");
const mod = document.querySelector(".model");
const don = document.querySelector(".done");
uz.addEventListener("click", () => {
  mod.classList.toggle("show");
});
don.addEventListener("click", () => {
  mod.classList.toggle("show");
});

const sid = document.querySelector(".sidebar");
const btnmenu = document.querySelector(".btn-menu");

btnmenu.addEventListener("click", () => {
  sid.classList.toggle("show");
});

const logo = document.querySelector(".logoo");

logo.addEventListener("click", () => {
  sid.classList.toggle("show");
});
