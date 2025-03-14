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

    // Elementos de tarjetas y modal
    this.serviceIframe = document.getElementById('service-iframe');
    this.iconProcesoSaia = document.getElementById('icon-proceso');
    this.labelProcesoSaia = document.getElementById('nombre-proceso');
    this.textProcesoSaia = document.getElementById('description-proceso');
    this.nameWindow = document.getElementById('modal-label');
    this.modalContent = document.getElementById('modal-content');

    // Datos de servicios
    this.serviceData = {
      service1: {
        url: CONFIG.paths.services.pqrs.startsWith('http')
          ? CONFIG.paths.services.pqrs
          : CONFIG.baseUrl + CONFIG.paths.services.pqrs,
        nameWindow: CONFIG.serviceInfo.service1.nameWindow,
        modalContent: CONFIG.serviceInfo.service1.modalContent,
      },
      service2: {
        url: CONFIG.paths.services.enlaceProcesoSaia, // Ya contiene la URL completa
        iconProcesoSaia: CONFIG.serviceInfo.service2.iconProcesoSaia,
        labelProcesoSaia: CONFIG.serviceInfo.service2.labelProcesoSaia,
        textProcesoSaia: CONFIG.serviceInfo.service2.textProcesoSaia,
        nameWindow: CONFIG.serviceInfo.service2.nameWindow,
        modalContent: CONFIG.serviceInfo.service2.modalContent,
      },
      service3: {
        url: CONFIG.paths.services.login, // URL relativa
        nameWindow: CONFIG.serviceInfo.service3.nameWindow,
        modalContent: CONFIG.serviceInfo.service3.modalContent,
      },
    };

    // Inicializar los event listeners
    this.initEventListeners();
    this.initProcess();
  }

  /**
   * Inicializa los datos del proceso a medida
   */
  initProcess() {
    this.service2.labelProcesoSaia =
      CONFIG.serviceInfo.service2.labelProcesoSaia;
    this.service2.textProcesoSaia = CONFIG.serviceInfo.service2.textProcesoSaia;
    this.service2.iconProcesoSaia = CONFIG.serviceInfo.service2.iconProcesoSaia;

    this.iconProcesoSaia.className = this.service2.iconProcesoSaia;
    this.labelProcesoSaia.innerHTML = this.service2.labelProcesoSaia;
    this.textProcesoSaia.innerHTML = this.service2.textProcesoSaia;
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
