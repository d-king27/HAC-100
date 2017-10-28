const axios = require('axios');
require('dotenv').config();
const {FB_TOKEN} = process.env
const access_token = `?access_token=${FB_TOKEN}`

const getProfilePicture = () => {
    
   return axios.get(`https://graph.facebook.com/v1.0/me/picture/feed${access_token}`)
    .then(results => {
        console.log(JSON.stringify(results.data, null, 2))
        return results
    })

}


