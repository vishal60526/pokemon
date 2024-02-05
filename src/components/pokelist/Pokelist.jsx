import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Pokelist.css'
import PokeDisplay from '../poekDis/PokeDisplay'

function Pokelist() {
  
  const[api,setapi]=useState('https://pokeapi.co/api/v2/pokemon')
  const[nextapi,setnextapi]=useState('')
const[prevapi,setprevapi]=useState('')

  const[loading,setLoading]=useState(true)
  const[pokemanl, setPokemanl]=useState([])
  async function downloadlist() {
    const response = await axios.get(api)
    console.log(response.data);
setnextapi(response.data.next);
setprevapi(response.data.previous);
  const responseName=response.data.results;

const indlist=responseName.map((item)=>axios.get(item.url))
const datas=await axios.all(indlist)
setLoading(false)
const res=datas.map((pokedata)=>{
  const pdata=pokedata.data
  return{
    name:pdata.name,
    imgs:pdata.sprites.back_shiny,
    id:pdata.id
  }
})
setPokemanl(res);

  }

  useEffect(() => {
    downloadlist()
  },[api]
  
  )
 function changeNext(){

 }
  return (
    <>
    <span>{(loading)? 'LOADING':'COMPLETED'}</span>
    <div className='styles'>
     

{pokemanl.map((p)=>(<PokeDisplay imgs={p.imgs} name={p.name} key={p.id} id={p.id} />))}

    </div>
    <div className='btn'>
    <button disabled={prevapi==null} className='btns' type="button" onClick={()=>setapi(prevapi)}>prev</button>
    <button disabled={nextapi==null} className='btns' type="button" onClick={()=>setapi(nextapi)}>next</button>
    </div>
</>
  )
}

export default Pokelist
