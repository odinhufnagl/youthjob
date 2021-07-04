export const education = `

mutation insert_youthjob_educations($objectsToInsert:[youthjob_educations_insert_input!]!) {
    insert_youthjob_educations(objects:$objectsToInsert)
    { 
        returning {
             id
            }
        }
    }

`


export const job = `

mutation insert_youthjob_p_users_earlier_jobs($objectsToInsert:[youthjob_p_users_earlier_jobs_insert_input!]!) {
    insert_youthjob_p_users_earlier_jobs(objects:$objectsToInsert)
    { 
        returning {
             id
            }
        }
    }

`