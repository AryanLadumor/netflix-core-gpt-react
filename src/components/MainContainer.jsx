import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

const movies = useSelector(store=>store.movie?.nowPlayingMovies)
console.log(movies)

//early return 
if(!movies)  return  //this happen my loading movie

const bannerMovie = movies[2]
const {original_title , overview , id } = bannerMovie
console.log(bannerMovie)



  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer