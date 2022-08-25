/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// const pageNumber = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, pageNumber, searchQuery }) => {
        // Get Movies by Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${pageNumber}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${pageNumber}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Search
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&page=${pageNumber}&api_key=${tmdbApiKey}`;
        }

        // Get Popular Movies for HomePage
        return `movie/popular?page=${pageNumber}&api_key=${tmdbApiKey}`;
      },
    }),

    // Get movie Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get movie by Id
    getMovie: builder.query({
      query: (id) => `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    // Get user specific recommendate movie lists
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
    // Get actor details by Id
    getActorDetails: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    // Get movie by actor id
    getMoviesByActorId: builder.query({
      query: ({ id, pageNumber }) => `discover/movie?with_cast=${id}&page=${pageNumber}&api_key=${tmdbApiKey}`,
    }),

    // Get favorite/watchlist movies
    getList: builder.query({
      query: ({ listName, accountId, sessionId, pageNumber }) => `/account/${accountId}/${listName}?page=${pageNumber}&session_id=${sessionId}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
