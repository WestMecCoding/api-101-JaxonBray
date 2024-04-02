const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('hello world')
});

app.get('/3pm', (req, res) => {
    res.send('hellooooo');
})

app.listen(port, () => {
    console.log(`server is listening on port${port}`)
});