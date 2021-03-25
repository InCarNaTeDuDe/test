const express = require('express'),
    app = express(),
       fs = require("fs"),
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
});

app.get("/send",(req,res)=>{
   fs.appendFile("helloworld.txt", "Thankyou!\n", function (err) {
        if (err) return console.log(err);
      });
      res.write("<script>alert('Thank you')</script>"); //write a response
      res.end();
});

app.get("/helloworld",(req,res)=>{
     var filePath = path.join(__dirname, "helloworld.txt");
      var stat = fs.statSync(filePath);

      res.writeHead(200, {
        "Content-Type": "plain/txt",
        "Content-Length": stat.size,
      });

      var readStream = fs.createReadStream(filePath);
      // We replaced all the event handlers with a simple call to readStream.pipe()
      readStream.pipe(res);
})


app.get('/get', (req, res) => { res.send("Hello") });


app.listen(process.env.PORT || 5000, () => console.log(`Server is listening on port ${process.env.PORT}`))
