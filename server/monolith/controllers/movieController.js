const Movie = require("../models/movie");
const { ObjectId } = require("mongodb");

class MovieController {
  static getAll(req, res) {
    Movie.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static getOne(req, res) {
    const query = {
      _id: ObjectId(req.params.id),
    };
    Movie.findOne(query)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static createData(req, res) {
    const data = req.body;
    Movie.create(data)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static updateData(req, res) {
    const id = { _id: ObjectId(req.params.id) };
    const data = req.body;
    Movie.update(id, data)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static deleteData(req, res) {
    const id = { _id: ObjectId(req.params.id) };
    Movie.delete(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }
}

module.exports = MovieController;
