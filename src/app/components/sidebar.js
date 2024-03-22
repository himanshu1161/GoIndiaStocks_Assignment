import React, { useState } from 'react';

/**
 * Sidebar component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showSidebar - Flag indicating whether the sidebar is visible.
 * @param {function} props.setShowSidebar - Function to toggle the visibility of the sidebar.
 * @returns {JSX.Element} The rendered Sidebar component.
 */

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [showArrow, setShowArrow] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={`h-full w-80 flex flex-col fixed ${showSidebar ? 'transition-all duration-300 ease-in-out' : 'hidden'}`} style={{ backgroundColor: "rgb(0 53 84)", left: showSidebar ? '0' : '-80px' }}>

        <div className="flex items-center ml-10 mt-10 mb-5">
          <img src="/images/user_icon.png" alt="" className='w-[35px] h-[35px]' />
          <h2 className='text-white text-2xl ml-3'>Hello, User</h2>
          <img src="/images/notification.png" className='w-[35px] h-[35px] ml-8' alt="" />
        </div>
        <hr />
        <ul className='text-white text-2xl'>
          <li
            className='mt-3 pl-12 py-2 hover:bg-sky-950 flex items-center relative'
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
          >
            <img src="/images/discussion.png" alt="" className='w-[30px] h-[30px] ml-[-1rem] mr-2' />Discussion Forum
            {showArrow && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm">▼</span>
            )}
          </li>
          <li
            className='mt-3 pl-12 py-2 hover:bg-sky-950 flex items-center relative'
          >
            <img src="/images/dollar.png" alt="" className='w-[30px] h-[30px] ml-[-1rem] mr-2' />Market Stories
          </li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>Sentiment</li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>Market</li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>Sector</li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>Watchlist</li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>Events</li>
          <li className='mt-3 pl-[4.5rem] py-2 hover:bg-sky-950'>News/Interview</li>
        </ul>

      </div>

      <button className={`bg-sky-900 h-[80px]  w-[20px] fixed top-[20rem] ${showSidebar ? 'left-[20rem]' : 'left-0'} transition-all duration-300 ease-in-out`} onClick={toggleSidebar}>
        <p className='text-white'>{showSidebar ? '◀' : '➤'}</p>
      </button>
    </>
  );
};

export default Sidebar;
