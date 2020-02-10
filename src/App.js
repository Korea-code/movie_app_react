import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie"
import "./App.css";


class App extends React.Component{
  //data of state is changing
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () =>{
    const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  componentDidMount(){
   this.getMovies();
  }
  
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movies =>(
              <Movie 
                key={movies.id} 
                id={movies.id} 
                year={movies.year} 
                title={movies.title} 
                summary={movies.summary} 
                poster={movies.medium_cover_image} 
              />
            ))}
          </div>
        )}
      </section>     
    );
  }
}

export default App;
