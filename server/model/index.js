/* eslint-disable no-shadow */
/* eslint-disable radix */
const db = require('../db/');

module.exports = {
  getOne: (id, callback) => {
    const datas = [];
    db.query(`SELECT nearby.* FROM nearby WHERE nearby.location_id = ${parseInt(id)} ORDER BY id;`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        datas.push(data);
        db.query(`SELECT activity.* FROM activity WHERE activity.location_id = ${parseInt(id)} ORDER BY id;`, (err, data) => {
          datas.push(data);
          callback(null, datas);
        });
      }
    });
  },
};
