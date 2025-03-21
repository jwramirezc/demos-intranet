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

    // Cargar configuración
    this.loadConfig();

    // Inicializar los event listeners
    this.initEventListeners();
  }

  /**
   * Carga la configuración desde localStorage o usa CONFIG global como fallback
   */
  loadConfig() {
    // Intentar obtener configuración del localStorage
    const savedConfig = localStorage.getItem('portalConfig');

    // Si hay config en localStorage, usarla
    if (savedConfig) {
      this.config = JSON.parse(savedConfig);
    }
    // Si no hay config en localStorage, usar CONFIG global (de config.js)
    else if (window.CONFIG) {
      this.config = window.CONFIG;
      // Guardar en localStorage para futuros usos
      localStorage.setItem('portalConfig', JSON.stringify(window.CONFIG));
    }
    // Si no hay ninguna fuente disponible, mostrar error
    else {
      console.error('No se encontró configuración disponible');
      return;
    }

    // Preparar datos de servicios basados en la configuración
    this.serviceData = {
      service1: {
        url: this.config.paths.services.pqrs,
        nameWindow: this.config.serviceInfo.service1.nameWindow,
        modalContent: this.config.serviceInfo.service1.modalContent,
      },
      service2: {
        url:
          this.config.serviceInfo.service2.enlaceProcesoSaia ||
          this.config.paths.services.factura,
        iconProcesoSaia: this.config.serviceInfo.service2.iconProcesoSaia,
        labelProcesoSaia: this.config.serviceInfo.service2.labelProcesoSaia,
        textProcesoSaia: this.config.serviceInfo.service2.textProcesoSaia,
        nameWindow: this.config.serviceInfo.service2.nameWindow,
        modalContent: this.config.serviceInfo.service2.modalContent,
      },
      service3: {
        url: this.config.paths.services.login,
        nameWindow: this.config.serviceInfo.service3.nameWindow,
        modalContent: this.config.serviceInfo.service3.modalContent,
      },
    };

    // Inicializar los datos del proceso
    this.initProcess();
  }

  /**
   * Inicializa los datos del proceso a medida
   */
  initProcess() {
    if (this.iconProcesoSaia && this.serviceData.service2.iconProcesoSaia) {
      this.iconProcesoSaia.className =
        this.serviceData.service2.iconProcesoSaia;
    }

    if (this.labelProcesoSaia && this.serviceData.service2.labelProcesoSaia) {
      this.labelProcesoSaia.innerHTML =
        this.serviceData.service2.labelProcesoSaia;
    }

    if (this.textProcesoSaia && this.serviceData.service2.textProcesoSaia) {
      this.textProcesoSaia.innerHTML =
        this.serviceData.service2.textProcesoSaia;
    }
  }

  /**
   * Inicializa todos los event listeners para los servicios
   */
  initEventListeners() {
    // Event listener para servicio 1
    if (this.service1) {
      this.service1.addEventListener('click', () => {
        this.openModal(this.serviceData.service1);
      });
    }

    // Event listener para servicio 2
    if (this.service2) {
      this.service2.addEventListener('click', () => {
        this.openModal(this.serviceData.service2);
      });
    }

    // Event listener para servicio 3 (abrir en nueva ventana)
    if (this.service3) {
      this.service3.addEventListener('click', () => {
        this.openExternalUrl(this.serviceData.service3.url);
      });
    }

    // Escuchar cambios en localStorage para actualizar la interfaz
    window.addEventListener('storage', e => {
      if (e.key === 'portalConfig') {
        this.loadConfig();
      }
    });

    // Método para actualizar en tiempo real si hay cambios en la configuración global
    window.updatePortalConfig = newConfig => {
      localStorage.setItem('portalConfig', JSON.stringify(newConfig));
      this.loadConfig();
    };
  }

  /**
   * Abre el modal con los datos del servicio seleccionado
   * @param {Object} serviceInfo - Información del servicio (url, nameWindow, modalContent)
   */
  openModal(serviceInfo) {
    if (this.serviceIframe) {
      this.serviceIframe.src = serviceInfo.url;
    }

    if (this.nameWindow) {
      this.nameWindow.innerHTML = serviceInfo.nameWindow;
    }

    if (this.modalContent) {
      this.modalContent.innerHTML = serviceInfo.modalContent;
    }
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
