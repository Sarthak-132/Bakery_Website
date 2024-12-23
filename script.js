// Vanilla javascript

const navlist = document.getElementById("nav-lists");
const hamburger = document.getElementById("hamburger");

// click event

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});
