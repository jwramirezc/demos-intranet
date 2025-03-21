// Elementos del DOM
const successMessage = document.getElementById('successMessage');
const closeMessageBtn = document.getElementById('closeMessageBtn');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');

// Configuración
const ANIMATION_DELAY = 10;
const ANIMATION_DURATION = 300;
const AUTO_HIDE_DELAY = 5000;

// Ocultar el mensaje inicialmente
successMessage.style.display = 'none';

// Función para mostrar el mensaje
function showSuccessMessage() {
  // Cancelar cualquier timeout anterior si el mensaje ya estaba visible
  hideTimeoutIfExists();

  // Mostrar el mensaje
  successMessage.style.display = 'flex';

  // Aplicar la clase show después de un pequeño delay para permitir la animación
  setTimeout(() => {
    successMessage.classList.add('show');
  }, ANIMATION_DELAY);

  // Configurar el cierre automático
  const autoHideTimeout = setTimeout(hideSuccessMessage, AUTO_HIDE_DELAY);

  // Guardar el ID del timeout en el elemento para poder cancelarlo si se cierra manualmente
  successMessage.dataset.timeoutId = autoHideTimeout;
}

// Función para ocultar el mensaje
function hideSuccessMessage() {
  // Eliminar la clase show para iniciar la animación de salida
  successMessage.classList.remove('show');

  // Esperar a que termine la animación antes de ocultar completamente
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, ANIMATION_DURATION);

  // Cancelar el timeout
  hideTimeoutIfExists();
}

// Función auxiliar para cancelar el timeout existente
function hideTimeoutIfExists() {
  if (successMessage.dataset.timeoutId) {
    clearTimeout(parseInt(successMessage.dataset.timeoutId));
    delete successMessage.dataset.timeoutId;
  }
}

// Función para manejar las acciones que muestran el mensaje
function handleAction(actionName) {
  console.log(`${actionName}...`);
  setTimeout(showSuccessMessage, ANIMATION_DELAY);
}

// Agregar eventos
closeMessageBtn.addEventListener('click', hideSuccessMessage);
saveBtn.addEventListener('click', () =>
  handleAction('Guardando configuración')
);
resetBtn.addEventListener('click', () => handleAction('Restaurando valores'));
