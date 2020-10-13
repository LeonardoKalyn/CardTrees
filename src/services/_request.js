import axios from 'axios';

function handleError(error){
  if(error.response) {
    throw error.response.data;
  }
  throw error.message;
};

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

function request ({url, method, headers = {}, ...requestProps}, _request = axios.request) {
  return _request({
    url,
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...requestProps,
  })
    .then(response => response.data || response)
    .catch(error => handleError(error))
};

export default request;