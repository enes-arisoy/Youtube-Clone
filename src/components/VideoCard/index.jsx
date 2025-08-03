import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);


  const thumbnail =
    isHover && video?.richThumbnail?.length > 1
      ? video.richThumbnail[1]?.url
      : video?.thumbnail?.length > 1
      ? video.thumbnail[1]?.url
      : video?.thumbnail?.[0]?.url || "";

  return (
    <Link to={video?.videoId ? `/watch?v=${video.videoId}` : "#"}>
      <div
        className={`cursor-pointer ${isRow && "row mt-5"}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={thumbnail}
            className="rounded-lg w-full h-full"
            alt="card-image"
          />
        </div>

        <div className={`${!isRow && "mt-4"} flex gap-2`}>
          {video?.channelThumbnail?.[0]?.url && (
            <img
              src={video.channelThumbnail[0].url}
              className="pp size-14 rounded-full"
              alt=""
            />
          )}

          <div>
            <p className="line-clamp-1 font-bold mt-2">{video.title}</p>
            <p className="channel-title">{video.channelTitle}</p>

            <div className="flex gap-3 items-center mt-2 text-xs">
              <p>{millify(video.viewCount)} Görüntülenme</p> *
              {video.isLive ? (
                <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
              ) : (
                <p className="text-xs">{video.publishedTimeText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
