import request, { defaultHeaders as headers } from '../_request';

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
    expect(mockRequest).toHaveBeenCalled();
    expect(mockRequest).toHaveBeenCalledWith({ ...requestData, headers });
  });

  test('returns an error message after an unsuccessful request', async () => {
    const errorMessage = 'A horrible error has occured =o';
    const mockRequest = () => Promise.reject(new Error(errorMessage));

    const requestData = {
      url: 'http://an.url.com',
      method: 'GET',
    };

    expect(request(requestData, mockRequest)).rejects.toEqual(errorMessage);
  });
});
