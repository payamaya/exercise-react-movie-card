import { useState } from 'react'
import { AddMovie } from './AddMovie'
import { MovieCard } from './MovieCard'
import { IAddMovie } from '../interfaces'

import '../css/MovieList.css'
export function MovieList() {
  const [movies, setMovies] = useState<IAddMovie[]>([])

  const addMovie = (newMovie: IAddMovie) => {
    setMovies([...movies, newMovie])
  }

  return (
    <section className='container'>
      <h1>This is the App component</h1>
      <AddMovie addMovies={addMovie} />
      <section className='card-container'>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </section>
    </section>
  )
}
