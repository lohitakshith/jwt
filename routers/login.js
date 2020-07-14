const express = require('express')
const JWT = require("jsonwebtoken")
const router = express.Router()

router.post("/login", (req, res, next) => {
    JWT.sign({
        email: req.body.email
    }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: 30
    }, (err, encoded) => {
        if (!err) {
            res.json({
                token: encoded
            })
        } else {
            res.json({
                message: err.message
            })
        }
    })

})
module.exports = router