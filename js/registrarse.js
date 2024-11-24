console.log("El script se ha cargado correctamente.");
// Función para manejar el envío del formulario
function handleSubmit(event) {
    // Evita el envío normal del formulario
    event.preventDefault();
    
    const form = event.target; // Obtener el formulario
    const tipoUsuario = form.querySelector('#tipo-usuario').value; // Obtener el valor del input oculto

    if (tipoUsuario === 'Cliente') {
        console.log('Es un Cliente');
        const nombre = form.querySelector('#nombre').value;
        const pass = form.querySelector('#pass').value;
        const pass2 = form.querySelector('#pass2').value;
        const correoElectronico = form.querySelector('#correoElectronico').value;
        const telefono = form.querySelector('#telefono').value;
        const direccion = form.querySelector('#direccion').value;
        registrarCliente(nombre, correoElectronico, pass, pass2, telefono, direccion);
    } else if (tipoUsuario === 'Restaurante') {
        console.log('Es un Restaurante');
        const nombre = form.querySelector('#nombre').value;
        const direccion = form.querySelector('#direccion').value;
        const tipoCocina = form.querySelector('#tipoCocina').value;
        const pass = form.querySelector('#pass').value;
        const pass2 = form.querySelector('#pass2').value;
        const correoElectronico = form.querySelector('#correoElectronico').value;
        const telefono = form.querySelector('#telefono').value;
        registrarRestaurante(nombre, direccion, tipoCocina, pass, pass2, correoElectronico, telefono);
    } else {
        console.log('Algo ha ocurrido...');
        console.log('Tipo de Usuario:', tipoUsuario);
    }

    return tipoUsuario;
}
function registrarCliente(nombre, correoElectronico, pass, pass2, telefono, direccion) {
    console.log('Registrando cliente...');
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', correoElectronico);
    console.log('Contraseña:', pass);
    console.log('Confirmar Contraseña:', pass2);
    console.log('Teléfono:', telefono);
    console.log('Dirección:', direccion);
}
function registrarRestaurante(nombre, direccion, tipoCocina, pass, pass2, correoElectronico, telefono) {
    console.log('Registrando restaurante...');
    console.log('Nombre:', nombre);
    console.log('Dirección:', direccion);
    console.log('Tipo de Cocina:', tipoCocina);
    console.log('Contraseña:', pass);
    console.log('Confirmar Contraseña:', pass2);
    console.log('Correo Electrónico:', correoElectronico);
    console.log('Teléfono:', telefono);
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
