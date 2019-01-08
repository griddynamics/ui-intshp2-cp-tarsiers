import axios from 'axios';

class HttpService {
  constructor() {
    window.onerror = (message, file, line) => {
      console.log(message, file, line);
    };
  }

  get(url) {
    return axios
      .get(url)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  post(url, data, options) {
    return axios
      .post(url, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  put(url, data, options) {
    return axios
      .put(url, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  patch(url, data, options) {
    return axios
      .patch(url, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  delete(url, options) {
    return axios
      .delete(url, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  create(options) {
    return axios.create(options);
  }
}
// test comment
export default new HttpService();
