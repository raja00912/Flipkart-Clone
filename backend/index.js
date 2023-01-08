const express = require('express')
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static("build"));

app.get("/", (req, res) => {
    res.send({ message: "Hello" });
})


