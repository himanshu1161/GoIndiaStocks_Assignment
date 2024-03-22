
import React from "react";

/**
 * Renders a container component for a discussion forum.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showSidebar - Determines whether to show the sidebar.
 * @returns {JSX.Element} The rendered container component.
 */

const Container = ({ showSidebar }) => {
  const dataArray = Array(5).fill({
    title: "Lorem ipsum",
    sector: "Sector 2",
    timeAgo: "2 min ago",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas rem debitis voluptate",
    likes: "2k",
    views: "2k",
    comments: "2k comments",
    shares: "Share",
  });

  return (
    <div
      className={`flex flex-col w-full transition-all duration-300  ${
        showSidebar ? "ml-[21rem]" : " "
      } h-[200vh] sm:h-[145vh] lg:h-[105%]`}
    >
      <h1 className="bg-gray-100 text-red-400 text-3xl mt-3 ml-10 font-bold h-[3rem] pt-2 w-[20rem]">
        DISCUSSION FORUM
      </h1>

      {dataArray.map((data, index) => (
        <div
          key={index}
          className="w-full lg:w-[80%] bg-white  mt-10 lg:mx-10 p-4 shadow-xl rounded-xl border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="images/colored_profile.png"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="ml-3">
                <span>{data.title}</span>
                <span className="bg-sky-800 text-xs text-white rounded-full px-4 py-1 ml-6">
                  {data.sector}
                </span>
              </div>
            </div>
            <div className="text-blue-600 text-xs">{data.timeAgo}</div>
          </div>

          <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas rem debitis voluptate<br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex justify-between mt-2">
            <span>♡ {data.likes}</span>
            <span>👁 {data.views}</span>
            <span className="flex items-center">
              <img src="/images/comment.png" className="w-5 h-5 mr-1" alt="" />
              {data.comments}
            </span>
            <span className="flex items-center">
              <img src="/images/share.png" className="w-5 h-5 mr-1" alt="" />
              {data.shares}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
