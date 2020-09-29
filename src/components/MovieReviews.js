import React from 'react'



function MovieReviews(props) {
const { byline, display_title, summary_short } = props

    return (
        <div className="review-list">
                <div>{byline} {display_title} {summary_short}</div>
         </div>
    )
}



export default MovieReviews


