let img = document.querySelector(".img");
let container = document.querySelector(".container");

function phones(phoneSrc) {
  img.src = phoneSrc;
}

function colors(rgb) {
  container.style.background = `rgb(${rgb})`;
}

function setActive(activeImg) {
  document.querySelectorAll(".icons img").forEach((img) => {
    img.classList.remove("active");
  });
  activeImg.classList.add("active");
}
