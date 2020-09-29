import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export class LatestMovieReviewsContainer extends Component {

    state ={
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({
            reviews: [...this.state.reviews, data.results]
        }))
    }

    render() {
       const moviesArray = this.state.reviews.map(r => <MovieReviews review={r.byline, r.display_title, r.summary_short}/>)
        return (
            <div className="latest-movie-reviews">
                {moviesArray}
             </div>
        )
    }
}

export default LatestMovieReviewsContainer


// Code LatestMovieReviewsContainer Here
