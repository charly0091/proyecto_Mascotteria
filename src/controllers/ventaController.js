const { readJSON, writeJSON} = require("../data");

const productos = readJSON("productsDataBase.json");
let comprados= [];
let ventas = readJSON("ventasDataBase.json");
let totalCompra = 0;

module.exports = {
    ventas: (req, res) => {
        comprados = [];
        totalCompra = 0;
        res.render('venta',{comprados,totalCompra});
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
            total: total,
            metodoPago: req.body.metodo
        }
        totalCompra = 0;
        comprados.push(comprado);
        comprados.forEach(comprado => {
            totalCompra += +comprado.precio;
        })
        res.render('venta',{comprados, totalCompra});
    },
    comprar: (req, res) => {
        comprados.forEach(comprado => {
            let venta = {
                id: comprado.id,
                producto: comprado.producto,
                marca: comprado.marca,
                cantidad: comprado.cantidad,
                precio: comprado.precio,
                tipo: comprado.tipo,
                total: comprado.total,
                fecha: new Date(),
                metodoPago: comprado.metodoPago
            }
            ventas.push(venta);
        })
        writeJSON("ventasDataBase.json", ventas);
        comprados.forEach(comprado => {
            let producto = productos.find(producto => producto.id == comprado.id);
            let index = productos.indexOf(producto);
            if (comprado.tipo == "bolsa") {
                producto.stockBolsa -= comprado.cantidad;
            } else if(comprado.tipo == "suelto") {
                producto.stockSuelto -= comprado.cantidad;
            }
            if(producto.stockSuelto < 0) {
                producto.stockSuelto += producto.pesoBolsa;
                producto.stockBolsa -= 1;
            }
            productos.splice(index, 1, producto);
        })
        writeJSON("productsDataBase.json", productos);
        comprados = []
        totalCompra = 0;
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
    delete: (req, res) => {
        let id = req.params.id;
        let producto = comprados.find(producto => producto.id == id);
        let index = comprados.indexOf(producto);
        comprados.splice(index, 1);
        totalCompra = 0;
        comprados.forEach(comprado => {
            totalCompra += +comprado.precio;
        })
        res.render('venta',{comprados, totalCompra});
    }
}