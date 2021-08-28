const { default: axios } = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

class MainController {
  static getAll(req, res) {
    let response = {};
    // check cache... in redis DB
    redis
      .get("allData")
      .then((value) => {
        if (value) {
          res.status(200).json(JSON.parse(value));
        } else {
          axios({
            method: "GET",
            url: "http://localhost:4001",
          })
            .then(({ data }) => {
              response.movies = data;
              return axios({
                method: "GET",
                url: "http://localhost:4002",
              });
            })
            .then(({ data }) => {
              response.tvseries = data;
              //    set data to redis DB
              const responseString = JSON.stringify(response);
              return redis.set("allData", responseString);
            })
            .then((value) => {
              console.log(value);
              res.status(200).json(response);
            })
            .catch(console.log);
        }
      })
      .catch(console.log);
  }
}

module.exports = MainController;
