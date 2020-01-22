const router = require('express').Router()
const async = require("async");
const { Op } = require("sequelize");
//Import model from db load
const {
    cao_os_model,
    cao_fatura_model,
    cao_salario_model
} = require(__dirname + '/../config/db')
//Associate tables by FK

cao_os_model.hasMany(cao_fatura_model, { foreignKey: 'co_os' })
cao_fatura_model.belongsTo(cao_os_model, { foreignKey: 'co_os' })

var usernames = ['anapaula.chiodaro', 'renato.pereira','carlos.carvalho']
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
                //If user has faturas
                if (faturas.length > 0) {
                    //Find salario from user
                    cao_salario_model.findOne({
                        where:{
                            co_usuario: user
                        }
                    }).then(salario => {
                        //Load data with Faturas info ordered by owner
                        data[user] = {};
                        faturas.forEach(item => {
                            var emissaoDate = item.data_emissao.split('-');
                            var stringDate = emissaoDate[0] + '-' + emissaoDate[1];
                            //group by date (year-month) create new propery if it doesnt exist and set custo_fixo with users salario
                            if (!data[user].hasOwnProperty(stringDate)) {
                                data[user][stringDate] = {
                                    receita_liquida: 0.0,
                                    custo_fixo: salario.brut_salario,
                                    comissao: 0.0,
                                    lucro: 0.0
                                };
                            }
                            //Add values to each property grouped by date, set temp vars
                            var rl = data[user][stringDate].receita_liquida += (item.valor - (item.total_imp_inc * item.valor / 100))
                            var cm = data[user][stringDate].comissao += data[user][stringDate].receita_liquida*item.comissao_cn/100
                            data[user][stringDate].lucro += rl-(data[user][stringDate].custo_fixo+cm)
                        });
                    })
                        .catch(err => res.status(400).json('Error: ' + err))
                }
                //End await foreach
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