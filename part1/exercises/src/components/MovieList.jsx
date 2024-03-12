import React from 'react';
import classes from './MovieList.module.css';



class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "The Lord of the Rings", "The Beekeeper", "The Perfect Storm"];
      return (
      <div>
         <h3 className={classes.MovieHeading}>Movies I Watched This month</h3>
      <div className={classes.movieText}>
         <ol>
            <li className={classes.movieText}>{movies[0]}</li>
            <li className={classes.movieText}>{movies[1]}</li>
            <li className={classes.movieText}>{movies[2]}</li>    
            <li className={classes.movieText}>{movies[3]}</li>
            <li className={classes.movieText}>{movies[4]}</li>
         </ol>
         </div>
      </div>
      );
   }
}
export default MovieList;