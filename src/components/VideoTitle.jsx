import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-48 px-12 w-1/3 absolute z-10 '>
        <h1 className='text-4xl  text-slate-300 font-bold'>{title}</h1>
        <p className='py-6 text-md text-slate-200'>{overview}</p>
        <div>
            <button className='bg-white mx-1 w-32 h-12 rounded hover:scale-[1.03] hover:bg-opacity-90 transition duration-75 text-black text-md font-semibold' >▶️ Play </button>
            <button className='bg-gray-500/50 mx-1 w-32 h-12 rounded hover:scale-[1.03] hover:bg-opacity-90 transition duration-75 text-white text-md font-semibold '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle