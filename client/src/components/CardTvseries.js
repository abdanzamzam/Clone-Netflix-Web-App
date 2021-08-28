import { Link, useLocation } from "react-router-dom";

const CardTvseries = ({ tvseries }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap w-full mb-20 justify-between">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              TV SERIES
            </h1>
            <div className="h-1 w-20 bg-red-600 rounded"></div>
          </div>
          {pathname === "/" && (
            <Link
              to="/tvseries"
              className="lg:w-1/2 w-full leading-relaxed text-lg text-red-600 text-right font-semibold"
            >
              View All
            </Link>
          )}
        </div>
        <div className="flex flex-wrap -m-4">
          {tvseries &&
            tvseries.map((seris, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-black">
                  <img
                    className=" h-96 w-full object-cover object-center mb-4"
                    src={seris.poster_path}
                    alt="content"
                  />
                  <div className="">
                    <Link to={`/tvseris/${seris._id}`}>
                      <h2 className="text-lg text-gray-400 font-medium title-font mb-1 hover:text-red-600">
                        {seris.title}
                      </h2>
                    </Link>
                    <div className="flex items-center">
                      <span className="mr-2">Rating: </span>

                      {seris.popularity === 1 && (
                        <div>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                        </div>
                      )}
                      {seris.popularity === 2 && (
                        <div>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                        </div>
                      )}
                      {seris.popularity === 3 && (
                        <div>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                        </div>
                      )}
                      {seris.popularity === 4 && (
                        <div>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-yellow-400"> ★ </span>
                          <span className="text-lg text-gray-400"> ★ </span>
                        </div>
                      )}
                      {seris.popularity === 5 && (
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

export default CardTvseries;
