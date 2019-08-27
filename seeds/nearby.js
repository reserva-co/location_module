import { address, commerce } from 'faker';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 8,
    min: 3,
  },
});


const createNearby = (knex, id, locationId, num) => knex('nearby').insert({
  id,
  image: `https://feclocation.s3-us-west-1.amazonaws.com/nearby/${num}.jpg`,
  house_type: 'ENTIRE HOUSE',
  location: address.city(),
  title: lorem.generateSentences(1),
  price: commerce.price(),
  rate: Math.floor(Math.random() * 1000),
  location_id: locationId,
  created_at: new Date(),
  updated_at: new Date(),
});

export default function seed(knex) {
  return knex('nearby').del()
    .then(() => {
      // Inserts seed entries
      const datas = [];

      for (let i = 1; i < 101; i += 1) {
        for (let j = 0; j < 12; j += 1) {
          const num = Math.floor(Math.random() * 99 + 1);
          datas.push(createNearby(knex, j, i, num));
        }
      }

      return Promise.all(datas);
    });
}
