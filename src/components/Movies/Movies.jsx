import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

function Movies() {
  const [pageNumber, setPageNumber] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, pageNumber, searchQuery });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No movies at this time.
        </Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h3">
          An error has occured🚫.
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination currentPage={pageNumber} setPage={setPageNumber} totalPages={data.total_pages} />
    </div>
  );
}

export default Movies;
