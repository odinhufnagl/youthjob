import axios from 'axios';
import headers from '../../../constants/headers';
import url from '../../../constants/url';
import { education, job } from './mutations';

const query_insert = async (queryToUse, objectsToInsert) => {
  const mutations = { education: education, job: job };
  console.log(objectsToInsert);

  try {
    return axios
      .post(
        url,
        {
          query: mutations[queryToUse],
          variables: { objectsToInsert: objectsToInsert },
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

export default query_insert;
