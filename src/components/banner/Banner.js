import React, { useEffect, useState } from 'react'
import { imageURL } from '../../constants/Constants'
import '../banner/Banner.css'
import { API_KEY } from '../../constants/Constants'
import axios from '../../Axios'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
setMovie(response.data.results[0])
  })
  
  }, [])
  
  return (
    <div 
    className='banner' style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path :""})`}}>
       <div className='content' >
           <h1 className='title'>{movie ? movie.title :""}  </h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{movie ? movie.overview:""}</h1>
       </div>
   
   </div>

  )
}

export default Banner
