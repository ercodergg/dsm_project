console.log("El script se ha cargado correctamente.");

// Función para manejar el envío del formulario
function handleSubmit(event) {
    // Evita el envío normal del formulario
    event.preventDefault();

    const form = document.querySelector('form');
    const tipoUsuario = form.querySelector('#tipo-usuario').value; // Obtener el valor del input oculto

    if (tipoUsuario === 'Cliente') {
        console.log('Es un Cliente');
    } else if (tipoUsuario === 'Restaurante') {
        console.log('Es un Restaurante');
    } else {
        console.log('No se seleccionó tipo de usuario.');
    }

    // Aquí puedes agregar lógica de validación si es necesario
    // Por ejemplo, validaciones adicionales antes de redirigir
    // window.location.href = 'index.html';
}

// Agregar el evento de escucha cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.buscar');
    searchInput.addEventListener('keypress', handleSearch);

    // Seleccionar los botones específicos dentro del formulario
    const form = document.querySelector('form');
    const clienteButton = form.querySelector('.blanco');
    const restauranteButton = form.querySelector('.amarillo');
    const tipoUsuarioInput = form.querySelector('#tipo-usuario'); // Input oculto

    // Asignar el valor del tipo de usuario al hacer clic en uno de los botones
    clienteButton.addEventListener('click', () => {
        tipoUsuarioInput.value = 'Cliente';
    });

    restauranteButton.addEventListener('click', () => {
        tipoUsuarioInput.value = 'Restaurante';
    });
});

// Función para manejar la búsqueda
function handleSearch(event) {
    if (event.key === 'Enter') {
        window.location.href = 'index.html';
    }
}
