import React from "react";
import video1 from "../assets/HomeCard/L1.mp4";
import video2 from "../assets/HomeCard/R1.mp4";
import video3 from "../assets/HomeCard/R2.mp4";
import video4 from "../assets/HomeCard/L2.mp4";

const videos = [video1, video2, video3, video4];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto p-4">
      {/* Left large video (L1) */}
      <div className="row-span-2 aspect-[4/5]">
        <video
          src={videos[0]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Top right video (R1) */}
      <div className="aspect-video">
        <video
          src={videos[1]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom right large video (L2) */}
      <div className="row-span-2 aspect-[4/5]">
        <video
          src={videos[2]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Middle right video (R2) */}
      <div className="aspect-video">
        <video
          src={videos[3]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default VideoGrid;
