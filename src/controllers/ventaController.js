const { readJSON, writeUsersJson} = require("../data");

const productos = readJSON("productsDataBase.json");
let comprados= [];

module.exports = {
    ventas: (req, res) => {
        comprados = [];
        res.render('venta',{comprados});
    },
    carrito: (req, res) => {
        let id = req.body.producto;
        let producto = productos.find(producto => producto.id == id);
        let cantidad = req.body.cantidad;
        let precio = req.body.precio;
        let tipo = req.body.tipo;
        let total = precio * cantidad;
        let comprado = {
            id: id,
            producto: producto.producto,
            marca: producto.marca,
            cantidad: cantidad,
            precio: precio,
            tipo: tipo,
            total: total
        }
        comprados.push(comprado);
        res.render('venta',{comprados});
    },
    comprar: (req, res) => {
        comprados = []
        res.redirect('/venta');
    },
    marcas: (req, res) => {
        let animal = req.params.animal;
        let marcas = productos.filter(marca => marca.animal == animal);
        let marcasFiltradas = marcas.filter((marca, index, self) => index === self.findIndex((t) => (t.marca === marca.marca)));
        return res.json(marcasFiltradas);
    },
    productos: (req, res) => {
        let animal = req.params.animal;
        let marca = req.params.marca;
        let productosFiltrados = productos.filter(producto => producto.animal == animal && producto.marca == marca);
        return res.json(productosFiltrados);
    },
    producto: (req, res) => {
        let id = req.params.id;
        let producto = productos.find(producto => producto.id == id);
        producto.precioBolsa = producto.precio * 1.3.toFixed(2);
        producto.precioKg = (producto.precio / producto.pesoBolsa * 1.4).toFixed(2);
        producto.precioBolsa = Math.floor(producto.precioBolsa/10)*10;
        producto.precioKg = Math.floor(producto.precioKg/10)*10;
        return res.json(producto);
    },
}