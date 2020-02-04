const express = require('express'),
    app = express(),
    path = require('path');

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


app.get('/get', (req, res) => { res.send("Hello") });


app.listen(process.env.PORT || 5000, () => console.log(`Server is listening on port ${process.env.PORT}`))