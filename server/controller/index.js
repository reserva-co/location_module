const model = require('../model/');

module.exports = {
    get: (req, res) => {
        model.get((err, data) => {
            if(err){
                console.log(err)
            }else{
                res.json(data);
            }
        })
    }
}