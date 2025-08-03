import millify from "millify";
import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  

  return (
    <div className="flex justify-between items-center max-sm:flex-col">
      <div className="flex items-center gap-3">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            src={video.channelThumbnail[0].url}
            className="size-10 rounded-full sm:size-12"
            alt="channel-image"
          />
          <div>
            <h4 className="font-bold line-clamp-1 ">{video.title}</h4>
            <h4 className="text-gray-400">{video.subscriberCountText}</h4>
          </div>

          <button className="bg-white text-black rounded-full text-nowrap px-3 py-1 sm:py-2 hover:bg-gray-400 transition mr-3">
            Abone Ol
          </button>
        </div>
        <div className="flex items-center bg-[#3e403f] cursor-pointer h-fit w-fit rounded-full">
          <div className="flex py-1 px-3 sm:py-2 sm:px-4 items-center gap-2 font-bold border-r border-gray-500">
            <AiFillLike />
            <span>{millify(video.likeCount)}</span>
          </div>
          <div className="py-1 px-3 sm:py-2 sm:px-4">
            <AiFillDislike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
