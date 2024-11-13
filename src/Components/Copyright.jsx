import React from 'react'

import { FaRegCopyright } from "react-icons/fa";

function Copyright() {
  return (
    <div className="copyright-container">
      <FaRegCopyright style={{ fontSize: "large" }} />
      <p>2024 Spotify AB</p>
    </div>
  );
}

export default Copyright