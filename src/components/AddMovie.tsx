import { ChangeEventHandler, useState } from 'react'
import { IAddMovie, IOption } from '../interfaces'
import '../css/AddMovie.css'
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

  const handleTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Title:', title)
    setTitle(e.target.value)
  }
  const handleRange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Range:', range)
    setRange(parseInt(e.target.value))
  }
  // const handleMinRange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setMin(parseInt(e.target.value))
  // }
  // const handleMaxRange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setMax(parseInt(e.target.value))
  // }
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log('Select:', select)
    setSelect(e.target.value)
  }
  const handleTextArea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    console.log('TextArea:', textarea)
    setTextArea(e.target.value)
  }
  const handleClear = () => {
    setTitle('')
    setRange(1)
    setTextArea('')
    setSelect('drama')
    console.log('Cleared:', title, range, select, textarea)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // setTitle(title)
    // setRange(range)
    // setSelect(select)
    // setTextArea(textarea)

    // console.log('Title:', title)
    // console.log('range:', range)
    // console.log('select:', select)
    // console.log('textarea:', textarea)
    const newMovie: IAddMovie = {
      title,
      rating: range,
      select,
      textarea,
    }
    addMovies(newMovie)
    handleClear()

    // console.log('All:', title, range, select, textarea)
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
          id='film'
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
        <button className='btn' type='reset' onClick={handleClear}>
          Clear
        </button>
        <button className='btn' type='submit'>
          Add
        </button>
      </section>
    </form>
  )
}
