import moment from 'moment';

const getAge = (date_of_birth) =>  {
    if (date_of_birth == "") {
        return "-"
    }
    return moment().diff(moment(date_of_birth, 'YYYYMMDD'), 'years')      
}

export default getAge;