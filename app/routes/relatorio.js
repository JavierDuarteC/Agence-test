const router = require('express').Router()
const async = require("async");
const { Op } = require("sequelize");
//Import model from db load
const {
    cao_os_model,
    cao_fatura_model,
} = require(__dirname + '/../config/db')
//Associate tables by FK

cao_os_model.hasMany(cao_fatura_model, { foreignKey: 'co_os' })
cao_fatura_model.belongsTo(cao_os_model, { foreignKey: 'co_os' })

var usernames = ['anapaula.chiodaro', 'renato.pereira']
var dates = ['2007-01', '2010-02']
var data = {}
//Transform dates
var startDate = dates[0].split('-');
//set start date first day
startDate = new Date(startDate[0], startDate[1], 1);
var endDate = dates[1].split('-');
//set end date last day
endDate = new Date(endDate[0], endDate[1], 0);

//Use model to select faturas for each username and send as json
router.route('/').get((req, res) => {
    async.each(usernames, function (user, done) {
        cao_fatura_model.findAll({
            //get faturas just between start-end date
            where: {
                [Op.or]: [{
                    data_emissao: {
                        [Op.gte]: startDate
                    },
                    data_emissao: {
                        [Op.lte]: endDate
                    }
                }]
            },
            //order by date asc
            order: [['data_emissao', 'ASC']],
            include: [{
                model: cao_os_model,
                required: true,
                where: {
                    co_usuario: user
                }
            }]
        })
            .then(faturas => {
                //Faturas ordered by owner
                data[user] = {};
                faturas.forEach(item => {
                    var emissaoDate = item.data_emissao.split('-');
                    var stringDate = emissaoDate[0]+'-'+emissaoDate[1];
                    data[user][stringDate]= data[user][stringDate] || {
                        receita_liquida: 0,
                        custo_fixo: 0,
                        comissao: 0,
                        lucro: 0
                    };
                    data[user][stringDate].receita_liquida += item.valor
                    data[user][stringDate].custo_fixo += item.valor
                    data[user][stringDate].comissao += item.valor
                    data[user][stringDate].lucro += item.valor
                });
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