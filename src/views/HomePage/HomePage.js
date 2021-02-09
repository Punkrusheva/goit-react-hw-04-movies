import React, { Component} from 'react';
import styles from './HomePage.module.css';
import API from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Load from "../../components/Loader/Loader";

export default class HomePage extends Component {
    state = {
        movies: [],
        error: null,
        loading: false,
    };

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const response = await API.showTrending();
            this.setState({ movies: response.data.results })
        }
        catch (error) {
            this.setState({ error: error })
        }
        finally { this.setState({ loading: false }); }
    };

    onClick(e) {
        console.log('Click', e.target.innerHTML);
    };

    render() {
        const { movies, error } = this.state;
        
        return (
            <>
                {error && <h1>Error, try again later</h1>}
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}
                {movies.length > 0 ? (
                    <>
                        <h1 className={styles.title}>Trending today</h1>
                        <MovieList movies={movies} state={{ from: this.props.location }}></MovieList>
                    </>
                    
                ) : null}
            </>
        )
    };
}