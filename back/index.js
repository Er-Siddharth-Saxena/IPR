import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// import Register from "./models/login/register.js"

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("BooleanSquad").command({ ping: 1 });
    console.log("Connected successfully to the database");
  } 
  catch (err) {
    console.log("Error connecting database: ",err.stack);
  }
}
run().catch(console.dir);

const db = client.db("BooleanSquad");
const userDb = db.collection("UserDB");
const locationDb = db.collection("LocationDB");
locationDb.createIndex({location:"2dsphere"});
const IPRResources = db.collection("IPRResources");


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post("/login", async (req, res) => {
  try {
      const email = req.body.email;
      const password = req.body.password;
      const useremail = await userDb.findOne({ email: email })
      
      if (useremail == null) {
          res.status(400).send("Email not found")
      } else {

          if (password === useremail.password) {
              res.status(200).send("Login Successful")
          }
          else {
              res.status(403).send("Password is incorrect")
          }
      }
  } catch (error) {
      res.status(400).send("Invalid Email or password" + error)
  }
})

app.post("/register", async (req, res) => {
  try {
      const password = req.body.password;
      const cpassword = req.body.confirmpassword;
      
      if (password === cpassword) {
            await userDb.insertOne({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username : req.body.username,
                email : req.body.email,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })
          res.status(201).send("User added successfully");
      }
      else {
          res.send("Password does not match")
          }
  }
  catch (err) {
     res.status(400).send("Invalid Email or password")
  }
})



app.post('/positions', async (req,res) => {
    try{
        let {latitude,longitude,pin,place} = req.body;

        await locationDb.insertOne({
            pin:pin,
            place:place,
            location: {
                type: "Point",
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
            }
        })
        res.send("Position successfully added");
    }
    catch(err){
        res.status(400).send("There was an error adding the position");
    }
})
 
 
 
 
app.post('/nearest', async (req,res) => {
 
    try{
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const loc = locationDb.aggregate([
            {
                $geoNear: {
                    near: {type:"Point", coordinates:[parseFloat(longitude), parseFloat(latitude)]},
                    key: "location",
                    // maxDistance: parseFloat(1000)*1609,
                    distanceField: "dist.calculated",
                    spherical: true
                }
            }
        ]);

        let pos = [];

        await loc.forEach(ele => {
            pos.push(ele);
        })

        res.send({pos});
 
    }catch(err){
 
        res.send({"error" : err});
    }
 
})



const port = process.env.PORT || 5000

app.listen(port, (err) => {
  if (err) console.log(err.message)
  else console.log("Listening on port: ", port)
}
)
await client.close();