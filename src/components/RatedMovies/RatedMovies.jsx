import React from 'react';
import { Typography, Box } from '@mui/material';
import Movie from '../Movie/Movie';

function RatedMovies({ title, movies }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box display="flex" flexWrap="wrap" style={{ margin: '20px 0' }}>
        {movies?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
}

export default RatedMovies;
