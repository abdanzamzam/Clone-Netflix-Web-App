import {
  AddMovie,
  DashMovies,
  DashTvseries,
  DetailMovie,
  DetailTvseris,
  EditMovie,
  EditSeris,
  Favorites,
  Home,
  Movies,
  Tvseries,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dasboard from "./pages/Dashboard";
import AddTvseris from "./pages/AddTvseris";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <DetailMovie />
        </Route>
        <Route path="/tvseris/:id">
          <DetailTvseris />
        </Route>
        <Route path="/tvseries">
          <Tvseries />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/favorites/:id">
          <Favorites />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/dashboard/movies/edit/:id">
          <EditMovie />
        </Route>
        <Route path="/dashboard/movies/add">
          <AddMovie />
        </Route>
        <Route path="/dashboard/movies">
          <DashMovies />
        </Route>
        <Route path="/dashboard/tvseries/edit/:id">
          <EditSeris />
        </Route>
        <Route path="/dashboard/tvseries/add">
          <AddTvseris />
        </Route>
        <Route path="/dashboard/tvseries">
          <DashTvseries />
        </Route>
        <Route path="/dashboard">
          <Dasboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
