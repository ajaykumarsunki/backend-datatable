const axios = require("axios");

exports.getAllContacts = async (req, res) => {
  await axios({
    method: "GET",
    url: "https://books.zoho.com/api/v3/contacts?organization_id=649249007",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Zoho-authtoken db36e02a50b57e081efe533a8a0f834b",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => console.log(err));
};
