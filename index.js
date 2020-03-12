const express = require('express'),
    app = express(),
    path = require('path');


app.use(express.static(path.join(__dirname, '/')));
// if (process.env.NODE_ENV === 'production') {
//     app.use((req, res, next) => {
//         if (req.header('x-forwarded-proto') !== 'https') {
//             res.redirect(`https://${req.header('host')}${req.url}`);
//         } else {
//             next();
//         }
//     })
// }
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/sw", (req, res) => {
    res.sendFile(path.join(__dirname, "/sw.js"));
})


app.get('/get', (req, res) => { res.send("Hello") });


app.listen(process.env.PORT || 5000, () => console.log(`Server is listening on port ${process.env.PORT}`))
