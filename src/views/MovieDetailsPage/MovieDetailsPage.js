import React, { Component } from 'react';
import Axios from 'axios';
import styles from './MovieDetailsPage.module.css';
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';

export default class MovieDetailsPage extends Component {
    state = {
        movieId: '',
        img: '',
        data: '',
        title: '',
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
        this.setState({ title: response.data.title });
        this.setState({ vote_average: response.data.vote_average * 10 });
        this.setState({ overview: response.data.overview });
        this.setState({ genres: response.data.genres.map((genre) => (genre.name+" ")) });
        this.setState({ movieId: movieId });
    };

    render() {
        const { data, title, vote_average, overview, genres, img, movieId } = this.state;
        return (
            <>
                <Link className={styles.linkBack} to={`/`}><IoIosArrowRoundBack/>Go back</Link>
                <br />
                {title && (<>
                <img className={styles.img} src={img} alt={title}/>
                <div className={styles.details}>
                    <h1 className={styles.title}>{title} ({data})</h1>
                    <div className={styles.score}>User Score: {vote_average}%</div>
                    <div className={styles.overview}>Overview</div><p>{overview}</p>
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
                )}           
            </>
        )
    };
}
