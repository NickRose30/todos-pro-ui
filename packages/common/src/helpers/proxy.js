const PRODUCTION_BASE_URL =
  'http://backend.todosproapp.com:8088';
const LOCAL_BASE_URL = 'http://localhost:8088';

export const getEnvBasedProxyUrl = _ => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return LOCAL_BASE_URL;
    case 'production':
      return PRODUCTION_BASE_URL;
    default:
      return LOCAL_BASE_URL;
  }
};
