import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //this will fetch APi(Now Playing Moives) and update the store(movie slice)
  useNowPlayMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div className="">
      {/* Header */}
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {/* main Container --> videbackground --video title */}
          <MainContainer />

          {/*secondary container  -> movieList*n --> cards*n  */}
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
