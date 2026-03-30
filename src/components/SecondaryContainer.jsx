import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'



const SecondaryContainer = () => {
  const movieLists = useSelector(store=>store.movie)
  // console.log(movieLists)
  return (
    <div className=' bg-black '>
      
      <div className='pl-12 bg-transparent relative -mt-36 z-20 '>
      <MovieList title={"Now Playing"} movieList={movieLists.nowPlayingMovies}/>
      <MovieList title={"Popular Movie"} movieList={movieLists.popularMovie}/>
      <MovieList title={"Top Rated"} movieList={movieLists.topRatedMovie}/>
      <MovieList title={"Upcoming"} movieList={movieLists.upcomingMovie}/>
      {/* popular */}
      {/* Now Playing  */}
      {/* Hrror */}
      </div>
    </div>
  )
}

export default SecondaryContainer