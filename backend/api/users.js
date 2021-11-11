const express = require('express');
const router = express.Router()

const Dogs = require('../models/dogs.js');

router.get('/', (req, res) => {

    console.log("YOUR IN THE HOME BULLDOG ROUTE")
    Dogs.create({name:"skadi", age:4})
    //Dogs.find({})
    .then(data=>{
        console.log("++++++")
        console.log(data)
        console.log("++++++")
    })

    Dogs.find({})
    .then(data=>{
        res.send(data)
    })
   
})

// router.post('/', (req, res) => {
//     const { name, email } = req.body;
//     const newUser = new User({
//         name: name, email: email
//     })
//     newUser.save()
//         .then(() => res.json({
//             message: "Created account successfully"
//         }))
//         .catch(err => res.status(400).json({
//             "error": err,
//             "message": "Error creating account"
//         }))
// })
module.exports = router