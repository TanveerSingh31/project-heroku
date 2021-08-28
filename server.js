const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})