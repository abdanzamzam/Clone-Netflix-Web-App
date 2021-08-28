import { Link, useLocation } from "react-router-dom";

const CardMovies = ({ movies }) => {
  const { pathname } = useLocation();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              MOVIES
            </h1>
            <div className="h-1 w-20 bg-red-600 rounded"></div>
          </div>
          {pathname == "/" && (
            <Link
              to="/movies"
              className="lg:w-1/2 w-full leading-relaxed text-lg text-red-600 text-right font-semibold"
            >
              View All
            </Link>
          )}
        </div>
        <div className="flex flex-wrap -m-4">
          {movies &&
            movies.map((movie, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-black">
                  <img
                    className=" h-96 w-full object-cover object-center mb-4"
                    src={movie.poster_path}
                    alt="content"
                  />
                  <div>
                    <Link to={`/movie/${movie._id}`}>
                      <h2 className="text-lg text-gray-400 font-medium title-font mb-1 hover:text-red-600">
                        {movie.title}
                      </h2>
                    </Link>
                    <div className="flex items-center">
                      <span className="mr-2">Rating: </span>

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
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CardMovies;
