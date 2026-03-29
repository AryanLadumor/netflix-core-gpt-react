import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  //this will fetch APi(Now Playing Moives) and update the store(movie slice)
  useNowPlayMovie();

  return (
    <div>
      {/* Header */}
      <Header />

      {/* main Container --> videbackground --video title */}
      <MainContainer/>

      {/*secondary container  -> movieList*n --> cards*n  */}
      <SecondaryContainer/>

    </div>
  );
};

export default Browse;
