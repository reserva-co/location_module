const PHOTO_API_KEY = require('../config/photo.js');
const axios = require('axios');

const photoAPI = (callback) => {
    axios.get('https://api.unsplash.com/search/photos', {
        params: {
            client_id: PHOTO_API_KEY,
            query: 'house'
        }
    })
    .then((data)=>{
        callback(data.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = photoAPI;
