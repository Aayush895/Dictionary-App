import { useState } from 'react'
import styles from './Search.module.css'

function Search() {
  const [inputValue, setinputValue] = useState('')
  const [isSubmit, setisSubmit] = useState(false)

  const handleInput = (e) => {
    setinputValue(e.target.value)
  }

  const handleFetch = async (e) => {
    e.preventDefault()
    if (inputValue) {
      const getData = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      )

      const data = await getData.json()
      console.log(data)
    }
    setisSubmit(true)
  }

  return (
    <>
      <div id={styles.outerContainer}>
        <form action="" onSubmit={handleFetch}>
          <input
            name="search"
            type="input"
            value={inputValue}
            placeholder="Search for any word..."
            onChange={handleInput}
          />
        </form>

        <img src="/images/icon-search.svg" alt="text-search" />
      </div>

      {isSubmit && !inputValue ? (
        <p style={{ color: '#ff5252', textAlign: 'center', marginTop: '1rem' }}>
          Whoops, cannot be empty...
        </p>
      ) : null}
    </>
  )
}
export default Search
