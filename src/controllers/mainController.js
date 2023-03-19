const { readJSON, writeUsersJson} = require("../data");

const productos = readJSON("productsDataBase.json");
const animal = readJSON("animal.json");

module.exports = {
    index: (req, res) => {
        res.render('index', {productos});
    },
    create: (req, res) => {
        res.render('product-create-form', {productos});
    },
    ventas: (req, res) => {
        res.render('venta', {productos , animal});
    }   
}