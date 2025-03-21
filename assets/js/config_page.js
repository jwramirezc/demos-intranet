// config_page.js - Script para la página de configuración
import {
  initConfigManager,
  getConfig,
  updateService2,
  resetToDefault,
} from './config_manager.js';

/**
 * Inicializa la página de configuración
 */
function initConfigPage() {
  // Inicializamos el gestor de configuración
  initConfigManager();

  // Referencias a elementos del DOM
  const iconInput = document.getElementById('iconProcesoSaia');
  const labelInput = document.getElementById('labelProcesoSaia');
  const enlaceProcesoSaia = document.getElementById('enlaceProcesoSaia');
  const textInput = document.getElementById('textProcesoSaia');
  const nameWindowInput = document.getElementById('nameWindow');
  const modalContentInput = document.getElementById('modalContent');
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const successMessage = document.getElementById('successMessage');
  const iconPreview = document.getElementById('iconPreview');

  /**
   * Carga la configuración actual en los campos del formulario
   */
  function loadCurrentConfig() {
    const config = getConfig();
    const service2 = config.serviceInfo.service2;

    iconInput.value = service2.iconProcesoSaia || '';
    labelInput.value = service2.labelProcesoSaia || '';
    enlaceProcesoSaia.value = service2.enlaceProcesoSaia || '';
    textInput.value = service2.textProcesoSaia || '';
    nameWindowInput.value = service2.nameWindow || '';
    modalContentInput.value = service2.modalContent || '';

    // Actualizar previsualización del icono
    updateIconPreview();
  }

  /**
   * Actualiza la previsualización del icono seleccionado
   */
  function updateIconPreview() {
    iconPreview.innerHTML = `<i class="${iconInput.value}"></i>`;
  }

  // Event Listeners

  // Escuchar cambios en el campo de icono para actualizar la vista previa
  iconInput.addEventListener('input', updateIconPreview);

  // Guardar configuración
  saveBtn.addEventListener('click', () => {
    const newConfig = {
      iconProcesoSaia: iconInput.value,
      labelProcesoSaia: labelInput.value,
      enlaceProcesoSaia: enlaceProcesoSaia.value,
      textProcesoSaia: textInput.value,
      nameWindow: nameWindowInput.value,
      modalContent: modalContentInput.value,
    };

    updateService2(newConfig);

    // Mostrar mensaje de éxito
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });

  // Restaurar valores por defecto
  resetBtn.addEventListener('click', () => {
    resetToDefault();
    loadCurrentConfig();
  });

  // Cargar configuración al iniciar
  loadCurrentConfig();
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initConfigPage);
