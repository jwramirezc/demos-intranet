// config.js
const CONFIG = {
  baseUrl: 'https://www.saiasoftware.com',
  paths: {
    images: {
      logo: '/wp-content/uploads/proyectos_saia/imagenesdemos/logo_portal_demo2.png',
    },
    services: {
      pqrs: '/pqrsdemo2/',
      factura: 'https://saiademo2.netsaia.com/ws/factura_email/index.html',
      hojaVida:
        'https://saiademo2.netsaia.com/ws/ingreso_de_person/index.html?d=006599a59d42289392ba21b8efcf2cd4',
      login: './pages/login.html',
    },
  },
  serviceInfo: {
    service1: {
      nameWindow: 'Gestión de PQRS',
      modalContent:
        'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite registrar Peticiones, Quejas o Reclamos relacionados con nuestros servicios. Para una gestión eficiente, proporcione información precisa y detallada sobre su caso. Al enviar este formulario, sus datos serán procesados según nuestra política de protección de datos. Recibirá confirmación y número de radicado en el correo electrónico registrado. Tiempo estimado de respuesta: 5-15 días hábiles según el tipo de solicitud.',
    },
    service2: {
      nameWindow: 'Gestión de Hoja de Vida',
      modalContent:
        'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite actualizar su información personal en nuestra base de datos. Para garantizar una correcta actualización, verifique que todos los datos proporcionados sean precisos y estén completos. Al enviar este formulario, su información será procesada según nuestra política de protección de datos. Recibirá una confirmación de actualización en el correo electrónico registrado. Manteniendo sus datos actualizados podremos brindarle un mejor servicio y comunicación.',
    },
    service3: {
      nameWindow: '',
      modalContent: '',
    },
  },
};
