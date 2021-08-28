const { ApolloServer, gql } = require("apollo-server");
const { default: axios } = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    taqs: [String]
  }

  type Tvseris {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    taqs: [String]
    message: [String]
  }

  type Query {
    movies: [Movie]
    tvseries: [Tvseris]
    movieOne(_id: ID): Movie
    tvserisOne(_id: ID): Tvseris
  }

  type Mutation {
    addMovie(
      title: String
      overview: String
      poster_path: String
      popularity: Float
      taqs: [String]
    ): Movie

    editMovie(
      _id: ID
      title: String
      overview: String
      poster_path: String
      popularity: Float
      taqs: [String]
    ): Movie

    deleteMovie(_id: ID): Movie
    deleteTvseris(_id: ID): Tvseris

    addTvseris(
      title: String
      overview: String
      poster_path: String
      popularity: Float
      taqs: [String]
    ): Tvseris

    editTvseris(
      _id: ID
      title: String
      overview: String
      poster_path: String
      popularity: Float
      taqs: [String]
    ): Tvseris
  }
`;

const resolvers = {
  Query: {
    // get all movie => done
    async movies() {
      let response = {};
      const moviesData = await redis.get("moviesData");
      if (moviesData) {
        console.log("masuk 1");
        // redis.del("moviesData");
        const data = JSON.parse(moviesData);
        return data;
      } else {
        console.log("Masuk 2");
        const { data } = await axios({
          method: "GET",
          url: "http://localhost:4001",
        });
        response = data;
        const responseString = JSON.stringify(response);
        redis.set("moviesData", responseString);
        return data;
      }
    },
    // get movie by id
    async movieOne(_, args) {
      const {
        data: [data],
      } = await axios({
        method: "GET",
        url: `http://localhost:4001/${args._id}`,
      });
      return data;
    },
    // get all tvseris tvserisOne
    async tvseries() {
      let response = {};
      const tvseriesData = await redis.get("tvseriesData");
      if (tvseriesData) {
        console.log("masuk 1");
        // redis.del("tvseriesData");
        const data = JSON.parse(tvseriesData);
        return data;
      } else {
        console.log("Masuk 2");
        const { data } = await axios({
          method: "GET",
          url: "http://localhost:4002",
        });
        response = data;
        const responseString = JSON.stringify(response);
        redis.set("tvseriesData", responseString);
        return data;
      }
    },
    // get tvseris by id
    async tvserisOne(_, args) {
      const {
        data: [data],
      } = await axios({
        method: "GET",
        url: `http://localhost:4002/${args._id}`,
      });
      return data;
    },
  },
  Mutation: {
    // add new movie
    async addMovie(_, args) {
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        taqs: args.taqs,
      };
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:4001/add",
        data: newData,
      });
      redis.del("moviesData");
      return newData;
    },
    // edit movie by id
    async editMovie(_, args) {
      const id = args._id;
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        taqs: args.taqs,
      };
      const { data } = await axios({
        method: "PUT",
        url: `http://localhost:4001/update/${id}`,
        data: newData,
      });
      redis.del("moviesData");
      return newData;
    },
    // delete movie
    async deleteMovie(_, args) {
      const { data } = await axios({
        method: "DELETE",
        url: `http://localhost:4001/delete/${args._id}`,
      });
      redis.del("moviesData");
      return data;
    },
    // add new tvseris
    async addTvseris(_, args) {
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        taqs: args.taqs,
      };
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:4002/add",
        data: newData,
      });
      redis.del("tvseriesData");
      return newData;
    },
    // edit tvseris by id
    async editTvseris(_, args) {
      const id = args._id;
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        taqs: args.taqs,
      };
      const { data } = await axios({
        method: "PUT",
        url: `http://localhost:4002/update/${id}`,
        data: newData,
      });
      redis.del("tvseriesData");
      return newData;
    },
    // delete tvseris
    async deleteTvseris(_, args) {
      const { data } = await axios({
        method: "DELETE",
        url: `http://localhost:4002/delete/${args._id}`,
      });
      const message = data;
      redis.del("tvseriesData");
      return message;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("App listening at", url);
});
