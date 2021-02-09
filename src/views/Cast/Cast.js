import React, { Component } from 'react';
import styles from './Cast.module.css';
import API from "../../services/movies-api";
import Load from "../../components/Loader/Loader";
import CastItem from "../../components/CastItem/CastItem";

export default class Cast extends Component {
   state = {
       credits: '',
       loading: false,
       error: null,
    };

    async componentDidMount() {
        
        try {
            this.setState({ loading: true });
            const movieId = this.props.match.params.movieId;
            const response = await API.showCast(movieId);
            this.setState({ credits: response.data.cast });
            }
        catch (error){ this.setState({ error: error }) }
        finally { this.setState({ loading: false }); }
    };

    render() {
        const { credits, error } = this.state;
        return (
            <>
                <hr/>
                {error && <h1>{error.message}</h1>}
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
                            <CastItem credit={credit} key={credit.id}></CastItem>
                        ))}
                    </ul>
                )}
                {credits.length === 0 && <p>We don't have any information about actors of this movie</p>}
            </>
        )
    };
}