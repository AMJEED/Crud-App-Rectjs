
const express = require("express");
const bodyParser=require("body-parser")

const mysql = require("mysql");
const app = express()
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())



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




app.post("/api/create",(req, res) => {

        
  const num = req.body.h_num;
  const city = req.body.h_city;
  const street = req.body.h_street;
  const area = req.body.h_area;
  const kitchens = req.body.h_kitchens;
  const rooms = req.body.h_rooms;
  const status = req.body.h_status;
  const price = req.body.h_price;
  console.log(num+city)
        db.query(
          "INSERT INTO house (id, city, street, area, rooms,kitchens,status,price) VALUES (?,?,?,?,?,?,?,?)",
          [num, city, street, area, kitchens,rooms,status,price],
          (err, result) => {
            if (err) {
              console.log("This is error"+err);
            } else {
              res.send("Values Inserted");
            }
          }
        );
      });

// to show all records
app.get("/api/view", (req, res) => {
  db.query("SELECT * FROM house", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM house WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen('3002', () => {
  console.log("Yey, your server is running on port 3002");
});

