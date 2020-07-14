import axios from 'axios';
import { useState, useEffect } from 'react';
import { getEnvBasedProxyUrl } from './proxy';

const getAxiosConfig = config => ({
  baseURL: getEnvBasedProxyUrl(),
  method: 'GET',
  ...config,
});

export default (config, dependencies = []) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setFetching(true);
      try {
        const axiosConfig = getAxiosConfig(config);
        const response = await axios(axiosConfig);
        setData(response);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setFetching(false);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [data, fetching];
};
