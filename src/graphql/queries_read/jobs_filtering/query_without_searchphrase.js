const query_without_searchphrase =  
`
query youthjob_jobs($where:youthjob_jobs_bool_exp!)
{
    youthjob_jobs(where: $where ){
            id,
            title,
            description,
            employment_type_name,
            location {
                address,
                city,
                country,
                postal_code,
                },
            company {
                id,
                name,
                image,
            },
            tags {
                tag {
                    name
                }
            }
            
        }
}

`

export default query_without_searchphrase;