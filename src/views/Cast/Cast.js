import React, { Component } from 'react';
import styles from './Cast.module.css';
import API from "../../services/movies-api";
import Load from "../../components/Loader/Loader";

export default class Cast extends Component {
   state = {
       credits: '',
       loading: false,
    };

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const movieId = this.props.match.params.movieId;
            const response = await API.showCast(movieId);
            this.setState({ credits: response.data.cast });
            }
        catch (error) {
            this.setState({ error: error })
        }
        finally { this.setState({ loading: false }); }
    };

    render() {
        const { credits, error } = this.state;

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