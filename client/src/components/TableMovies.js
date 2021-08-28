import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { DELETE_MOVIE, FETCH_MOVIES } from "../graphql";

const TableMovies = ({ movies }) => {
  const [deleteMovie, { data, loading, error }] = useMutation(DELETE_MOVIE, {
    refetchQueries: [FETCH_MOVIES],
  });

  const handleDelete = (id) => {
    deleteMovie({
      variables: { deleteMovieId: id },
    });
  };

  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl">
                    Title Movie
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900">
                    Rating
                  </th>
                  <th className="px-4 w-40 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {movies &&
                  movies.map((movie, index) => (
                    <tr key={index}>
                      <td className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-white">
                        {movie.title}
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-white">
                        {movie.popularity === 1 && (
                          <div>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                          </div>
                        )}
                        {movie.popularity === 2 && (
                          <div>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                          </div>
                        )}
                        {movie.popularity === 3 && (
                          <div>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                          </div>
                        )}
                        {movie.popularity === 4 && (
                          <div>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-gray-400"> ★ </span>
                          </div>
                        )}
                        {movie.popularity === 5 && (
                          <div>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                            <span className="text-lg text-yellow-400"> ★ </span>
                          </div>
                        )}
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-900 px-4 py-3 text-l text-white">
                        <Link
                          to={`/dashboard/movies/edit/${movie._id}`}
                          className="bg-blue-600 py-1 px-2 rounded-md"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(movie._id)}
                          className="bg-red-600 py-1 px-2 rounded-md ml-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <Link
              to="/dashboard/movies/add"
              className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded"
            >
              Add Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMovies;
