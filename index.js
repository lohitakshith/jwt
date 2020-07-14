require('dotenv').config()
const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const login = require('./routers/login');
const users = require("./routers/users")
app.use('/api', login)
app.use("/api", users)
const PORT = process.env.PORT || 4848
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})