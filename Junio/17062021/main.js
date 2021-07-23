const carrito = [];

//Definir un producto

const producto1 = {
        nombre: 'Monitor de 32 Pulgadas',
        precio: 3000
}

const producto2 = {
    nombre: 'Disco Duro de 1TB',
    precio: 1500
}

const producto3 = {
    nombre: 'PS5',
    precio: 14000
}

const producto4 = {
    nombre: 'Xbox Series X',
    precio: 16000
}
//Insertar elementos en mi arreglo
carrito.push(producto1);
carrito.push(producto3);
carrito.push(producto2);

// Agregar elementos al principio
carrito.unshift(producto4);

//Elimina el ultimo elemento de un arreglo
carrito.pop();

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);
