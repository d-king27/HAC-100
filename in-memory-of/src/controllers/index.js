const request = require("request-promise");
const FB_API = 'https://graph.facebook.com/v2.8/'
require("dotenv").config();
const {FB_TOKEN} = process.env;

const getUserPicture = (req, res) => {
    const {id} = req.params
    const options = {
        method: 'GET',
        uri: FB_API + id,
        qs: {
            access_token: FB_TOKEN,
            fields: 'picture'
        }
    }
    request(options)
    .then(fbres => {
        res.json(fbres)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = getU