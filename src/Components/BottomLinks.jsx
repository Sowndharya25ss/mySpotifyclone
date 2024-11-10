import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function BottomLinks() {
  return (
    <div className="bottom-links-container">
      <div>
        <h1>Company</h1>
        <p>About</p>
        <p>Jobs</p>
        <p>For the Record</p>
      </div>
      <div>
        <h1>Communities</h1>
        <p>For Artists</p>
        <p>Developers</p>
        <p>Advertising</p>
        <p>Investors</p>
        <p>Vendors</p>
      </div>
      <div>
        <h1>Useful links</h1>
        <p>Support</p>
        <p>Free Mobile App</p>
      </div>
      <div>
        <h1>Spotify Plans</h1>
        <p>Premium Individual</p>
        <p>Premium Duo</p>
        <p>Premium Family</p>
        <p>Premium Student</p>
        <p>Spotify Free</p>
      </div>
      <div className="bottom-link-icons">
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}

export default BottomLinks