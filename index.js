const express = require('express');
import { routerProductos, routerCarrito } from './router/router';

const app = express();
app.use(express.static('public'));

//uses
app.use('/api', router);
app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))