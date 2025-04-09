import { useState } from 'react'
import mangaList from './data/Article'


function App() {


  const [mangaArray, setMangaArray] = useState(mangaList);
  const [newManga, setNewManga] = useState('');

  const addManga = event => {
    event.preventDefault();
    const newMangaList = [...mangaArray, newManga];
    setMangaArray(newMangaList);
    setNewManga('');
  }

  const deleteManga = (indexToDelete) => {
    const newMangaArray = mangaArray.filter((manga, index) => indexToDelete !== index)
    setMangaArray(newMangaArray);
  }

  return (
    <>
      <div>
        <h1>Lista Manga</h1>
      </div>
      <form onSubmit={addManga}>

        <ul>
          {mangaArray.map((manga, index) =>
            <li key={index}>
              <h3>{manga}</h3>
              <i className="fa-solid fa-trash" type='button' onClick={deleteManga}> Delete Manga</i>
            </li>)
          }

        </ul>
        <hr />

        <input type="text"
          // placeholder='Aggiungi'
          onChange={event => setNewManga(event.target.value)}
        />
        <button type="submit">Aggiungi Manga</button>
      </form>
    </>
  )
}

export default App
