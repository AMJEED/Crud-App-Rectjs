
const express = require("express");

const mysql = require("mysql");
const app = express()





const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "house_schema",
});
db.connect((err)=>{

    if(err){
            throw err;

    }
  
    console.log("MySQL Connected")
    db.query("SELECT * FROM house",function(err,result,fields){
            if(err)throw err
            console.log(result)
    })

})




app.listen('3000', () => {
  console.log("Yey, your server is running on port 3001");
});
