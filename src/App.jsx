import { useState } from "react";
import "./App.css";
import Line from "./Line";
import Message from "./Message";

function App() {
  let tip = 0;
  const [billTotal, setBillTotal] = useState(0);
  const [youService, setYouService] = useState(0.1);
  const [friendService, setFriendService] = useState(0.1);

  function handleChange(e) {
    setBillTotal(e.target.value);
  }
  function handleYou(e) {
    const newYouService = parseFloat(e.target.value);
    setYouService(newYouService);
  }

  function handleFriend(e) {
    console.log(e);
    setFriendService(parseFloat(e.target.value));
  }

  function handleReset() {
    setBillTotal(0);
    setYouService(0.1);
    setFriendService(0.1);
  }

  console.log("billTotal:", billTotal);
  console.log("youService:", youService);
  console.log("friendService:", friendService);
  console.log("tip:", tip);

  tip = (billTotal * (youService + friendService)) / 2;

  return (
    <div>
      <Line
        message="How much was the bill?"
        billTotal={billTotal}
        onHandleChange={handleChange}
      >
        <input
          type="number"
          value={billTotal}
          onChange={(e) => handleChange(e)}
        ></input>
      </Line>
      <Line
        message="How did you like service?"
        billTotal={billTotal}
        onHandleChange={handleChange}
      >
        <select onChange={handleYou}>
          <option value=".1">Just Ok (10%)</option>
          <option value=".15">Good (15%)</option>
          <option value=".2">Fabulous (20%)</option>
        </select>
      </Line>
      <Line
        message="How did your friend like the service?"
        billTotal={billTotal}
        onHandleChange={handleFriend}
      >
        <select value={friendService} onChange={handleFriend}>
          <option value=".1">Just Ok (10%)</option>
          <option value=".15">Good (15%)</option>
          <option value=".2">Fabulous (20%)</option>
        </select>
      </Line>
      <Message billTotal={billTotal} tip={tip} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
