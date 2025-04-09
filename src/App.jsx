import { useState } from 'react'
import mangaList from './data/Article'


function App() {
  console.log(mangaList);

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
