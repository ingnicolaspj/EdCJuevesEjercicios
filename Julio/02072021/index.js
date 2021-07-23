// Declaración de un Función (Function Declaration)

//Esta funcion suma dos números pasandole dos parametros
// function sumar(a,b){ //a y b son parametros

//     console.log( a + b );

// }

// sumar(2,3);// Argumentos
// sumar(200,1850);// Argumentos

// //Exprecion de funcion ( Function Expression )

//Valores que se pueden pasar a la funcion
const saludar = function (nombre = 'Guest000215145', apellido = 'Desconocido'){

    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
saludar('Osvaldo','Ortega');

//funciones flecha




