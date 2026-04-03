import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies)
  if (!movies) return null

  const bannerMovie = movies[6]
  const { original_title, overview, id } = bannerMovie

  return (
    <div className="relative w-full">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}

export default MainContainer