export function getRestaurantes() {
    console.log('Obteniendo restaurantes...');
    var request = new XMLHttpRequest();
    request.open('GET', 'bd/restaurantes.json', false); // false para hacer la solicitud sincrónica
    request.send(null);

    if (request.status === 200) {
        var restaurantes = JSON.parse(request.responseText);
        console.log(restaurantes);
        return restaurantes;
    } else {
        console.error('Hubo un problema con la solicitud:', request.statusText);
        return [];
    }
}
export function getPedidos() {
    console.log('Obteniendo pedidos...');
    var request = new XMLHttpRequest();
    request.open('GET', 'bd/pedidos.json', false); // false para hacer la solicitud sincrónica
    request.send(null);

    if (request.status === 200) {
        var pedidos = JSON.parse(request.responseText);
        console.log(pedidos);
        return pedidos;
    } else {
        console.error('Hubo un problema con la solicitud:', request.statusText);
        return [];
    }
}
export function getClientes() {
    console.log('Obteniendo clientes...');
    var request = new XMLHttpRequest();
    request.open('GET', 'bd/clientes.json', false); // false para hacer la solicitud sincrónica
    request.send(null);

    if (request.status === 200) {
        var clientes = JSON.parse(request.responseText);
        console.log(clientes);
        return clientes;
    } else {
        console.error('Hubo un problema con la solicitud:', request.statusText);
        return [];
    }
}

export function postCliente(nombre, correoElectronico, pass, pass2, telefono, direccion) {
    console.log('Enviando datos al servidor...');
    const cliente = {
        nombre: nombre,
        correoElectronico: correoElectronico,
        pass: pass,
        pass2: pass2,
        telefono: telefono,
        direccion: direccion
    };
    console.log('Cliente:', cliente);
    const clientes = getClientes();
    clientes.push(cliente);
    console.log(clientes);
}

export function postRestaurante(nombre, direccion, tipoCocina, pass, pass2, correoElectronico, telefono) {
    console.log('Enviando datos al servidor...');
    const restaurante = {
        nombre: nombre,
        direccion: direccion,
        tipoCocina: tipoCocina,
        pass: pass,
        pass2: pass2,
        correoElectronico: correoElectronico,
        telefono: telefono
    };
    console.log('Restaurante:', restaurante);
    const restaurantes = getRestaurantes();
    restaurantes.push(restaurante);
    console.log(restaurantes);
}