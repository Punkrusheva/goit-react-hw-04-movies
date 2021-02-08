import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import Axios from 'axios';
import routes from "../../routes";
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast.js' /*webpackChunkName: 'cast' */));
const Reviews = lazy(() => import('../Reviews/Reviews.js' /*webpackChunkName: 'reviews' */));

export default class MovieDetailsPage extends Component {
    state = {
        movieId: '',
        img: '',
        data: '',
        title: '',
        vote_average: '',
        overview: 0,
        genres: '',
        loading: false,
    };

    async componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=892c9b9f1c704261a0f515abd746d990`);
        this.setState({img: `https://image.tmdb.org/t/p/w500/${response.data.poster_path}?api_key=892c9b9f1c704261a0f515abd746d990` });
        this.setState(
            {
                data: response.data.release_date.slice(0, 4),
                title: response.data.title,
                vote_average: response.data.vote_average * 10,
                overview: response.data.overview,
                genres: response.data.genres.map((genre) => (genre.name + " ")),
            }
        );
    };

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state && state.from) {
        return this.props.history.push(state.from);
    } 
    this.props.history.push(routes.shows);
  };
    
    render() {
        const { data, title, vote_average, overview, genres, img } = this.state;
        return (
            <>                
                <button className={styles.linkBack} onClick={this.handleGoBack} ><IoIosArrowRoundBack/>Go back</button>
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
                            <NavLink exact to={{ pathname: `${this.props.match.url}/cast`, state: { from: this.props.location }}}
                            className={styles.detailsLink}
                            activeClassName={styles.detailsLinkActive}>Cast</NavLink>
                    </li>
                    <li className={styles.detailsMenuItem}>
                            <NavLink to={{ pathname: `${this.props.match.url}/reviews`, state: { from: this.props.location }}}
                            className={styles.detailsLink}
                            activeClassName={styles.detailsLinkActive}>Reviews</NavLink>
                    </li>
                    </ul>
                    <Suspense fallback={<h1>Загружаем...</h1>}>
                        <Route path={routes.cast} component={Cast} />
                        <Route path={routes.reviews} component={Reviews} />
                    </Suspense>
                </>
                )}           
            </>
        )
    };
}