import { useState } from 'react'
import Pokeman from './components/pokeman/Pokeman'
import './App.css'
import Searchs from './components/search/Searchs'
import Pokelist from './components/pokelist/Pokelist'
function App() {


  return (
    <>
      <span className='divs'>

        <Pokeman ></Pokeman>
        <Searchs></Searchs>
      </span>
        <Pokelist/>
        
    </>
  )
}

export default App
