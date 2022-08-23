import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);
  const favoriteMovies = [];
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      { !favoriteMovies.length ? (
        <Typography variant="h5">
          Add movies to you Favorites or Watchlist 🎬
        </Typography>
      ) : (
        <Box>
          Your Favorite Movies
        </Box>

      )}
    </Box>
  );
}

export default Profile;
