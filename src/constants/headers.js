import { hasuraClientName, xHasuraAdminSecret } from '@env';

const headers = {
  headers: {
    'Hasura-Client-Name': hasuraClientName,
    'x-hasura-admin-secret': xHasuraAdminSecret,
  },
};

export default headers;
