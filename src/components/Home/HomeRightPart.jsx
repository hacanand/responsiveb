import * as React from "react";
import { IoPlayOutline } from "react-icons/io5";
import video from '../../assets/video.png'

function VideoThumbnail({ thumbnailSrc, videoDuration }) {
  return (
    <div className="flex overflow-hidden relative flex-col items-start px-5 pt-20 pb-3 mt-5 w-full text-sm leading-5 text-white whitespace-nowrap aspect-[1.84] font-[550] ">
      <img
        loading="lazy"
        src={thumbnailSrc}
        alt="Video thumbnail"
        className="object-cover absolute inset-0 size-full rounded"
      />
      <div className="flex absolute gap-1.5 justify-center p-1.5 bg-black rounded-md bg-opacity-70 bottom-2">
        <IoPlayOutline 
        className="shrink-0 self-center w-[26px]" />
        <div>{videoDuration}</div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="shrink-0 h-2 rounded-bl-xl bg-gray-800 w-2/3" />
    </div>
  );
}

function HomeRightPart() {
  return (
    <div className="flex flex-col py-20  mx-auto w-full bg-white ">
      <h2 className="text-2xl leading-8 text-black font-bold">
        Get ready to transform
      </h2>
      <p className="mt-3 text-base font-base leading-7 text-neutral-600">
        Here's a video to get started. As your transformation progresses, you'll
        get fresh tips and insights here.
      </p>
      <VideoThumbnail
        thumbnailSrc={video}
        videoDuration="2:36"
      />
      <ProgressBar />
    </div>
  );
}

export default HomeRightPart;
