// ICONOS ACTIVAR

const inputs = document.querySelectorAll('.inputs input');
const iconos = document.querySelectorAll('.inputs .icono');
const btn = document.querySelectorAll('.inputs .btn1');

inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    iconos[index].classList.add('active');
    btn[index].classList.add('activar');
  });

  input.addEventListener('blur', () => {
    iconos[index].classList.remove('active');
    btn[index].classList.remove('activar');
  });
});


// VER CONTRASEÑA

const togglePassword = document.querySelector('.toggle-password');
const password = document.querySelector('input[type="password"]');

togglePassword.addEventListener('click', function() {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.classList.toggle('verde');
});



// MAYUSCULAS

function activarMayusculas() {
  document.addEventListener('keyup', function(event) {
    if (event.getModifierState('CapsLock')) {
      document.getElementById('mensaje').textContent = 'Mayúsculas Activadas';
    } else {
      document.getElementById('mensaje').textContent = 'Mayúsculas Desactivadas';
    }
  });
}
