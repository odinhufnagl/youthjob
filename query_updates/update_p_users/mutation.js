const mutation = `

mutation update_youthjob_p_users($firebase_uid:String!, $toUpdate: youthjob_p_users_set_input) {
    update_youthjob_p_users(where: {
        firebase_uid: {_eq: $firebase_uid}}
        ,_set:$toUpdate)
    
    {
        affected_rows
    }
    }




`

export default mutation;