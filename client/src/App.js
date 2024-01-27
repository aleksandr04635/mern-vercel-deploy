import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("1");

  const fetchSer = async function () {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    console.log(url);
    const res = await fetch(url);
    const { mes } = await res.json();
    console.log(mes);
    setData(mes);
  };
  return (
    <div className="App">
      <button onClick={fetchSer}>fetch</button>
      <div>data: {data}</div>
    </div>
  );
}

export default App;
