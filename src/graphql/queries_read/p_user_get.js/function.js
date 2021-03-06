import axios from 'axios';
import headers from '../../../constants/headers';
import url from '../../../constants/url';
import query from './query';

const p_users_get = async (firebase_uid) => {
  const where = {};

  if (firebase_uid == undefined || firebase_uid != '') {
    where.firebase_uid = { _eq: firebase_uid };
  }

  const res = await axios.post(
    url,
    { query: query, variables: { where: where } },
    headers
  );
  return res.data.data.youthjob_p_users[0];
};

export default p_users_get;
