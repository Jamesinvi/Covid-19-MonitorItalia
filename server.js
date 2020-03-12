const express = require("express");
const app = express();
const csv = require("csvtojson");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port '+ port));
app.use(express.static("public"));

let jsonData;

// Convert a csv file with csvtojson
csv()
  .fromFile("\data.csv")
  .then(function(data){ //when parse finished, result will be emitted here.
     jsonData=data;
     console.log(jsonData); 
   })

//post and get endpoints
app.get("/data", (request, response) => {
    console.log("got data request");
    response.json({
        data: jsonData
    });
})