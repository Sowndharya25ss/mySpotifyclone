import React from "react";
import SideBarContainer from "./SideBarContainer";
import FeaturedCharts from "./FeaturedCharts";
import PopularArtists from "./PopularArtists";
import PopularAlbums from "./PopularAlbums";
import BottomLinks from "./BottomLinks";
import Copyright from "./Copyright";

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
        <BottomLinks />
        <hr></hr>
        <Copyright />
      </div>
    </div>
  );
}

export default MiddleContainer;
