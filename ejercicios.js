
const archivoJson = 'ejercicios.json';
fetch(archivoJson)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    const preguntas = data.ejercicios;
    mostrarPreguntas(preguntas);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

let preguntaActual = 0; 


function mostrarPreguntas(preguntas) {
  const preguntaElem = document.getElementById('pregunta');
  const respuestaElem = document.getElementById('respuesta');

  const mostrarPregunta = () => {
    if (preguntaActual < preguntas.length) {
      const pregunta = preguntas[preguntaActual];

     
      preguntaElem.innerHTML = `<p><strong>Pregunta ${pregunta.numero}: </strong>${pregunta.pregunta}</p>`;

      respuestaElem.innerHTML = '';
      pregunta.respuestas.forEach(respuesta => {
        const li = document.createElement('li');
        li.textContent = respuesta;
        li.onclick = () => seleccionarRespuesta(respuesta, pregunta.correcta);
        respuestaElem.appendChild(li);
      });
    } else {
      alert("¡Has completado todas las preguntas!");
     
      window.location.href = 'inicio.html';
    }
  };

  
  const seleccionarRespuesta = (respuestaSeleccionada, respuestaCorrecta) => {
    const liElements = respuestaElem.querySelectorAll('li');
    liElements.forEach(li => li.style.backgroundColor = '');
    event.target.style.backgroundColor = '#D3D3D3'; 

    if (respuestaSeleccionada === respuestaCorrecta) {
      alert('¡Respuesta correcta!');
      
      setTimeout(() => {
        preguntaActual++; 
        mostrarPregunta(); 
      }, 1000); 
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };

  mostrarPregunta(); 
}
