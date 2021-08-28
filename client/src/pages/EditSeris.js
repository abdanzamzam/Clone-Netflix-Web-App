import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Footer, NavbarDashboardMovie } from "../components";
import { EDIT_TVSERIS, FETCH_TVSERIS, FETCH_TVSERIES } from "../graphql";

const EditSeris = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading, error } = useQuery(FETCH_TVSERIS, {
    variables: {
      tvserisOneId: id,
    },
  });

  let tvseris = null;
  if (data) {
    tvseris = data.tvserisOne;
  }

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [path, setPath] = useState("");
  const [popularity, setPularity] = useState("");
  const [tags, setTags] = useState("");
  const [load, setLoad] = useState(false);

  const [editTvseris] = useMutation(EDIT_TVSERIS, {
    refetchQueries: [FETCH_TVSERIES],
  });

  if (!loading && !load) {
    setTitle(tvseris.title);
    setOverview(tvseris.overview);
    setPath(tvseris.poster_path);
    setPularity(tvseris.popularity);
    setTags(tvseris.taqs.join());
    setLoad(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editTvseris({
      variables: {
        editTvserisId: id,
        editTvserisTitle: title,
        editTvserisOverview: overview,
        editTvserisPosterPath: path,
        editTvserisPopularity: Number(popularity),
        editTvserisTaqs: tags.split(","),
      },
    });
    history.push("/dashboard/tvseries");
  };

  return (
    <div>
      <NavbarDashboardMovie />
      {!loading && (
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2 border-2 border-gray-800 py-4 px-10">
                <div className="flex flex-col text-center w-full mb-5 mt-3">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                    Edit Movie
                  </h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-3 mb-1"
                  >
                    Title Movie
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                  />
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-3 mb-1"
                  >
                    Overview
                  </label>
                  <input
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    type="text"
                    className="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                  />
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-3 mb-1"
                  >
                    Poster Path
                  </label>
                  <input
                    value={path}
                    onChange={(e) => setPath(e.target.value)}
                    type="text"
                    className="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                  />
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-3 mb-1"
                  >
                    Popularity
                  </label>
                  <input
                    value={popularity}
                    onChange={(e) => setPularity(e.target.value)}
                    type="number"
                    className="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                  />
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-3 mb-1"
                  >
                    Tags
                  </label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    type="text"
                    className="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                  />
                  <div className="flex mt-4 justify-start mb-3">
                    <button
                      type="submit"
                      className="flex px-auto mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg mb-5"
                    >
                      Save
                    </button>
                    <Link
                      to="/dashboard/tvseries"
                      className="flex mx-auto px-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded text-lg mb-5 ml-3"
                    >
                      Back
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && <Footer />}
    </div>
  );
};

export default EditSeris;
