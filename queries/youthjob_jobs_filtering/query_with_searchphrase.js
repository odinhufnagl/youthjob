const query_with_searchphrase =  
`
query searchjobs($where:youthjob_jobs_bool_exp!, $searchphrase:String!)
{
    searchjobs(where: $where, args:{searchphrase: $searchphrase} ){
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

export default query_with_searchphrase;