import React,{useEffect} from 'react'
import { useDispatch} from "react-redux"
import {addNowPlayingMovie} from "../utils/movieSlice"
import { API_OPTIONS } from '../utils/constants'

//Funtion to fetch APi(Now Playing Moives)  and update the store(movie slice)
const useNowPlayMovie = () => {
    const dispatch = useDispatch()

  const getNowPlayingMovie = async () =>{
    const data =await  fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
    const json = await data.json()
    // console.log(json)
    dispatch(addNowPlayingMovie(json?.results))
  }

  useEffect(()=>{
  getNowPlayingMovie()
  },[])

}

export default useNowPlayMovie



