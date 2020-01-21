const router = require('express').Router()
const {cliente} = require(__dirname + '/../config/db')

router.route('/').get((req,res)=>{
    cliente.find()
        .then(clientes=>res.json(clientes.map(cliente=>cliente.username)))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router