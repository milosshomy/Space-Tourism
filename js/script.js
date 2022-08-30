const nav = document.getElementById("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("change");
});
