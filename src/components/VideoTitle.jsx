import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12 w-1/3'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-md'>{overview}</p>
        <div>
            <button className='bg-red-500 m-3 w-32 h-12 rounded hover:scale-105 transition duration-75 text-white text-lg font-semibold' >▶️ Play </button>
            <button className='bg-gray-500/50 m-3 w-32 h-12 rounded hover:scale-105 transition duration-75 text-white text-lg font-semibold '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle