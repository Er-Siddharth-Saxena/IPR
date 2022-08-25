import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import validator from 'validator'
import bcrypt from 'bcryptjs'
import { v1 as uuidv1 } from 'uuid'
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
        console.log("Error connecting database: ", err.stack);
    }
}
run().catch(console.dir);

const db = client.db("BooleanSquad");
const userDb = db.collection("UserDB");
const locationDb = db.collection("LocationDB");
locationDb.createIndex({ location: "2dsphere" });

// const model = await tf.node.loadSavedModel(path, [tag], signatureKey);
// const output = model.predict(input);

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const hashIt = async (password) => {
    const salt = await bcrypt.genSalt(13);
    const hashed = await bcrypt.hash(password, salt);
    return { hashed, salt };
}



const cleanUpAndValidate = ({ firstName, lastName, username, email, password, confirmPassword }) => {
    return new Promise((resolve, reject) => {

        if (typeof (email) !== 'string')
            reject('Invalid Email');
        if (typeof (username) !== 'string')
            reject('Invalid Username');
        if (typeof (firstName) !== 'string')
            reject('Invalid name');
        if (typeof (lastName) !== 'string')
            reject('Invalid name');
        if (typeof (password) !== 'string')
            reject('Invalid Password');
        if (typeof (confirmPassword) !== 'string')
            reject('Invalid Password');

        // Empty strings evaluate to false
        if (!username || !password || !firstName || !email || !lastName || !confirmPassword)
            reject('Invalid Data');

        if (username.length < 3 || username.length > 100)
            reject('Username should be 3 to 100 charcters in length');

        if (password.length < 5 || password > 300)
            reject('Password should be 5 to 300 charcters in length');

        if (!validator.isEmail(email))
            reject('Invalid Email');

        resolve();
    })
}

app.post("/iprAppliation", async (req, res) => {
    let { title,
        inventors,
        description,
        noveFeatures,
        relationWithProcessOrProduct,
        advantages,
        data,
        possibleUses,
        possibleEndUsers,
        potentialMarketibility,
        reportedAnywhere,
        disclosedToAnybody,
        commercialInterestShown,
        commercialInterest,
        depolyementStage,
        declarationAccepted} = req.body;
    const applicationdata = new applicationSchema({
        title,
        inventors,
        description,
        noveFeatures,
        relationWithProcessOrProduct,
        advantages,
        data,
        possibleUses,
        possibleEndUsers,
        potentialMarketibility,
        reportedAnywhere,
        disclosedToAnybody,
        commercialInterestShown,
        commercialInterest,
        depolyementStage,
        declarationAccepted,
        applicationid: uuidv1(),
        status: "under review"
    });

    await applicationdata.save();
    res.send("Application successfully done");
    console.log(applicationdata);
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (typeof (email) !== 'string' || typeof (password) !== 'string' || !email || !password) {
        return res.send({
            status: 400,
            message: "Invalid Data"
        })
    }

    // find() - May return you multiple objects, Returns empty array if nothing matches, returns an array of objects 
    // findOne() - One object, Returns null if nothing matches, returns an object 
    let user;
    try {
        if (validator.isEmail(email)) {
            user = await userDb.findOne({ email: email });
        }
        else {
            user = await userDb.findOne({ username: email });
        }
    }
    catch (err) {
        console.log(err);
        return res.send({
            status: 400,
            message: "Internal server error. Please try again",
            error: err
        })
    }

    console.log(res);

    if (!user) {
        return res.send({
            status: 400,
            message: "User not found",
            data: req.body
        });
    }

    // Comparing the password
    const hashed = await bcrypt.hash(password, user.salt);
    const isMatch = hashed === user.password;

    if (!isMatch) {
        return res.send({
            status: 400,
            message: "Invalid Password",
            data: {
                hashed,
                isMatch
            }
        });
    }

    // req.session.isAuth = true;
    // req.session.user = { username: user.username, email: user.email, userId: user._id };

    res.send({
        status: 200,
        message: "Logged in successfully"
    });
})

app.post("/register", async (req, res) => {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;

    // Validation of Data
    try {
        await cleanUpAndValidate({ firstName, lastName, username, email, password, confirmPassword });
    }
    catch (err) {
        return res.send({
            status: 400,
            message: err
        })
    }

    let userExists;
    // Check if user already exists
    try {
        userExists = await userDb.findOne({ email });
    }
    catch (err) {
        return res.send({
            status: 400,
            message: "Internal Server Error. Please try again.",
            error: err
        })
    }

    if (userExists)
        return res.send({
            status: 400,
            message: "User with email already exists"
        })

    try {
        userExists = await userDb.findOne({ username });
    }
    catch (err) {
        return res.send({
            status: 400,
            message: "Internal Server Error. Please try again.",
            error: err
        })
    }

    if (userExists)
        return res.send({
            status: 400,
            message: "Username already taken"
        })

    if (password !== confirmPassword)
        return res.send({
            status: 400,
            message: "Passwords do not match"
        })

    // Hash the password Plain text -> hash 
    const { hashed, salt } = await hashIt(password); // md5

    try {
        const user = await userDb.insertOne({
            firstName,
            lastName,
            username,
            email,
            password: hashed,
            salt
        });
        return res.send({
            status: 200,
            message: "Registration Successful",
            data: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch (err) {
        return res.send({
            status: 400,
            message: "Internal Server Error. Please try again.",
            error: err
        })
    }
})



app.post('/positions', async (req, res) => {
    try {
        let { latitude, longitude, pin, place } = req.body;

        await locationDb.insertOne({
            pin: pin,
            place: place,
            location: {
                type: "Point",
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
            }
        })
        res.send("Position successfully added");
    }
    catch (err) {
        res.status(400).send("There was an error adding the position");
    }
})




app.post('/nearest', async (req, res) => {

    try {
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const loc = locationDb.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
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

        res.send({ pos });

    } catch (err) {

        res.send({ "error": err });
    }

})



const port = process.env.PORT || 5000

app.listen(port, (err) => {
    if (err) console.log(err.message)
    else console.log("Listening on port: ", port)
}
)
await client.close();