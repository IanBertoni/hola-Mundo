var dcCards = document.querySelector(".js-card");

var heroName = [
  "Superman",
  "Batman",
  "Wonderwoman",
  "Flash",
  "Green Lantern",
  "Aquaman",
  "Cyborg",
];

var altName = [
  "Kal-El / Clark Kent",
  "Bruce Wayne",
  "Diana Prince",
  "Barry Allen",
  "Hal Jordan",
  "Arthur Curry",
  "Victor Stone",
];

var groupAffiliation = [
  "Justice League",
  "Justice League",
  "Justice League",
  "Justice League",
  "Justice League",
  "Justice League",
  "Justice League",
];

var comicArt = [
  "https://armchairmogul.files.wordpress.com/2011/07/supes.jpg",
  "https://imgix.ranker.com/user_node_img/42/822905/original/david-finch-writers-photo-u4?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
  "https://i.pinimg.com/564x/cf/d3/a2/cfd3a2c83f596b585bab2938aa7c7362.jpg",
  "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/272820/381201/jul180644__14403.1537997529.jpg?c=2&imbypass=on",
  "https://i.pinimg.com/originals/a9/52/58/a9525813f9beddc4a1818d87b8d4c963.jpg",
  "https://i.pinimg.com/originals/a2/78/12/a2781277d54f3fd21f7194860bf708be.jpg",
  "https://i.pinimg.com/originals/6e/7c/48/6e7c481f7750f3f285ff3f58b87dd686.jpg",
];

var heroDetails = [
  "Miembro e inspiración de la Liga de la Justicia. Es un sobreviviente kryptoniano y periodista del Daily Planet con sede en Metropolis.",
  "Propietario de Wayne Enterprises. Se dedica a proteger Gotham City del crimen como un vigilante enmascarado altamente capacitado equipado con varias herramientas y armas.",
  "Una  antigüa e inmortal guerrera amazónica,la princesa Diana, heredera de Themyscira. Está dotada de atributos y habilidades metahumanos heredados de sus padres.",
  "Un estudiante de forense en la Universidad de Central City, que puede moverse a velocidades sobrehumanas con su habilidad para acceder a Speed ​​​​Force",
  "Green Lantern es un policia intergalactico,su anillo le permite canalizar su fuerza de voluntad y manifestarlo a traves del mismo.",
  "El heredero al trono de la nación Submarino 'La Atlántida'. Sus habilidades acuáticas metahumanas y sus atributos físicos se originan en su fisiología atlante.",
  "Un ex atleta universitario es cibernéticamente mejorado tras un accidente, convirtiéndose en un ser tecno-orgánico gracias a tecnología extraterrestre adaptativa.",
];

var comicCard = "";
for (i = 0; i < heroName.length; i++) {
  comicCard +=
    "<div class='card'><div class='card-inner'><div class='card-front'><div class='hero-name'><h2 class='hero-name_front'>" +
    heroName[i] +
    "</h2><h5 class='alt-name_front'>" +
    altName[i] +
    "</h5></div></div><div class='card-back'><div class='hero-details_back'><p>" +
    heroDetails[i] +
    "</p></div><h1 class='hero-name_back'>" +
    heroName[i] +
    "</h1><div class='alt-details-list'><h2 class='alt-details_name'>" +
    altName[i] +
    "</h2><h2 class='alt-details_group'>" +
    groupAffiliation[i] +
    "</h2></div></div></div></div>";
}

dcCards.insertAdjacentHTML("beforeend", comicCard);
