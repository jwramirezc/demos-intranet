// apply_config.js
// Script para inicializar el sistema de configuración

// Función para asegurarse de que exista una configuración válida en localStorage
function initializeConfiguration() {
  // Verificar si existe configuración en localStorage
  if (!localStorage.getItem('portalConfig')) {
    // Si no existe, intentamos obtener una copia de la configuración predeterminada
    // a través de una solicitud fetch al archivo config.js
    fetch('./config/config.js')
      .then(response => response.text())
      .then(text => {
        // Extraemos el objeto CONFIG del texto del archivo
        const configMatch = text.match(/const CONFIG = ({[\s\S]*?});/);
        if (configMatch && configMatch[1]) {
          try {
            // Evaluamos el objeto CONFIG (con precaución)
            const configObj = new Function('return ' + configMatch[1])();
            // Guardamos en localStorage
            localStorage.setItem('portalConfig', JSON.stringify(configObj));
            console.log(
              'Configuración inicializada correctamente desde config.js'
            );
          } catch (e) {
            console.error('Error al procesar la configuración:', e);
          }
        }
      })
      .catch(error => {
        console.error('Error al cargar el archivo de configuración:', error);
      });
  }
}

// Inicializamos la configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  initializeConfiguration();
});
