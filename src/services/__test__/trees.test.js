import nock from 'nock';

import treesService from '../trees'

describe('services/trees.getTrees()', () => {
  test('returns an object with data as a list of trees, on a successfull request', async () => {
    const trees = [{
      "name": "Japanese red pine",
      "species_name": "Pinus densiflora",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
    }];

    nock(/.*?/)
      .get('/ecosia-frontend-developer/trees.json')
      .reply(200, { trees });

    const { data, error } = await treesService.getTrees();

    expect(data).toMatchObject(trees);
    expect(error).toBeUndefined();
  });

  test('returns an object with error as a string, on an unsuccessfull request', async () => {
    const errorMessage = 'Could not get the trees.'

    nock(/.*?/)
      .get('/ecosia-frontend-developer/trees.json')
      .reply(404, errorMessage);

    const { data, error } = await treesService.getTrees();

    expect(error).toBe(errorMessage);
    expect(data).toBeUndefined();
  });
});
