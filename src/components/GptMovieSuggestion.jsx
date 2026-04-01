
import { useDispatch, useSelector } from 'react-redux'

import MovieList from './MovieList'
import { useEffect } from 'react'
import {clearSuggestedMovies} from "../utils/gptSlice" 

const GptMovieSuggestion = () => {
  
  const  {suggestedMovies ,movieNames} = useSelector(store=>store.gpt)
  const dispatch = useDispatch()
  useEffect(()=>{

    //code

    return ()=>{
      dispatch(clearSuggestedMovies())
    }
  },[dispatch])
  
  
  
  if (!movieNames ) return null 
  
  return (
    <div className='p-3   text-white'>
      {movieNames.map((movie,index)=>{
       return  (suggestedMovies[index].results.length>0 && <MovieList key={movie} title={movie} movieList={suggestedMovies[index].results}/>)
        
      })}
    </div>
  )
}

export default GptMovieSuggestion


