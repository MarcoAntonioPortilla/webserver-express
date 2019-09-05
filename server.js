const express = require('express'); //se utiliza 'const' porque serán constantes y nunca se modificarán.
const app = express();


//declaramos la librería hbs y requerimos el archivo de los helpers
const hbs = require('hbs');
require('./hbs/helpers');


//configuración de heroku para correr en su servidor
const port = process.env.PORT || 3000; //preguntamos a Heroku que puerto nos va a dar, de lo contrario por default quedaría 3000


//__dirname toma la ruta donde se esté ejecutando el sistema sin importar cual sea.
app.use(express.static(__dirname + '/public')); //especifica que se iniciará por default en las ruta especificada al ejecutarse el proyecto


hbs.registerPartials(__dirname + '/views/parciales'); //indicamos el directorio en el cual se encuentran mis parciales, es decir los elementos reutilizables de mi aplicación
//Express HBS engine
app.set('view engine', 'hbs'); //nos permite optimizar líneas de código para que no repitamos en cada págna el menú u objetos repetitivos






//path declarado para el inicio de la página home
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Marco'

    });
});


//path declarado para el inicio de la página about
app.get('/about', (req, res) => {
    res.render('about', {

    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});