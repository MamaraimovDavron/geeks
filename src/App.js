import "bootstrap/dist/css/bootstrap.min.css";
import MyPart1 from "./components/Part1/MyPart1";
import { useState } from "react";
import styled from "styled-components";
import MyPart2 from "./components/Part2/MyPart2";
import MyPart3 from "./components/Part3/MyPart3";

const AppBox = styled.div`
  /* background-color: red !important; */
  /* height: 100%; */
  background-color: ${(props) => props.theme.body};
  /* min-height: 100vh; */
`;

const darkTheme = {
  // background-color: #1e293b;
  body: "#1e293b",
  title: "#fff",
  subtitle: "#b6b6b6",
  miniBody: "#0B1324",
  border: "none",
  iconBody: "#0F172A",
  searchBody: "#0B1324",
  searchBorder: "1px solid #0B1324",
  iconColor: "#AF7632",
  iconBgColor: "#5A4327",
  aColor: "white",
  socialNetworkBgColor: "#0F172A",
  textColor: "#948CA7",
};

const lightTheme = {
  body: "white",
  title: "black",
  subtitle: "gray",
  miniBody: "#fff",
  border: `1px solid #f8f8f8`,
  iconBody: "#F1F5F9",
  searchBody: "#fff",
  searchBorder: "1px solid #cbd5e1",
  iconColor: "#C68840",
  iconBgColor: "#FFEEDA",
  aColor: "black",
  socialNetworkBgColor: "#f1f5f9",
  textColor: "black",
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
        theme={theme}
      />

      <MyPart2
        isDarkTheme={isDarkTheme}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        theme={theme}
      />

      <MyPart3 />

      {/* <div className="container-fluid"></div> */}
    </AppBox>
  );
};

export default App;
