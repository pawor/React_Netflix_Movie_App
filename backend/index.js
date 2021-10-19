const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");

dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch(err => console.log(err));

app.use("/api/auth", authRoute);
app.listen(8080, () => {
    console.log("Backend server is running!");
});

