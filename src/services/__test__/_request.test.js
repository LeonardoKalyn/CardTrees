import request from '../_request';

describe('_request()', () => {
  test('receives data after a successful request', async () => {
    const expectedData = 'A successfull request';
    const mockRequest = jest.fn(() => Promise.resolve({ data: expectedData }));

    const requestData = {
      url: 'http://an.url.com',
      method: 'GET',
    };

    const data = await request(requestData, mockRequest);

    expect(data).toBe(expectedData);
  });
});
