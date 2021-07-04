const adminSecret = "n1qqTeoUGEzgbX6f8ASxIf2PynUfwS60bv7MKU98bF0XQ1y5EuT95nzFigZubJ54";
const hasuraClientName = "hasura-console";
const headers = {headers: {'Hasura-Client-Name': hasuraClientName, 'x-hasura-admin-secret': adminSecret}}


export default headers;