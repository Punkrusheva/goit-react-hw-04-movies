import Axios from 'axios';

const showDetails = () => {
    return Axios('https://api.themoviedb.org/3/trending/movie/day?api_key=892c9b9f1c704261a0f515abd746d990').then(res => res.json())
};

export default { showDetails };