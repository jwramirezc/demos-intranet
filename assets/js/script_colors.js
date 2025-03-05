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
        background: '#ffebee',
      },
      blue: {
        primary: '#3498db',
        icon: '#3498db',
        background: '#e3f2fd',
      },
      green: {
        primary: '#2ecc71',
        icon: '#2ecc71',
        background: '#e8f5e9',
      },
      yellow: {
        primary: '#f1c40f',
        icon: '#f39c12',
        background: '#fffde7',
      },
      purple: {
        primary: '#9b59b6',
        icon: '#9b59b6',
        background: '#f3e5f5',
      },
      gray: {
        primary: '#607D8B',
        icon: '#78909C',
        background: '#ECEFF1',
      },
    };

    // Elementos específicos a cambiar
    this.body = document.body;
    this.h5Elements = document.querySelectorAll('h5');
    this.iconElements = document.querySelectorAll('i.fas');
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
    this.setupEventListeners();
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
    this.body.style.backgroundColor = theme.background;

    // Aplicar color a todos los h5
    this.h5Elements.forEach(element => {
      element.style.color = theme.primary;
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
  }

  /**
   * Actualiza elementos añadidos dinamicamente
   * @param {Object} theme - Tema actual
   */
  refreshDynamicElements(theme) {
    // Seleccionar nuevamente para capturar elementos añadidos dinamicamente
    const dynamicH5 = document.querySelectorAll('h5');
    const dynamicIcons = document.querySelectorAll('i.fas');

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

  /**
   * Añade un nuevo tema
   * @param {string} name - Nombre del tema
   * @param {Object} colors - Colores del tema
   */
  addTheme(name, colors) {
    if (typeof name !== 'string' || typeof colors !== 'object') {
      console.error('Formato incorrecto para añadir tema');
      return;
    }

    if (!colors.primary || !colors.icon || !colors.background) {
      console.error('El tema debe incluir primary, icon y background');
      return;
    }

    this.themes[name] = colors;
  }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = new ThemeSwitcher();

  // Hacer disponible globalmente
  window.themeSwitcher = themeSwitcher;
});
