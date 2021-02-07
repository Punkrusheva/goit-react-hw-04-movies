import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "../routes";
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';

const HomePage = lazy(() => import('../views/HomePage/HomePage.js' /*webpackChunkName: 'home-page' */));

const MoviesPage = lazy(() => import('../views/MoviesPage/MoviesPage.js' /*webpackChunkName: 'movies-page' */));

const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage/MovieDetailsPage.js' /*webpackChunkName: 'movie-details-page' */));

const App = () =>   
  <Layout>  
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.moviesPage} exact component={MoviesPage} />
        <Route path={routes.movieDetailsPage}  component=    {MovieDetailsPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </Layout>

export default App;