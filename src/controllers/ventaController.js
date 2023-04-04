const { readJSON, writeUsersJson} = require("../data");

const productos = readJSON("productsDataBase.json");

module.exports = {
    ventas: (req, res) => {
        res.render('venta');
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
        return res.json(producto);
    }
}