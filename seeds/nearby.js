var faker = require('faker');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const photoAPI = require('../lib/photo_API.js');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

var createNearby = (knex, id, location_id) => {
  return knex('nearby').insert({
    id,
		image: faker.image.imageUrl(),
		house_type: 'ENTIRE HOUSE',
		location: faker.address.city(),
		title: lorem.generateSentences(1),
		price: faker.commerce.price(),
		rate: Math.floor(Math.random()*1000),
		location_id, 
    created_at: new Date(),
    updated_at: new Date()
  })
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('nearby').del()
    .then(() => {
      // Inserts seed entries
      var datas = [];

      for(var i = 1; i < 101; i++){
      for(var j = 0; j < 12; j++){
        datas.push(createNearby(knex, j, i))
        }
      }
  
      return Promise.all(datas);
    });
};
