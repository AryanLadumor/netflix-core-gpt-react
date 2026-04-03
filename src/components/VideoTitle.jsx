import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
      absolute z-10
      top-16 sm:top-20
      left-0
      px-4 sm:px-8 md:px-12 lg:px-20
      w-full sm:w-3/4 md:w-3/5 lg:w-2/5
      flex flex-col gap-2 sm:gap-3 md:gap-4
    "
    >
      <h1
        className="
        text-xl sm:text-3xl md:text-4xl lg:text-5xl
        text-white font-bold leading-snug
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
        line-clamp-2
      "
      >
        {title}
      </h1>

      <p
        className="
  hidden sm:block
  text-xs sm:text-sm md:text-sm lg:text-base
  text-slate-300 leading-relaxed
  line-clamp-2 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4
  drop-shadow max-w-lg">
        {overview}
      </p>

      <div className="flex items-center gap-2">
        <button
          className="
          bg-white text-black
          px-4 sm:px-5 py-1.5 sm:py-2
          rounded text-sm sm:text-base font-semibold
          hover:bg-white/85 hover:scale-[1.03]
          transition duration-150 active:scale-95
        "
        >
          ▶️ Play
        </button>
        <button
          className="
          bg-gray-500/60 text-white
          px-4 sm:px-5 py-1.5 sm:py-2
          rounded text-sm sm:text-base font-semibold
          hover:bg-gray-500/80 hover:scale-[1.03]
          transition duration-150 active:scale-95
          backdrop-blur-sm
        "
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
