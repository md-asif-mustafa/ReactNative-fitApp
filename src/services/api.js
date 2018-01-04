const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const get = () =>
  fetch('https://api.myjson.com/bins/jwson', { headers })
    .then(checkStatus)
    .then(parseJSON);

export default get;

