import React from 'react'
import {v4 as uuidv4} from "uuid"
import popularAlbums from "../utils/popularAlbums";

function PopularAlbums() {
  return (
    <div className="category-container">
      <h1>Popular Albums</h1>
      <div className="flow">
        {popularAlbums.map((i) => {
          return (
            <div id={uuidv4()} className="category-container-items" key={i.title}>
              <img src={i.img} />
              <h1>{i.title}</h1>
              <p>{i.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularAlbums