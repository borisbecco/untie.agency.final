$(document).ready(function () {
  // Captura el clic en los enlaces del menú
  $(".nav-menu-b a, .nav-menu-a a").click(function (e) {
    // Obtiene el destino del enlace
    var target = $(this).attr("href");

    // Verifica si el enlace es interno (comienza con "#") o externo
    if (target.startsWith("#")) {
      // Enlace interno: realiza el desplazamiento suave
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
          // ... (código para restaurar estilos)
        }
      );
    } else {
      // Enlace externo: navega a la página correspondiente
      // El navegador manejará la navegación a la página externa automáticamente
    }
  });
});


// language

function redirectToSpanishIndex() {
    window.location.href = "../ES/index.html";
  }
  
  let languageEs = document.querySelector(".language-es");
  languageEs.addEventListener("click", redirectToSpanishIndex);
  
  //EN
  
  function redirectToEnglishIndex() {
    window.location.href = "../index.html";
  }
  
  let languageEn = document.querySelector(".language-en");
  languageEn.addEventListener("click", redirectToEnglishIndex);  


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