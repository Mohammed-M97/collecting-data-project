const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const methodOverride = require('method-override')
const routes = require('./routes/allRoutes')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// Auto refresh
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

mongoose.connect('mongodb+srv://Mohammed-div:Mknmkn97@cluster0.ivqpiii.mongodb.net/all-data?retryWrites=true&w=majority').then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log(err);
});

app.use(routes)