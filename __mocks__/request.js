/* eslint-disable prefer-promise-reject-errors */
const datas = {
  location_id: 1,
  nearby: [
    {
      created_at: '2019-08-26T21:42:47.000Z',
      house_type: 'ENTIRE HOUSE',
      id: 0,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/97.jpg',
      location: 'Santinoberg',
      location_id: 1,
      price: 911,
      rate: '42',
      title: 'Sunt laborum elit consequat fugiat dolor Lorem.',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      created_at: '2019-08-26T21:42:47.000Z',
      house_type: 'ENTIRE HOUSE',
      id: 1,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/27.jpg',
      location: 'Natashamouth',
      location_id: 1,
      price: 698,
      rate: '434',
      title: 'Nisi aute ad eiusmod veniam.',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      created_at: '2019-08-26T21:42:47.000Z',
      house_type: 'ENTIRE HOUSE',
      id: 2,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/22.jpg',
      location: 'Thaliastad',
      location_id: 1,
      price: 716,
      rate: '327',
      title: 'Nulla ullamco incididunt eiusmod amet non eiusmod.',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
  ],
};

export default function get(url) {
  return new Promise((resolve, reject) => {
    const locationID = parseInt(url.substr('/api/location/'.length), 10);
    process.nextTick(() => (datas.location_id === locationID
      ? resolve(datas.nearby)
      : reject({
        error: `Nearby with ${locationID} not found.`,
      })));
  });
}
