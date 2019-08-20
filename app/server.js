var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
//app.use(bodyParser.text({type: "text/html"}));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

