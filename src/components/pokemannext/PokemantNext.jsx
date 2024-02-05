import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


function PokemantNext() {
  const[pokeD,setPokeD]=useState([])
  const {id}=useParams()
 async function donwloadP(){
const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
console.log(response.data);
setPokeD({
 name:response.data.name,
 image:response.data.sprites.back_shiny,
 weight:response.data.weight,
 }
)
 }
 useEffect(()=>{
  donwloadP();
 },[])
  return (
  <div>
    
    <p>{pokeD.name}</p>
    <div>
      <img src={pokeD.image} alt="" />
    </div>
    <p>{pokeD.weight}</p>
  </div>
  )
}

export default PokemantNext
