const { readJSON, writeUsersJson} = require("../data");

const productos = readJSON("productsDataBase.json");

module.exports = {
    index: (req, res) => {
        res.render('index', {productos});
    },
    create: (req, res) => {
        res.render('product-create-form', {productos});
    },
}