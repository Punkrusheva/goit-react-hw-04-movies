import React, { Component } from 'react';
import Axios from 'axios';
import styles from './MovieDetailsPage.module.css';
import { Link, NavLink } from "react-router-dom";
import { showDetails } from "../../services/movies-api";

export default class MovieDetailsPage extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {//`https://developers.themoviedb.org/3/movies/get-movie-details/${movie.id}`
        const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=892c9b9f1c704261a0f515abd746d990');
        this.setState({ movies: response.data.results });
        console.log(this.state.movies);
    };

    onClick(e) {

    console.log('Click', e.target.innerHTML);
    };

    render() {
       // const {movies} = this.state;

       //console.log('match', match.params.movieId);
        return (
            <>
                <Link to={`/`}>Go back</Link>
                <br/>
                <img className={styles.img} src="" alt=""/>
                <div className={styles.details}>
                    
                    <h1 className={styles.title}>Name</h1><p>Name</p>
                    <div className={styles.score}>User Score  User Score</div>
                    <div className={styles.overview}>Overview</div><p>Overview</p>
                    <div className={styles.ganres}>Ganres</div><p>Ganres</p>
                </div>
                
                <hr />
                <h2>Additional information</h2>
                <ul className={styles.detailsMenu}>
                    <li className={styles.detailsMenuItem}>
                        <NavLink exact to={`/movies/{movie.id}/cast`}
                            className={styles.detailsLink}
                            activeClassName={styles.navLinkActive}>Cast</NavLink>
                    </li>
                    <li className={styles.detailsMenuItem}>
                        <NavLink to={`/movies/{movie.id}/reviews`}
                            className={styles.detailsLink}
                            activeClassName={styles.navLinkActive}>Reviews</NavLink>
                    </li>
                </ul>               
            </>
        )
    };
}
/* <ul className={styles.moviesList}>
                    {movies.map((movie) => (<li key={movie.id} className={styles.item} onClick={this.onClick}>
                        <Link to={`/movies/${movie.id}`}>
                        {movie.title}</Link></li>))}
                
            </ul>*/