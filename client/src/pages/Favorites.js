import { useReactiveVar } from "@apollo/client";
import { CardFavorite, Footer, Navbar } from "../components";
import { favoritesVar } from "../graphql/reactiveVariables";

const Favorites = () => {
  const favorites = useReactiveVar(favoritesVar);

  return (
    <div>
      <Navbar />
      <CardFavorite favorites={favorites} />
      <Footer />
    </div>
  );
};

export default Favorites;
