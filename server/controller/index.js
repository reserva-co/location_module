const model = require('../model/');

module.exports = {
    get: (req, res) => {
        model.getOne(req.params.id, (err, data) => {
            if(err){
                console.log(err)
            }else{
                res.json(data);
            }
        })
    }
}