// Script para alternar entre Login y Registro 
const loginBox = document.getElementById('login');
    const registerBox = document.getElementById('register');
    const btnShowRegister = document.getElementById('btn-show-register');
    const btnShowLogin = document.getElementById('btn-show-login');

    btnShowRegister.addEventListener('click', () => {
      loginBox.classList.add('hidden');
      registerBox.classList.remove('hidden');
    });

    btnShowLogin.addEventListener('click', () => {
      registerBox.classList.add('hidden');
      loginBox.classList.remove('hidden');
    });