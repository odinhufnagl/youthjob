import axios from 'axios';
import headers from '../../../constants/headers';
import url from '../../../constants/url';
import { education, job } from './mutations';

const query_delete = async (queryToUse, id) => {
  const mutations = { education: education, job: job };
  console.log(id);
  try {
    return axios
      .post(
        url,
        { query: mutations[queryToUse], variables: { id: id } },
        headers
      )
      .then((res) => 'done')
      .catch((e) => e);
  } catch (e) {
    return e;
  }
};

export default query_delete;
