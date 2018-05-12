var express = require('express'),
    app = express();

app.listen(8443);


app.get("/", function (req, res) {
    res.send("welcome to docker api");
})