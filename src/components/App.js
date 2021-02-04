import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Navigation from './Novigation/Novigation';
import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';


const App = () =>   
<div>  
  <header>
    <Navigation />
    </header>
    <hr/>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:movieId"  component={MovieDetailsPage} />
      <Route path="/movies/{movie.id}/cast" component={MovieDetailsPage} />
      <Route path="/movies/{movie.id}/reviews" component={MovieDetailsPage} />
      <Redirect to="/" />
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