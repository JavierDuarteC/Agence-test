const express = require('express')
const cors = require('cors')
const sequelize = require('sequelize')

const app = express()
const port = process.env.WEB_PORT || 7001

app.use(cors())
app.use(express.json())

//Add routers and use them
const logsRouter = require('./routes/logs')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
app.use('/logs',logsRouter)
app.use('/users', usersRouter)
app.use('/account', authRouter)

//Start listening
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})