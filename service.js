/** @format */

var axios = require("axios");
var data = JSON.stringify({
  collection: "datas",
  database: "testData",
  dataSource: "cluster01",
  projection: {
    _id: 1,
  },
});

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-iklud/endpoint/data/beta/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": "<API_KEY>",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
