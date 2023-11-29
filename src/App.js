import "bootstrap/dist/css/bootstrap.min.css";
import MyPart1 from "./components/Part1/MyPart1";
import { useState } from "react";
import styled from "styled-components";

const AppBox = styled.div`
  /* background-color: red !important; */
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
`;

const darkTheme = {
  // background-color: #1e293b;
  body: "#1e293b",
  title: "#fff",
  subtitle: "#b6b6b6",
};

const lightTheme = {
  body: "white",
  title: "red",
  subtitle: "gray",
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  return (
    <AppBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <MyPart1
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      />

      {/* <div className="container-fluid"></div> */}
    </AppBox>
  );
};

export default App;
