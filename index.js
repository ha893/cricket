var express = require('express');
var app = express();
var firstRoutes = require('./routes/firstteamroute');
var secondRoutes = require('./routes/secondteamroute');
var compareRoutes = require('./routes/compareroute')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



mongoose.connect("mongodb://localhost/cricket",{ useNewUrlParser: true , useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',firstRoutes);
app.use('/second',secondRoutes);
app.use('/compare',compareRoutes);



app.listen(8080,()=> {
    console.log("backend running on port 8080");
}); 