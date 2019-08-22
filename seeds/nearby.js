var faker = require('faker');

var createNearby = (knex, id, location_id, rate) => {
  return knex('nearby').insert({
    id,
		image: faker.image.imageUrl(),
		house_type: 'ENTIRE HOUSE',
		location: faker.address.city(),
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		price: faker.commerce.price(),
		rate,
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

      for(var i = 0; i < 12; i++){
        for(var j = 1; j < 101; j++){
          datas.push(createNearby(knex, i, j, Math.floor(Math.random()*1000)))
        }
      }
      return Promise.all(datas);
    });
};
