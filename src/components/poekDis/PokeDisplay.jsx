import React from 'react'
import './PokeDisplay.css'
import { Link } from 'react-router-dom'
function PokeDisplay({imgs,name,id}) {
  return (
    <Link to={`/about/${id}`}>
    <div className='dis'>
      <p>{name}</p>

      <img src={imgs} alt="" />
     
    </div>
    </Link>
  )
}

export default PokeDisplay
