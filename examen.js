// Obtenemos referencias a los elementos HTML
const mostrarMensajeBtn = document.getElementById('mostrarMensaje');
const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');

// Agregamos un evento clic al botón
mostrarMensajeBtn.addEventListener('click', () => {
    // Mostramos el mensaje de advertencia
    mensajeAdvertencia.style.display = 'block';

    // Ocultamos el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
        mensajeAdvertencia.style.display = 'none';
    }, 3000);
});
