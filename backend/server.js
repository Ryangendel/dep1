const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()

console.log("PROCESSENV")
console.log(process.env.MONGODATABASE)
console.log("PROCESSENV")
// require('./database');

//IN ITS OWN FILE
// const mongoose = require('mongoose');
// const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogs", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(cors());

// API
const users = require('./api/users');
app.use("/bulldog",users);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});