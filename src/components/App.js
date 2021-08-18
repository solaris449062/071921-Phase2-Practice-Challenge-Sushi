import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [prepSushi, setPrepSushi] = useState([]);
  const [eatSushi, setEatSushi] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setPrepSushi);
  }, []);

  const sushiByFour = [];
  for (let i = 0; i < prepSushi.length/4; i++) {
    const tempSushi = prepSushi.slice(4*i, 4*(i+1));
    sushiByFour.push(tempSushi)
  }

  const [refillCount, setRefillCount] = useState([0]);
  const [sushiOnTable, setSushiOnTable] = useState(sushiByFour[refillCount]);

  function handleRefill() {
    setSushiOnTable(sushiByFour[refillCount]);
    setRefillCount(refillCount + 1);
  }

  console.log(sushiByFour[refillCount])

  // console.log(prepSushi) // this gives the db.json
  return (
    <div className="app">
      {/* <SushiContainer sushiesOnBelt={sushiOnTable}/> */}
      <Table />
    </div>
  )
}

export default App;
