const { readJSON, writeUsersJson} = require("../data");

const productos = readJSON("productsDataBase.json");

module.exports = {
    index: (req, res) => {
        productos.forEach(producto => {
            producto.precioBolsa = producto.precio * 1.3.toFixed(2);
            producto.precioKg = (producto.precio / producto.pesoBolsa * 1.4).toFixed(2);
            producto.precioBolsa = Math.floor(producto.precioBolsa/10)*10;
            producto.precioKg = Math.floor(producto.precioKg/10)*10;
        })
        res.render('index', {productos});
    },
    create: (req, res) => {
        res.render('product-create-form', {productos});
    },
    
}