export const education = `

mutation delete_youthjob_educations($id:Int!) {
    delete_youthjob_educations
       (
           where: {
                id: {_eq:$id}}, 
        )
        {
            returning{id}
        }
    }

`

export const job = `

mutation delete_youthjob_p_users_earlier_jobs($id:Int!) {
    delete_youthjob_p_users_earlier_jobs
       (
           where: {
                id: {_eq:$id}}, 
        )
        {
            returning{id}
        }
    }

`