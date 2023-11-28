// import StyledButton from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import MyPart1 from "./components/Part1/MyPart1";
import { useState } from "react";

function App() {
  const context = useContext("light");
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <div className="container-fluid">
        <MyPart1 />
      </div>
    </div>
  );
}

export default App;
