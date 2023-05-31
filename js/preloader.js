// // Espera a que la ventana haya cargado completamente antes de ejecutar el código
// window.onload = function() {
  
//     // Selecciona el elemento de preload
//     var preload = document.querySelector('.preload');
    
//     // Selecciona el elemento de contenido
//     var content = document.querySelector('main');
//     var content1 = document.querySelector('header');
    
//     // Espera 3 segundos antes de mostrar el contenido
//     setTimeout(function() {
      
//       // Agrega la clase "show" al elemento de contenido para mostrarlo suavemente
//       content.classList.add('show');
//       content1.classList.add('show');
      
//       // Agrega la clase "hide" al elemento de preload para ocultarlo suavemente
//       preload.classList.add('hiden');
      
//     }, 6000);
    
//   }



window.addEventListener('load', function() {
    var preload = document.querySelector('.preload');
    var content = document.querySelector('header');
    var content1 = document.querySelector('main');
  
    var timeLimit = 5000; // tiempo máximo de espera en milisegundos
  
    // Espera hasta que la página se haya cargado completamente
    var pageLoaded = setInterval(function() {
      if (performance.timing.domContentLoadedEventEnd > 0) {
        clearInterval(pageLoaded);
        showContent();
      }
    }, 100);
  
    // Función para mostrar el contenido y ocultar el preload
    function showContent() {
      setTimeout(function() {
        content.classList.add('show');
        content1.classList.add('show');
        preload.classList.add('hiden');
      }, 3000); // retrasa la animación de transición para que el usuario vea el preload
    }
  
    // Si se supera el tiempo máximo de espera, muestra el contenido y oculta el preload
    setTimeout(function() {
      clearInterval(pageLoaded);
      showContent();
    }, timeLimit);
  });
  