import axios from 'axios';

function handleError(error){
  if(error.response) {
    throw error.response;
  }
  throw error.message;
};

function request ({url, method, data, headers = {}}, _request = axios.request) {
  return _request({
    url,
    method,
    data,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then(response => response.data || response)
    .catch(error => handleError(error))
};

export default request;