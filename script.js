// Lista de imágenes
// Lista de imágenes
const imagenes = [
    "/Sorpresita uu/imagenes/fotito1.jpg",
    "/Sorpresita uu/imagenes/fotito2.jpg",
    "/Sorpresita uu/imagenes/fotito3.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito4.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito5.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito6.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito7.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito8.jpg",  // Corregido 'jgp' a 'jpg'
    "/Sorpresita uu/imagenes/fotito9.jpg"   // Corregido 'jgp' a 'jpg'
  ];
  
  
  let indiceImagen = 0; // Controla cuál imagen se está mostrando
  
  // Seleccionar el botón y la imagen
  const boton = document.getElementById("mostrar-imagen");
  const imagen = document.getElementById("imagen");
  
  // Cambiar la imagen al hacer clic en el botón
  boton.addEventListener("click", () => {
    // Mostrar la imagen (si estaba oculta)
    imagen.style.display = "block";
    
    // Cambiar la imagen mostrada
    imagen.src = imagenes[indiceImagen];
    
    // Incrementar el índice de la imagen
    indiceImagen = (indiceImagen + 1) % imagenes.length; // Si llega al final, reinicia al primer índice
  });
  