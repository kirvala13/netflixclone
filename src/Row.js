import movieTrailer from 'movie-trailer'
import React, { useEffect, useRef, useState } from 'react'
import { useScrollTo } from 'react-use-window-scroll'
import YouTube from 'react-youtube'
import axios from './axios'
import "./row.css"

function Row({title,fetchUrl,isLargRow}) {
    const[movies,setMovies]=useState([])
    const[trailerUrl,setTrailerUrl]=useState("");

     const baseUrl="https://image.tmdb.org/t/p/w500/";
     const opts ={
       height:"390",
       width:"100%",
       playerVars:{
         autoplay:1,
       },
     }
    useEffect(()=>{
       async function fetchData(){
         const request = await axios.get(fetchUrl)
         setMovies(request.data.results)
         return request
       }
     fetchData();
    },[fetchUrl])
const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    movieTrailer(movie?.name || "")
    .then((url)=>{
      const urlParams=new URLSearchParams(new URL(url).search);
    // setTrailerUrl(urlParams.get("v"))
    console.log(urlParams.get("v"))
    })
  }
}
  return (
    <div className='row'>
        <h2>{title}</h2>
        
        <div className='row_posters' >
            {movies.map(movie=>{
               return <img
                onClick={()=>handleClick(movie)}
               className={`row_poster ${isLargRow && "row__posterLarge"}`} key={movie.id} 
               src={`${baseUrl}${isLargRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
            })}
        </div>
      {trailerUrl&& <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row