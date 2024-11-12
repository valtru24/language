document.addEventListener('DOMContentLoaded', () => {
    const botonCargar = document.getElementById('cargar-lecciones');
    const contenedorNivel2 = document.getElementById('contenedor-nivel3');

    botonCargar.addEventListener('click', () => {
        fetch('nivel3.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el contenido.');
                }
                return response.text();
            })
            .then(html => {
                contenedorNivel2.innerHTML = html;
                botonCargar.style.display = 'none'; 
            })
            .catch(error => {
                console.error('Error:', error);
                contenedorNivel3.innerHTML = '<p>Error al cargar más lecciones. Inténtalo de nuevo más tarde.</p>';
            });
    });
});
