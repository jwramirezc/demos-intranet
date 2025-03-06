// config.js
const CONFIG = {
  baseUrl: 'https://www.saiasoftware.com',
  paths: {
    images: {
      logo: '/wp-content/uploads/2024/imagenesdemos/logo_portal_demo2.png',
    },
    services: {
      pqrs: '/pqrsdemo2/',
      datos: 'https://saiademo2.netsaia.com/ws/factura_email/index.html',
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
      nameWindow: 'Gestión de Datos',
      modalContent:
        'Complete todos los campos obligatorios marcados con asterisco (*). Este formulario le permite actualizar su información personal en nuestra base de datos. Para garantizar una correcta actualización, verifique que todos los datos proporcionados sean precisos y estén completos. Al enviar este formulario, su información será procesada según nuestra política de protección de datos. Recibirá una confirmación de actualización en el correo electrónico registrado. Manteniendo sus datos actualizados podremos brindarle un mejor servicio y comunicación.',
    },
    service3: {
      nameWindow: '',
      modalContent: '',
    },
  },
};
// service1: {
//     url: CONFIG.paths.services.pqrs.startsWith('http')
//       ? CONFIG.paths.services.pqrs
//       : CONFIG.baseUrl + CONFIG.paths.services.pqrs,
//     nameWindow: CONFIG.serviceInfo.service1.nameWindow,
//     modalContent: CONFIG.serviceInfo.service1.modalContent,
//   },
