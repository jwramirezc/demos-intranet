document.addEventListener('DOMContentLoaded', function () {
  const servicesContainer = document.getElementById('services-container');
  const service1 = document.getElementById('service-1');
  const service2 = document.getElementById('service-2');
  const service3 = document.getElementById('service-3');
  let url = '';
  let nameWindow = '';
  let modalContent = '';

  const modalContainer = document.getElementById('miModal');
  // const backBtn = document.getElementById('back-btn');

  // Mostrar iframe al hacer clic en cualquier servicio
  service1.addEventListener('click', function () {
    url = 'https://www.saiasoftware.com/pqrsdemo2/';
    nameWindow = 'Gestión de PQRS';
    modalContent =
      'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite registrar Peticiones, Quejas o Reclamos relacionados con nuestros servicios. Para una gestión eficiente, proporcione información precisa y detallada sobre su caso. Al enviar este formulario, sus datos serán procesados según nuestra política de protección de datos. Recibirá confirmación y número de radicado en el correo electrónico registrado. Tiempo estimado de respuesta: 5-15 días hábiles según el tipo de solicitud.';
    // Actualizar el iframe con la URL seleccionada
    document.getElementById('service-iframe').src = url;
    document.getElementById('modalLabel').innerHTML = nameWindow;
    document.getElementById('modal-content').innerHTML = modalContent;
    modalContainer.style.display = 'block';
  });

  service2.addEventListener('click', function () {
    url = 'https://saiademo2.netsaia.com/ws/factura_email/index.html';
    nameWindow = 'Gestión de Datos';
    modalContent =
      'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite actualizar su información personal en nuestra base de datos. Para garantizar una correcta actualización, verifique que todos los datos proporcionados sean precisos y estén completos. Al enviar este formulario, su información será procesada según nuestra política de protección de datos. Recibirá una confirmación de actualización en el correo electrónico registrado. Manteniendo sus datos actualizados podremos brindarle un mejor servicio y comunicación.';
    // Actualizar el iframe con la URL seleccionada
    document.getElementById('service-iframe').src = url;
    document.getElementById('modalLabel').innerHTML = nameWindow;
    document.getElementById('modal-content').innerHTML = modalContent;
    modalContainer.style.display = 'block';
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
