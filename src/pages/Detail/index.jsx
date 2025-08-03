import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ChannelInfo from "../../components/ChannelInfo";
import Description from "../../components/Description";
import Comments from "../../components/Comments";
import VideoCard from "../../components/VideoCard";
import { BasicLoader } from  "../../components/Loader";
import Error from "../../components/Error";
const Detail = () => {
  const [searchParams] = useSearchParams(); // url deki parametreye eriş

  const id = searchParams.get("v"); // url den gelen parametreyi al

  // state kurulumu
  const [video, setVideo] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = {
      id,
      extend: 1,
    };
    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  
  return (
    <div>
      {isloading ? (
        <BasicLoader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="page-content">
          {/* video */}
          <div>
            <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width={"100%"}
                height={"100%"}
              />
            </div>

            <div>
              <h1 className="my-3 text-xl font-bold line-clamp-2">
                {video.title}
              </h1>

              <h1>
                <ChannelInfo video={video} />
              </h1>
              <h1>
                <Description video={video} />
              </h1>
              <h1><Comments videoId={id}/></h1>
            </div>
          </div>

          <div>
            <h1>{video.relatedVideos.data.map((i,key)=> <VideoCard key={key} video={i} isRow/>)}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
