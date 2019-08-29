import controller from '../server/controller';

jest.mock('../request');

it('works with promises', () => {
  expect.assertions(1);
  return controller.get({ id: 1 }).then((data) => expect(data.nearby.location_id).toBe(1));
});
