import React, { useState } from 'react'
import { Box, CollapseButton, Header, Main, MovieDetails, Status } from './components'
import { MoviesProvider } from './context/MoviesProvider'
import MoviesList from './components/MoviesList/MoviesList'
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList'

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const setSelectedMovieHandler = (movie) => setSelectedMovie(curr => curr && curr.imdbID === movie.imdbID ? null : movie)
  const closeSelectedMovieHandler = () => setSelectedMovie(null);
  return (
    <MoviesProvider>
      <Header />
      <Main>
        <Box>
          <MoviesList setSelectedMovieHandler={setSelectedMovieHandler} />
        </Box>
        <Box>
          {
            selectedMovie &&
            <>
              <MovieDetails selectedMovie={selectedMovie} onCloseSelectedMovie={closeSelectedMovieHandler} />
              <CollapseButton type='back' onClick={closeSelectedMovieHandler}>&larr;</CollapseButton>
            </>
          }
          {
            !selectedMovie &&
            <>
              <Status />
              <WatchedMoviesList />
            </>
          }
        </Box>
      </Main>
    </MoviesProvider>
  )
}

export default App