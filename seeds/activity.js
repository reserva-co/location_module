const faker = require('faker');
const { LoremIpsum } = require('lorem-ipsum');


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});


const createActivity = (knex, id, locationId, num) => knex('activity').insert({
  id,
  image: `https://feclocation.s3-us-west-1.amazonaws.com/activity/${num}.jpg`,
  activity: lorem.generateSentences(1),
  price: faker.commerce.price(),
  rate: Math.floor(Math.random() * 1000),
  location_id: locationId,
  created_at: new Date(),
  updated_at: new Date(),
});


exports.seed = (knex) => knex('activity').del()
  .then(() => {
    // Inserts seed entries
    const datas = [];

    for (let i = 1; i < 101; i += 1) {
      for (let j = 0; j < 20; j += 1) {
        const num = Math.floor(Math.random() * 99 + 1);
        datas.push(createActivity(knex, j, i, num));
      }
    }
    return Promise.all(datas);
  });
