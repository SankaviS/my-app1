import "./App.css";
import { useState } from "react";
import Demo from "./Demo";
import Create from "./create";

function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const submitButton = async () => {
    const result = await fetch(
      "https://6262556c327d3896e28506cd.mockapi.io/users"
    );
    const res = await result.json();
    setData(res);
    setToggle(!toggle);
    console.log(res);
  };
  return (
    <div>
      <Create data={data} />
      <h1>Demo Data</h1>
      <button onClick={submitButton}>Fetch Data</button>
      <div>{toggle ? <Demo data={data} /> : null}</div>
    </div>
  );
}

export default App;
