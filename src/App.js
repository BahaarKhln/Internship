import logo from "./clock-svgrepo-com.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState();
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
         <p>Current System Time :</p>
        <p className = "AppClock" >{time}</p>
      </header>
    </div>
  );
}

export default App;