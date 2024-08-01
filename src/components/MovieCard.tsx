import { ReactElement } from 'react'
import { IAddMovie } from '../interfaces'
import '../css/MovieCard.css'
interface IAddMovieProps {
  movie: IAddMovie
}
export function MovieCard({ movie }: IAddMovieProps): ReactElement {
  return (
    <section className='card'>
      <div className='card-title'>
        <h1 className='title'>{movie.title}</h1>
        <span>{movie.rating}/5</span>
        <h3 className='genre'>{movie.select}</h3>
      </div>
      <p>{movie.textarea}</p>
    </section>
  )
}
