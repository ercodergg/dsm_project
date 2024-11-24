import { getRestaurantes, getClientes } from './crud.js';

function login(event) {
    event.preventDefault();
    const form = event.target;
    const nombre = form.querySelector('#nombre').value;
    const pass = form.querySelector('#pass').value;
    const restaurantes = getRestaurantes();
    const clientes = getClientes();
    const restaurante = restaurantes.find(restaurante => restaurante.nombre === nombre && restaurante.pass === pass);
    if (restaurante) {
        console.log('Bienvenido restaurante');
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('pass', pass);
        window.location.href = 'index-restaurante.html';
    } else {
        const cliente = clientes.find(cliente => cliente.nombre === nombre && cliente.pass === pass);
        if (cliente) {
            console.log('Bienvenido cliente');
            sessionStorage.setItem('nombre', nombre);
            sessionStorage.setItem('pass', pass);
            window.location.href = 'index.html';
        } else {
            console.log('Usuario no encontrado');
        }
    }
}

// Añadir el evento de escucha al formulario
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form form');
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
});