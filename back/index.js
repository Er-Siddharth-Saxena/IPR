// import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import express from 'express';

dotenv.config();

// const app = express()
// app.use(express.json())



const uri  = process.env.ATLAS_URI;

// const Conn = mongoose.createConnection();
// await Conn.openUri(uri);


// // const arr = [[`https://youtu.be/0fbt9Q0vba4`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/0fbt9Q0vba4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]]


// // arr.forEach(ele => {
// //     const myobj = {};

// //     myobj.resource = {
// //         "ytlink" : ele[0],
// //         ytembed : ele[1],
// //     }

// //     db.collection("TestForIPRResources").insertOne(myobj, function (err, res) {
// //         if (err) throw err;
// //         console.log("success");
        
// //     })
// // })

// app.get('/boolean', async (req,res)=>{
//     const query = {};
//     const options = {
//       projection: { _id: 0 },
//     };


//     const result = await Conn.collection('TestForIPRResources').findOne(query, options)

//     console.log(result)
//     res.send(result)
// })




// const port = process.env.PORT || 5000

// app.listen(port,(err) =>{
//     if (err) console.log(err.message)
//     else console.log("Listening on port: ",port) }
//     )

// Conn.close();



import { MongoClient } from "mongodb";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("BooleanSquad").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
