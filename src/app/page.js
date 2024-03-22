"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Container from "./components/container";
import MarketStories from "./components/marketStories";
import MobileNavbar from "./components/MobileNavbar";
/**
 * Renders the main page of the application.
 *
 * @returns {JSX.Element} The rendered page component.
 */

const page = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showComponent, setShowComponent] = useState("first");

  return (
    <div className="flex lg:flex-row flex-col font-sans">
      <MobileNavbar
        className="hidden lg:flex"
        setShowComponent={setShowComponent}
      />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="hidden lg:flex">
        <Container showSidebar={showSidebar} />
        <MarketStories />
      </div>
      <div className="flex lg:hidden w-full h-full">
        {showComponent == "first" ? (
          <Container showSidebar={showSidebar} />
        ) : (
          <MarketStories />
        )}
      </div>
    </div>
  );
};

export default page;
