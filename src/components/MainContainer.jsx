import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

const movies = useSelector(store=>store.movie?.nowPlayingMovies)

//early return 
if(!movies)  return  //this happen my loading movie

const bannerMovie = movies[6]
const {original_title , overview , id } = bannerMovie

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer