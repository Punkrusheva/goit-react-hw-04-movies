import React, { Component } from 'react';
import Axios from 'axios';
import styles from './HomePage.module.css';
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=892c9b9f1c704261a0f515abd746d990');
        this.setState({ movies: response.data.results });
    };

    onClick(e) {
        console.log('Click', e.target.innerHTML);
    };

    render() {
        const { movies } = this.state;
        
        return (
            <>
                <h1 className={styles.title}>Trending today</h1>
                <ul className={styles.moviesList}>
                    {movies.map((movie) => (<li key={movie.id} className={styles.item}>
                        <Link to={`movies/${movie.id}`}>
                        {movie.title}</Link></li>))}

            </ul>
            </>
        )
    };
}