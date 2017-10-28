const express = require("express");
const app = express();
const { json } = require("body-parser");
const request = require("request-promise");
require("dotenv").config();
const {FB_TOKEN} = process.env;
app.use(json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/facebook-search/:id", (req, res) => {
  // you need permission for most of these fields
  const userFieldSet =
    "id, name, about, email, accounts, link, is_verified, significant_other, relationship_status, website, picture, photos, feed";

  const options = {
    method: "GET",
    uri: `https://graph.facebook.com/v2.8/${req.params.id}`,
    qs: {

      access_token: FB_TOKEN,
      fields: userFieldSet
    }
  };
  request(options)
    .then(fbRes => {
      res.json(fbRes);
    })
    .catch(console.log("error"));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
