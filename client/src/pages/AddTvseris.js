import { Footer, NavbarDashboardMovie } from "../components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { ADD_TVSERIS_MUTATION, FETCH_TVSERIES } from "../graphql";
import { useMutation } from "@apollo/client";

const AddTvseris = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [path, setPath] = useState("");
  const [popularity, setPularity] = useState("");
  const [tags, setTags] = useState("");
  const history = useHistory();

  const [addTvseris, { data, loading, error }] = useMutation(
    ADD_TVSERIS_MUTATION,
    {
      refetchQueries: [FETCH_TVSERIES],
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addTvseris({
      variables: {
        addTvserisTitle: title,
        addTvserisOverview: overview,
        addTvserisPosterPath: path,
        addTvserisPopularity: Number(popularity),
        addTvserisTaqs: tags.split(","),
      },
    });
    history.push("/dashboard/tvseries");
  };

  return (
    <div>
      <NavbarDashboardMovie />
      <div class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2 border-2 border-gray-800 py-4 px-10">
              <div class="flex flex-col text-center w-full mb-5 mt-3">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
                  Add TV Seris
                </h1>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label for="email" class="leading-7 text-sm text-gray-3 mb-1">
                  Title TV Seris
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  class="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                />
                <label for="email" class="leading-7 text-sm text-gray-3 mb-1">
                  Overview
                </label>
                <input
                  onChange={(e) => setOverview(e.target.value)}
                  type="text"
                  class="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                />
                <label for="email" class="leading-7 text-sm text-gray-3 mb-1">
                  Poster Path
                </label>
                <input
                  onChange={(e) => setPath(e.target.value)}
                  type="text"
                  class="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                />
                <label for="email" class="leading-7 text-sm text-gray-3 mb-1">
                  Popularity
                </label>
                <input
                  onChange={(e) => setPularity(e.target.value)}
                  type="number"
                  class="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                />
                <label for="email" class="leading-7 text-sm text-gray-3 mb-1">
                  Tags
                </label>
                <input
                  onChange={(e) => setTags(e.target.value)}
                  type="text"
                  class="w-full bg-gray-800 rounded border border-gray-800 focus:border-red-700 focus:bg-gray-800 focus:ring-2 focus:ring-red-800 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5"
                />
                <div className="flex mt-4 justify-start mb-3">
                  <button
                    type="submit"
                    class="flex px-auto mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg mb-5"
                  >
                    Save
                  </button>
                  <Link
                    to="/dashboard/tvseries"
                    class="flex mx-auto px-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded text-lg mb-5 ml-3"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTvseris;
