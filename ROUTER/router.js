const express = require('express');
const { Router } = express;

export const routerProductos = new Router();
export const routerCarrito = new Router();


routerProductos.use(express.json());
routerCarrito.use(express.json());

//PRODUCTOS
const productos = [];

routerProductos.get('/:id', (req, res) =>{
    const { id } = req.params;
    const productoBuscado = {};
    if (id === "" || isNull(id)){
        res.send({productos: productos.getAll()});
    }else{
        productoBuscado = productos.getById(id) ;
        if(!isNull(productoBuscado)){
            res.send({ buscado: productoBuscado });
        }else{
            res.send('<h3 style="color:red;">Producto no encontrado</h3>')
        }
    }
});
routerProductos.post('/', (req, res) => {
    const { producto } = req.body;
    const newId = parseInt(productos.length) + 1;
    productos.push({id: newId, ...producto});
    res.send(productos[parseInt(productos.length) - 1]);
    //guardar al archivo
});
routerProductos.put('/:id', (req, res) =>{
    const { producto } = req.body;
    const { id } = req.params;
    const posProductoBuscado = 0;
    
    posProductoBuscado = productos.getPosById(id) ;
    productos[pos] = producto;
});
routerProductos.delete('/:id', (req, res) =>{
    const { id } = req.params;
    productos.deleteByID(id);
});

//CARRITO
routerCarrito.get('/:id/productos', (req, res) =>{
    res.json(personas);
});
routerCarrito.post('/', (req, res) => {
    personas.push(req.body)
    res.json(req.body)
});
routerCarrito.delete('/:id', (req, res) =>{
    res.json(personas);
});
routerCarrito.post('/:id/productos', (req, res) => {
    personas.push(req.body)
    res.json(req.body)
});
routerCarrito.delete('/:id/productos/:id_prod', (req, res) =>{
    res.json(personas);
});