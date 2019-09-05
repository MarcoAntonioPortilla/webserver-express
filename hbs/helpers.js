//declaración de la librería hbs
const hbs = require('hbs');



//helpers
hbs.registerHelper('getAnio', () => { //nos permite ahorrar líneas de código para no repetir declaración de funciones. En este caso el año
    return new Date().getFullYear();
});


hbs.registerHelper('capitalizar', (texto) => { //convierte la primera palabra en mayúscula y las demás en minúsculas ej. mArco antoNio quedaría así: Marco Antonio 
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});