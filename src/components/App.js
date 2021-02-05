import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import Cast from "../views/Cast/Cast";
import Reviews from "../views/Reviews/Reviews";
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';
import routes from "../routes";


const App = () =>   
<div>  
  <header>
    <Navigation />
  </header>
  <hr/>
  <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.moviesPage} exact component={MoviesPage} />
      <Route path={routes.movieDetailsPage}  component={MovieDetailsPage} />
      <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} />
      <Redirect to={routes.home} />
  </Switch>
</div>
   
    
 export default App;

 /* 
 '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews

Мой ключ:
API_KEY = 892c9b9f1c704261a0f515abd746d990*/