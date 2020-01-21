const router = require('express').Router()
const {cao_usuario_model} = require(__dirname + '/../config/db')

router.route('/').get((req,res)=>{
    console.log(cao_usuario_model);
    cao_usuario_model.findAll()
        .then(usuarios=>res.json(usuarios))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router