// Función que detecta el scroll y activa los elementos
function reveal() {
  // Selecciona todos los elementos que tengan la clase 'reveal'
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; // Altura de la pantalla del navegador
    var elementTop = reveals[i].getBoundingClientRect().top; // Distancia del elemento al tope
    var elementVisible = 100; // Píxeles de margen para que se active la animación

    // Si el elemento entra en el área visible, añade la clase 'active'
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Escuchar el evento de scroll en la ventana
window.addEventListener("scroll", reveal);

// Ejecutar una vez al cargar la página por si hay elementos ya visibles al inicio
reveal();