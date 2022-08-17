import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const pageNumber = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get movies by [type]
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${tmdbApiKey}&page=${pageNumber}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
} = tmdbApi;
