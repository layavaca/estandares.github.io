const formulario = document.getElementById('MyFormulario');

formulario.addEventListener('submit', function (event) {
  // Evitar el envío del formulario
  event.preventDefault();

  // Validar los datos
  var espacios = false;
  var cont = 0;
  const nombres = formulario.nombres.value;
  const apellidos = formulario.apellidos.value;
  const email = formulario.email.value;
  const password = formulario.password.value;

  if (!nombres) {
    alert('El campo nombre es obligatorio');
    return;
  }

  if (!apellidos) {
    alert('El campo nombre es obligatorio');
    return;
  }

  if (!email || !email.includes('@')) {
    alert('El campo email debe ser una dirección de correo válida');
    return;
  }

  while (!espacios && cont < password.length) {
    if (password.charAt(cont) == ' ') espacios = true;
    cont++;
  }

  if (espacios) {
    alert('La contraseña no puede contener espacios en blanco');
    return false;
  }

  // Si todo está bien, enviar el formulario
  formulario.submit('Todo bien ');
  alert('Se Registro Correctamente');
});

