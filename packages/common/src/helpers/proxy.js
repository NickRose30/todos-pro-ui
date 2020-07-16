const PRODUCTION_BASE_URL =
  'http://backend.todosproapp.com:8088';
const LOCAL_BASE_URL = 'http://localhost:8088';

export const getEnvBasedProxyUrl = _ => {
  // eslint-disable-next-line no-undef
  if (__DEV__) return LOCAL_BASE_URL;
  return PRODUCTION_BASE_URL;
};
