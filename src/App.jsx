import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  const [imc, setImc] = useState("");

  let result = weight / (height / 100) ** 2;
  const hadleClick = (event) => {
    event.preventDefault();
    setImc(+result.toFixed(3));
    if (result <= 18.6) {
      setMessage("Under Weight = Less than 18.6");
    } else if (result > 18.6 && result <= 24.9) {
      setMessage("Normal Range = 18.6 and 24.9");
    } else {
      setMessage("Overweight = Greater than 24.9");
    }
  };

  return (
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p>
          <label>Height in CM: </label>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="text"
            id="height"
          />
        </p>
        <p>
          <label>Weight in KG: </label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="text"
            id="weight"
          />
        </p>
        <button onClick={hadleClick}>Calculate</button>
        <div id="results">
          <h1>{imc}</h1>
        </div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
