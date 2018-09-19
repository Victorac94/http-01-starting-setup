import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

// instance.interceptors.request.eject....
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM instance
export default instance;
