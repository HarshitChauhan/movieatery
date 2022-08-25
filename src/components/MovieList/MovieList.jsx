import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

function MovieList({ movies, numberOfMovies }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.movieContainer}>
      {
            movies.results.slice(0, numberOfMovies).map((movie, idx) => (
              <Movie key={idx} movie={movie} idx={idx} />
            ))
        }
    </Grid>

  );
}

export default MovieList;
