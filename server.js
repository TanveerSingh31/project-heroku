const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

const port = process.env.port || 7890;

app.listen(port, () => {
    console.log('server started on http://localhost:' + port);
})