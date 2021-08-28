import { useQuery } from "@apollo/client";
import { Footer, NavbarDashboardMovie, TableMovies } from "../components";
import { FETCH_MOVIES } from "../graphql";

const DashMovies = () => {
  const { data, loading, error } = useQuery(FETCH_MOVIES);
  let movies = [];
  if (data) {
    movies = data.movies;
  }

  return (
    <div>
      <NavbarDashboardMovie />
      <TableMovies movies={movies} />
      <Footer />
    </div>
  );
};

export default DashMovies;
