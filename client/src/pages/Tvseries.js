import { CardTvseries, Footer, Navbar } from "../components";
import { useQuery, gql } from "@apollo/client";

const FETCH_TVSERIES = gql`
  query FetchTvseries {
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

const Tvseries = () => {
  const { data } = useQuery(FETCH_TVSERIES);
  let tvseries = [];

  if (data) {
    tvseries = data.tvseries;
  }

  return (
    <div>
      <Navbar />
      <CardTvseries tvseries={tvseries} />
      <Footer />
    </div>
  );
};

export default Tvseries;
