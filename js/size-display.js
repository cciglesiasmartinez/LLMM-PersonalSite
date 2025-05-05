// Función para actualizar las medidas de la pantalla
function updateScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Mostrar las medidas en el span
    const screenSizeElement = document.getElementById('screen-size');
    screenSizeElement.textContent = `Ancho: ${width}px, Alto: ${height}px`;
}

// Llamar a la función cuando se carga la página y cada vez que se cambia el tamaño de la ventana
window.addEventListener('load', updateScreenSize);
window.addEventListener('resize', updateScreenSize);