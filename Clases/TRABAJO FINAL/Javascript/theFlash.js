var gif = document.getElementById("flashGif");

function toggleAnimation() {
  gif.classList.toggle("animation-active");
}

gif.addEventListener("click", toggleAnimation);
