import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { favoritesVar } from "../graphql/reactiveVariables";

const FETCH_TVSERIES = gql`
  query FetchTvseries($tvserisOneId: ID) {
    tvserisOne(_id: $tvserisOneId) {
      title
      overview
      poster_path
      popularity
      taqs
    }
  }
`;

const DetailTvseris = () => {
  const { id } = useParams();
  const myFavorite = useReactiveVar(favoritesVar);

  const { data, loading, error } = useQuery(FETCH_TVSERIES, {
    variables: { tvserisOneId: id },
  });

  let tvseries = null;
  if (data) {
    tvseries = data.tvserisOne;
  }

  const addToFavorites = () => {
    let newFavorite = [...myFavorite, tvseries];
    favoritesVar(newFavorite);
  };

  return (
    <div>
      <Navbar />
      {data && (
        <div className="text-gray-600 body-font mx-12 mb-7">
          <div className="container px-10 py-10 mx-auto flex flex-wrap border-2 border-gray-800">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-1/3">
              <img
                className=" h-full w-full object-cover object-center mb-4"
                src={tvseries.poster_path}
                alt="content"
              />
            </h2>
            <div className="md:w-2/3 md:pl-6">
              <div className="ml-5">
                <h1 className="text-4xl text-gray-200 font-medium title-font mb-5">
                  {tvseries.title}
                </h1>
                <p className="leading-relaxed text-base">{tvseries.overview}</p>
                <div className=" md:mt-4 mt-6">
                  <h1 className="text-gray-300 mb-2 mt-1">Gendre:</h1>
                  <div>
                    {tvseries.taqs.map((el, index) => (
                      <div
                        key={index}
                        className="inline-flex text-white bg-red-600 border-0 py-1 px-4 rounded mr-2"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                  <h1 className="text-gray-300 mb- mt-5">Rating:</h1>
                  <div>
                    {tvseries.popularity === 1 && (
                      <div>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                      </div>
                    )}
                    {tvseries.popularity === 2 && (
                      <div>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                      </div>
                    )}
                    {tvseries.popularity === 3 && (
                      <div>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                      </div>
                    )}
                    {tvseries.popularity === 4 && (
                      <div>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-gray-400"> ★ </span>
                      </div>
                    )}
                    {tvseries.popularity === 5 && (
                      <div>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                        <span className="text-3xl text-yellow-400"> ★ </span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-gray-300 mb- mt-4">Action:</h1>
                  <div>
                    <button
                      onClick={() => addToFavorites()}
                      className="bg-indigo-600 rounded-md text-white p-2 px-3 mt-2"
                    >
                      <i className="far fa-heart mr-2"> </i> Add Favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DetailTvseris;
