import React from 'react'
import featuredCharts from "../utils/featuredCharts";


function FeaturedCharts() {
  return (
        <div className="featured-charts-container">
          <h1>Featured Charts</h1>
          <div>
            {featuredCharts.map((i) => {
              return (
                <div className="featured-items" key={i.title}>
                  <img src={i.img} />
                  <p>{i.title}</p>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default FeaturedCharts