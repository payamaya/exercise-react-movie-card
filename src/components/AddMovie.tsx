import { ChangeEventHandler, useState } from 'react'
import { IAddMovie, IOption } from '../interfaces'

import { ReusableButton } from './ReusableButton'
interface AddMovieProps {
  addMovies: (movie: IAddMovie) => void
}
export function AddMovie({ addMovies }: AddMovieProps) {
  const [title, setTitle] = useState<string>('')
  const [range, setRange] = useState<number>(1)
  // const [min] = useState<number>(1)
  // const [max] = useState<number>(5)
  const [select, setSelect] = useState<string>('drama')
  const [textarea, setTextArea] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  }
  const handleRange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRange(parseInt(e.target.value))
  }
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelect(e.target.value)
  }
  const handleTextArea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTextArea(e.target.value)
  }
  const handleImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }
  }
  const handleClear = () => {
    setTitle('')
    setRange(1)
    setTextArea('')
    setSelect('drama')
    setImage(null)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const newMovie: IAddMovie = {
      title,
      rating: range,
      select,
      textarea,
      image,
    }
    addMovies(newMovie)
    handleClear()
  }

  const options: IOption[] = [
    { lable: 'Drama', value: 'drama', id: 1 },
    { lable: 'Comedy', value: 'comedy', id: 2 },
    { lable: 'Action', value: 'action', id: 3 },
  ]

  return (
    <form className='add-movie' onSubmit={handleSubmit}>
      <section className='input-title'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          onChange={handleTitle}
          required
          value={title}
        />
      </section>
      <section className='rating-section'>
        <label htmlFor='rating'>Rating</label>
        <div className='range-section'>
          <span>{1}</span>
          <input
            className='range'
            id='rating'
            type='range'
            min={1}
            max={5}
            value={range}
            onChange={handleRange}
          />
          <span>{range}</span>
        </div>
      </section>
      <section className='select-section'>
        <label htmlFor='genre'>Genre</label>
        <select
          className='select'
          name='film'
          id='genre'
          onChange={handleSelect}
          required
          value={select}
        >
          {/* <option value='drama'>Drama</option>
          <option value='comedy'>Comedy</option>
          <option value='action'>Action</option> */}
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.lable}
            </option>
          ))}
        </select>
      </section>
      <section className='select-section'>
        <label htmlFor='image' className='custom-file-upload'>
          Upload Image
        </label>
        <input type='file' id='image' accept='image/*' onChange={handleImage} />
      </section>
      <section className='text-area'>
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          onChange={handleTextArea}
          required
          value={textarea}
        ></textarea>
      </section>
      <section className='btn-section'>
        {/* <button className='btn' type='reset' onClick={handleClear}>
          Clear
        </button>
        <button className='btn' type='submit'>
          Add
        </button> */}
        <ReusableButton onClick={handleClear} type='reset' className='btn'>
          Clear
        </ReusableButton>
        <ReusableButton className='btn' type='submit'>
          Add
        </ReusableButton>
      </section>
    </form>
  )
}
