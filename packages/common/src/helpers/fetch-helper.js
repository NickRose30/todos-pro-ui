import axios from 'axios';

const getAxiosConfig = config => ({
  baseURL: 'http://localhost:8088',
  method: 'GET',
  ...config,
});

export default config => axios(getAxiosConfig(config));
