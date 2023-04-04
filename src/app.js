const express = require('express');
const app = express();
const port= process.env.PORT || 3000; 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Template engine config */
app.set('view engine', 'ejs');
app.set('views', "./src/views");



/* Routers */
const mainRouter = require('./routes/main');
const ventaRouter = require('./routes/venta.js');

/* Routers Middlewares */
app.use('/', mainRouter);
app.use('/venta', ventaRouter);

app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);

