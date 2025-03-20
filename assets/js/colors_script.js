/**
 * Clase ThemeSwitcher para manejar el cambio de temas en h5, iconos y fondo
 */
class ThemeSwitcher {
  /**
   * Constructor que inicializa propiedades y elementos
   */
  constructor() {
    // Definir colores para cada tema
    this.themes = {
      red: {
        primary: '#e74c3c',
        icon: '#e74c3c',
        background:
          'linear-gradient(120deg, rgba(231, 76, 60, 0.3), rgba(155, 89, 182, 0.3))',
        button: '#e74c3c',
      },
      blue: {
        primary: '#3498db',
        icon: '#3498db',
        background:
          'linear-gradient(120deg, rgba(13, 133, 232, 0.3), rgba(142, 68, 173, 0.3))',
        button: '#3498db',
      },
      green: {
        primary: '#2ecc71',
        icon: '#2ecc71',
        background:
          'linear-gradient(120deg, rgba(46, 204, 113, 0.3), rgba(52, 152, 219, 0.3))',
        button: '#2ecc71',
      },
      yellow: {
        primary: '#f1c40f',
        icon: '#f39c12',
        background:
          'linear-gradient(120deg, rgba(241, 196, 15, 0.3), rgba(231, 76, 60, 0.3))',
        button: '#f1c40f',
      },
      purple: {
        primary: '#9b59b6',
        icon: '#9b59b6',
        background:
          'linear-gradient(120deg, rgba(155, 89, 182, 0.3), rgba(52, 152, 219, 0.3))',
        button: '#9b59b6',
      },
      gray: {
        primary: '#607D8B',
        icon: '#78909C',
        background:
          'linear-gradient(120deg, rgba(96, 125, 139, 0.3), rgba(52, 73, 94, 0.3))',
        button: '#607D8B',
      },
    };

    // Elementos específicos a cambiar
    this.body = document.body;
    this.h5Elements = document.querySelectorAll('h5');
    this.h2Elements = document.querySelectorAll('h2');
    this.iconElements = document.querySelectorAll('i.icon-service');
    this.loginButton = document.getElementById('btn-login');
    this.serviceButton = document.querySelectorAll('.btn-services');
    this.colorButtons = document.querySelectorAll('.color-button');

    // Tema predeterminado
    this.defaultTheme = 'blue';

    // Inicializar
    this.init();
  }

  /**
   * Inicializa la aplicación
   */
  init() {
    // Solo configurar event listeners si existen botones de color
    if (this.colorButtons.length > 0) {
      this.setupEventListeners();
    }

    // Siempre cargar el tema guardado
    this.loadSavedTheme();
  }

  /**
   * Configura los event listeners
   */
  setupEventListeners() {
    this.colorButtons.forEach(button => {
      button.addEventListener('click', event => {
        const color = event.target.getAttribute('data-color');
        this.applyTheme(color);
      });
    });
  }

  /**
   * Carga el tema guardado o el predeterminado
   */
  loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && this.themes[savedTheme]) {
      this.applyTheme(savedTheme);
    } else {
      this.applyTheme(this.defaultTheme);
    }
  }

  /**
   * Aplica el tema a los elementos específicos
   * @param {string} color - El color/tema a aplicar
   */
  applyTheme(color) {
    if (!this.themes[color]) {
      console.error(`El tema "${color}" no está definido`);
      return;
    }
    const theme = this.themes[color];

    // Aplicar color de fondo
    this.body.style.background = theme.background;

    // Aplicar color a todos los h5
    this.h5Elements.forEach(element => {
      element.style.color = theme.primary;
    });
    // Aplicar color a todos los h2
    this.h2Elements.forEach(element => {
      element.style.color = theme.primary;
    });

    // Aplicar color a todos los btn-services
    this.serviceButton.forEach(element => {
      element.style.background = theme.button;
    });

    // Aplicar color a todos los iconos Font Awesome
    this.iconElements.forEach(icon => {
      icon.style.color = theme.icon;
    });

    // Actualizar botón activo
    this.updateActiveButton(color);

    // Guardar preferencia
    localStorage.setItem('selectedTheme', color);

    // Para elementos añadidos dinamicamente
    this.refreshDynamicElements(theme);

    // Aplicar color al botón de login si existe
    if (this.loginButton) {
      this.loginButton.style.backgroundColor = theme.button;
      this.loginButton.style.borderColor = theme.button;
    }

    // Actualizar botón activo solo si hay botones de selección
    if (this.colorButtons.length > 0) {
      this.updateActiveButton(color);
    }

    // Guardar preferencia
    localStorage.setItem('selectedTheme', color);

    // Para elementos añadidos dinamicamente
    this.refreshDynamicElements(theme);
  }

  /**
   * Actualiza elementos añadidos dinamicamente
   * @param {Object} theme - Tema actual
   */
  refreshDynamicElements(theme) {
    // Seleccionar nuevamente para capturar elementos añadidos dinamicamente
    const dynamicH5 = document.querySelectorAll('h5');
    const dynamicIcons = document.querySelectorAll('i.icon-service');

    dynamicH5.forEach(element => {
      element.style.color = theme.primary;
    });

    dynamicIcons.forEach(icon => {
      icon.style.color = theme.icon;
    });
  }

  /**
   * Actualiza el botón activo
   * @param {string} color - Color seleccionado
   */
  updateActiveButton(color) {
    this.colorButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-color') === color) {
        btn.classList.add('active');
      }
    });
  }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = new ThemeSwitcher();

  // Hacer disponible globalmente
  window.themeSwitcher = themeSwitcher;
});
