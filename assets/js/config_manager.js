// config_manager.js - Módulo para gestionar la configuración del portal

/**
 * Inicializa el gestor de configuración
 */
export function initConfigManager() {
  // Si no hay configuración guardada, inicializar con CONFIG global
  if (!localStorage.getItem('portalConfig') && window.CONFIG) {
    localStorage.setItem('portalConfig', JSON.stringify(window.CONFIG));
  }
}

/**
 * Obtiene la configuración actual
 * @returns {Object} Configuración actual
 */
export function getConfig() {
  const savedConfig = localStorage.getItem('portalConfig');

  if (savedConfig) {
    return JSON.parse(savedConfig);
  } else if (window.CONFIG) {
    return window.CONFIG;
  } else {
    console.error('No se encontró ninguna configuración disponible');
    return {};
  }
}

/**
 * Actualiza la configuración completa
 * @param {Object} newConfig - Nueva configuración
 */
export function updateConfig(newConfig) {
  localStorage.setItem('portalConfig', JSON.stringify(newConfig));

  // Si existe la función updatePortalConfig, actualizar en tiempo real
  if (window.updatePortalConfig) {
    window.updatePortalConfig(newConfig);
  }
}

/**
 * Actualiza solo la configuración del servicio 3
 * @param {Object} service3Config - Nueva configuración para service3
 */
export function updateService2(service3Config) {
  const currentConfig = getConfig();

  // Actualizar solo las propiedades del service2
  currentConfig.serviceInfo.service3 = {
    ...currentConfig.serviceInfo.service3,
    ...service3Config,
  };

  updateConfig(currentConfig);
}

/**
 * Restaura la configuración a los valores por defecto
 */
export function resetToDefault() {
  if (window.CONFIG) {
    // Usar la configuración original de CONFIG
    localStorage.setItem('portalConfig', JSON.stringify(window.CONFIG));

    // Si existe la función updatePortalConfig, actualizar en tiempo real
    if (window.updatePortalConfig) {
      window.updatePortalConfig(window.CONFIG);
    }
  } else {
    console.error(
      'No se encontró la configuración por defecto (window.CONFIG)'
    );
  }
}
