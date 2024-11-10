import React from 'react'
// Side bar logos
import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { CgGlobeAlt } from "react-icons/cg";

function SideBarContainer() {
  return (
    <div className="side-container">
      <div className="library-div">
        <BiLibrary className="library-logo" />
        <h1>Your Library</h1>
        <GoPlus className="plus-logo" />
      </div>
      <div className="sidebar-scroll">
        <div className="scroll-1">
          <h1>Create your first playlist</h1>
          <p>It's easy, we'll help you</p>
          <button>Create playlist</button>
        </div>
        <div className="scroll-1">
          <h1>Let's find some podcasts to follow</h1>
          <p>We'll keep you updated on new episodes</p>
          <button>Browse Podcasts</button>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <div className="ul-div">
          <p>Legal</p>
          <p>Safety & Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Accessibility</p>
        </div>
        <p>
          <a href="#">Cookies</a>
        </p>
        <button className="lang-button">
          <CgGlobeAlt className="globe-logo" />
          <p>English</p>
        </button>
      </div>
    </div>
  );
}

export default SideBarContainer