const axios = require('axios');
require('dotenv').config();
const {FB_TOKEN} = process.env

axios.get(`https://graph.facebook.com/v1.0/me/friends?access_token=${FB_TOKEN}`)
.then(results => {
    console.log(JSON.stringify(results.data, null, 2))
})