const imagenes = [
  "imagenes/fotito1.jpg",
  "imagenes/fotito2.jpg",
  "imagenes/fotito3.jpg",
  "imagenes/fotito4.jpg",
  "imagenes/fotito5.jpg",
  "imagenes/fotito6.jpg",
  "imagenes/fotito7.jpg",
  "imagenes/fotito8.jpg",
  "imagenes/fotito9.jpg"
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
  