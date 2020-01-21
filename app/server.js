const express = require('express')
const cors = require('cors')
const sequelize = require('sequelize')

const app = express()
const port = process.env.WEB_PORT || 7001

app.use(cors())
app.use(express.json())

//Add routers and use them
const clientesRouter = require('./routes/clientes')
app.use('/clientes', clientesRouter)

const usuariosRouter = require('./routes/usuarios')
app.use('/usuarios', usuariosRouter)

//Start listening
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})