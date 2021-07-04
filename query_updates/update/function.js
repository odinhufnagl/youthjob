import axios from "axios";
import headers from "../../headers";
import url from "../../url";
import { education, job } from "./mutations";

const query_update = async (queryToUse, id, toUpdate) => {
    const mutations = {'education': education, 'job': job}

    console.log(id, toUpdate, queryToUse)
    try {
        return axios.post(
            url, 
            {query: mutations[queryToUse], variables: {id: id, toUpdate: toUpdate}}, 
            headers)
        .then((res) => {console.log(res.data); return "done"})
        .catch((e) => e)

    }
    catch (e) {
        return e
    }

}

export default query_update;