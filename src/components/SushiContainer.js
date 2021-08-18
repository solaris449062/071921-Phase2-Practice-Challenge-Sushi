import React from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";


function SushiContainer({sushiesOnBelt}) {
  const sushies = sushiesOnBelt.map(sushi => {
    return(        
      <Sushi
        key={sushi.id}
        name={sushi.name} 
        image={sushi.img_url}
        price={sushi.price}
      />
      )
  })
      return (
      <div className="belt">
        {sushies}
        <MoreButton />
      </div>
    )
}

export default SushiContainer;
