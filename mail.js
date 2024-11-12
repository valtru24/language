function enviarDatos(email, nombre, apellido, mensaje) {
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);

    const url = `https://magicloops.dev/api/loop/run/loop/e9cdd4f9-a0d9-4ac8-8b8a-4c5c17a12dbe/run?EMAIL=${emailEncoded}&Nombre=${nombreEncoded}&Apellido=${apellidoEncoded}&Mensaje=${mensajeEncoded}`;

    fetch(url, {
        mode: 'no-cors' // Modo no-cors, permite hacer la solicitud pero no obtener datos de la respuesta
    })
    .then(() => {
        console.log('Solicitud realizada, pero la respuesta no se puede leer debido a las restricciones de CORS.');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function enviarCorreo(){
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario").value;
    console.log(email,usuario,apellido,mensaje);
    return false;

}
