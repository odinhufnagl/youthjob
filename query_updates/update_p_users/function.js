import axios from "axios";
import headers from "../../headers";
import url from "../../url";
import mutation from "./mutation";


const update_p_users = async (firebase_uid, toUpdate) => {


    try {


        return axios.post(
            url, 
            {query: mutation, variables: {firebase_uid: firebase_uid, toUpdate: toUpdate}}, 
            headers
        ).then(() => {
            return "done"
        })
        .catch((e) => {
            return e
        })
    



    }
    catch (e) {
        return e
    }

}

export default update_p_users;