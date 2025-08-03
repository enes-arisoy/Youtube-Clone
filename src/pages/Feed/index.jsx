import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import VideoCard from "../../components/VideoCard";
import { SkeletonLoader } from "../../components/Loader";
import Error from "../../components/Error";
import Homepage from "./../../components/homepage/index";

const Feed = () => {
  // state kurulumları
  let [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // url deki parametreye eriş
  const [params] = useSearchParams();
  const selectedCategory = params.get("category");

  useEffect(() => {
    // api isteği atılacak url'i belirle
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trending"
      ? "/trending"
      : `/search?query=${selectedCategory}`;

    // !api isteği at
    api
      .get(url)
      .then((res) => setVideos(res.data.data)) // gelen verileri videos state ine aktar
      .catch((err) => setError(err.message)) //hata varsa hata mesajını error state ine aktar
      .finally(() => setIsLoading(false)); // son durumda isLoading state ini false çek;
  }, [selectedCategory]);

  const filteredVideos = videos.filter((video) => video?.type === "video"); // gelen verilerden sadece video olanları al

  return (
    <>
      <div className="flex">
        <Sidebar selectedCategory={selectedCategory} />
        <div className="videos">
          {isLoading ? (
            <SkeletonLoader />
          ) : error ? (
            <Error info={error} />
          ) : filteredVideos.length > 0 ? (
            filteredVideos.map((video, key) => (
              <VideoCard key={key} video={video} />
            ))
          ) : (
            <Homepage />
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
