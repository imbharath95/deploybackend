require('dotenv').config();
const express = require('express');

const app = express();

const port = 3000;
app.get('/', (req, res) => {
    res.send("Hello World !!!");
});

app.get('/instagram', (req, res) => {
    res.send("<h3>imbharath04</h3>");
})

app.listen(process.env.PORT, () => {
    console.log(`Express server running at port ${port}`);
});