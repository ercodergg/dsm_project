// script.js

// Función para manejar el envío del formulario
function handleSubmit(event) {
    // Evita el envío normal del formulario
    event.preventDefault();

    // Aquí puedes agregar lógica de validación si es necesario

    // Redirige a index.html después de enviar el formulario
    window.location.href = 'index.html';
}

// Función para manejar la búsqueda
function handleSearch(event) {
    if (event.key === 'Enter') {
        // Redirige a index.html cuando se presiona "Enter"
        window.location.href = 'index.html';
    }
}

// Agregar el evento de escucha cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.buscar');
    searchInput.addEventListener('keypress', handleSearch);
});
