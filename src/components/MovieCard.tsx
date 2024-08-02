import { ReactElement } from 'react'
import { IAddMovie } from '../interfaces'

interface IAddMovieProps {
  movie: IAddMovie
}
export function MovieCard({ movie }: IAddMovieProps): ReactElement {
  const imageUrl = movie.image ? URL.createObjectURL(movie.image) : ''
  return (
    <section className='card'>
      <div className='card-title'>
        <h1 className='title'>{movie.title}</h1>
        <div className='genre-wrapper'>
          <span>{movie.rating}/5</span>
          <h3 className='genre'>{movie.select}</h3>
        </div>
      </div>
      {movie.image && (
        <figure className='image-upload'>
          <img
            className='image-upload'
            src={imageUrl}
            alt='Movie'
            style={{ width: '100px', height: 'auto' }}
          />
        </figure>
      )}
      <p className='description'>{movie.textarea}</p>
    </section>
  )
}
