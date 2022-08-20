import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
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
const IPRResources = db.collection("IPRResources");
const FAQ = db.collection("FAQ");


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


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

app.get('/getFaqs', async (req, res) => {
    const faqs = await FAQ.find({}, {
        projection: {
            _id: 0
        },
        sort: {
            no: 1,
        }
    }).toArray();
    res.send(faqs);
})

app.post("/login", async (req, res) => {
    const { loginId, password } = req.body;

    if (typeof (loginId) !== 'string' || typeof (password) !== 'string' || !loginId || !password) {
        return res.send({
            status: 400,
            message: "Invalid Data"
        })
    }

    // find() - May return you multiple objects, Returns empty array if nothing matches, returns an array of objects 
    // findOne() - One object, Returns null if nothing matches, returns an object 
    let userDb;
    try {
        if (validator.isEmail(loginId)) {
            userDb = await UserSchema.findOne({ email: loginId });
        }
        else {
            userDb = await UserSchema.findOne({ username: loginId });
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

    console.log(userDb);

    if (!userDb) {
        return res.send({
            status: 400,
            message: "User not found",
            data: req.body
        });
    }

    // Comparing the password
    const isMatch = await bcrypt.compare(password, userDb.password);

    if (!isMatch) {
        return res.send({
            status: 400,
            message: "Invalid Password",
            data: req.body
        });
    }

    req.session.isAuth = true;
    req.session.user = { username: userDb.username, email: userDb.email, userId: userDb._id };

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
        userExists = await UserSchema.findOne({ username });
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

    if(password !== confirmPassword)
        return res.send({
            status: 400,
            message: "Passwords do not match"
        })

    // Hash the password Plain text -> hash 
    const hashedPassword = await bcrypt.hash(password, 13); // md5

    let user = new UserSchema({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
    })

    try {
        const userDb = await user.save(); // Create Operation
        return res.send({
            status: 200,
            message: "Registration Successful",
            data: {
                _id: userDb._id,
                username: userDb.username,
                email: userDb.email
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