import React from 'react'
import featuredCharts from "../utils/featuredCharts";


function FeaturedCharts() {
  return (
    <div className="category-container">
      <h1>Featured Charts</h1>
      <div className="flow">
        {featuredCharts.map((i) => {
          return (
            <div className="category-container-items" key={i.title}>
              <img src={i.img} />
              <p>{i.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCharts