import { gql, useQuery } from "@apollo/client";
import { CardMovies, Footer, Navbar } from "../components";

const FETCH_MOVIES = gql`
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

const Movies = () => {
  const { data } = useQuery(FETCH_MOVIES);
  let movies = [];
  if (data) {
    movies = data.movies;
  }

  return (
    <div>
      <Navbar />
      <CardMovies movies={movies} />
      <Footer />
    </div>
  );
};

export default Movies;
