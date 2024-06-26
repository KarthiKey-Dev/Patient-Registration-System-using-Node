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
  url: "",
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
