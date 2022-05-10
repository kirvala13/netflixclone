import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import "./Banner.css"
function Banner() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchNetflixOriginals);
            setMovies(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)])

            return req
        }
        fetchData()
    }, [])

    console.log(movies)
    return (
        <header className='banner'
            style={{
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/w500/${movies?.backdrop_path}"
             )`
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>{movies?.title || movies?.name || movies?.original_name}</h1>
                 <div className='banner_buttons'>
                     <button className='banner_button'>Play</button>
                     <button className='banner_button'>My List</button>
                 </div>
                <h1 className='banner__description'>{movies?.overview}</h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner