import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const Dasboard = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-16 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://wallpaperaccess.com/full/329583.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-300 mt-6 mb-3">
                Movies Dashboard
              </h2>
              <p className="leading-relaxed text-base">
                Do create, update, delete data movies on this page. Login to
                mutate data for a row of movies lists. Click login for next
                step..
              </p>
              <Link
                to="/dashboard/movies"
                className="flex mx-auto mt-6 text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 rounded w-20"
              >
                Login
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://www.teahub.io/photos/full/140-1404362_goblin-a-korean-drama-shown-on-tv-goblin.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-300 mt-6 mb-3">
                TV Series Dashboard
              </h2>
              <p className="leading-relaxed text-base">
                Do create, update, delete data tv series on this page. Login to
                mutate data for a row of tv series lists. Click login for next
                step..
              </p>
              <Link
                to="/dashboard/tvseries"
                className="flex mx-auto mt-6 text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 rounded w-20"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dasboard;
