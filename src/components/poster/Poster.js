import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import {  API_KEY, imageURL } from '../../constants/Constants'
import '../poster/Poster.css'
import YouTube from 'react-youtube'
function Poster(props) {
  const [movie, setMovie] = useState([])
  const [urlid, setUrlId] = useState('')
  useEffect(() => {
   axios.get(props.url).then((response)=>{
    setMovie(response.data.results)
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
axios.get("/movie/"+id+"/videos?api_key="+API_KEY+"&language=en-US").then((data)=>{
  if(data.data.results.length!==0)
  setUrlId(data.data.results[0])
})
  }
  
  return (
    <div className='row'>
    <h2 style={{marginLeft:"20px"}}>{props.title}</h2>
    <div className='posters'>
      {movie.map((data,index)=>{
return(
<img key={index} onClick={()=>handlemovie(data.id)} className={props.issmall ? 'smallposter' : 'poster'} alt='poster' src={imageURL+data.backdrop_path} />
)
      })}
        
       
    </div>
   

    { urlid && <YouTube videoId={urlid.key} opts={opts}  /> }
</div>
  )
}

export default Poster