import { useState } from 'react'
import mangaList from './data/Article'


function App() {
  console.log(mangaList);

  const [mangaArray, setMangaArray] = useState(mangaList);
  const [newManga, setNewManga] = useState('');
  console.log(mangaArray);
  console.log(newManga);

  return (
    <>
      <ul>
        <li>{mangaList[0]}</li>
        <li>{mangaList[1]}</li>
        <li>{mangaList[2]}</li>
        <li>{mangaList[3]}</li>
      </ul>
    </>
  )
}

export default App
