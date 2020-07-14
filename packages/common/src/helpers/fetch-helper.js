import axios from 'axios';
import { getEnvBasedProxyUrl } from './proxy';

const getAxiosConfig = config => ({
  baseURL: getEnvBasedProxyUrl(),
  method: 'GET',
  ...config,
});

export default config => axios(getAxiosConfig(config));
