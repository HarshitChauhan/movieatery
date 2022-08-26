import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.movieContainer}>
      {
            movies.results.slice(startFrom, numberOfMovies).map((movie, idx) => (
              <Movie key={idx} movie={movie} idx={idx} />
            ))
        }
    </Grid>

  );
}

export default MovieList;
