import React, { useState } from "react";
import TopContainer from "./Components/TopContainer";
import BottomContainer from "./Components/BottomContainer";
import SideBarContainer from "./Components/SideBarContainer";
import FeaturedCharts from "./Components/FeaturedCharts";
import PopularArtists from "./Components/PopularArtists";
import PopularAlbums from "./Components/PopularAlbums";
import BottomLinks from "./Components/BottomLinks";
import Copyright from "./Components/Copyright";

import "./App.css";
import "./Components/mainContainers.css";
import "./Components/cards.css";

function App() {
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(false)
  return (
    <>
      {login ? (
        <div>
          <h1>ppp</h1>
        </div>
      ) : (
        <div>
          <TopContainer />

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

          <BottomContainer />
        </div>
      )}
    </>
  );
}

export default App;
