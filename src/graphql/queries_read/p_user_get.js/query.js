const query = `
    query youthjob_p_users($where: youthjob_p_users_bool_exp) {

        youthjob_p_users (where: $where) {
            first_name,
            last_name,
            bio,
            phone_number,
            date_of_birth,
            profile_picture
            available,

            following(limit: 3) {
                company {
                    id,
                    name,
                    image,
                }
            },
            following_aggregate {
                aggregate {
                    count
                }
            }
            current_education {
                id,
                program,
                school,
                level,
                start_date,
                end_date,
            

            },
            latest_education {
                id,
                program,
                school,
                level,
                start_date,
                end_date,
            

            },
            earlier_jobs (order_by:{end_date: desc_nulls_first}){
                id,
                company_name,
                current_employer,
                role,
                short_info,
                start_date,
                end_date


            }

        }
    }

`;

export default query;
