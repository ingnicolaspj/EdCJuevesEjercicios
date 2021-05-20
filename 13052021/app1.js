const producto = 'Monitor de 20 Pulgadas';

console.log(producto);
console.log(producto.toUpperCase());
console.log(producto.toLowerCase());

// .repeat te va a permitir repetir una cadena de texto

const texto = ' en Promocion!!!'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);

//.toString convierto un número a un string
const numero = 20;
console.log(numero);
console.log(numero.toString());


// .split sirve para dividir un string(cade de texto)

const actividad = 'Estamos aprendiendo JavaScript en PILARES';
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar Música, #Escribir, #Aprender a programar';
console.log(hobbies.split("#"));