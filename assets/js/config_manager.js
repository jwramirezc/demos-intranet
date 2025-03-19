// config_manager.js
// Este archivo maneja la configuración usando localStorage

// Importamos la configuración base
import CONFIG from '../config/config.js';

// Función para inicializar el sistema de configuración
function initConfigManager() {
  // Verificar si ya existe configuración en localStorage
  if (!localStorage.getItem('portalConfig')) {
    // Si no existe, guardamos la configuración inicial
    localStorage.setItem('portalConfig', JSON.stringify(CONFIG));
  }
}

// Función para obtener la configuración actual
function getConfig() {
  // Obtener configuración del localStorage o usar la por defecto
  const savedConfig = localStorage.getItem('portalConfig');
  return savedConfig ? JSON.parse(savedConfig) : CONFIG;
}

// Función específica para actualizar service2
function updateService2(newConfig) {
  const currentConfig = getConfig();

  // Actualizamos solo service2
  currentConfig.serviceInfo.service2 = {
    ...currentConfig.serviceInfo.service2,
    ...newConfig,
  };

  // Guardamos la configuración actualizada
  localStorage.setItem('portalConfig', JSON.stringify(currentConfig));

  return currentConfig;
}

// Función para restaurar valores por defecto
function resetToDefault() {
  localStorage.setItem('portalConfig', JSON.stringify(CONFIG));
  return CONFIG;
}

export { initConfigManager, getConfig, updateService2, resetToDefault };
