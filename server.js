const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(7890, () => {
    console.log('server started on http://localhost:7890');
})