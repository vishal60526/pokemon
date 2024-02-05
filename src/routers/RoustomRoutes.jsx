import React from 'react'
import { Routes ,Route} from 'react-router'
import App from '../App'
import PokemantNext from '../components/pokemannext/PokemantNext'

function RoustomRoutes() {
  return (
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/about/:id' element={<PokemantNext/>}/>
  </Routes>
  )
}

export default RoustomRoutes
