let f = document.getElementById("features");
let c = document.getElementById("company");
f.addEventListener("click", () => {
  let down = document.querySelector(".down");
  let up = document.querySelector(".up");
  down.classList.toggle("hide");
  up.classList.toggle("hide");
});
c.addEventListener("click", () => {
  let down = document.querySelector(".downc");
  let up = document.querySelector(".upc");
  down.classList.toggle("hide");
  up.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

let nav = document.querySelector(".nav");
let ham = document.getElementById("ham");
let register = document.querySelector(".register");
let closee = document.querySelector(".close");
ham.addEventListener("click", () => {
  nav.classList.toggle("yes");
  register.classList.toggle("yes");
  ham.classList.toggle("none");
  closee.classList.toggle("yes");
});

closee.addEventListener("click", () => {
  nav.classList.toggle("yes");
  register.classList.toggle("yes");
  ham.classList.toggle("none");
  closee.classList.toggle("yes");
});
