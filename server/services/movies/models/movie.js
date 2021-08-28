const { getDatabase } = require("../config");

class Movie {
  static find() {
    return getDatabase().collection("movies").find().toArray();
  }

  static findOne(query) {
    return getDatabase().collection("movies").find(query).toArray();
  }

  static create(data) {
    return getDatabase().collection("movies").insertOne(data);
  }

  static update(id, data) {
    return getDatabase().collection("movies").update(id, { $set: data });
  }

  static delete(id) {
    return getDatabase().collection("movies").deleteOne(id);
  }
}

module.exports = Movie;
