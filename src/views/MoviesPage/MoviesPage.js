import React, { Component } from 'react';
import styles from './MoviesPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class MoviesPage extends Component {
    state = {
        searchQuery: '',
    };
   
    handleSearchChange = event => {
        this.setState({ searchQuery: event.currentTarget.value });//.trim()
        console.log(event.currentTarget.value);
        console.log(this.state.searchQuery);
    };
        
    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchQuery === '') {
            toast.error('Empty request');
            return;
        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        return (
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                     <input
                        type='text'
                        name='search'
                        autoComplete="off"
                        autoFocus
                        onChange={this.handleSearchChange}
                        value={this.state.searchQuery}
                        className={styles.input}
                        placeholder='Search movies'
                    />
                    <button type="submit" className={styles.button}>
                    <span className={styles.label}
                        aria-label='Search'>Search
                    </span>
                    </button>
                </form>
        )
    }
}
