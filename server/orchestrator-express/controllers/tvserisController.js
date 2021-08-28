const { default: axios } = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

class TvserisController {
  static getAll(req, res) {
    let response = {};
    // check cache... in redis DB
    redis
      .get("tvseriesData")
      .then((value) => {
        if (value) {
          res.status(200).json(value);
        } else {
          axios({
            url: "http://localhost:4002",
            method: "GET",
          })
            .then(({ data }) => {
              response = data;
              //    set data to redis DB
              const responseString = JSON.stringify(response);
              return redis.set("tvseriesData", responseString);
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

  static getOne(req, res) {
    const id = req.params.id;
    axios({
      url: `http://localhost:4002/${id}`,
      method: "GET",
    })
      .then(({ data }) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static createData(req, res) {
    const data = req.body;
    let response = {};
    axios({
      url: `http://localhost:4002/add`,
      method: "POST",
      data: data,
    })
      .then(({ data }) => {
        response = data;
        return redis.del("tvseriesData");
      })
      .then((value) => {
        console.log(value);
        res.status(200).json(response);
      })
      .catch(console.log);
  }

  static updateData(req, res) {
    const id = req.params.id;
    const data = req.body;
    let response = {};
    axios({
      url: `http://localhost:4002/update/${id}`,
      method: "PUT",
      data: data,
    })
      .then(({ data }) => {
        response = data;
        return redis.del("tvseriesData");
      })
      .then((value) => {
        console.log(value);
        res.status(200).json(response);
      })
      .catch(console.log);
  }

  static deleteData(req, res) {
    const id = req.params.id;
    let response = {};
    axios({
      url: `http://localhost:4002/delete/${id}`,
      method: "DELETE",
    })
      .then(({ data }) => {
        response = data;
        return redis.del("tvseriesData");
      })
      .then((value) => {
        console.log(value);
        res.status(200).json(data);
      })
      .catch(console.log);
  }
}

module.exports = TvserisController;
