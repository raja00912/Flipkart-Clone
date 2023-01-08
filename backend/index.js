const express = require('express')

const app = express();

app.use("/", (req, res) => {
    res.json({ message: "Hello" });
})

const port = 27027;

app.listen(27027, () => {
    console.log(`starting server on port ${port}`)
})