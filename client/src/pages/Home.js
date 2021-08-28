import { CardMovies, CardTvseries, Footer, NavbarMain } from "../components";
import { gql, useQuery } from "@apollo/client";

const FETCH_ALL_DATA = gql`
  query FetchAllData {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      taqs
    }
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

const Home = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_DATA);
  let movies = [];
  let tvseries = [];
  if (data) {
    movies = data.movies;
    tvseries = data.tvseries;
  }
  return (
    <div>
      <div className="flex flex-col bg-gray-300 relative mb-5">
        <img
          className="object-cover absolute top-0 bottom-0 h-full z-0 w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/60dd20cf-7213-48a1-b253-6484d62d96a8/IN-en-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="w-full left-0 right-0 absolute top-0 bottom-0 h-full z-10 opacity-60 bg-black"></div>
        <NavbarMain />
        <div className="flex flex-col justify-center items-center lg:py-32 py-48 z-30 text-white">
          <h1 className="text-4xl px-12 lg:px-0 lg:text-6xl w-full md:w-1/2 font-bold text-center">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="px-12 text-xl md:text-3xl text-center mt-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="px-12 text-xl text-center mt-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="px-12 lg:px-0 flex flex-col lg:flex-row w-full lg:w-1/2 h-32 lg:h-16 pt-4 mb-10">
            <input
              className="flex-grow h-32 px-2 lg:h-16 text-black"
              placeholder="Email address"
            />
            <div className="mx-auto bg-red-600 h-32 mt-3 lg:h-16 lg:mt-0 lg:mx-0.5 flex items-center text-center justify-center w-56 text-white">
              <p className="inline-flex text-2xl">
                Get Started
                <span className="ml-2 p-1 w-6 my-auto">
                  <svg
                    fill="currentColor"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.002 512.002"
                  >
                    <g>
                      <g>
                        <path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                      </g>
                    </g>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {data && <CardMovies movies={movies} />}
      {data && <CardTvseries tvseries={tvseries} />}
      <Footer />
    </div>
  );
};

export default Home;
