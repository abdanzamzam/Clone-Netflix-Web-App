const { default: axios } = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

class MovieController {
  static getAll(req, res) {
    let response = {};
    // check cache... in redis DB
    redis
      .get("moviesData")
      .then((value) => {
        if (value) {
          res.status(201).json(JSON.parse(value));
        } else {
          axios({
            url: "http://localhost:4001",
            method: "GET",
          })
            .then(({ data }) => {
              response = data;
              //    set data to redis DB
              const responseString = JSON.stringify(response);
              return redis.set("moviesData", responseString);
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
    //gak perlu pake redis seharusnya
    const id = req.params.id;
    let response = {};
    // check cache... in redis DB
    redis
      .get("movieOne")
      .then((value) => {
        if (value) {
          res.status(201).json(JSON.parse(value));
        } else {
          axios({
            url: `http://localhost:4001/${id}`,
            method: "GET",
          })
            .then(({ data }) => {
              response = data;
              //    set data to redis DB
              const responseString = JSON.stringify(response);
              return redis.set("moviesOne", responseString);
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

  static createData(req, res) {
    const { title, overview, poster_path, popularity, taqs } = req.body;
    let response = {};
    axios({
      url: `http://localhost:4001/add`,
      method: "POST",
      data: { title, overview, poster_path, popularity, taqs },
    })
      .then(({ data }) => {
        response = data;
        return redis.del("allData");
      })
      .then((value) => {
        console.log(value);
        res.status(201).json(response);
      })
      .catch(console.log);
  }

  static updateData(req, res) {
    const id = req.params.id;
    const { title, overview, poster_path, popularity, taqs } = req.body;
    let response = {};
    axios({
      url: `http://localhost:4001/update/${id}`,
      method: "PUT",
      data: { title, overview, poster_path, popularity, taqs },
    })
      .then(({ data }) => {
        response = data;
        return redis.del("allData");
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
      url: `http://localhost:4001/delete/${id}`,
      method: "DELETE",
    })
      .then(({ data }) => {
        response = data;
        return redis.del("allData");
      })
      .then((value) => {
        console.log(value);
        res.status(200).json(response);
      })
      .catch(console.log);
  }
}

module.exports = MovieController;
