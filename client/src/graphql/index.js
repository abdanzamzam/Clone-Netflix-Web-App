import { gql } from "@apollo/client";

export const FETCH_MOVIES = gql`
  query FetchMovies {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const FETCH_TVSERIES = gql`
  query FetchTvseries {
    tvseries {
      _id
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const EDIT_MOVIE = gql`
  mutation DeleteMovieMutation(
    $editMovieId: ID
    $editMovieTitle: String
    $editMovieOverview: String
    $editMoviePosterPath: String
    $editMoviePopularity: Float
    $editMovieTaqs: [String]
  ) {
    editMovie(
      _id: $editMovieId
      title: $editMovieTitle
      overview: $editMovieOverview
      poster_path: $editMoviePosterPath
      popularity: $editMoviePopularity
      taqs: $editMovieTaqs
    ) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const EDIT_TVSERIS = gql`
  mutation EditTvserisMutation(
    $editTvserisTitle: String
    $editTvserisOverview: String
    $editTvserisPosterPath: String
    $editTvserisPopularity: Float
    $editTvserisTaqs: [String]
  ) {
    editTvseris(
      title: $editTvserisTitle
      overview: $editTvserisOverview
      poster_path: $editTvserisPosterPath
      popularity: $editTvserisPopularity
      taqs: $editTvserisTaqs
    ) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($deleteMovieId: ID) {
    deleteMovie(_id: $deleteMovieId) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const DELETE_TVSERIS = gql`
  mutation DeleteTvseries($deleteTvserisId: ID) {
    deleteTvseris(_id: $deleteTvserisId) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const FETCH_MOVIE = gql`
  query FetchMovie($movieOneId: ID) {
    movieOne(_id: $movieOneId) {
      _id
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const FETCH_TVSERIS = gql`
  query FetchMovie($tvserisOneId: ID) {
    tvserisOne(_id: $tvserisOneId) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const ADD_MOVIE_MUTATION = gql`
  mutation AddMovieMutation(
    $addMovieTitle: String
    $addMovieOverview: String
    $addMoviePosterPath: String
    $addMoviePopularity: Float
    $addMovieTaqs: [String]
  ) {
    addMovie(
      title: $addMovieTitle
      overview: $addMovieOverview
      poster_path: $addMoviePosterPath
      popularity: $addMoviePopularity
      taqs: $addMovieTaqs
    ) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

export const ADD_TVSERIS_MUTATION = gql`
  mutation AddTvserisMutation(
    $addTvserisTitle: String
    $addTvserisOverview: String
    $addTvserisPosterPath: String
    $addTvserisPopularity: Float
    $addTvserisTaqs: [String]
  ) {
    addTvseris(
      title: $addTvserisTitle
      overview: $addTvserisOverview
      poster_path: $addTvserisPosterPath
      popularity: $addTvserisPopularity
      taqs: $addTvserisTaqs
    ) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;
