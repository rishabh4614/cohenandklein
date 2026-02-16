import React, { useState } from "react";

const videoData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Training Session",
    desc: "This is a dummy description for the first training video.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    title: "Revenue Management Webinar",
    desc: "Dummy description explaining what this webinar is about.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    title: "Debt Collection Strategies",
    desc: "Brief dummy description for this video content.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Virtual Training Highlights",
    desc: "Another placeholder description for demo purposes.",
  },
  {
  id: 5,
  videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  title: "Advanced Collection Techniques",
  desc: "This session covers advanced strategies for improving debt recovery performance and client communication."
},
{
  id: 6,
  videoUrl: "https://www.youtube.com/embed/l482T0yNkeo",
  title: "Financial Compliance Training",
  desc: "An overview of compliance best practices and regulatory standards for financial institutions."
}

];

const Video = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleOpen = (url) => {
    setSelectedVideo(url);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
    setSelectedVideo("");
  };

  return (
    <div className="pt-9 padding-2xl lg:px-15 px-4 roboto">
      <div className="mx-auto flex justify-center">
        <h3 className="font-serif sm:text-[36px] text-xl text-center text-primary font-semibold">
          Our Training Videos
        </h3>
      </div>

      <div className="py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {videoData.map((video) => (
            <div
              key={video.id}
              className="max-w-[410px] w-full rounded-lg overflow-hidden drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] bg-white p-[20px] cursor-pointer"
              onClick={() => handleOpen(video.videoUrl)}
            >
              {/* Video Thumbnail */}
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Section */}
              <div className="pt-4 flex flex-col gap-3">
                <h2 className="text-[18px] font-semibold text-primary">
                  {video.title}
                </h2>
                <p className="text-[#021326] text-sm">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
            onClick={handleClose}
          >
            <div
              className="bg-white p-4 rounded-lg relative shadow-lg w-[90%] max-w-[1000px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 bg-black px-4 py-2 text-white text-lg rounded"
                onClick={handleClose}
              >
                ✕ Close
              </button>

              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={selectedVideo}
                  title="Selected Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
