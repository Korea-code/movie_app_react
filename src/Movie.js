import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({ year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index)=>(
                <li key={index} className="genres_genre">{genre}</li>
            ))}</ul>
            <p className="movie__summery">{summary.slice(0, 200)}{summary.length > 200 ? <span>...</span> : <span></span>}</p>
        </div>
    </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Movie;