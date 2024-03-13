let navs = document.querySelectorAll("#header .navbar li");
let bars = document.querySelector("#header .bar");
let close = document.querySelector("#header .navbar .close");
let nav = document.querySelector("#header .navbar");
let products = document.querySelectorAll(".products .pro");
let proimg = document.querySelector("#pro-details .images .basic");
let imgs = document.querySelectorAll("#pro-details .images .alters img");
if (bars || close) {
  bars.addEventListener("click", function () {
    nav.style.width = "40%";
  });
  close.addEventListener("click", function () {
    nav.style.width = "0%";
  });
}

for (i = 0; i < 6; i++) {
  if (location.pathname.includes(navs[i].textContent.toLocaleLowerCase())) {
    navs.forEach((x) => x.classList.remove("active"));
    navs[i].classList.add("active");
    break;
  } else if (location.pathname.includes("index") || location.pathname == "/") {
    navs.forEach((x) => x.classList.remove("active"));
    navs[0].classList.add("active");
    break;
  } else if (location.pathname.includes("sproduct")) {
    navs.forEach((x) => x.classList.remove("active"));
    navs[1].classList.add("active");
    break;
  }
}
products.forEach((e) => {
  e.addEventListener("click", function () {
    x = e.childNodes[1].childNodes[1].src;
    location.href = "sproduct.html?imgsrc=" + x;
  });
});
if (proimg) {
  var pr = new URLSearchParams(location.search);
  var sorc = pr.get("imgsrc");
  proimg.src = sorc;
}
if (imgs) {
  imgs.forEach((e) => {
    e.addEventListener("click", function () {
      proimg.src = e.src;
    });
  });
}
