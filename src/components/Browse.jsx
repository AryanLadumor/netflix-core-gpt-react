import Header from "./Header";
import useNowPlayMovie from "../hooks/useNowPlayMovie";

const Browse = () => {
  
  //this will fetch APi(Now Playing Moives) and update the store(movie slice)
  useNowPlayMovie();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
