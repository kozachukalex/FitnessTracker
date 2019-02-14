const express = require("express");
// const mongoose = require("mongoose");
const app = express();


const legend = require('./routes/legend.route');

app.use('/legends', legend);


// app.get('/', (req, res) => {
//     res.send("Hello World");
//   });

let PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log("server is running at " + PORT));