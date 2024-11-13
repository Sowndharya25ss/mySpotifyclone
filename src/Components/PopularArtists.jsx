import React from 'react'
import popularArtists from "../utils/popularArtists";

function PopularArtists() {
  return (
    <div className="category-container">
      <h1>Popular Artists</h1>
      <div className="flow">
        {popularArtists.map((i) => {
          return (
            <div className="category-container-items" key={i.title}>
              <img src={i.img} />
              <h1>{i.title}</h1>
              <p>{i.profession}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularArtists