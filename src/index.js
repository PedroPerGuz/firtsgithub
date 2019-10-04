const express = require('express');
const app = express();
const path = require('path');


// settings

app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middleware   


// routes   rutas de mi servidor
app.use(require('./routes/index'));


// static file   archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));


// listening the server   escuchando el servidor
app.listen(app.get('puerto'), () => {
    console.log('servidor en el puerto', app.get('puerto'));
});