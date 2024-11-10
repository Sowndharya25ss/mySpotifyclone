import React from 'react'
import popularAlbums from "../utils/popularAlbums";

function PopularAlbums() {
  return (
    <div className="popular-albums-container">
      <h1>Popular Albums</h1>
      <div>
        {popularAlbums.map((i) => {
          return (
            <div className="popular-albums-items" key={i.title}>
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