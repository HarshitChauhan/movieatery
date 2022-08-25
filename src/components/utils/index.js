/* eslint-disable camelcase */
import { Box, Typography } from '@mui/material';
import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

// Generating Auth Token
export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const authToken = data.request_token;
    if (data.success) {
      localStorage.setItem('request_token', authToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${authToken}?redirect_to=${window.location.origin}/movieatery/approved`;
    }
  } catch (error) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h3">
          An error has occured while generating auth token 🚫.
        </Typography>
      </Box>
    );
  }
};

// Creating Session ID
export const createSessionId = async () => {
  const authToken = localStorage.getItem('request_token');
  if (authToken) {
    try {
      const { data: { session_id } } = await moviesApi.post('authentication/session/new', {
        request_token: authToken,
      });
      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      return (
        <Box display="flex" justifyContent="center" mt="20px">
          <Typography variant="h3">
            An error has occured while creating Session Id 🚫.
          </Typography>
        </Box>
      );
    }
  }
};
