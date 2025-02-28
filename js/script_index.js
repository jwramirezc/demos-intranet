document.addEventListener('DOMContentLoaded', function () {
  const servicesContainer = document.getElementById('services-container');
  const service1 = document.getElementById('service-1');
  const service2 = document.getElementById('service-2');
  const service3 = document.getElementById('service-3');
  let url = '';

  const iframeContainer = document.getElementById('iframe-container');
  const backBtn = document.getElementById('back-btn');

  // Mostrar iframe al hacer clic en cualquier servicio
  service1.addEventListener('click', function () {
    url = 'https://www.saiasoftware.com/pqrsdemo2/';
    // Actualizar el iframe con la URL seleccionada
    document.getElementById('service-iframe').src = url;
    servicesContainer.style.display = 'none';
    iframeContainer.style.display = 'block';
  });

  service2.addEventListener('click', function () {
    url = 'https://saiademo2.netsaia.com/ws/factura_email/index.html';
    // Actualizar el iframe con la URL seleccionada
    document.getElementById('service-iframe').src = url;
    servicesContainer.style.display = 'none';
    iframeContainer.style.display = 'block';
  });

  service3.addEventListener('click', function () {
    url = 'https://www.saiasoftware.com/demo-intranet/';
    // Actualizar el iframe con la URL seleccionada
    window.open(url, '_blank');
    // servicesContainer.style.display = 'none';
    // iframeContainer.style.display = 'block';
  });

  // Botón para volver a la vista de trámites
  backBtn.addEventListener('click', function () {
    iframeContainer.style.display = 'none';
    servicesContainer.style.display = 'block';
  });
});
