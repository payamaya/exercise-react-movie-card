import { ChangeEventHandler, useState } from 'react'

export default function AddMovie() {
  const [title, setTitle] = useState<string>('')
  console.log(title)
  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input type='text' onChange={handleInput} />
      {/* HTMLInputElement */}
      <label htmlFor='rating'>Rating</label>
      <input type='range' />
      <label htmlFor='genre'>Genre</label>
      <select name='film' id='film'>
        <option value='drama'>Drama</option>
        <option value='comedy'>Comedy</option>
        <option value='action'>Action</option>
      </select>
      <label htmlFor='description'>Description</label>
      <textarea name='' id=''></textarea>
      <button type='reset'>Clear</button>
      <button type='submit'>Add</button>
    </form>
  )
}
