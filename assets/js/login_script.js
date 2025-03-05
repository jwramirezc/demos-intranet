document.addEventListener('DOMContentLoaded', function () {
  // Manejo del botón de login
  const btnLogin = document.getElementById('btn-login');
  if (btnLogin) {
    btnLogin.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = './intranet.html';
    });
  } else {
    console.log('El botón de login no fue encontrado');
  }
});
