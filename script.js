document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Validar campo nombre
    let entradaNombre = document.getElementById("name"); // Agregado "document."
    let errorNombre = document.getElementById("nameError");
  
    if (entradaNombre.value.trim() === "") {
      errorNombre.textContent = "Por favor introduce tu nombre";
      errorNombre.classList.add("error-message");
    } else {
      errorNombre.textContent = "";
      errorNombre.classList.remove("error-message");
    }
  
    // Validar correo electrónico
    let emailEntrada = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(emailEntrada.value)) {
      emailError.textContent = "Por favor introduce un email válido";
      emailError.classList.add("error-message");
    } else {
      emailError.textContent = "";
      emailError.classList.remove("error-message");
    }
  
    // Validar contraseña
    let contrasenaEntrada = document.getElementById("password");
    let contrasenaError = document.getElementById("passwordError");
    let contrasenaPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
      contrasenaError.textContent =
        "La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas, además de caracteres especiales";
      contrasenaError.classList.add("error-message");
    } else {
      contrasenaError.textContent = "";
      contrasenaError.classList.remove("error-message");
    }
    // Si todos los campos son válidos, enviar formulario
    if (
      !errorNombre.textContent &&
      !emailError.textContent &&
      !contrasenaError.textContent
    ) {
      // Backend que reciba la información
      alert(`El formulario se ha enviado con éxito`);
      document.getElementById("formulario").reset();
    } else {
      // Puedes agregar aquí alguna lógica adicional en caso de errores
    }
  });
  