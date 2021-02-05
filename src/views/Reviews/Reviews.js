import React, { Component } from 'react';
import Axios from 'axios';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
   state = {
       reviews: '',
    };

    async componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=892c9b9f1c704261a0f515abd746d990`);

        this.setState({ reviews: response.data.results });
    };

    render() {
       const {reviews} = this.state;
        return (
            <>
                <hr/>
                {reviews.length > 0 && (
                    <ul className={styles.reviews}>
                        {reviews.map(review => (
                            <li className={styles.item} key={review.id}>
                                <div className={styles.author}>{review.author}</div>
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