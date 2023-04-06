const { readJSON, writeUsersJson} = require("../data");



module.exports = {
    index: (req, res) => {
        res.render('productCreate');
    },
    create: (req, res) => {
        let {name, price, weight} = req.body;
        let id = 0;
        let products = readJSON();
        products.forEach(product => {
            if (product.id > id) {
                id = product.id;
            }
        });
        id++;
        let newProduct = {
            id,
            name,
            price,
            weight
        }
        products.push(newProduct);
        writeUsersJson(products);
        res.redirect('/');
    },
    edit: (req, res) => {
        let id = req.params.id;
        let products = readJSON();
        let product = products.find(product => product.id == id);
        res.render('productEdit', {product});
    },
    update: (req, res) => {
        let id = req.params.id;
        let {name, price, weight} = req.body;
        let products = readJSON();
        let product = products.find(product => product.id == id);
        let index = products.indexOf(product);
        let newProduct = {
            id,
            name,
            price,
            weight
        }
        products.splice(index, 1, newProduct);
        writeUsersJson(products);
        res.redirect('/');
    }
}
