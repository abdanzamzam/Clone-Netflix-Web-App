const { getDatabase } = require("../config");

class Tvseris {
  static find() {
    return getDatabase().collection("tvseries").find().toArray();
  }

  static findOne(query) {
    return getDatabase().collection("tvseries").find(query).toArray();
  }

  static create(data) {
    return getDatabase().collection("tvseries").insertOne(data);
  }

  static update(id, data) {
    return getDatabase().collection("tvseries").update(id, { $set: data });
  }

  static delete(id) {
    return getDatabase().collection("tvseries").deleteOne(id);
  }
}

module.exports = Tvseris;
