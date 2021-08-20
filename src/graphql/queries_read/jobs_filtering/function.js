import axios from 'axios';
import headers from '../../../constants/headers';
import url from '../../../constants/url';
import query_without_searchphrase from './query_without_searchphrase';
import query_with_searchphrase from './query_with_searchphrase';

/*
function that wil fetch data with filters on query
parameters is lists so forexample cities = [] list of cities
the function then adds these filters to the where clause, so for exmple if cities is empty, then no where clause is added, but if cities is ["göteborg"], we filter with göteborg
returns the result*/

const jobs_filtering = async (filters, searchphrase) => {
  console.log('filter' + filters);

  const where = {};

  filters.forEach((obj) => {
    if (obj?.marked) {
      const objCopy = { ...obj };
      objCopy.value = obj.value.toLowerCase();
      objCopy.name == 'Ort' &&
        (where.location = { city: { _eq: objCopy.value } });
      objCopy.name == 'Anställningstyp' &&
        (where.employment_type_name = { _eq: objCopy.value });
      objCopy.name == 'Språk' && (where.language_name = { _eq: objCopy.value });
      objCopy.name == 'Företag' &&
        (where.company = { name: { _eq: objCopy.value } });
    }
  });

  if (searchphrase === '') {
    const res = await axios.post(
      url,
      { query: query_without_searchphrase, variables: { where: where } },
      headers
    );

    return res.data.data.youthjob_jobs;
  } else if (searchphrase !== '') {
    const res = await axios.post(
      url,
      {
        query: query_with_searchphrase,
        variables: { where: where, searchphrase: searchphrase },
      },
      headers
    );

    return res.data.data.searchjobs;
  }
};

export default jobs_filtering;
