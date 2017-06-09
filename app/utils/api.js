var axios = require('axios');

function fetchResources() {
    return axios.get('http://localhost:4000/getGSheet.php')
        .then((res) => res.data);
}

export {fetchResources};
