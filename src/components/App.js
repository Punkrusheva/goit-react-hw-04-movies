import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';
import routes from "../routes";


const App = () =>   
<Layout>  
  <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.moviesPage} exact component={MoviesPage} />
      <Route path={routes.movieDetailsPage}  component={MovieDetailsPage} />
      <Redirect to={routes.home} />
  </Switch>
</Layout>

export default App;