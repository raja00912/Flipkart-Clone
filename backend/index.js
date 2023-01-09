const express = require('express')
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require('./db/connect');
const ProductModel = require('./db/product.model');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static("build"));

app.get("/a", (req, res) => {
    res.send({ message: "Hello" });
})

app.get("/products", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(201).send(products);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

connect().then(() => {
    console.log("connected to db")
    app.listen(5000, () => {
        console.log("listening in 5000");
    })
}).catch((err) => { console.log("error : ", err) })

