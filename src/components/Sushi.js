import React, { useState } from "react"

function Sushi(props) {
  const [isEaten, setIsEaten] = useState(false)

  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => {
        if (!isEaten) {
          const eat = props.eatSushi(props.sushi.price)
          if (eat !== false) setIsEaten(true)
        } else {
          alert("Sorry, you can't eat the plate...")
        }
    }}>
        {isEaten ? null : (
          <img
            src={props.sushi.img_url}
            alt={props.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
