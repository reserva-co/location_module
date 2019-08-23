const db = require('../db/');

module.exports = {
    getOne: (id, callback) => {
        db.query(`SELECT nearby.* FROM location JOIN nearby ON location.id = nearby.location_id JOIN activity ON location.id = activity.location_id;`,(err, data) => {
            if(err){
                callback(err, null)
            }else{
                callback(null, data)
            }
        })
    }
}