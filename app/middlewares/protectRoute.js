const jwt = require('jsonwebtoken')
const cfg = require('../config');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, cfg.jwtsecret)

        if(data.id){
            next()
        }
        // knex.from('users').where({
        //     'id': data.id
        // }).first().then((user) => {
        //     if (!user) {
        //         throw new Error('Not authorized to access this resource')
        //     }
        //     req.user = user
        //     req.token = token
        // }).finally(()=>{
        //     next()
        // })

    } catch (err) {
        res.send({
            status: {
                code: 401,
                info: 'unauthorized'
            },
            message: err.message,
            data: null
        })
    }

}
module.exports = auth