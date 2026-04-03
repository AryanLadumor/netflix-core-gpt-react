import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movieLists = useSelector(store => store.movie)

  return (
    <div className="bg-black w-full">
      <div className="
        px-3 sm:px-6 md:px-10 lg:px-12
        bg-transparent relative
        -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-36
        z-20
        pb-6 sm:pb-10
      ">
        <MovieList title={"Now Playing"} movieList={movieLists.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movieList={movieLists.popularMovie} />
        <MovieList title={"Top Rated"} movieList={movieLists.topRatedMovie} />
        <MovieList title={"Upcoming"} movieList={movieLists.upcomingMovie} />
      </div>
    </div>
  )
}

export default SecondaryContainer
