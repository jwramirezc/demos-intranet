document.addEventListener('DOMContentLoaded', function () {
  const btnUpload = document.getElementById('btn-upload');
  const btnMoreFacturas = document.getElementById('mas-facturas');
  const textUpload = document.getElementById('text-upload');

  // URL destino
  const targetUrl = 'https://saiademo2.netsaia.com/ws/factura_email/index.html';

  btnUpload.addEventListener('click', () => {
    // Obtener el contenedor
    const container = document.getElementById('contenedor-iframe');

    // Mostrar mensaje de carga
    // container.innerHTML = '<div class="cargando">CARGANDO...</div>';

    // Versión con spinner
    container.innerHTML = `
<div class="cargando">
  <div class="spinner"></div>
  <p>CARGANDO...</p>
</div>
`;

    // Crear el iframe
    const iframe = document.createElement('iframe');
    iframe.src = targetUrl;
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.border = 'none';
    iframe.style.display = 'none'; // Ocultar el iframe inicialmente

    // Cuando el iframe termine de cargar, mostrar el contenido y ocultar el mensaje
    iframe.onload = function () {
      document.querySelector('.cargando').style.display = 'none';
      iframe.style.display = 'block';
    };

    // Añadir el iframe al contenedor (junto al mensaje de carga)
    container.appendChild(iframe);
  });
  //función para ocultar elementos

  function hideElements() {
    btnUpload.style.display = 'none';
    btnMoreFacturas.style.display = 'none';
    textUpload.innerHTML = 'Por Favor Diligencie los Datos de la Factura';
  }
});
