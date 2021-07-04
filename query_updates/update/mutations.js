export const education = `

mutation update_youthjob_educations($id:Int!, $toUpdate:youthjob_educations_set_input) {
    update_youthjob_educations
       (
           where: {
                id: {_eq:$id}}, 
           _set: $toUpdate
        )
        {
            returning{id}
        }
    }
`;

export const job = `

mutation update_youthjob_p_users_earlier_jobs($id:Int!, $toUpdate:youthjob_p_users_earlier_jobs_set_input) {
    update_youthjob_p_users_earlier_jobs
    (
        where: {
            id: {_eq:$id}},
        _set: $toUpdate
        
    )
    {
        returning{id}
    }
}








`