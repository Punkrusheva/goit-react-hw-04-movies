import React, { Component } from 'react';
import styles from './Reviews.module.css';
import API from "../../services/movies-api";
import Load from "../../components/Loader/Loader";

export default class Reviews extends Component {
   state = {
       reviews: '',
       loading: false,
    };

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const movieId = this.props.match.params.movieId;
            const response = await API.showReviews(movieId);
            this.setState({ reviews: response.data.results });
              }
        catch (error) {
            this.setState({ error: error })
        }
        finally { this.setState({ loading: false }); }
    };

    render() {
       const {reviews, error} = this.state;
        return (
            <>
                <hr/>
                {error && <h1>Error, try again later</h1>}
                {this.state.loading &&
                    <Load
                        type="ThreeDots"
                        color="#3f51b5"
                        height={45}
                        width={45}
                        timeout={6000}
                    />}
                {reviews.length > 0 && (
                    <ul className={styles.reviews}>
                        {reviews.map(review => (
                            <li className={styles.item} key={review.id}>
                                <div className={styles.author}>Author: {review.author}</div>
                                <div className={styles.content}>{review.content}</div>
                                <hr/>
                            </li>
                        ))}
                    </ul>
                )}
                {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
            </>
        )
    };
}