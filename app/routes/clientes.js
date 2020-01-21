const router = require('express').Router()
const {cao_cliente_model} = require(__dirname + '/../config/db')

router.route('/').get((req,res)=>{
    cao_cliente_model.findAll()
        .then(clientes=>res.json(clientes))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router