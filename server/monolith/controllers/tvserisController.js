const Tvseris = require("../models/tvseris");
const { ObjectId } = require("mongodb");

class TvserisController {
  static getAll(req, res) {
    Tvseris.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static getOne(req, res) {
    const query = {
      _id: ObjectId(req.params.id),
    };
    Tvseris.findOne(query)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static createData(req, res) {
    const data = req.body;
    Tvseris.create(data)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static updateData(req, res) {
    const id = { _id: ObjectId(req.params.id) };
    const data = req.body;
    Tvseris.update(id, data)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }

  static deleteData(req, res) {
    const id = { _id: ObjectId(req.params.id) };
    Tvseris.delete(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(console.log);
  }
}

module.exports = TvserisController;
