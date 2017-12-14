var app = require("express")();
var bodyParser = require("body-parser");
var morgan       = require('morgan');
var mongoose = require("mongoose");

var dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;

//Mongoose model config
var dataSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: {type: Date, default: Date.now}
});

var Data = mongoose.model("Data", dataSchema);

//App configuration
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));


app.get("/", function(req, res){
    res.send("server is up");
});

app.post("/data", function(req, res){
    //PROCESS INCOMING AJAX STRINGIFIED OBJ
    var bodyStr = JSON.stringify(req.body);
    var bodyObj = JSON.parse(bodyStr);
    Data.create(bodyObj, function(err, newReceipt){
        if (err) {
            console.log(err);
            res.json({"error": "Error while saving your data, please try again"});
        } else {
            console.log(newReceipt);
            res.json({"message": "Data saved correctly"});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});