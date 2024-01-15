const firebaseConfig = {
    apiKey: "AIzaSyD6EQnR2rPAYAys8V5QxnsViVVj-p_eBnM",
    authDomain: "formulariofb-eb856.firebaseapp.com",
    projectId: "formulariofb-eb856",
    storageBucket: "formulariofb-eb856.appspot.com",
    messagingSenderId: "915231549976",
    appId: "1:915231549976:web:b217e165516d45c91c716d",
    measurementId: "G-742JYWCV7K"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

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
    !contrasenaError.textContent){
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        alert('El formulario se ha enviado con extio')
        document.getElementById('formulario').reset()
    }
});
