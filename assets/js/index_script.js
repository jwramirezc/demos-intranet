/**
 * Clase ServiceModal para gestionar los servicios y modales
 */
class ServiceModal {
  /**
   * Constructor que inicializa las propiedades y elementos del DOM
   */
  constructor() {
    // Contenedores principales
    this.modalContainer = document.getElementById('miModal');

    // Elementos de servicio
    this.service1 = document.getElementById('service-1');
    this.service2 = document.getElementById('service-2');
    this.service3 = document.getElementById('service-3');

    // Elementos del modal
    this.serviceIframe = document.getElementById('service-iframe');
    this.nameWindow = document.getElementById('modal-label');
    this.modalContent = document.getElementById('modal-content');

    // Datos de servicios
    this.serviceData = {
      service1: {
        url: 'https://www.saiasoftware.com/pqrsdemo2/',
        nameWindow: 'Gestión de PQRS',
        modalContent:
          'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite registrar Peticiones, Quejas o Reclamos relacionados con nuestros servicios. Para una gestión eficiente, proporcione información precisa y detallada sobre su caso. Al enviar este formulario, sus datos serán procesados según nuestra política de protección de datos. Recibirá confirmación y número de radicado en el correo electrónico registrado. Tiempo estimado de respuesta: 5-15 días hábiles según el tipo de solicitud.',
      },
      service2: {
        url: 'https://saiademo2.netsaia.com/ws/factura_email/index.html',
        nameWindow: 'Gestión de Datos',
        modalContent:
          'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite actualizar su información personal en nuestra base de datos. Para garantizar una correcta actualización, verifique que todos los datos proporcionados sean precisos y estén completos. Al enviar este formulario, su información será procesada según nuestra política de protección de datos. Recibirá una confirmación de actualización en el correo electrónico registrado. Manteniendo sus datos actualizados podremos brindarle un mejor servicio y comunicación.',
      },
      service3: {
        url: './pages/login.html',
        nameWindow: '',
        modalContent: '',
      },
    };

    // Inicializar los event listeners
    this.initEventListeners();
  }

  /**
   * Inicializa todos los event listeners para los servicios
   */
  initEventListeners() {
    // Event listener para servicio 1
    this.service1.addEventListener('click', () => {
      this.openModal(this.serviceData.service1);
    });

    // Event listener para servicio 2
    this.service2.addEventListener('click', () => {
      this.openModal(this.serviceData.service2);
    });

    // Event listener para servicio 3 (abrir en nueva ventana)
    this.service3.addEventListener('click', () => {
      this.openExternalUrl(this.serviceData.service3.url);
    });
  }

  /**
   * Abre el modal con los datos del servicio seleccionado
   * @param {Object} serviceInfo - Información del servicio (url, nameWindow, modalContent)
   */
  openModal(serviceInfo) {
    this.serviceIframe.src = serviceInfo.url;
    this.nameWindow.innerHTML = serviceInfo.nameWindow;
    this.modalContent.innerHTML = serviceInfo.modalContent;
    this.modalContainer.style.display = 'block';
  }

  /**
   * Abre URL en una nueva ventana/pestaña
   * @param {string} url - URL a abrir
   */
  openExternalUrl(url) {
    window.open(url, '_blank');
  }
}

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const serviceModal = new ServiceModal();
});
