import axios from 'axios';

const baseUrl = 'http://localhost:3300';

class HttpService {
  constructor() {
    window.onerror = (message, file, line) => {
      console.log(message, file, line);
    };
  }

  get(url) {
    const source = baseUrl + url;

    return axios
      .get(source)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  post(url, data) {
    const source = baseUrl + url;

    return axios
      .post(source, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  put(url, data, options) {
    const source = baseUrl + url;

    return axios
      .put(source, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  patch(url, data, options) {
    const source = baseUrl + url;

    return axios
      .patch(source, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  delete(url, options) {
    const source = baseUrl + url;

    return axios
      .delete(source, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  create(options) {
    return axios.create(options);
  }
}
// test comment
export default new HttpService();
