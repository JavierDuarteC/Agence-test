const express = require('express')
const cors = require('cors')
const sequelize = require('sequelize')

const app = express()
const port = process.env.WEB_PORT || 7001

app.use(cors())
app.use(express.json())

////Add routers and use them

//List of users filtered by permissao where co_sistema=1,in_ativo=S,co_tipo_usuario=0,1,2
const usuariosRouter = require('./routes/consultores')
app.use('/consultores', usuariosRouter)
//List of faturas filtered by incoming list of users
const relatorioRouter = require('./routes/relatorio')
app.use('/relatorio', relatorioRouter)

////Start listening
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})