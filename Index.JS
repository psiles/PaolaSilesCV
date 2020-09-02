
const menuButton = document.querySelector(".js-button");
const nav = document.querySelector(".js-nav");
const sub = document.querySelector(".js-subnav");
const links = document.querySelectorAll(".js-nav-links");



menuButton.onmouseover = function (e) {
  e.stopPropagation();
  toggleMenu();
};


nav.onmouseover = function (e) {
  e.stopPropagation();
}

document.body.onmouseover = function () {
  nav.classList.remove("open");
}

links.forEach(function (link) {
  link.onclick = function () {
    nav.classList.remove("open");
  }
});

 
function toggleMenu () {
  nav.classList.toggle("open");
}