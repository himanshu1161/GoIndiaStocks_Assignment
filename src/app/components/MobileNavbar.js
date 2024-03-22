import React, { useState } from 'react';

/**
 * Renders a mobile navigation bar component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setShowComponent - The function to set the active component.
 * @returns {JSX.Element} The rendered mobile navigation bar.
 */

const MobileNavbar = ({ setShowComponent }) => {
  const [activeTab, setActiveTab] = useState("");

  const toggleComponent = (str) => {
    setActiveTab(str);
    setShowComponent(str);
  };

  return (
    <div>
      <nav className="bg-sky-900 w-full h-[50px] flex justify-around lg:hidden">
        <button 
          className={`text-white text-2xl relative flex-1 focus:outline-none`}
          style={{ borderBottom: activeTab === 'first' ? '2px solid red' : 'none' }}
          onClick={() => toggleComponent("first")}
        >
          <span className="absolute inset-0 bg-sky-950 opacity-0 group-hover:opacity-100"></span>
          Discussion Forum
        </button>
        <button 
          className={`text-white text-2xl relative flex-1 focus:outline-none`}
          style={{ borderBottom: activeTab === 'second' ? '2px solid red' : 'none' }}
          onClick={() => toggleComponent("second")}
        >
          <span className="absolute inset-0 bg-sky-950 opacity-0 group-hover:opacity-100"></span>
          Market Stories
        </button>
      </nav>
    </div>
  );
};

export default MobileNavbar;
