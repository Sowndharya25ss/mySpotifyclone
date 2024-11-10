import React from "react";
import SideBarContainer from "./SideBarContainer";
import FeaturedCharts from "./FeaturedCharts";
import PopularArtists from "./PopularArtists";
import PopularAlbums from "./PopularAlbums";
import BottomLinks from "./BottomLinks";

import { FaRegCopyright } from "react-icons/fa";

function MiddleContainer() {
  return (
    <div className="middle-container">
      {/* Side Bar Container */}
      <SideBarContainer />

      {/* Main Bar Container */}
      <div className="main-container">
        <PopularArtists />
        <PopularAlbums />
        <FeaturedCharts />
        <BottomLinks/>
        <hr></hr>
        <div className="copyright-container">
          <FaRegCopyright style={{fontSize:"large"}}/>
          <p>2024 Spotify AB</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;
