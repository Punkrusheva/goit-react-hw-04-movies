import React, { Component } from 'react';
import styles from './MoviesPage.module.css';
import SearchBox from "../../components/SearchBox/SearchBox";
import Axios from 'axios';
import getQueryParams from "../../utils/getQueryParams";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default class MoviesPage extends Component {
    state = {
        searchResult: [],
    };
    
    async componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);
        if (query) {
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=892c9b9f1c704261a0f515abd746d990&query=${query}`);
        this.setState({ searchResult: response.data.results });}
    };

    async componentDidUpdate(prevProps, pervState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
        
        if (prevQuery !== nextQuery) {
           const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=892c9b9f1c704261a0f515abd746d990&query=${nextQuery}`);
            this.setState({ searchResult: response.data.results });
            if (this.state.searchResult.length === 0) {
                toast.error('Nothing found');
      return
            }
        } 
     }
    
    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { searchResult } = this.state;
        return (
            <>
                <SearchBox onSubmit={this.handleChangeQuery} />
                {searchResult.length > 0 ?
                    <ul className={styles.moviesList}>
                        {searchResult.map((result) => (<li key={result.id} className={styles.item}>
                            <Link to={{pathname: `movies/${result.id}`, state: {from: this.props.location}}}>
                                {result.title}</Link></li>))}

                    </ul> : null }
                
        <ToastContainer autoClose={2000}/>
            </>    
        )
    }
}