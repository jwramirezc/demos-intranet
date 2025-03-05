// 2. Archivo: imagenes.js - Función para cargar la imagen correcta
function cargarImagenCliente() {
  // Obtener parámetro 'cliente' de la URL
  const params = new URLSearchParams(window.location.search);
  const cliente = params.get('cliente');

  // Seleccionar la imagen correspondiente o usar la default
  const logoUrl =
    cliente && clienteImagenes[cliente]
      ? clienteImagenes[cliente]
      : clienteImagenes['default'];

  // Actualizar la imagen en el DOM
  document.querySelector('.header img').src = logoUrl;
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarImagenCliente);
