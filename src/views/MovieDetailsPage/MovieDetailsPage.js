import React, { Component } from 'react';
import Axios from 'axios';
import styles from './MovieDetailsPage.module.css';
import { Link, NavLink } from "react-router-dom";

export default class MovieDetailsPage extends Component {
    state = {
        movieId: '',
        img: '',
        data: '',
        original_title: '',
        vote_average: '',
        overview: 0,
        genres: '',
    };

    async componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=892c9b9f1c704261a0f515abd746d990`);
        console.log(response);
        this.setState({img: `https://image.tmdb.org/t/p/w500/${response.data.poster_path}?api_key=892c9b9f1c704261a0f515abd746d990` });
        this.setState({ data: response.data.release_date.slice(0, 4) });
        this.setState({ original_title: response.data.original_title });
        this.setState({ vote_average: response.data.vote_average * 10 });
        this.setState({ overview: response.data.overview });
        this.setState({ genres: response.data.genres.map((genre) => (genre.name )) });
        this.setState({ movieId: movieId });
        console.log(response.data.genres[0].name);
    };

    render() {
        const { data, original_title, vote_average, overview, genres, img, movieId } = this.state;

        return (
            <>
                <Link to={`/`}>Go back</Link>
                <br/>
                <img className={styles.img} src={img} alt=""/>
                <div className={styles.details}>
                    <h1 className={styles.title}>Name</h1><p>{original_title} ({data})</p>
                    <div className={styles.score}>User Score: {vote_average}%</div>
                    <div className={styles.overview}>Overview:</div><p>{overview}</p>
                    <div className={styles.genres}>Genres</div><p>{genres}</p>
                </div>
                
                <hr />
                <h2>Additional information</h2>
                <ul className={styles.detailsMenu}>
                    <li className={styles.detailsMenuItem}>
                        <NavLink exact to={`/movies/${movieId}/cast`}
                            className={styles.detailsLink}
                            activeClassName={styles.navLinkActive}>Cast</NavLink>
                    </li>
                    <li className={styles.detailsMenuItem}>
                        <NavLink to={`/movies/${movieId}/reviews`}
                            className={styles.detailsLink}
                            activeClassName={styles.navLinkActive}>Reviews</NavLink>
                    </li>
                </ul>               
            </>
        )
    };
}
/*<p>{genrees.map((genre) => {genre.name})}</p>*/
