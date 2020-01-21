const router = require('express').Router()
//Import model from db load
const {cao_usuario_model, permissao_sistema_model} = require(__dirname + '/../config/db')
//Associate tables by FK
permissao_sistema_model.hasOne(cao_usuario_model, {foreignKey: 'co_usuario'})
cao_usuario_model.belongsTo(permissao_sistema_model, {foreignKey: 'co_usuario'})
//Use model to select * and send as json
router.route('/').get((req,res)=>{
    permissao_sistema_model.findAll({
        where: {
            co_sistema: 1,
            in_ativo: 'S',
            co_tipo_usuario: [0,1,2]
        },
        include: [{
            model: cao_usuario_model
        }]
    })
        .then(usuarios=>res.json(usuarios))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router