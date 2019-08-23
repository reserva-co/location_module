var faker = require('faker');

var createActivity = (knex, id, location_id, rate) => {
  return knex('activity').insert({
		id,
		image: faker.image.imageUrl(),
		activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		price: faker.commerce.price(),
		rate,
		location_id, 
    created_at: new Date(),
    updated_at: new Date()
  })
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(() => {
      // Inserts seed entries
      var datas = [];

      for(var i = 0; i < 20; i++){
        for(var j = 1; j < 101; j++){
          datas.push(createActivity(knex, i, j, Math.floor(Math.random()*1000)))
        }
      }
      return Promise.all(datas);
    });
};
