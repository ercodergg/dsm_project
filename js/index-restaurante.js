import { getPedidos } from './crud.js';

document.addEventListener('DOMContentLoaded', () => {
    const nombreRestaurante = sessionStorage.getItem('nombre');
    if (!nombreRestaurante) {
        console.error('No se encontró el nombre del restaurante en sessionStorage');
        return;
    }

    const pedidos = getPedidos();
    const pedidosRestaurante = pedidos.filter(pedido => pedido.restaurante === nombreRestaurante);

    const pedidosContainer = document.getElementById('pedidos-container');
    pedidosRestaurante.forEach(pedido => {
        const card = document.createElement('div');
        card.className = pedido.estado === 'Pendiente' ? 'card' : 'card-encamino';
        card.innerHTML = `
            <h2>Pedido #${pedido.id}</h2>
            <p><i class="fas fa-user"></i> Cliente: ${pedido.cliente}</p>
            <p><i class="fas fa-utensils"></i> Items: ${pedido.items.join(', ')}</p>
            <p><i class="fa-solid fa-money-bill"></i> Total: ${pedido.total}</p>
            <p><i class="fa-solid fa-hourglass-half"></i> Estado: ${pedido.estado}</p>
        `;
        pedidosContainer.appendChild(card);
    });
});