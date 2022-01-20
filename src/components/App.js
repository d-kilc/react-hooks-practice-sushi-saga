import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushis, setAllSushis] = useState([])
  const [sushis, setSushis] = useState([])
  const [counter, setCounter] = useState(0)

  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  //get all sushis at start up
  useEffect(getAllSushis, [])
  
  useEffect(() => {
    //every time the counter changes with the More Sushi button,
    //get a new slice of 4 sushis from allSushis
    //this will be passed to SushiContainer component to render
    setSushis( [...allSushis].slice(counter, counter + 4) )
  }, [allSushis, counter])

  function getAllSushis() {
    //returns array of all sushis (100)
    fetch(API)
    .then(res => res.json())
    .then(setAllSushis)
  }

  // console.log(allSushis)
  // console.log(sushis)
  // console.log(counter)

  function handleMoreSushi() {
    //increment the counter by 4
    //this will trigger the effect that updates sushi state to be the next 4 sushis
    setCounter( counter + 4 )
  }

  function eatSushi(price) {
    // if you're out of or don't have enough money -> alert and don't eat
    // if you already ate the sushi -> alert and don't eat
    // if you have enough money and haven't eaten the sushi -> eat sushi
    if (money < price) {
      alert('Sorry, no free sushi...')
      return false //this will let us know whether or not to clear the plate (i.e. set Sushi.isEaten = true or not)
    }
    setMoney((prevState) => prevState - price)
    setPlates((prevState) => [...prevState, 'plate']) 
  }

  return (
    <div className="app">
      <SushiContainer money={money} sushis={sushis} handleMoreSushi={handleMoreSushi} eatSushi={eatSushi}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
