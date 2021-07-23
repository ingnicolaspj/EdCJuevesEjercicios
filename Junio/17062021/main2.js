const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio:2500, pais: "China"},
    {nombre: 'Xbox One ', precio:5000},
    {nombre: 'PS5', precio:12000},
    {nombre: 'Xbox Series X', precio:14000},
    {nombre: 'Monitor Curvo 40 Pulgadas', precio:6000},
    {nombre: 'Control Xbox Series X', precio:1450},
]

// console.table(carrito.length);

// for(let i = 0; i < carrito.length;i++){
//     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
//     document.write(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
// }

carrito.forEach( function (producto) {
    document.write(`${producto.nombre} - Precio: ${producto.precio} ${producto.pais}`);
})