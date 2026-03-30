import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //this will fetch APi(Now Playing Moives) and update the store(movie slice)
  useNowPlayMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      {/* Header */}
      <Header />

      {/* main Container --> videbackground --video title */}
      <MainContainer />

      {/*secondary container  -> movieList*n --> cards*n  */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
