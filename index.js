$(document).ready(function () {
  // Captura el clic en los enlaces del menú
  $(".nav-menu-b a, .nav-menu-a a").click(function (e) {
    // Obtiene el destino del enlace
    var target = $(this).attr("href");

    // Verifica si el enlace termina con ".html"
    if (target.endsWith(".html")) {
      // No evita la acción predeterminada del enlace para los enlaces que terminan con ".html"
      return true;
    } else {
      e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

      // Oculta el overlay
      $("#overlay").fadeOut();

      // Desplaza la ventana hacia la sección correspondiente
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
        function () {
          // Restaura los estilos de la barra de navegación
          overlay.style.display = "none";
          toggleButton.classList.remove("newPosition");
          logo.classList.remove("logo-color-change");
          navBar.classList.remove("navbar-color-change");
          navBar.classList.remove("nav-hover-change");
          hamburguerButton.classList.remove("hamburger-button-color-change");
          languageButtonsContainer.classList.remove(
            "language-button-container-change"
          );
          languageSpanButton.classList.remove(
            "language-button-span-color-change"
          );
          languageButtons.forEach((button) =>
            button.classList.remove("language-button-color-change")
          );
          document.getElementById("logo1").style.animation =
            "slide1 1s ease-in-out forwards";
          document.getElementById("logo2").style.animation =
            "slide3 1s ease-in-out forwards";
        }
      );
    }
  });
});

// language

function redirectToSpanishIndex() {
  window.location.href = "ES/index.html";
}

let languageEs = document.querySelector(".language-es");
languageEs.addEventListener("click", redirectToSpanishIndex);

//EN

function redirectToEnglishIndex() {
  window.location.href = "../index.html";
}

let languageEn = document.querySelector(".language-en");
languageEn.addEventListener("click", redirectToEnglishIndex);

// paralax main - page

/*

window.addEventListener("scroll", function () {
  const mainTitle = document.querySelector(".main-tittle-container");
  const speed = mainTitle.getAttribute("data-speed");
  const y = (window.pageYOffset * speed) / 50;
  mainTitle.style.transform = `translate3d(0, ${y}px, 0)`;
});

window.addEventListener("scroll", function () {
  const textBar = document.querySelector(".textbar");
  const speed = textBar.getAttribute("data-speed");
  const y = (window.pageYOffset * speed) / 45;
  textBar.style.transform = `translate3d(0, ${y}px, 0)`;
});

*/

// home - video

var video = document.getElementById("homeVideo");
var hasStarted = false;

video.addEventListener("canplay", function() {
  video.play();
});

function playVideoOnScroll() {
  if (!hasStarted) {
    var videoTop = video.getBoundingClientRect().top;
    var videoBottom = video.getBoundingClientRect().bottom;

    // Detect when the video is in the viewport
    if (videoTop < window.innerHeight && videoBottom >= 0) {
      video.play();
      hasStarted = true;
    }
  }
}

function changeVideoURLForMobile() {
  var newURL = "/HOME/UNTIE_1080x1920_Loop.mp4";
  video.src = newURL;
  video.load();
  video.play();
}

// Función que se ejecuta cuando la ventana cambia de tamaño
function handleResize() {
  if (window.innerWidth <= 768) { // Puedes ajustar este valor según tu diseño responsivo
    changeVideoURLForMobile();
  }
}

// Escuchar el evento "resize" para detectar cambios en el tamaño de la ventana
window.addEventListener("resize", handleResize);

// Llamar a la función de cambio de URL al cargar la página (en caso de que se cargue en una vista móvil)
if (window.innerWidth <= 768) {
  changeVideoURLForMobile();
}


window.addEventListener("scroll", playVideoOnScroll);

playVideoOnScroll();

// custom-mouse

document.addEventListener("DOMContentLoaded", function () {
  var customMouse = document.getElementById("custom-mouse");
  var inThirdSection = false; // Bandera para indicar si estamos dentro de la tercera sección

  document.addEventListener("mousemove", function (event) {
    var overlay = document.getElementById("overlay");
    var thirdSection = document.getElementById("third-section");
    var thirdSectionRect = thirdSection.getBoundingClientRect();
    var thirdSectionTop = thirdSectionRect.top;
    var thirdSectionBottom = thirdSectionRect.bottom;
    var thirdSectionLeft = thirdSectionRect.left;
    var thirdSectionRight = thirdSectionRect.right;

    if (overlay.style.display === "block") {
      // Reducir el tamaño del cursor cuando el overlay está abierto
      customMouse.style.width = "10px";
      customMouse.style.height = "10px";
      customMouse.style.mixBlendMode = "exclusion";
    } else {
      // Restablecer el tamaño del cursor cuando el overlay está cerrado
      customMouse.style.width = "15px";
      customMouse.style.height = "15px";
    }

    if (
      event.clientY >= thirdSectionTop &&
      event.clientY <= thirdSectionBottom &&
      event.clientX >= thirdSectionLeft &&
      event.clientX <= thirdSectionRight
    ) {
      // Estilos del cursor cuando está dentro de la sección "thirdSection"
      customMouse.style.width = "15px";
      customMouse.style.height = "15px";
      customMouse.style.backgroundColor = "#a42f33";
      customMouse.style.mixBlendMode = "normal";
      inThirdSection = true; // Establecer la bandera en verdadero si estamos dentro de la tercera sección
    } else {
      // Estilos del cursor por defecto cuando está fuera de la sección "thirdSection"
      customMouse.style.width = "15px";
      customMouse.style.height = "15px";
      customMouse.style.backgroundColor = "";
      customMouse.style.mixBlendMode = "";
      inThirdSection = false; // Establecer la bandera en falso si estamos fuera de la tercera sección
    }

    // Actualizar la posición del cursor
    customMouse.style.left = event.clientX - 10 + "px";
    customMouse.style.top = event.clientY - 10 + "px";
  });

  document.addEventListener("mousedown", function () {
    customMouse.style.backgroundColor = inThirdSection ? "#a42f33" : "white"; // Restablecer el color solo si estamos en la tercera sección
  });

  document.addEventListener("mouseup", function () {
    customMouse.style.backgroundColor = inThirdSection ? "#a42f33" : "white"; // Restablecer el color solo si estamos en la tercera sección
  });
});
// custom-zoom

document.addEventListener("mouseover", function (event) {
  var target = event.target;
  if (target.classList.contains("clickable")) {
    var customMouse = document.getElementById("custom-mouse");

    // Verificar si el overlay está abierto
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "block") {
      // Cambiar la escala del cursor cuando el overlay está abierto
      customMouse.style.transform = "scale(2.0)";
    } else {
      // Restablecer la escala del cursor cuando el overlay está cerrado
      customMouse.style.transform = "scale(1.5)";
    }
  }
});

document.addEventListener("mouseout", function (event) {
  var target = event.target;
  if (target.classList.contains("clickable")) {
    var customMouse = document.getElementById("custom-mouse");
    customMouse.style.transform = ""; // devuelve el tamaño del cursor personalizado a su valor original
  }
});

//nav bar scroll

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  var overlay = document.getElementById("overlay");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (
    scrolled > 0 &&
    overlay.style.display !== "block" &&
    !overlay.classList.contains("active")
  ) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

// nav menu hover effect

const hoverTextList = document.querySelectorAll(".hover-effect");

hoverTextList.forEach((hoverText) => {
  const originalText = hoverText.textContent;

  hoverText.addEventListener("mouseenter", () => {
    hoverText.setAttribute("data-rearranged", "true");
    hoverText.textContent = reverseText(originalText);
    setTimeout(() => {
      hoverText.textContent = shuffleText(reverseText(originalText));
      setTimeout(() => {
        hoverText.textContent = reverseText(originalText);
        setTimeout(() => {
          hoverText.removeAttribute("data-rearranged");
          hoverText.textContent = originalText;
        }, 80);
      }, 80);
    }, 80);
  });
});

function reverseText(text) {
  const reversedText = text.split("").reverse().join("");
  return reversedText;
}

function shuffleText(text) {
  const shuffledText = text
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffledText;
}

// carousel

/*let slides = document.querySelectorAll(".image-slide");
let currentSlide = 0;
let slideInterval;

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

function changeSlide(event) {
  const containerWidth = slidesCarousel.offsetWidth;
  const cursorX = event.clientX - slidesCarousel.getBoundingClientRect().left;
  const totalSlides = slides.length;
  const slideIndex = Math.floor((cursorX / containerWidth) * totalSlides);

  slides[currentSlide].style.opacity = 0;
  currentSlide = slideIndex % totalSlides;
  slides[currentSlide].style.opacity = 1;
}

function startSlideInterval(interval) {
  slideInterval = setInterval(nextSlide, interval);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // Media query se cumple, ajustar la velocidad del intervalo
    stopSlideInterval();
    startSlideInterval(2500); // Cambiar la velocidad a 2 segundos
  } else {
    // Media query no se cumple, restaurar la velocidad original del intervalo
    stopSlideInterval();
    startSlideInterval(4000); // Restaurar la velocidad original a 4 segundos
  }
}

let slidesCarousel = document.querySelector(".carousel-container-image-slide");
let mediaQuery = window.matchMedia("(max-width: 991px)");

mediaQuery.addListener(handleMediaQuery); // Escuchar cambios en la media query inicialmente

slidesCarousel.addEventListener("mousemove", function (event) {
  changeSlide(event);
  stopSlideInterval();
  startSlideInterval(4000); // Restaurar la velocidad original al mover el mouse
});

handleMediaQuery(mediaQuery); // Verificar la media query inicialmente

*/

//togglebar

const toggleButton = document.getElementById("toggleButton");
const navBar = document.querySelector("nav");
const overlay = document.getElementById("overlay");
const hamburguerButton = document.querySelector(".hamburger-button");
const languageButtons = document.querySelectorAll(".language-button");
const logo = document.getElementById("logo-container");
const languageButtonsContainer = document.querySelector(
  ".language-button-container"
);
const languageSpanButton = document.querySelector(".language-button-span");

toggleButton.addEventListener("click", function () {
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  toggleButton.classList.toggle("newPosition");
  logo.classList.toggle("logo-color-change");
  navBar.classList.toggle("navbar-color-change");
  navBar.classList.toggle("nav-hover-change");
  hamburguerButton.classList.toggle("hamburger-button-color-change");
  languageButtonsContainer.classList.toggle("language-button-container-change");
  languageSpanButton.classList.toggle("language-button-span-color-change");
  languageButtons.forEach((button) =>
    button.classList.toggle("language-button-color-change")
  );
  if (overlay.style.display === "block") {
    navBar.classList.remove("scroll");
  }

  // logo animation

  const isOverlayDisplayed = overlay.style.display === "block";

  if (isOverlayDisplayed) {
    document.getElementById("logo1").style.animation =
      "slide1 1s ease-in-out forwards";
    document.getElementById("logo2").style.animation =
      "slide2 1s ease-in-out forwards";
  } else {
    document.getElementById("logo1").style.animation =
      "slide1 1s ease-in-out forwards";
    document.getElementById("logo2").style.animation =
      "slide3 1s ease-in-out forwards";
  }
});

document.getElementById("overlay").addEventListener("click", function () {
  if (!event.target.closest("#nav-content"))
    window.location.href = "index.html"; //
});

//restore styles

// carousel-about-container

var carousel = document.querySelector(".carousel");
var images = carousel.getElementsByTagName("img");
var indicatorsContainer = document.querySelector(".indicators");
var carouselContainer = document.querySelector(".carousel-container");
var currentIndex = 0;
var colors = ["#f9f7ef", "#f9f7ef", "#f9f7ef", "#f9f7ef"];

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
  currentIndex = index;
  updateIndicators();
  changeCarouselContainerBackground();
}

function prevImage() {
  showImage(currentIndex - 1);
}

function nextImage() {
  showImage(currentIndex + 1);
}

function updateIndicators() {
  var indicators = Array.from(
    indicatorsContainer.getElementsByClassName("indicator")
  );
  indicators.forEach(function (indicator, index) {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function changeCarouselContainerBackground() {
  carouselContainer.style.backgroundColor = colors[currentIndex];
}

carousel.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("next")) {
    nextImage();
  } else if (!target.classList.contains("prev")) {
    var rect = this.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var width = rect.width;
    if (x < width / 2) {
      prevImage();
    } else {
      nextImage();
    }
  }
});

function createIndicators() {
  for (var i = 0; i < images.length; i++) {
    var indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", function () {
      var index = Array.from(
        indicatorsContainer.getElementsByClassName("indicator")
      ).indexOf(this);
      showImage(index);
    });
    indicatorsContainer.appendChild(indicator);
  }
}

createIndicators();
updateIndicators();
changeCarouselContainerBackground();

//overlay-menu

// Obtener el overlay y el cuerpo de la página
const body = document.body;

// Inicializar variable para llevar el seguimiento del estado del overlay
let overlayActive = false;

// Función para agregar la clase que desactiva el scroll
function disableScroll() {
  body.classList.add("overlay-open");
}

// Función para quitar la clase que desactiva el scroll
function enableScroll() {
  body.classList.remove("overlay-open");
}

// Función para alternar el estado del overlay
function toggleOverlay() {
  if (overlayActive) {
    enableScroll();
    overlay.style.display = "none";
    overlayActive = false;
  } else {
    disableScroll();
    overlay.style.display = "block";
    overlayActive = true;
  }
}

// Agregar evento al hacer clic en una opción del menú
document.querySelectorAll("#nav-content a").forEach((a) => {
  a.addEventListener("click", function () {
    enableScroll();
    toggleOverlay();
  });
});

// Agregar evento al hacer clic en el botón de cerrar el overlay
overlay.addEventListener("click", function (e) {
  if (e.target.class === "nav-menu") {
    toggleOverlay();
  }
});

// Agregar evento al hacer clic en el botón de toggle
document.getElementById("toggleButton").addEventListener("click", function () {
  toggleOverlay();
});

// team

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(function (card) {
  const botonMostrar = card.querySelector(".team-button");
  const contenidoOculto = card.querySelector(".contenido-oculto");
  const flecha = card.querySelector(".arrow1");
  const cardHeader = card.querySelector(".card-header");
  const cardTittleSize = card.querySelector(".card-tittle-size-lastname");

  let contenidoVisible = false;

  cardHeader.addEventListener("click", function () {
    if (contenidoVisible) {
      contenidoOculto.style.display = "none";
      flecha.classList.remove("rotate");
      flecha.classList.add("reverse-arrow");
      cardHeader.classList.remove("content-visible");
      cardTittleSize.classList.add("slide-reverse"); // Agregar clase de animación
      cardTittleSize.classList.remove("slide-animation"); // Eliminar clase de animación opuesta
      contenidoVisible = false;
    } else {
      contenidoOculto.style.display = "flex";
      flecha.classList.remove("reverse-arrow");
      flecha.classList.add("rotate");
      cardHeader.classList.add("content-visible");
      cardTittleSize.classList.remove("slide-reverse"); // Eliminar clase de animación opuesta
      cardTittleSize.classList.add("slide-animation"); // Agregar clase de animación
      contenidoVisible = true;
    }
  });
});

//cases

$(document).ready(function () {
  // Obtén las referencias de los elementos del carrusel
  var carouselContainers = $(".cases-carousel-container");

  // Agrega el evento click a las imágenes del carrusel
  $(".cases-carousel-inner img").click(function () {
    // Obtiene la imagen actual
    var currentImage = $(this);

    // Obtiene el carrusel actual
    var currentCarouselContainer = currentImage.closest(
      ".cases-carousel-container"
    );

    // Obtiene el índice de la imagen actual
    var currentIndex = currentCarouselContainer
      .find(".cases-carousel-inner img")
      .index(currentImage);

    // Obtiene el índice de la siguiente imagen
    var nextIndex =
      (currentIndex + 1) %
      currentCarouselContainer.find(".cases-carousel-inner img").length;

    // Cambia la clase "active" del indicador correspondiente
    currentCarouselContainer
      .find(".cases-carousel-indicators span")
      .eq(nextIndex)
      .addClass("active")
      .siblings()
      .removeClass("active");

    // Oculta la imagen actual rápidamente
    currentImage.hide();

    // Muestra la siguiente imagen rápidamente
    currentCarouselContainer
      .find(".cases-carousel-inner img")
      .eq(nextIndex)
      .show();
  });
});


//services

$(document).ready(function() {
  $(".wwd-links").click(function() {
    // Obtén la URL del enlace contenido en este contenedor
    var url = $(this).find(".wwd-link").attr("href");
    // Redirige a la URL
    window.location.href = url;
  });
});
