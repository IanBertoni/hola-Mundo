const images = document.querySelectorAll(".image-container img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.add("selected");
    image.parentNode.querySelectorAll(".overlay")[0].style.opacity = "1";
    image.parentNode.querySelectorAll(".overlay")[0].textContent =
      "Nueva ficha técnica";
  });
});
