import { useQuery } from "@apollo/client";
import { Footer, NavbarDashboardTvseris, TableTvseries } from "../components";
import { FETCH_TVSERIES } from "../graphql";

const DashTvseries = () => {
  const { data, loading, error } = useQuery(FETCH_TVSERIES);
  let tvseries = [];
  if (data) {
    tvseries = data.tvseries;
  }

  return (
    <div>
      {!loading && <NavbarDashboardTvseris />}
      {!loading && <TableTvseries tvseries={tvseries} />}
      {!loading && <Footer />}
    </div>
  );
};

export default DashTvseries;
