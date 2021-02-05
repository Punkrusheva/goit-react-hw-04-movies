import React, { Component } from 'react';
import Axios from 'axios';
import styles from './Cast.module.css';

export default class Cast extends Component {
   state = {
       credits: '',
    };

    async componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=892c9b9f1c704261a0f515abd746d990`);
        this.setState({ credits: response.data.cast });
        //console.log('credits:', this.state.credits);
    };

    render() {
       const {credits} = this.state;
        return (
            <>
                <hr/>
                {credits.length > 0 && (
                    <ul className={styles.cast}>
                        {credits.map(credit => (
                            <li className={styles.item} key={credit.id}>
                                <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}?api_key=892c9b9f1c704261a0f515abd746d990`} alt={credit.name} />
                                <div className={styles.name}>{credit.name}</div>
                                <div className={styles.character}>Character: {credit.character}</div>
                                <hr/>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        )
    };
}