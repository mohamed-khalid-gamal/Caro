let navs = document.querySelectorAll("#header .navbar li");
let shop = document.querySelector("#hero a");
let contact = document.getElementById("contactButton");
let about = document.getElementById("aboutButton");
let cart = document.getElementById("cartButton");
let bars = document.querySelector("#header .bar");
let close = document.querySelector("#header .navbar .close");
let nav = document.querySelector("#header .navbar");
navs.forEach((e) => {
  e.addEventListener("click", function () {
    navs.forEach((l) => l.classList.remove("active"));
    e.classList.add("active");
  });
});
navActive(shop, 1);
navActive(contact, 4);
navActive(about, 3);
navActive(cart, 5);
function navActive(x, i) {
  x.addEventListener("click", function () {
    navs.forEach((x) => x.classList.remove("active"));
    navs[i].classList.add("active");
  });
}
bars.addEventListener("click", function () {
  nav.style.width = "40%";
});
close.addEventListener("click", function () {
  nav.style.width = "0%";
});
