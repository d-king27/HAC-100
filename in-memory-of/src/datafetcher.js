const express = require("express");
const app = express();
const { json } = require("body-parser");

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
      res.json(JSON.parse(fbres))
  })
    .catch((err) => {
        console.log(err)
    })
}
const getUserLikes = (req, res) => {
  const {id} = req.params
  const options = {
      method: 'GET',
      uri: FB_API + id,
      qs: {
          access_token: FB_TOKEN,
          fields: 'likes'
      }
  }
  request(options)
  .then(fbres => {
      res.json(JSON.parse(fbres))
  })
  .catch((err) => {
      console.log(err)
  })
}

const getUserFriends= (req, res) => {
  const {id} = req.params
  const friends = 'friendlists'
  const options = {
      method: 'GET',
      uri: FB_API + id + '/'+friends,
      qs: {
          access_token: FB_TOKEN,
          fields: friends
      }
  }
  request(options)
  .then(fbres => {
   return JSON.parse(fbres).data
  })
  .then(arr => {
    const friendsArr = arr.map(friend => {
      const {id} = friend;
      const options = {
        method: 'GET',
        uri: FB_API + id,
        qs: {
          access_token: FB_TOKEN
        }
      }
      request(options)
      .then(data => {
        return data
      })

    })
    return Promise.all(friendsArr)
  })
  .then(data => {
    res.send(data)
  })
  .catch((err) => {
      console.log(err)
  })
}


app.use(json());

app.get("/", function(req, res) {
  res.send("Hello World");
});
// app.get("/name/:id", getNameFromId)
app.get("/picture/:id", getUserPicture);
app.get("/likes/:id", getUserLikes)
app.get("/friends/:id", getUserFriends)
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
