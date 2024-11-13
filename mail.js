function enviarDatos(email, nombre, apellido, mensaje) {
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);
    const url = `https://magicloops.dev/api/loop/dfd1284f-b5a9-41f2-b282-110bcead37df/run?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}
`;

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
