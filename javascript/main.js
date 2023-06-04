//loader ==================================
window.onload = () => {
  document.querySelector(".page-loader").style.display = "none";
  AOS.init();
};
//menu ================================
let menuButt = document.querySelector("header .menu");
let exitButt = document.querySelector("header .exit");
let nav = document.querySelector("header nav");
menuButt.addEventListener("click", () => {
  nav.style.right = "0";
});
exitButt.addEventListener("click", () => {
  nav.style.right = "-232px";
});
let links = document.querySelectorAll("header .links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.right = "-232px";
  });
});
