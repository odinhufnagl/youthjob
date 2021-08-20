import axios from 'axios';
import headers from '../../../constants/headers';
import url from '../../../constants/url';
import { education, job } from './mutations';

const update = async (queryToUse, id, toUpdate) => {
  const mutations = { education: education, job: job };
  console.log(id, toUpdate, queryToUse);
  try {
    return axios
      .post(
        url,
        {
          query: mutations[queryToUse],
          variables: { id: id, toUpdate: toUpdate },
        },
        headers
      )
      .then((res) => {
        console.log(res.data);
        return 'done';
      })
      .catch((e) => e);
  } catch (e) {
    return e;
  }
};

export default update;
