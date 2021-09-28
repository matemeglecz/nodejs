   
const express = require('express');
const app = express();
//app.use("/", function(req,res){res.send("Mate")})
app.use(express.static('static'));
app.listen(3000, function () {
    console.log('Hello :3000');
});