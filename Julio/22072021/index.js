//Funciones bloques de codigo



function sumar(){

    // console.log(50 + 2);
    return console.log(100 + 200);
}

// sumar();



const saludaUsuario = function(){

    alert('Estas ingreando a mi sitio');

    confirm('¿Estas deacuerdo en el jucio de los ex-precidentes?')

    const nombre = prompt('¿Dime cual es tu nombre?');



    document.write('Bienvenido a mi sitio web '+nombre);

}


// saludaUsuario();

//Arrow function/ Funcion Flecha
const dividir = (num1,num2) => {

    if(num2 == 0){
        document.write('No se puede divir entre 0');
    }
    document.write(num1 / num2 + '<br>');
}

// dividir(150,30);


const datos = (nombre, apellido = 'S/A') =>{

    document.write('Hola ' + nombre +' '+ apellido + ' te saluda la Escuela de Código <br>');

    dividir(150,30);

}

datos('Brian');

datos('Nico','Pacheco');
datos('Osvaldo','Ortega');
datos('Guadalupe');

