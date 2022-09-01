const express = require('express');
const { Router } = express;

export const routerProductos = new Router();
export const routerCarrito = new Router();

routerProductos.use(express.json());
routerCarrito.use(express.json());

//PRODUCTOS
const personas = [];

routerProductos.get('/:id', (req, res) =>{
    res.json(personas);
});
routerPersonas.post('/', (req, res) => {
    personas.push(req.body)
    res.json(req.body)
});
routerProductos.put('/:id', (req, res) =>{
    res.json(personas);
});
routerProductos.delete('/:id', (req, res) =>{
    res.json(personas);
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