function CrearElemento() {var usuarios = [
    {
        "nombre":nombre,
        "mail":mail,
        "edad":edad,
        "contraseña":contraseña
    },
];
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var edad = document.getElementById("edad").value;
    var contraseña = document.getElementById("contraseña").value;

    if (!nombre) {
        alert('Por favor, complete el campo de Nombre.');
        return;
    }
    if (!mail) {
        alert('Por favor, complete el campo de Mail.');
        return;
    }
    if (!edad) {
        alert('Por favor, complete el campo de Edad.');
        return;
    }
    if (!contraseña) {
        alert('Por favor, complete el campo de Contraseña.');
        return;
    }

    var elemento = {
        "nombre": nombre,
        "mail": mail,
        "edad": edad,
        "contraseña": contraseña,
    };
    usuarios.push(elemento);

    alert("Usuario agregado correctamente");
    window.location.href = "objetivo.html";
}


//EXAMEN DE NIVELACIÓN

var preguntas = [
    {
      "pregunta": "Can I park here?",
      "respuestas": [
        {"respuesta": "Sorry, I did that"},
        {"respuesta": "It's the same place"},
        {"respuesta": "Only for half an hour"}
      ],
      "correcta": "Only for half an hour",
      "Status": ""
    },
    {
      "pregunta": "I can't understand this email",
      "respuestas": [
        {"respuesta": "Would you like some help?"},
        {"respuesta": "Don't you know"},
        {"respuesta": "I suppose you can"}
      ],
      "correcta": "Would you like some help?",
      "Status": ""
    },
    {
        "pregunta": "The company needs to decide...and for all what its position is on this point",
        "respuestas": [
          {"respuesta": "Here"},
          {"respuesta": "Once"},
          {"respuesta": "Finally"}
        ],
        "correcta": "Once",
        "Status": ""
      }
  ];
  
  var index = 0;
  window.onload = function() {
    var pregunta = document.getElementById("pregunta");
    pregunta.textContent = preguntas[index].pregunta;
    
    var respuesta = document.getElementById("respuesta");
    for (let indexy = 0; indexy < 3; indexy++) {
      var opcion = document.createElement("li");
      opcion.textContent = preguntas[index].respuestas[indexy].respuesta;
      respuesta.appendChild(opcion);
    }        
  }
  
  function seleccionarRespuesta(event) {
    var lista = document.getElementById("respuesta");
    var items = lista.getElementsByTagName("li");
    
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.remove("active");
    }
    
    if (event.target.tagName === "LI") {
      event.target.classList.add("active");
    }
  }
  
  function Responder() {
    var respuestaSeleccionada = document.querySelector("#respuesta li.active");
    
    if (respuestaSeleccionada) {
      var respuesta = respuestaSeleccionada.textContent;
      
      if (preguntas[index].correcta === respuesta) {
        alert("¡Respuesta correcta!");
      } else {
        alert("Respuesta incorrecta");
      }
      
      index++;
      if (index < preguntas.length) {
        var pregunta = document.getElementById("pregunta");
        pregunta.textContent = preguntas[index].pregunta;
        
        var respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = "";
        for (let indexy = 0; indexy < 3; indexy++) {
          var opcion = document.createElement("li");
          opcion.textContent = preguntas[index].respuestas[indexy].respuesta;
          respuesta.appendChild(opcion);
        }
      } else {
        alert("¡Has terminado todas las preguntas!");
        window.location.href = "asignado.html";
      }
    } else {
      alert("Selecciona una respuesta antes de continuar.");
    }
  }


   function seleccionarRespuesta(event) {
    var lista = document.getElementById("respuesta");
    var items = lista.getElementsByTagName("li");
    
    // Elimina la clase activa de todos los elementos
    for (var i = 0; i < items.length; ++i) {
        items[i].classList.remove("active");
    }
    
    // Agrega la clase activa al elemento seleccionado
    if (event.target.tagName === "LI") {
        event.target.classList.add("active");
    }
}


document.addEventListener('DOMContentLoaded', () => {
  // Para la página de rubro
  const botonesRubro = document.querySelectorAll('.rub');
  botonesRubro.forEach(boton => {
      boton.addEventListener('click', () => {
          botonesRubro.forEach(b => b.classList.remove('active'));
          boton.classList.add('active');
      });
  });

  // Para la página de objetivo
  const botonesObjetivo = document.querySelectorAll('.obje');
  botonesObjetivo.forEach(boton => {
      boton.addEventListener('click', () => {
          botonesObjetivo.forEach(b => b.classList.remove('active'));
          boton.classList.add('active');
      });
  });
});

window.onload = function() {
    
    setTimeout(function() {
        document.getElementById("pantalla-carga").style.display = "none";
        document.getElementById("contenido-pagina").style.display = "block";
    }, 1000);

    // Mantiene las funciones anteriores de tu página
    var pregunta = document.getElementById("pregunta");
    pregunta.textContent = preguntas[index].pregunta;
    
    var respuesta = document.getElementById("respuesta");
    for (let indexy = 0; indexy < 3; indexy++) {
        var opcion = document.createElement("li");
        opcion.textContent = preguntas[index].respuestas[indexy].respuesta;
        respuesta.appendChild(opcion);
    }    
}
  
function Ingreso() {var usuarios2 = [
  {
      "nombre":nombre,
      "contraseña":contraseña
  },
];
  var nombre = document.getElementById("nombre").value;
  var contraseña = document.getElementById("contraseña").value;


     if (!nombre) {
      alert('Por favor, complete el campo de usuario.');
      return;
  }
     if (!contraseña) {
      alert('Por favor, complete el campo de Contraseña.');
      return;
  }


  var elemento = {
      "nombre": nombre,
      "contraseña": contraseña,
  };
  usuarios2.push(elemento);


  alert("Inicio de sesión");
  window.location.href = "inicio.html";
}
