// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


// meses[0] = 'Nuevo mes';
// meses[6] = 'Julio';


// console.log(meses);

const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Pantalla curva de 45 pulgadas',
    precio: 10000,
}

const produto2 = {
    nombre: 'Celular Xiaomi 9',
    precio: 8000,
}

const producto3 = {
    nombre: 'Teclado Gamer',
    precio:600
}

//Forma declarativa

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, produto2];
resultado = [...resultado,producto3];

console.table(resultado);


// carrito.push(produto2);
// carrito.push(producto);

//Agregar elementos al principio
// carrito.unshift(producto3)

