const cfg = require('./../config/')

module.exports = {
    info: (req, res) => {
        res.status(200).send({
            status: {
                code: 200,
                info: 'success'
            },
            message: null,
            data: {
                'online': 1,
                'build': '001111a',
                'lastUpdate': new Date().toDateString()
            }
        });
    }
}