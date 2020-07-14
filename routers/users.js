const express = require('express')
const JWT = require("jsonwebtoken")
const router = express.Router()
const users = [{
        email: "venkat.varra@gmail.com",
        name: "Venkat"
    },
    {
        email: "lohitakshith@gmail.com",
        name: "Lohith"
    },
    {
        email: "havighna@gmail.com",
        name: "Havighna"
    },
    {
        email: "priyankavenkat.48@gmail.com",
        name: "Priyanka"
    }
]
router.get("/users", authentication, (req, res, next) => {
    console.log(req.user.email)
    res.status(200).json(users.filter(user => user.email === req.user.email))
})

function authentication(req, res, next) {
    const token = req.headers["authorization"].split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({
            message: "Token is required"
        })
    }

    JWT.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
        if (!err)
            req.user = user
        else return res.status(403).json({
            message: err.message
        })
    })
    next()
}

module.exports = router