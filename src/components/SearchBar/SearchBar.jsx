import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

function SearchBar() {
  const pageNumber = 1;
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query, pageNumber));
      setQuery('');
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        placeholder="Search Movies"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
