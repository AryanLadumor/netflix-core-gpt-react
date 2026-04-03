import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="
      absolute z-10
      bottom-[30%] sm:bottom-auto sm:top-auto
      pt-0 sm:pt-32 md:pt-40 lg:pt-48
      mt-0 sm:mt-16 md:mt-20 lg:mt-24
      px-4 sm:px-8 md:px-12 lg:px-20
      w-full sm:w-2/3 md:w-1/2 lg:w-2/5
      top-0
    ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-100 font-bold leading-tight drop-shadow-lg">
        {title}
      </h1>
      <p className="hidden sm:block py-3 md:py-4 lg:py-6 text-sm md:text-base text-slate-200 line-clamp-3 drop-shadow">
        {overview}
      </p>
      <div className="flex gap-2 mt-3 sm:mt-0">
        <button className="bg-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded text-black text-sm sm:text-base font-semibold hover:bg-opacity-90 hover:scale-[1.03] transition duration-75 flex items-center gap-1">
          ▶️ Play
        </button>
        <button className="bg-gray-500/60 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded text-white text-sm sm:text-base font-semibold hover:bg-opacity-80 hover:scale-[1.03] transition duration-75">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
