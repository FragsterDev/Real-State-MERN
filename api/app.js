import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongouri = process.env.MONGOOSE;

if(!mongouri){
    console.log('Mongo URI not found !');
    process.exit(1);
}

const db = mongoose.connect(mongouri)
.then(() => {
    console.log('DB connection successful');
})
.catch((err) => {
    console.log(err);
});

const port = 3000
const app = express();

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});

