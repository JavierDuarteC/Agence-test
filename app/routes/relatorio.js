const router = require('express').Router()
const async = require("async");
//Import model from db load
const {
    cao_os_model,
    cao_fatura_model,
    cao_fatura_pag_model
} = require(__dirname + '/../config/db')
//Associate tables by FK

cao_os_model.hasMany(cao_fatura_model, { foreignKey: 'co_os' })
cao_fatura_model.belongsTo(cao_os_model, { foreignKey: 'co_os' })

cao_fatura_model.hasMany(cao_fatura_pag_model, { foreignKey: 'co_fatura' })
cao_fatura_pag_model.belongsTo(cao_fatura_model, { foreignKey: 'co_fatura' })

var usernames = ['carlos.arruda','carlos.carvalho', 'bruno.freitas']
var data = {}

//Use model to select faturas for each username and send as json
router.route('/').get((req, res) => {
    async.each(usernames, function (user, done) {
        cao_fatura_pag_model.findAll({
            include: [{
                model: cao_fatura_model,
                required: true,
                include: [{
                    model: cao_os_model,
                    required: true,
                    where: {
                        co_usuario: user
                    }
                }]
            }]
        })
            .then(faturas => {
                //Faturas ordered by owner
                data[user] = [];
                data[user] = faturas
                done()
            })
            .catch(err => res.status(400).json('Error: ' + err))

    }, function (er) {
        console.log("everything `enter code here`has completed")
        res.json(data)
        console.log("Err: ", er)
    })
})

module.exports = router