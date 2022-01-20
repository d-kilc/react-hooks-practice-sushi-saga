import React from "react";
import MoreButton from "./MoreButton";

import Sushi from './Sushi'

function SushiContainer(props) {
  return (
    <div className="belt">
      {props.sushis.slice(0, 4).map((sushi) => {
        return <Sushi key={sushi.id} money={props.money} sushi={sushi} eatSushi={props.eatSushi}
      />})}
      <MoreButton handleMoreSushi={props.handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
