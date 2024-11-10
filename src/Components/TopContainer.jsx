import React from "react";
// Top bar logos
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { PiLineVertical } from "react-icons/pi";
import { TbBrowser } from "react-icons/tb";

function TopContainer() {
  return (
    <div className="top-container">
      <FaSpotify className="spotify-logo" />
      <div className="search-container">
        <GoHomeFill className="home-logo" />
        <div className="search-bar">
          <div className="search-bar-1">
            <RiSearchLine className="search-logo" />
            <input placeholder="What do you want to play?" />
          </div>
          <div className="search-bar-1">
            <PiLineVertical className="logo" />
            <TbBrowser className="logo" />
          </div>
        </div>
      </div>
      <div>
        <button className="signup">Sign up</button>
        <button className="login">Log in</button>
      </div>
    </div>
  );
}

export default TopContainer;
