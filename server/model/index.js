/* eslint-disable no-shadow */
/* eslint-disable radix */
const db = require('../db/');

module.exports = {
  getOne: (id, callback) => {
    const datas = [];
    db.query(`SELECT nearby.* FROM nearby JOIN location ON location.reserva_id = nearby.location_id WHERE location.reserva_id = ${parseInt(id)};`, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        datas.push(data);
        db.query(`SELECT activity.* FROM activity JOIN location ON location.reserva_id = activity.location_id WHERE location.reserva_id = ${parseInt(id)};`, (err, data) => {
          datas.push(data);
          callback(null, datas);
        });
      }
    });
  },
};
